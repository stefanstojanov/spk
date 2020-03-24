import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TransactionDetailsComponent} from './payment/transaction-details/transaction-details.component';
import {MakeTransactionComponent} from './make-transaction/make-transaction.component';
import {CreateAliasComponent} from './create-alias/create-alias.component';
import {LoginComponent} from './login/login/login.component';
import {AliasPaymentComponent} from './payment/alias-payment/alias-payment.component';

const routes: Routes = [
  { path: 'transaction/:id', component: TransactionDetailsComponent },
  { path: 'transaction', component: TransactionDetailsComponent },
  { path: '', pathMatch: 'full', component: MakeTransactionComponent },
  { path: 'createalias', component: CreateAliasComponent },
  { path: 'login', component: LoginComponent},
  { path: 'aliasPayment', component: AliasPaymentComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
