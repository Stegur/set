export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw new Error('Герой уже был добавлен в команду ранее');
    }
    this.members.add(hero);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => {
      if (this.members.has(hero)) {
        throw new Error('Герой уже был добавлен в команду ранее');
      }
      this.members.add(hero);
    });
  }

  toArray() {
    return [...this.members];
  }
}
