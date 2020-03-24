import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spk';

  itemsCollection: AngularFirestoreCollection;
  items: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection('payments');
    this.items = this.itemsCollection.valueChanges();
  }
}
