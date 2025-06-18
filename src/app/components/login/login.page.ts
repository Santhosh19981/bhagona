import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

   mobileNumber: string = '';
  otp: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogin() {
    const validOtp = '1234'; // static OTP for testing

    if (!this.mobileNumber || !this.otp) {
      this.errorMessage = 'Please enter mobile number and OTP.';
      return;
    }

    if (this.otp === validOtp) {
      localStorage.setItem('user', this.mobileNumber); // set login flag
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid OTP. Please try again.';
    }
  }

  allowOnlyNumbers(event: KeyboardEvent) {
  const charCode = event.which ? event.which : event.keyCode;
  // Allow only number keys (0–9)
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
}

}