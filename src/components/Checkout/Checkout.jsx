import "./Checkout.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartProvider";
import { Toaster, toast } from "sonner";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotal, clearCart } = useContext(CartContext);

  const apellidoInput = document.querySelector(".apellido");
  const nombreInput = document.querySelector(".nombre");
  const emailInput = document.querySelector(".email");
  const confEmailInput = document.querySelector(".confEmail");
  const celularInput = document.querySelector(".celular");

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [emailDeConfirmacion, setEmailDeConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const lettersOnlyRegex = /^[A-Za-z\s]*$/;

  const handleForm = (e) => {
    e.preventDefault();

    if (!lettersOnlyRegex.test(nombre)) {
      setError('El campo "Nombre" solo puede contener letras.');
      nombreInput.classList.add("red");
      setTimeout(() => {
        nombreInput.classList.remove("red");
      }, 2000);
      return;
    }

    if (!lettersOnlyRegex.test(apellido)) {
      setError('El campo "Apellido" solo puede contener letras.');
      apellidoInput.classList.add("red");
      setTimeout(() => {
        apellidoInput.classList.remove("red");
      }, 2000);
      return;
    }

    if (!nombre || !apellido || !celular || !email || !emailDeConfirmacion) {

      nombre ? nombre : nombreInput.classList.add("red") 
      apellido ? apellido : apellidoInput.classList.add("red") 
      celular ? celular : celularInput.classList.add("red") 
      email ? email : emailInput.classList.add("red") 
      emailDeConfirmacion ? emailDeConfirmacion : confEmailInput.classList.add("red")

      setError("Debes completar todos los campos");
      return;
    }

    if (email !== emailDeConfirmacion) {
      setError("Los emails no coinciden");

      return;
    }

    toast.promise(promise, {
      loading: "Cargando...",
      success: () => {
        return `Gracias por tu compra!`;
      },
      error: "Error",
    });

    const db = getFirestore();

    const order = {
      items: cart.map((product) => ({
        id: product.product.id,
        name: product.product.nombre,
        quantity: product.quantity,
      })),
      total: getTotal(),
      fecha: new Date(),
      nombre,
      apellido,
      celular,
      email,
    };

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "item", productOrder.id);
        const productDoc = await getDoc(productRef);
        const stock = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stock - productOrder.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            clearCart();
          })
          .catch((error) => {
            console.log("Error adding document: ", error);
            setError("No se pudo generar la orden, intentelo nuevamente");
          });
      })
      .catch((error) => {
        console.log("Error updating stock", error);
        setError("No se pudo actualizar el stock, intentelo nuevamente");
      });
  };

  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 2000)
    );

  return (
    <>
      <Toaster />
      {cart.length > 0 ? (
        <div className="form">
          <form onSubmit={handleForm}>
            <h2>Ingresa tus datos</h2>

            <div>
              <input
                className="nombre"
                placeholder="Nombre..."
                aria-label="Nombre"
                type="text"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <input
                className="apellido"
                placeholder="Apellido..."
                aria-label="Apellido"
                type="text"
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div>
              <input
              className="celular"
                placeholder="Celular..."
                aria-label="Celular"
                type="number"
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>
            <div>
              <input
              className="email"
                placeholder="Email..."
                aria-label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
              className="confEmail"
                placeholder="Confirmar Email..."
                aria-label="Confirmacion de email"
                type="email"
                onChange={(e) => setEmailDeConfirmacion(e.target.value)}
              />
            </div>

            <button type="submit">Enviar Formulario</button>

            {error && <p className="message-error">{error}</p>}

            {orderId && (
              <p>Gracias por tu compra! tu numero de orden es: {orderId}</p>
            )}
          </form>

          <div className="products">
            <h2 className="order-title">Orden de compra</h2>
            {cart.map((product) => (
              <div className="product" key={product.product.id}>
                <img src={product.product.img} alt="" />
                <p className="p-title">{product.product.nombre}</p>
                <p className="p-price">
                  ${product.product.precio * product.quantity}
                  <span className="span-quantity">({product.quantity})</span>
                </p>
              </div>
            ))}
            <div className="total">
              <p>Total de compra: ${getTotal()}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-order-null">
          <p className="order-null">No hay productos ordenados...</p>
          <Link className="back-to-shop" to={"/"}>
            Volver a la tienda
          </Link>
        </div>
      )}
    </>
  );
};

export default Checkout;
