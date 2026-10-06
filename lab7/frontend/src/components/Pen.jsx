const Pen = (props) => {
  const { picUrl, company, price } = props.pen;
  return (
    <div className="pen">
      <img src={picUrl} alt={company} />
      <h3>{company}</h3>
      <h4>Rs. {price}</h4>
      <button>Buy Now</button>
    </div>
  );
};

export default Pen;
