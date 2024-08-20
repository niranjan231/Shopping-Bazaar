



import "./User.css";
// const data =  {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120
//     }
//   }
const User=(props)=>{
  const data = props.data;
    return (
        <div>
        <div className="user-1">
            <div><img src={data.image}></img></div>
        <div><h2>Price:{data.price}</h2></div>
       
        </div>
        </div>
    )
}
export default User;