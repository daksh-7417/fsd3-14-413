export default function Series({ title, platform, genre, years }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Genre: {genre}</p>
      <p>Platform: {platform}</p>
      <p>Years: {years}</p>
    </article>
  );
}
