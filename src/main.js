import './styles.css';
import $ from 'jquery';
import { Player } from './chargen.js';
import { monsters } from './monsters.js';


$(document).ready(function () {

  const party = [];
  

  $('form#player button').click(function (event) {
    event.preventDefault();
    const charName = $('#user-input-name').val();
    const charAge = parseInt($('#user-input-age').val());
    const charRace = $('#user-input-race').val();
    const charClass = $('#user-input-class').val();

    let player = new Player(charName, charAge, charRace, charClass);
    player.addRaceAttr();
    player.addClassAttr();
    party.push(player);
    console.log(player);
    console.log(party);

  });

  $('#fight-button').click(function (event) {
    event.preventDefault();
    const monster = monsters[Math.floor(Math.random() *  monsters.length)];
    console.log(monster);
    console.log(party);
  });

  $('#player-attack').click(function () {
    party[0].attackRoll();
  })
});
