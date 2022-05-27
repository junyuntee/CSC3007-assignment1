fetch('https://api.data.gov.sg/v1/environment/psi')
.then(response => response.json())
.then(function(data){
    const readings = data["items"][0]["readings"]
    let table = 
    `<tr>
    <th>Metric</th>
    <th>Central</th>
    <th>East</th>
    <th>National</th>
    <th>North</th>
    <th>South</th>
    <th>West</th>
    </tr>
    `;
    for (const [key, value] of Object.entries(readings)) {
        table += `<tr><th>${key}</th>
        <td>${value.central}</td>
        <td>${value.east}</td>
        <td>${value.national}</td>
        <td>${value.north}</td>
        <td>${value.south}</td>
        <td>${value.west}</td>
        </tr>`
      }
    
    // get current timestamp when data is updated
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let timestamp = new Date(Date.now())

    // Setting innerHTML as tab variable 
    document.getElementById("table").innerHTML = table;
    document.getElementById("lastUpdated").innerHTML = `${timestamp.getDate()} ${months[timestamp.getMonth()]} ${timestamp.getFullYear()}, ${timestamp.getHours()}:${timestamp.getMinutes()}`;

});