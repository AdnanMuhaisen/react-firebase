import {
  CollectionReference,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ICrudRepository } from "./abstraction/ICrudRepository";

export class CrudRepository<T> implements ICrudRepository<T> {
  constructor(public collectionRef: CollectionReference) {
    this.collectionRef = collectionRef;
  }

  async getAll(): Promise<T[]> {
    const snapshot = await getDocs(this.collectionRef);
    return snapshot.docs.map((item) => {
      return { ...item.data().entity, id: item.id } as T;
    });
  }
  async addNew(entity: T): Promise<T> {
    const addedDocument = await getDoc(
      await addDoc(this.collectionRef, { entity })
    );
    return { ...addedDocument.data()!.entity, id: addedDocument.id } as T;
  }
  async update(id: string, entity: T): Promise<void> {
    await updateDoc(doc(this.collectionRef, id), id, entity);
  }
  async delete(id: string): Promise<void> {
    await deleteDoc(doc(this.collectionRef, id));
  }
}
