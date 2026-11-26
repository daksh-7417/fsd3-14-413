import { series } from '../data.js';
import Series from './Series.jsx';

export default function SeriesList() {
  return (
    <main>
      <h1>Top 10 Web Series</h1>
      <section>
        {series.map((item) => (
          <Series key={item.title} {...item} />
        ))}
      </section>
    </main>
  );
}
