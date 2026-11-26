export function Book({ name, imageUrl, price, author, rating }) {
  return (
    <>
      <h2>{name}</h2>
      <img
        src={imageUrl}
        alt={name}
        style={{ height: '100px', width: '75px' }}
      />
      <h3>Rs. {price}</h3>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
    </>
  );
}