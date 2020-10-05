fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     let arr = [];
     json.forEach((item) => {
        arr.push(item.title);
     })
     console.log(arr);
  })
  .catch(function(err) { 
    console.log(err);
});