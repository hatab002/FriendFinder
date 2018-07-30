var friendList = require("../data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", (req, res) => {
        res.json(friendList);
    });

    app.post("/api/friends", (req, res) => {
        var userInfo = req.body;
        var chosenMatch = {
            name: "",
            photo: "",
            difference: 2000
        };
        var userScores = userInfo.scores;
        // var friendDifference = 0;

        for (let i = 0; i < userInfo.length; i++) {
            var friendDifference = 0;
            for (let j = 0; j < userInfo.scores.length; j++) {
                friendDifference += Math.abs(parseInt(userScores[i]) - parseInt(userInfo[i].scores[j]));

                if (friendDifference <= chosenMatch.difference) {
                    chosenMatch.name = userInfo[i].name,
                        chosenMatch.photo = userInfo[i].photo,
                        chosenMatch.difference = friendDifference
                }
            }
        }
        friendList.push(userInfo);
        res.json(friendList);
    });

};