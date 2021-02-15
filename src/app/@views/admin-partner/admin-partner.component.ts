import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-partner',
  templateUrl: './admin-partner.component.html',
  styleUrls: ['./admin-partner.component.css']
})
export class AdminPartnerComponent implements OnInit {

  moreInfos = [
    {
      label: 'Facebook',
      content: 'https://www.facebook.com/banquealimentaire33/'
    },
    {
      label: 'Téléphone',
      content: '05 56 43 10 63'
    },
    {
      label: 'Mail',
      content: 'ba330@banquealimentaire.org'
    }
  ];

  /*deleteItem(index) {
    delete this.moreInfos[index];
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
