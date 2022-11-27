export interface IDataObject {
  id: string;
}

export class BaseRepository<T extends IDataObject> {
  public data: T[];

  constructor() {
    this.data = [];
  }

  create(entity: T) {
    this.data.push(entity);
    return entity;
  }

  getAll() {
    return this.data;
  }

  getById(id: string) {
    return this.data.find((entity) => entity.id === id);
  }

  update(id: string, entity: T) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.data[index] = entity;
      return entity;
    }
    return null;
  }

  delete(id: string) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
      return true;
    }
    return false;
  }

  deleteAll() {
    this.data = [];
  }
}
