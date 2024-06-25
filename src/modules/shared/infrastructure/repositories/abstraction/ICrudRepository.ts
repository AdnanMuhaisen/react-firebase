export interface ICrudRepository<T> {
  getAll(): Promise<T[]>;
  addNew(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<void>;
  delete(id: string): Promise<void>;
}
