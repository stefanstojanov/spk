import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from 'firebase';
import {Store} from '@ngrx/store';
import {UserActions} from './store/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: any;
  userDetails: any;

  constructor( public afAuth: AngularFireAuth , private store: Store<any>) {
    this.user = afAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.store.dispatch(new UserActions(this.userDetails.uid));
        } else {
          this.userDetails = null;
          this.store.dispatch(new UserActions(this.userDetails));
        }
      }
    );
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        const userState = this.store.select('user');
        userState.subscribe( e => console.log(e));
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.user = result.user;
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
