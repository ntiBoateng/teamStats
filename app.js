let team = {
_players :[{
   firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
}, {firstName: 'Messi',
  lastName: 'Lionel',
  age: 34},{
     firstName: 'Ronaldo',
  lastName: 'Christiano',
  age: 43
  }],
_games:[{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},{
  opponent: 'Halts',
  teamPoints: 37,
  opponentPoints: 41
},{
  opponent: 'Kotoko',
  teamPoints: 48,
  opponentPoints: 38
}],
addGame(opp,myPts,oppPts){
  const game ={
    opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
  };
  this.games.push(game);
},
get players(){
return this._players;
},
get games(){
  return this._games;
},
addPlayer(firstName,lastName,age){
  let player ={
    firstName:firstName,
    lastName:lastName,
    age:age
  };
  this.players.push(player);
}
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa ','Leslie ',44);
team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans',100,98);
team.addGame('The Men',230,45);
team.addGame('Chaelse',99,43);
