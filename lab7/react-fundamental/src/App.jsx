 function Hello(args) {
   return (
     <>
       <h1>{args.name}</h1>
       <img src={args.imageUrl} alt={args.name} 
       style={{height: "100px", width: "75px"}} />
       <h2>Rs. {args.price}</h2>
       <h3>Author: {args.author}</h3>
       <h4>Rating: {args.rating}</h4>

     </>
   );
 }

 const books = [
  {
    "name": "Atomic Habits",
    "author": "James Clear",
    "price": 499,
    "rating": 4.8,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 299,
    "rating": 4.6,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
  },
  {
    "name": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki",
    "price": 399,
    "rating": 4.5,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
  },
  {
    "name": "The Psychology of Money",
    "author": "Morgan Housel",
    "price": 350,
    "rating": 4.7,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    "name": "Ikigai",
    "author": "Hector Garcia and Francesc Miralles",
    "price": 250,
    "rating": 4.4,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg"
  },
  {
    "name": "Wings of Fire",
    "author": "A. P. J. Abdul Kalam",
    "price": 299,
    "rating": 4.8,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg"
  },
  {
    "name": "The 5 AM Club",
    "author": "Robin Sharma",
    "price": 450,
    "rating": 4.3,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781443456623-L.jpg"
  },
  {
    "name": "Think and Grow Rich",
    "author": "Napoleon Hill",
    "price": 275,
    "rating": 4.5,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg"
  },
  {
    "name": "Harry Potter and the Philosopher's Stone",
    "author": "J. K. Rowling",
    "price": 599,
    "rating": 4.9,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg"
  },
  {
    "name": "The Subtle Art of Not Giving a F*ck",
    "author": "Mark Manson",
    "price": 399,
    "rating": 4.2,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg"
  }
]

export default function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Hello name="Python Programming" price="200" author="Guido van Rossum" />
      <Hello {...books[0]} />
      {books.map((book) => (
        <Hello key={book.name} {...book} />
      ))}
    </>
  );
} 