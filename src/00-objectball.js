const gameObject = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
      "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
      },
      "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
      },
      "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      },
    },
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
      },
      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,
      },
    },
  },
};

function homeTeamName() {
  let object = gameObject;
  return object["home"]["teamName"];
}

console.log(homeTeamName());

let oo = { foo: 42, bar: 83, "key w/ spaces": true };
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["key w/ spaces"]);

console.log("Object.keys(gameObject) =>", Object.keys(gameObject));
console.log("Object.values(gameObject) =>", Object.values(gameObject));
console.log("Object.entries(gameObject) =>", Object.entries(gameObject));

function numPointsScored(playerName) {
  for (let team in gameObject) {
    for (let player in gameObject[team]["players"]) {
      if (player === playerName) {
        return gameObject[team]["players"][player]["points"];
      }
    }
  }
}

console.log(numPointsScored("Alan Anderson"));
console.log(numPointsScored("Bismak Biyombo"));

function shoeSize(playerName) {
  for (let team in gameObject) {
    for (let player in gameObject[team]["players"]) {
      if (player === playerName) {
        return gameObject[team]["players"][player]["shoe"];
      }
    }
  }
}

console.log(shoeSize("Alan Anderson"));
console.log(shoeSize("Bismak Biyombo"));

function teamColors(teamName) {
  for (let team in gameObject) {
    if (gameObject[team]["teamName"] === teamName) {
      return gameObject[team]["colors"];
    }
  }
}

console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));

function teamNames() {
  let names = [];
  for (let team in gameObject) {
    names.push(gameObject[team]["teamName"]);
  }
  return names;
}

console.log(teamNames());

function playerNumbers(teamName) {
  let numbers = [];
  for (let team in gameObject) {
    if (gameObject[team]["teamName"] === teamName) {
      for (let player in gameObject[team]["players"]) {
        numbers.push(gameObject[team]["players"][player]["number"]);
      }
    }
  }
  return numbers;
}

console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName) {
  for (let team in gameObject) {
    for (let player in gameObject[team]["players"]) {
      if (player === playerName) {
        return gameObject[team]["players"][player];
      }
    }
  }
}

console.log(playerStats("Alan Anderson"));
console.log(playerStats("Bismak Biyombo"));

function bigShoeRebounds() {
  let biggestShoe = 0;
  let playerWithBiggestShoe = "";

  for (let team in gameObject) {
    for (let player in gameObject[team]["players"]) {
      if (gameObject[team]["players"][player]["shoe"] > biggestShoe) {
        biggestShoe = gameObject[team]["players"][player]["shoe"];
        playerWithBiggestShoe = player;
      }
    }
  }

  for (let team in gameObject) {
    for (let player in gameObject[team]["players"]) {
      if (player === playerWithBiggestShoe) {
        return gameObject[team]["players"][player]["rebounds"];
      }
    }
  }
}

console.log(bigShoeRebounds());

function mostPointsScored() {
  let mostPoints = 0;
  let playerWithMostPoints = "";

  for (let team in gameObject) {
    for (let player in gameObject[team]["players"]) {
      if (gameObject[team]["players"][player]["points"] > mostPoints) {
        mostPoints = gameObject[team]["players"][player]["points"];
        playerWithMostPoints = player;
      }
    }
  }
  return playerWithMostPoints;
}

console.log(mostPointsScored());

function winningTeam() {
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in gameObject["home"]["players"]) {
    homePoints += gameObject["home"]["players"][player]["points"];
  }

  for (let player in gameObject["away"]["players"]) {
    awayPoints += gameObject["away"]["players"][player]["points"];
  }

  if (homePoints > awayPoints) {
    return gameObject["home"]["teamName"];
  } else {
    return gameObject["away"]["teamName"];
  }
}

console.log(winningTeam());

function playerWithLongestName() {
  let longestName = "";
  for (let team in gameObject) {
    for (let player in gameObject[team]["players"]) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
}

console.log(playerWithLongestName());
