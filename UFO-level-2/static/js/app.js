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
// Getting a reference to the input element on the page with the id property set to 'input-field'
var form = d3.select("#filter-btn");
 //Select the input element and get the raw HTML node
var iDate= d3.select("#datetime");
var iCity= d3.select("#city");
var iState= d3.select("#state");
var iCountry= d3.select("#country");
var iShape= d3.select("#shape");
console.log(iDate);
form.on("click", runEnter);
 
// form.on("submit", runEnter);

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
    if (vDate){
    var filteredData = tableData.filter(i => i.datetime === vDate); 
            
    }
    else if(vCity) {
        console.log("in city")
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
// function runReset() {
//     document.getElementById("form").reset();
//     var tbody = d3.select("tbody");
//     tbody.html("")
 