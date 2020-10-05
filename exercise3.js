fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const finalRes = json.filter(item => !item.completed)
     .map(item => ({userId: item.userId, title: item.title}))
     console.log(finalRes);
  })
  .catch(function(err) { 
    console.log(err);
});