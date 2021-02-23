// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

// Getting a reference to the input element on the page with the id property set to 'input-field'
// var inputField = d3.select(".form-control");
var tbody = d3.select("tbody");
//var form = d3.select("#form");
var form = d3.select("#form-control");
 //Select the input element and get the raw HTML node
var iDate= d3.select("#datetime");
var iCity= d3.select("#city");
var iState= d3.select("#state");
var iCountry= d3.select("#country");
var iShape= d3.select("#shape");

// filterButton.on("click", runEnter);
form.on("submit", runEnter);
console.log("--------")
function runEnter() {
    
    //prevent page from refreshing
    d3.event.preventDefault();
   
    // Get the value property of the input elements
    var vDate= iDate.property("value");
    var vCity= iCity.select("#city");
    var vState= iState.select("#state");
    var vCountry= iCountry.select("#country");
    var vshape= iShape.select("#shape");
    console.log(vDate);
    console.log("-------------------")
    // if (inputValue == '') {
    //     alert("There are no events for this date; Please enter another date!");
    //     document.getElementById("#datetime").focus();
    //        }
    // console.log(inputValue)
    //Filter the date
    if (vDate){
    var filteredDate = tableData.filter(i => i.datetime === vdate); 
    tbody.html("")
    //construct the table rows and columns & insert data

    filteredDate.forEach(function(ufoReport){
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]){
            var cell = row.append('td');
            cell.text(value)
        });
    });
    }
    else if(vCity) {
        var filteredCity = tableData.filter(i => i.city === vCity);
        tbody.html("")
        //construct the table rows and columns & insert data
        filteredCity.forEach(function(ufoReport){
            var row = tbody.append("tr");
            Object.entries(ufoReport).forEach(function([key, value]){
            var cell = row.append('td');
            cell.text(value)
        });
    });
    }
     else if(vState) {
        var filteredState = tableData.filter(i => i.state === vState);   
        tbody.html("")
        //construct the table rows and columns & insert data    
        filteredState.forEach(function(ufoReport){
            var row = tbody.append("tr");
            Object.entries(ufoReport).forEach(function([key, value]){
                var cell = row.append('td');
                cell.text(value)
            });
        });
     }
    else if(vCountry) {
        var filteredCountry = tableData.filter(i => i.country === vCountry);
        tbody.html("")
        //construct the table rows and columns & insert data
        filteredCountry.forEach(function(ufoReport){
            var row = tbody.append("tr");
            Object.entries(ufoReport).forEach(function([key, value]){
                var cell = row.append('td');
                cell.text(value)
            });
        });
    }
    else if(vShape){
        var filteredShape = tableData.filter(i => i.shape === vShape);
        tbody.html("")
        //construct the table rows and columns & insert data
        filteredShape.forEach(function(ufoReport){
            var row = tbody.append("tr");
            Object.entries(ufoReport).forEach(function([key, value]){
                var cell = row.append('td');
                cell.text(value)
            });
        });

    }
    console.log(filteredDate)
    // Clean up the previous value
    var tbody = d3.select("tbody");
    //clear the screen
       
};
tableData.forEach((ufoReport)=> {
    var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]){
            var cell = row.append('td');
            cell.text(value)
        });
    });

// function runReset() {
//     document.getElementById("form").reset();
//     var tbody = d3.select("tbody");
//     tbody.html("")
 