export default function Book(props){
  const {bname,price,quantity,rating,picurl} = props.book;
  const qtyStyle = {
    fontSize:"1rem",
    color:"blue",
    textAlign:"center",
    backgroundColor:"Yellow",
    padding:"10px"
  }
    return (
    <div className="book">
    <img src={picurl} alt={bname} />
    <h1>Let us react</h1>
    <h2>Price : {price}</h2>
    <h3 style={qtyStyle}>Quantity : {quantity} </h3>
    <h4 style={{color:'red'}}>rating : {rating} </h4>
    <button>Buy Now</button>
    </div>
  );
}