import { Firestore, collection } from "firebase/firestore";
import { CrudRepository } from "../../../shared/infrastructure/repositories/CrudRepository";
import Todo from "../../domain/Todo";

export class TodoRepository extends CrudRepository<Todo> {
  constructor(db: Firestore) {
    super(collection(db, "todos"));
  }
}
