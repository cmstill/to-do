import { nanoid } from 'nanoid';
export default class ToDo {
  constructor(name) {
    this.name = name;
    this.ID = nanoid(4);
    this.creationDate = new Date().toISOString();
  }
}
