import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user: User = {
    _id: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    department:'',
    loginName: ''
  };
  errorMessage: string = '';
  isDataLoaded: boolean = false;

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe(
      (res) => {
        this.user = res.user;
        this.isDataLoaded = true;
      },
      (error) => {
        console.error('Failed to fetch user profile', error);
        this.toastr.error('Failed to fetch user!', 'Error');
      }
    );
  }

  onSubmit() {
    this.authService.updateUser(this.user).subscribe(
      (updatedUser: User) => {
        console.log('User updated successfully:', updatedUser);
        this.toastr.success('Details Updated successfully!', 'Success');
      },
      (error) => {
        console.error('Error updating user:', error);
        this.toastr.error('Error updating user!', 'Error');
      }
    );
  }
}
