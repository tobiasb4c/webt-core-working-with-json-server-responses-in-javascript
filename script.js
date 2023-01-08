console.log('test');
fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(response => document.getElementById('fetchedData').innerText = (JSON.stringify(response)));
  
/*function fetch(){
    
}*/