import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import {FormsModule} from '@angular/forms';
import { CreateAliasComponent } from './create-alias/create-alias.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthenticationService} from './authentication.service';
import {HttpClientModule} from '@angular/common/http';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { TransactionDetailsComponent } from './payment/transaction-details/transaction-details.component';
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {TransactionActions, TransactionsActions} from './store/transaction.actions';
import {transactionReducer} from './store/transaction.reducer';
import {userReducer} from './store/user.reducer';
import { LoginComponent } from './login/login/login.component';
import { ListComponent } from './alias/list/list.component';
import { AliasPaymentComponent } from './payment/alias-payment/alias-payment.component';

const firebaseConfig = {
  apiKey: 'AIzaSyADaxx0VuOarEckfAsNZN1qaOWv2rwFM-g',
  authDomain: 'fir-login-c72a7.firebaseapp.com',
  databaseURL: 'https://fir-login-c72a7.firebaseio.com',
  projectId: 'fir-login-c72a7',
  storageBucket: 'fir-login-c72a7.appspot.com',
  messagingSenderId: '231187636339',
  appId: '1:231187636339:web:83ea93cae83002f4858a06'
};

@NgModule({
  declarations: [
    AppComponent,
    MakeTransactionComponent,
    CreateAliasComponent,
    NoSanitizePipe,
    TransactionDetailsComponent,
    LoginComponent,
    ListComponent,
    AliasPaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    StoreModule.forRoot({transaction: transactionReducer, user: userReducer}),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 5,
    })
  ],
  providers: [ AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
