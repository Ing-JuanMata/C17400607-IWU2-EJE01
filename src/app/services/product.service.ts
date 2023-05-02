import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private collection: CollectionReference<DocumentData>;
  constructor(private readonly firestore: Firestore) {
    this.collection = collection(firestore, 'products');
  }

  public getProducts() {
    return collectionData(this.collection, { idField: 'id' }) as Observable<
      Product[]
    >;
  }
}
