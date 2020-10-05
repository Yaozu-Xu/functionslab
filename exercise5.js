fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const finalRes = json.reduce((accumlator, item) => {
            item.completed ? accumlator : accumlator.push({
                userId: item.userId,
                title: item.title
            })
            return accumlator;
        }, [])
        console.log(finalRes);
    })
    .catch(function (err) {
        console.log(err);
    });