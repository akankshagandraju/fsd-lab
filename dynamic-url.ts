declare var require: any;
const express = require('express');

const app = express();

const PORT = 3000;
app.get('/user/:id', (req: any, res: any) => {
    const userId = req.params.id;
    res.send(`<h1>User Profile</h1><p>You are viewing the profile for User ID: <strong>${userId}</strong></p>`);
});

app.get('/flights/:from/:to', (req: any, res: any) => {
    const { from, to } = req.params;
    res.send(`Searching for flights departing from <b>${from}</b> arriving at <b>${to}</b>.`);
});

app.get('/search', (req: any, res: any) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});

app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});