import { Component } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  loggedIn:boolean=false;
 constructor(private router:Router,
  private authService:AuthService,
  private stService:StorageService,
  private toastr:ToastrService,
  ){}

 logout(){
  this.authService.logout().subscribe((res)=>{console.log(res);});
  this.loggedIn=false;
  this.toastr.warning('User Logged out!', 'Success');
  this.stService.clean();
  this.router.navigate(['login']);
}

 ngOnInit():void{

  if(this.stService.isLoggedIn()){
    this.loggedIn=true;
  }
 }

}
