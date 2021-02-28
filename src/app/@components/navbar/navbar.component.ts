import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isLogin: boolean;

	constructor(private dataService: ApiService) {
		dataService.getLoggedInName.subscribe(name => this.isLogin = name);

		//this.isLogin = this.dataService.isLoggedIn();

		this.isLogin = true;
	}
	
	logout() {
		this.dataService.deleteToken();
		window.location.href = window.location.href;
	}

	ngOnInit(): void {
	}
}
