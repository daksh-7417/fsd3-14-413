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
    <img src="https://m.media-amazon.com/images/I/514PDnLfatL._SX342_SY445_FMwebp_.jpg" alt="Design Pattern React js" />
    <h1>Let us react</h1>
    <h2>Price: 765.00</h2>
    <h3>Quantity: 5</h3>
    <h4>rating: 4.3</h4>
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