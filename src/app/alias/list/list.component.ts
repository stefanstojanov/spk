import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Store} from '@ngrx/store';
import {AuthenticationService} from '../../authentication.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ShaSignService} from '../../services/sha-sign.service';
import {SendRequestService} from '../../services/send-request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() aliases: Observable<any>;
  @Input() orderObj: any;
  @Input() selectedLanguage: any;
  @Input() uid: any;

  selectedAlias: any;

  aliasesArray = [];

  errorMsg = 'Please select a card to continue';

  constructor(private afs: AngularFirestore,
              private store: Store<any>,
              public auth: AuthenticationService,
              private shaSign: ShaSignService,
              private requestService: SendRequestService) {
  }

  ngOnInit() {
    this.aliases.subscribe( aliases => {
      this.aliasesArray = aliases;
      this.selectedAlias = this.aliasesArray[0].alias;
    });
  }

  payment() {
    let parameters =  {
      ACCEPTURL: environment.CALLBACK_URL_PAYMENT_SUCCESS,
      AMOUNT: this.orderObj.amount * 100,
      CANCELURL: environment.CALLBACK_URL_PAYMENT_ERROR,
      CURRENCY: this.orderObj.currency,
      DECLINEURL: environment.CALLBACK_URL_PAYMENT_ERROR,
      EXCEPTIONURL: environment.CALLBACK_URL_PAYMENT_ERROR,
      LANGUAGE: this.selectedLanguage,
      ORDERID: this.orderObj.id,
      PARAMPLUS: 'uid=' + this.uid,
      PSPID: environment.PSPID,
      OPERATION: 'SAL',
      ALIAS: this.selectedAlias,
      ALIASUSAGE: 'Do you want to use this alias?',
    };


    const shasign = { SHASIGN: this.shaSign.sign(parameters)};
    parameters = {...parameters, ...shasign};

    this.requestService.post(parameters, environment.URL);
  }

}
