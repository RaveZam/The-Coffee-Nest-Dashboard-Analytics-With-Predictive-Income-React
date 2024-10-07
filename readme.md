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

// example of splitting arrays and filling null days

const salesData = [
{ day: 1, sales: 100 },
{ day: 2, sales: 150 },
null, // No record
{ day: 4, sales: 130 },
{ day: 5, sales: 110 },
{ day: 6, sales: 160 },
{ day: 7, sales: 140 },
{ day: 8, sales: 180 },
null, // No record
{ day: 10, sales: 220 },
{ day: 11, sales: 210 },
{ day: 12, sales: 240 },
{ day: 13, sales: 230 },
{ day: 14, sales: 260 },
{ day: 15, sales: 250 },
{ day: 16, sales: 270 },
{ day: 17, sales: 300 },
{ day: 18, sales: 290 },
null, // No record
{ day: 20, sales: 320 },
{ day: 21, sales: 340 },
{ day: 22, sales: 330 },
{ day: 23, sales: 350 },
{ day: 24, sales: 360 },
{ day: 25, sales: 370 },
{ day: 26, sales: 380 },
{ day: 27, sales: 400 },
{ day: 28, sales: 410 }
];

// Fill missing days with 0 sales
const filledSalesData = salesData.map((day, index) => {
return day ? day : { day: index + 1, sales: 0 }; // Use 0 sales for missing days
});

// Split the filled data into 4 groups of 7 days each
const weeks = [];
for (let i = 0; i < filledSalesData.length; i += 7) {
weeks.push(filledSalesData.slice(i, i + 7));
}

// Display the results
console.log(weeks);

// Example of Date Format

const filledSalesData = salesData.map((date, index) => {
return date ? date : { date: `2024-10-${index + 1}`, sales: 0 }; // Use 0 sales for missing dates
});

//How it should look like

const filledSalesData = [
{ date: '2024-10-01', sales: 100 },
{ date: '2024-10-02', sales: 0 },
{ date: '2024-10-03', sales: 150 },
{ date: '2024-10-04', sales: 0 },
{ date: '2024-10-05', sales: 0 },
{ date: '2024-10-06', sales: 200 },
];
