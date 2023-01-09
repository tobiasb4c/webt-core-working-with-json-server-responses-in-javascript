function randJob(){
var jsonA = [];
fetch('/OpenJsonData.json')
    .then(response => response.json())
    .then((json) => {jsonA.push(JSON.parse(JSON.stringify(json)))
    

    var random = (Math.floor(Math.random() * json.length))
    console.log(random);
    document.getElementById('fetchedData').innerHTML = 'Titel: ' + json[random].Titel ;
    document.getElementById('fetchedData2').innerHTML = 'Place: ' + json[random].Place ;
    document.getElementById('fetchedData3').innerHTML = 'Description: ' + json[random].Description ;
    });

    console.log(jsonA);
}