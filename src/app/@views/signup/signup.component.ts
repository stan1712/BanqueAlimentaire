import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../@test/api.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	angForm: FormGroup;
	constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
		this.angForm = this.fb.group({
			email: ['', [Validators.required, Validators.minLength(1), Validators.email]],

			password: ['', Validators.required],
			confpassword: ['', Validators.required],

			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			birthdate: ['', Validators.required],
		});
	}

	ngOnInit() {}

	postdata(angForm1) {
		this.dataService.userRegistration(angForm1.value.firstName, angForm1.value.lastName, angForm1.value.birthdate, angForm1.value.email, angForm1.value.password)
			.pipe(first())
			.subscribe(
				data => {
					this.router.navigate(['login']);
				},

				error => {});
	}

	get email() {
		return this.angForm.get('email');
	}
	get password() {
		return this.angForm.get('password');
	}
	get name() {
		return this.angForm.get('name');
	}

}
