import Book from "./components/Book";
import Pen from "./components/Pen";
const b1 = {
  picurl: "https://m.media-amazon.com/images/I/514PDnLfatL._SX342_SY445_FMwebp_.jpg",
  bname:"React Design Pattern",
  price: 3741,
  quantity: 10,
  rating: 4.3,
}
const b2 = {
  picurl: "https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"Learning React",
  price: 3500,
  quantity: 12,
  rating: 4.5,
}
const pen1 = {
  picUrl:"https://m.media-amazon.com/images/I/71-v21WkG5L._AC_UL480_FMwebp_QL65_.jpg",
 company:"Parkour",
  price: 150,
}
const pen2 = {
  picUrl:"https://m.media-amazon.com/images/I/81InKMZkubL._AC_UL480_FMwebp_QL65_.jpg",
 company:"octane",
  price: 15,
}

export default function App(){
  return (
  <>
  <h1>Online Bookstore</h1>
  <div className="container">
  <Book book={b1} />
  <Book book={b2} />
  <Book book={b1} />
  <Book book={b2} />
  <Pen pen={pen1}/>
  <Pen pen={pen2}/>
  </div>
  </>
  );
}