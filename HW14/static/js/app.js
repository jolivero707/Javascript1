// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

function renderTable(){
tbody.html("");
// BONUS: Refactor to use Arrow Functions!
tableData.forEach((object) => {
   var row = tbody.append("tr");
   Object.entries(object).forEach(([key, value]) => {
     var cell = tbody.append("td");
     cell.text(value);
   });
 });
}

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

 // Prevent the page from refreshing
 d3.event.preventDefault();

 // Select the input element and get the raw HTML node
 var inputElement = d3.select("#datetime");

 // Get the value property of the input element
 var inputValue = inputElement.property("value");

   //console.log(people);

 tableData = data.filter(d => d.datetime === inputValue);
 renderTable();
});

renderTable();

