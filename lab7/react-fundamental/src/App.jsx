 function Hello(){
  return(
    <>
    <h1>Book Name</h1>
    <h2>Book Price</h2>
    <h3>Book Author</h3>
    </>
  );
}

// <> </> : fragments can be used to wrap multiple elements 
// function must return single element

export default function App(){
  return(
    <>
  <h1>Hello React</h1>
  <Hello />
 </>
)
}