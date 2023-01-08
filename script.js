function randJob(){
var jsonA = [];
fetch('/OpenJsonData.json')
    .then(response => response.json())
    .then((json) => {jsonA.push(JSON.parse(JSON.stringify(json)))
    

    var random = (Math.floor(Math.random() * json.length))
    console.log(random);
    document.getElementById('fetchedData').innerText = 'Titel: ' + json[random].Titel ;
    document.getElementById('fetchedData2').innerText = 'Place: ' + json[random].Place ;
    document.getElementById('fetchedData3').innerText = 'Decription: ' + json[random].Decription ;
    });

    console.log(jsonA);
}



//console.log(jsonA.toString());



//document.getElementById('fetchedData').innerText = jsonA[random].toString() ;

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