import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../core/data-services/users-data.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../../core/entities/user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [UserDataService]
})
export class LoginComponent implements OnInit {
	user: User;

	loginGroup = new FormGroup ({
		username: new FormControl(),
		password: new FormControl()
	});

	constructor(private fb: FormBuilder, private userDataService: UserDataService, private snackBar: MatSnackBar ) { }

	ngOnInit() {
		this.loginGroup = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	login() {
		const form = this.loginGroup.value;

		if (this.loginGroup.valid) {
			this.userDataService.getUser(form.username).subscribe(
				user => {
				this.user = user;
			},
				err => {
					this.snackBar.open('Username not found', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end',
					});
				}
			);
		}
	}
}
