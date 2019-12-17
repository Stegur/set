// TODO: write your code here
import Team from './Team';
import Character from './Character';

const team = new Team();

const lora = new Character('Lora', 'Magician');
const ursam = new Character('Ursam', 'Daemon');
const mankal = new Character('Mankal', 'Swordsman');

// team.add(lora);
// team.add(ursam);
team.add(mankal);
team.addAll(lora, ursam, mankal);

console.log(team);

const arrayOfHeroes = team.toArray();
console.log(team.members);
console.log(arrayOfHeroes);
