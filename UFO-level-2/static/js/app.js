// from data.js
var tableData = data;
console.log(tableData)
var tbody = d3.select("tbody");
//prevent page from refreshing
// d3.event.preventDefault();
tableData.forEach((ufoReport)=> {
    var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]){
            var cell = row.append('td');
            cell.text(value)
        });
});
//select the  filter button
var filterButton= d3.select("#filter-btn");
//select the  clear button
var clearButton= d3.select("#clear-btn");

 //Select the input element and get the raw HTML node
var iDate= d3.select("#datetime");
var iCity= d3.select("#city");
var iState= d3.select("#state");
var iCountry= d3.select("#country");
var iShape= d3.select("#shape");
console.log(iDate);
filterButton.on("click", runEnter);
var form = d3.select("#form"); 
form.on("change", runEnter);
clearButton.on("click", runReset);

function runEnter() {
  
    console.log("initiate");
    // Clear existing table 
    tbody.html("")
    // Get the value property of the input elements
    var vDate= iDate.property("value");
    var vCity= iCity.property("value");
    var vState= iState.property("value");
    var vCountry= iCountry.property("value");
    var vShape= iShape.property("value");
    console.log(vDate);
    console.log("-------------------")
    // Initialize the filtered data with tableData
    filteredData = tableData;
    //Filter the date
    if (vDate && vCity){
        console.log("************")
        var multiFilter = tableData.filter(i => i.datetime === vDate); 
        var filteredData = multiFilter.filter(i => i.city === vCity)
        console.log(filteredData);
    }
    else if (vDate){
    var filteredData = tableData.filter(i => i.datetime === vDate); 
            
    }
    else if(vCity) {
        
        var filteredData = tableData.filter(i => i.city === vCity);
        
    }
     else if(vState) {
        var filteredData = tableData.filter(i => i.state === vState);   
    }
    else if(vCountry) {
        var filteredData = tableData.filter(i => i.country === vCountry);
     
    }
    else if(vShape){
        var filteredData = tableData.filter(i => i.shape === vShape);
    }
    
    console.log(filteredData)
    //Display the filtered data
    filteredData.forEach((ufoReport)=> {
    var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value)
        });
    });
};
function runReset() {
    document.getElementById("form").reset();
    var tbody = d3.select("tbody");
    tbody.html("")
};