import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartProvider";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotal, getTotalProducts, clearCart } =
    useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [emailDeConfirmacion, setEmailDeConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !celular || !email || !emailDeConfirmacion) {
      setError("Debes completar todos los campos");
      return;
    }

    if (email !== emailDeConfirmacion) {
      setError("Los emails no coinciden");
      return;
    }

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

    // Validar que no haya valores undefined en el objeto order
    if (Object.values(order).some((value) => value === undefined)) {
      setError(
        "Hay un problema con los datos ingresados. Revisa e intenta nuevamente."
      );
      return;
    }

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

  return (
    <div className="form">
      <h2>Ingresa tus datos</h2>

      <div>
        {cart.map((product) => (
          <div key={product.product.id}>
            <p>{product.product.nombre}</p>
            <p>{product.product.precio}</p>
            <hr />
          </div>
        ))}
      </div>

      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">'Celular'</label>
          <input type="number" onChange={(e) => setCelular(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email de confirmacion</label>
          <input
            type="email"
            onChange={(e) => setEmailDeConfirmacion(e.target.value)}
          />
        </div>

        <button type="submit">Enviar Formulario</button>

        {error && <p>{error}</p>}

        {orderId && (
          <p>Gracias por tu compra! tu numero de orden es: {orderId}</p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
