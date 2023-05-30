exports.homePage = (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Send</button>
    </form>
    `);
}

exports.GetPost = (request, response) => {
    response.send('New post route');
}