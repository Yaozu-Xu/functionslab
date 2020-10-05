fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const res = json.reduce((accumulator, todo) => {
            return todo.completed ? accumulator + 1 : accumulator
        }, 0)
        console.log(res)
    })
    .catch(function (err) {
        console.log(err);
    });