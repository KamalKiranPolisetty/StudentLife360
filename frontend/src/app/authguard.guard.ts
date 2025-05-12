import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from './_services/storage.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //constructor(private stService: StorageService, private router: Router) {}

  stService:StorageService=inject(StorageService);
  router:Router=inject(Router);
  
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | Observable<boolean> | Promise<boolean> 
    {
    if (this.stService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
