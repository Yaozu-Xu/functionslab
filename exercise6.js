fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const res = json.reduce((accumlator, item) => {
            if (item.completed) {
                accumlator[item.userId] === undefined ?
                    (accumlator[item.userId] = 1) :
                    (accumlator[item.userId] += 1);
            }
            return accumlator;
        }, {});
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });