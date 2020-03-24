import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {map} from 'rxjs/operators';
import {Order} from '../order';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit {

  ordersCollection: AngularFirestoreCollection;
  orders: Observable<any>;

  ordersObj: Order;

  constructor(private afs: AngularFirestore, private router: Router) {
    this.ordersCollection = afs.collection('orders');
    this.orders = this.ordersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.ordersObj = new Order();
  }

  ngOnInit() {
    this.ordersObj.status = 'unpaid';
    this.ordersObj.orderID = Math.floor(Math.random() * 1000000000).toString();
  }

  onSubmit(form: NgForm) {
    this.ordersObj.timestamp = new Date();

    this.ordersCollection.doc(this.ordersObj.orderID).set({
      amount: this.ordersObj.amount,
      currency: this.ordersObj.currency,
      description: this.ordersObj.description,
      orderID: this.ordersObj.orderID,
      status: this.ordersObj.status,
      timestamp: new Date(),
      receiver: this.ordersObj.receiver
    }).then(a => alert('A new order with ID ' + this.ordersObj.orderID + ' has been created!'));
    this.router.navigate(['/transaction/' + this.ordersObj.orderID]);
  }

}
