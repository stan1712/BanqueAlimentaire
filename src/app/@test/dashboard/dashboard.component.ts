import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  test = this.dataService.getUser();

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {

    console.log(this.test)
  }

}
