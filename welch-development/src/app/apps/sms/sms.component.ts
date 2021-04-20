import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BACKEND_URL = environment.apiUrl + '/sms/';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.sass']
})
export class SmsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  timeCheckbox = false;
  numberInput = '';
  numbers = [];
  message = '';
  showSpinner = false;

  ngOnInit(): void {

  }

  addNumber() {
    if (this.formatPhoneNumber()) {
      this.numberInput = '';
    }
  }

  removeNumber(i) {
    this.numbers.splice(i, 1);
  }


  formatPhoneNumber() {
    if (this.numberInput.length) {
      let cleaned = (this.numberInput).replace(/\D/g, '');
      if (cleaned.charAt(0) === '1') {
        cleaned = cleaned.substring(1);
      }
      if (cleaned.length !== 10) {
        console.log('Error: Number ' + cleaned + ' is not a valid 10 digit phone number.');
        return false;
      }
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        this.numbers.push(
          {
            clean: cleaned,
            formatted: '(' + match[1] + ') ' + match[2] + '-' + match[3]
          }
        );
        this.numberInput = '';
      }
    }
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  postMessage() {
    this.formatPhoneNumber();

    if (this.numbers.length && this.message.length) {
      this.showSpinner = true;
      this.numbers.forEach((x) => {
        this.http.post(
          BACKEND_URL,
          JSON.stringify({
            numbers: this.numbers,
            message: this.message
          }),
          this.httpOptions
        ).subscribe(data => {
          this.numbers = [];
          this.message = '';
          this.showSpinner = false;
        });
      });
    }
  }
}


