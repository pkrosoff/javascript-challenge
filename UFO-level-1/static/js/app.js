// Reference the table
let tbody = d3.select("tbody");
let filterButton = d3.select("#filter-btn")

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

// select submit button, do work
const filterUFOS = () => {

     // prevent page from refreshing
     d3.event.preventDefault();

    // select input element
    // let inputValue
    let inputElement = d3.select("#datetime");
    inputValue = inputElement.property("value");
    // add filter date
    filteredData = data.filter(row => row.datetime === inputValue);


    // Clear table and loop to assign filtered values
    tbody.html("");
    filteredData.forEach((sighting) => {
        let row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            let cell = row.append("td");
            cell.text(value);

        })
    })
}
// Table reset function
// const runReset = () => {
//     tbody.html("")
//     data.forEach((sighting) => {
//         let row = tbody.append("tr");
//         Object.values(sighting).forEach(value => {
//             let cell = row.append("td");
//             cell.text(value);
//         })
//     })
// }

// submit = d3.select("#filter-btn");
// click handler
// events
filterButton.on("click", filterUFOS)

   


   