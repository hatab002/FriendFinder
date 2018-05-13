var friendList = require ("../data/friends")


module.exports = function (app){


app.get("/api/friends", (req, res) => {
    res.json(friendList);
});


app.post("/api/friends", (req, res) => {
// friend comparison here
});

};