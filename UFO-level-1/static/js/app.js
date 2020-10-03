// Reference variables
let tbody = d3.select("tbody");
let filterButton = d3.select("#filter-btn")

// console.log(data)

// loop through data
// add a row for each object using d3
data.forEach((UFOreport) => {
    // console.log(UFOreport);
    row = tbody.append("tr");   

    Object.entries(UFOreport).forEach(([key,value]) => {
        let cell = tbody.append("td")
        cell.text(value);
    })
});

// filter function on button click
const filterUFOS = () => {

     // prevent page from refreshing
     d3.event.preventDefault();

    // select input element
    let inputElement = d3.select("#datetime");
    inputValue = inputElement.property("value");
    
    // add filter date
    filteredData = data.filter(row => row.datetime === inputValue);
    
    // Populate table with filtered values
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

   


   