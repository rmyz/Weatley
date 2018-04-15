import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UsersDataService } from '../../../../../core/data-services/users-data.service';
import { IUser } from '../../../../../core/models/user-model';
import { UserService } from '../../../../../core/Auth-services/user.service';

@Component({
	selector: 'app-internal-form',
	templateUrl: './internal-form.component.html',
	styleUrls: ['./internal-form.component.scss'],
	providers: [UsersDataService]
})
export class InternalFormComponent implements OnInit {

	private InternalsForm = new FormGroup ({
		userName: new FormControl(),
		name: new FormControl(),
		surname: new FormControl(),
		email: new FormControl(),
		userType: new FormControl(),
		password: new FormControl(),
		confirmPassword: new FormControl()
	});

	private id: string;
	private user: IUser;

	constructor(
		private usersDataService: UsersDataService,
		private userService: UserService,
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private snackBar: MatSnackBar
	) { }

	ngOnInit() {
			this.route.params.subscribe(params => {
				this.id = params['id'];
				this.loadData(this.id);
			});
	}

	private loadData(id: string) {
		if (id) {
			this.usersDataService.getUserById(id).subscribe(user => {
				this.user = user;

				this.InternalsForm = this.fb.group({
					userName: [this.user.userName, Validators.required],
					name: [this.user.name, Validators.required],
					surname: [this.user.surname, Validators.required],
					email: [this.user.email, Validators.required],
					userType: [this.user.userType, Validators.required],
				});
			});
		} else {
			this.InternalsForm = this.fb.group({
				userName: ['', Validators.required],
				name: ['', Validators.required],
				surname: ['', Validators.required],
				email: ['', Validators.required],
				userType: ['', Validators.required],
				password: ['', Validators.required],
				confirmPassword: ['', Validators.required],
			});
		}
	}

	submitInternal() {
		if (this.InternalsForm.valid) {
			this.user = this.InternalsForm.value;
			const password = this.InternalsForm.value.password;
			const confirmPassword = this.InternalsForm.value.confirmPassword;

			if (this.id) {
				this.user.id = this.id;
				this.usersDataService.updateUser(this.user).subscribe(res => {
					this.snackBar.open('User updated succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			} else {
				this.userService.register(this.user, password, confirmPassword).subscribe(res => {
					this.snackBar.open('User Registered succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			}
		} else {
			this.snackBar.open('The inputs are not valid', 'Dismiss', {
				duration: 3000,
				verticalPosition: 'top',
				horizontalPosition: 'end'
			});
		}
	}

	cancel() {
		history.go(-1);
	}

}
