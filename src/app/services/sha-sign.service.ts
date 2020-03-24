import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import * as sha1 from 'js-sha1';

@Injectable({
  providedIn: 'root'
})
export class ShaSignService {

  shaString = '';

  constructor() { }

  sign(params: any) {
    const orderedParams = {};
    Object.keys(params).sort().forEach((key) => {
      orderedParams[key] = params[key];
    });

    for (const key in orderedParams) {
      const value = orderedParams[key];
      this.shaString += key + '=' + value + environment.PASSPHRASE;
    }

    return sha1(this.shaString);

    this.shaString = '';

  }
}
