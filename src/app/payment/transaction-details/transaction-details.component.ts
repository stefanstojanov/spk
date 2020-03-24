import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Order} from '../../order';
import {map} from 'rxjs/operators';
import {Form} from '@angular/forms';
import {Store} from '@ngrx/store';
import {TransactionActions} from '../../store/transaction.actions';
import {environment} from '../../../environments/environment';
import {ShaSignService} from '../../services/sha-sign.service';
import {SendRequestService} from '../../services/send-request.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  orderID = null;

  ordersCollection: AngularFirestoreCollection;
  order: AngularFirestoreDocument;
  orderObj = null;

  orderChanged = '';

  transactionState: Observable<{transaction: any}>;

  orderIsSet = false;

  selectedLanguage: any = 'en_US';

  constructor(private route: ActivatedRoute,
              private afs: AngularFirestore,
              private store: Store<any>,
              private router: Router,
              private shaSign: ShaSignService,
              private requestService: SendRequestService) {
    if (this.route.snapshot.paramMap.get('id')) {
      this.orderID = this.route.snapshot.paramMap.get('id');

      this.ordersCollection = afs.collection('orders');

      this.order = this.ordersCollection.doc(this.orderID);

      this.order.ref.get().then((doc) => {
          if (doc.exists) {
            this.orderObj = doc.data();
            this.orderIsSet = true;
            this.dispatch();
          }
        }
      );

      this.transactionState = this.store.select('transaction');
      // this.transactionState.subscribe( e => console.log(e.transaction));
    }
  }

  ngOnInit() {
  }

  onSubmit() {

    this.ordersCollection = this.afs.collection('orders');

    this.order = this.ordersCollection.doc(this.orderChanged.toString());

    this.order.ref.get().then((doc) => {
        if (doc.exists) {
          this.orderObj = doc.data();
          this.orderIsSet = true;
          this.dispatch();
        }
      }
    );
  }

  dispatch() {
    this.store.dispatch(new TransactionActions(this.orderObj));
  }

  payment() {

    /*let parameters = {
      ACCEPTURL: environment.URLBASE + 'paymentNoAlias.php',
      AMOUNT: this.orderObj.amount,
      CANCELURL: environment.URLBASE + 'paymentNoAliasError.php',
      CURRENCY: this.orderObj.currency,
      DECLINEURL: environment.URLBASE + 'paymentNoAliasError.php',
      EXCEPTIONURL: environment.URLBASE + 'paymentNoAliasError.php',
      LANGUAGE: this.selectedLanguage,
      ORDERID: this.orderID,
      PSPID: environment.PSPID,
      OPERATION: 'SAL',
      ALIAS: null,
      ALIASUSAGE: 'Do you want to save the alias?',
      ALIASOPERATION: 'BYPSP'
    };

    const shasign = { SHASIGN: this.shaSign.sign(parameters)};
    parameters = {...parameters, ...shasign};
    this.requestService.post(parameters, environment.URL);*/

    this.router.navigate(['createalias']);
  }

}
