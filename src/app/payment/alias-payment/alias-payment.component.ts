import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Store} from '@ngrx/store';
import {AuthenticationService} from '../../authentication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-alias-payment',
  templateUrl: './alias-payment.component.html',
  styleUrls: ['./alias-payment.component.css']
})
export class AliasPaymentComponent implements OnInit {

  aliasCollection: AngularFirestoreCollection;

  aliasesArray = [];

  aliases: Observable<any>;

  orderObj: any;

  selectedLanguage = 'en_US';

  user = '';

  constructor(private afs: AngularFirestore, private store: Store<any>, private auth: AuthenticationService) { }

  ngOnInit() {
    this.store.select('user').subscribe( e => {
        if (e.uid) {
          this.user = e.uid;

          this.aliasCollection = this.afs.collection('alias-postfinance').doc(e.uid).collection('aliases');

          this.aliases = this.aliasCollection.valueChanges();
        }
      }
    );

    this.store.select('transaction').subscribe( order => {
      if (order.id) {
        this.orderObj = order;
      }
    });
  }

}
