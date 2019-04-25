import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../core/Auth-services/user.service';
import { IsLoggedService } from '../../../../core/services/isLogged.service';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  loginGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
    private authService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private isLoggedService: IsLoggedService,
    private commonService: CommonService,
  ) {}

  ngOnInit() {
    this.loginGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.loginGroup.valid) return null;

    const { username, password } = this.loginGroup.value;

    this.authService.login(username, password).subscribe(
      () => {
        if (this.authService.redirectUrl) {
          // TODO This is not being used by the moment, but if you are not logged in an you are trying to acces for example '/customers' it should redirect you there after you logged in
          this.router.navigateByUrl(this.authService.redirectUrl);
        } else {
          this.isLoggedService.sendMessage(true);
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.snackBar.open(this.commonService.formatGraphQLError(error.message), 'Dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
        });
      },
    );
  }
}
