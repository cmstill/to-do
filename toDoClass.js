export default class ToDo {
  constructor(name) {
    this.name = name;
    this.ID = Math.floor(Math.random() * 10000);
    this.creationDate = new Date().toISOString();
  }
}
