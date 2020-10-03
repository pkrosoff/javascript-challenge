// Reference the table
var tbody = d3.select("tbody")
// console log data
console.log(data)
// loop throught data
// data.forEach(function(UFOreport) {
//     console.log(UFOreport);   
// });
// add a row for each object using d3
data.forEach((UFOreport) => {
    console.log(UFOreport);
    var row = tbody.append("tr");   

    Object.entries(UFOreport).forEach(([key,value]) => {
        var cell = tbody.append("td")
        cell.text(value);
    })
});
// select submit button
var submit = d3.select("#filter-btn");
// click handler
submit.on("click", function() {

    // prevent page from refreshing
    d3.event.preventDefault();
    // select input element
    var inputElement = d3.select("#datetime");
    // retrieve element value
    var inputValue = inputElement.property("value");
})

var filteredData = data.filter(row => row.datetime === inputValue);
