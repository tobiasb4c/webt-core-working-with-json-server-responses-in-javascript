fetch('/OpenJsonData.json')
    .then(response => response.json())
    .then((json) => console.log(JSON.stringify(json)));
    /*
fetch('http://opendata.wifi.at/OpenJsonData.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(response => document.getElementById('fetchedData').innerText = (JSON.stringify(response)));
  
/*function fetch(){
    
}*/