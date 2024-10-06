To Do List:

Prediction!

split the sortedArray into 4 parts

average the grossincome in all 4 individually

make to percentage

average the 4 out

multiply the result to total gross

multiply the total gross with predicted using average with % of increases or decreases per month according to researched statistics

// example of resorting an array on React
import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
const [sortedArray, setSortedArray] = useState([]);

const yourArray = [
{ product: "Item A", price: 30 },
{ product: "Item B", price: 20 },
{ product: "Item C", price: 50 },
];

useEffect(() => {
// Sort array by price in descending order
const sorted = yourArray.sort((a, b) => b.price - a.price);
setSortedArray([...sorted]); // Use spread to avoid mutating state
}, []);

return (

<div>
<h1>Products Sorted by Price (Descending)</h1>
<ul>
{sortedArray.map((item, index) => (
<li key={index}>
{item.product}: ${item.price}
</li>
))}
</ul>
</div>
);
};

export default ExampleComponent;
