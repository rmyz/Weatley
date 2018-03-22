import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginGroup = new FormGroup ({
		username: new FormControl(),
		password: new FormControl()
	});

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.loginGroup = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	login() {
		console.log(this.loginGroup.controls.username.value);
		console.log(this.loginGroup.controls.password.value);
	}
}
