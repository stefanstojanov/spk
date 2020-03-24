import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  constructor() { }

  post(parameters: any, url: string) {
    const mapForm = document.createElement('form');
    // mapForm.target = '_blank';
    mapForm.method = 'POST';
    mapForm.action = url;

    Object.keys(parameters).forEach((param) => {
      const mapInput = document.createElement('input');
      mapInput.type = 'hidden';
      mapInput.name = param;
      mapInput.setAttribute('value', parameters[param]);
      mapForm.appendChild(mapInput);
    });
    document.body.appendChild(mapForm);
    mapForm.submit();
  }
}
