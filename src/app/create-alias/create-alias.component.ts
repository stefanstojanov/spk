import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SendRequestService} from '../services/send-request.service';
import {ShaSignService} from '../services/sha-sign.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-create-alias',
  templateUrl: './create-alias.component.html',
  styleUrls: ['./create-alias.component.css']
})
export class CreateAliasComponent implements OnInit {

  orderObj = null;
  transactionState: any;
  uid = null;

  name: '';
  selectedLanguage: any = 'en_US';
  parameters: any;

  constructor(public authenticationService: AuthenticationService,
              public requestService: SendRequestService,
              public shaSign: ShaSignService,
              private afs: AngularFirestore,
              private store: Store<any>
              ) {

    this.transactionState = this.store.select('transaction');
    this.store.select('user').subscribe( user => {
      this.uid = user.uid;
    });
  }

  ngOnInit() {
    this.transactionState.subscribe(e => {
      this.orderObj = e;
      }
    );
  }


  createAlias() {

    this.parameters =  {
      ACCEPTURL: environment.CALLBACK_URL_ALIAS_SUCCESS,
      AMOUNT: this.orderObj.amount * 100,
      CANCELURL: environment.CALLBACK_URL_ALIAS_ERROR,
      CN: this.name,
      CURRENCY: 'CHF',
      DECLINEURL: environment.CALLBACK_URL_ALIAS_ERROR,
      EXCEPTIONURL: environment.CALLBACK_URL_ALIAS_ERROR,
      LANGUAGE: this.selectedLanguage,
      ORDERID: this.orderObj.id,
      PARAMPLUS: 'uid=' + this.uid + '&dateCreated=' + new Date(),
      PSPID: environment.PSPID,
      OPERATION: 'SAL',
      ALIAS: null,
      ALIASUSAGE: 'Do you want to save the alias?',
      ALIASOPERATION: 'BYPSP'
    };


    const shasign = { SHASIGN: this.shaSign.sign(this.parameters)};
    this.parameters = {...this.parameters, ...shasign};

    this.requestService.post(this.parameters, environment.URL);
  }
}
