// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

//select the  filter button
var filterButton= d3.select("#filter-btn");
//select the  clear button
var clearButton= d3.select("#clear-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
// var inputField = d3.select(".form-control");
var form = d3.select("#form");
filterButton.on("click", runEnter);
form.on("submit", runEnter);
console.log(form);

function runEnter() {
    //prevent page from refreshing
    d3.event.preventDefault();
    //Select the input element and get the raw HTML node
    var inputElement= d3.select("#datetime");
    // Get the value property of the input element
    var inputValue= inputElement.property("value");
    console.log(inputValue)
    //Filter the date
    var filteredData = tableData.filter(i => i.datetime === inputValue); 
    console.log(filteredData)
    // var dates = filteredData.map(eventDate => eventDate.datetime);
    // console.log(dates);
};
