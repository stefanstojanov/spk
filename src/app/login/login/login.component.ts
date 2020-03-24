import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ordersCollection: AngularFirestoreCollection;

  order: AngularFirestoreDocument;

  orderObj: any;

  loaded = false;

  constructor(public authenticationService: AuthenticationService, private route: ActivatedRoute, private afs: AngularFirestore, private store: Store<any>) {
    this.store.select('transaction').subscribe( e => {

      if (e.id !== null) {
        this.ordersCollection = this.afs.collection('orders');

        this.order = this.ordersCollection.doc(e.id);

        this.order.ref.get().then((doc) => {
            if (doc.exists) {
              this.orderObj = doc.data();
              this.loaded = true;
            }
          }
        );
      }
    });
  }

  ngOnInit() {
  }

}
