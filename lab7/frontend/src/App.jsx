const b1 = {
  picurl: "https://m.media-amazon.com/images/I/514PDnLfatL._SX342_SY445_FMwebp_.jpg",
  bname:"React Design Pattern",
  price: 3741,
  quantity: 10,
  rating: 4.3,
}


function Book(){
  return (
    <div>
    <img src={b1.picurl} alt={b1.bname} />
    <h1>Let us react</h1>
    <h2>Price : {b1.price}</h2>
    <h3>Quantity : {b1.quantity} </h3>
    <h4>rating : {b1.rating} </h4>
    </div>
  );
}
export default function App(){
  return (
  <>
  <Book />
  <h1>Hello React</h1>
  <Book />
  <Book />
  <Book />
  </>
  );
}