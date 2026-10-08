const MyButton = () =>{
    const handleClick = () => {
        alert("Button Clicked");
    }
    
    return <button className="bg-black text-white px-4 py-2 rounded" onClick={handleClick}>Click Me</button>
    
};

const Event = () => {
  return (
    <div><MyButton/></div>
  );
};

export default Event