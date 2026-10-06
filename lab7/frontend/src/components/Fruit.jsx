const products = [
    {title:'Cabbage', id: 1, isFruit: false},
    {title:'Orange', id: 2, isFruit: true},
    {title:'Banana', id: 3, isFruit: true},
    {title:'Apple', id: 4, isFruit: true},
];


const ListItem = products.map((item) => (
    <li key={item.id} style={{ color: item.isFruit ? "red" : "blue" }}>
        {item.title}
    </li>
));

console.log(ListItem);


const Fruit = () => {
  return <ul>{ListItem}</ul>
};

export default Fruit;