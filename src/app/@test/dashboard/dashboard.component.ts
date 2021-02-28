import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	test = this.dataService.getUser();
	result: string;
	angForm: FormGroup;

	constructor(private fb: FormBuilder, private dataService: ApiService) {
		this.angForm = this.fb.group({
			request: ['', Validators.required]
		});
	}

	postdata(angForm1) {
		this.dataService.bddRequest(angForm1.value.request).pipe(first()).subscribe(
			data => {
				this.result = JSON.stringify(data);
			},
			error => {
				alert("qsds !")
			});
	}

	ngOnInit(): void {

		console.log(this.test)
	}

}
