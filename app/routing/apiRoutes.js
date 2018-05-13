var friendList = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", (req, res) => {
        res.json(friendList);
    });

    app.post("/api/friends", (req, res) => {
        var chosenMatch = {
            name: "",
            photo: "",
            difference: 2000
        };
        var userInfo = req.body;
        var userScores = userInfo.scores;
        var friendDifference = 0;

        for (let i = 0; i < friendList.length; i++) {
            friendDifference = 0;
            for (let j = 0; j < friendList[i].scores[j]; j++) {
                friendDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendList[i].scores[j]));

                if (friendDifference <= chosenMatch.difference) {
                    chosenMatch.name = friendList[i].name,
                        chosenMatch.photo = friendList[i].photo,
                        chosenMatch.difference = friendDifference
                }
            }
        }
        friendList.push(userInfo);
        res.json(chosenMatch);
    });

};