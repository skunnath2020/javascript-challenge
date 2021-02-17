// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

//select the  filter button
var filterButton= d3.select("#filter-btn");
//select the  clear button
var clearButton= d3.select("#clear-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select(".form-control");

function handleClick() {
    console.log("A button was clicked");
}

// We can use the `on` function in d3 to attach an event to the handler function
filterButton.on("click", handleClick);
// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log("--------------------------------------")
    console.log(newText);
  });
var filteredData = tableData.filter(eventOcc => eventOcc.datetime === inputField);
console.log(filteredData);