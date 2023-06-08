import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['role'] as Array<string>;
    //const expectedRoles = route.data['role'];
    const currentUser = this.userService.getCurrentUser();

    if (currentUser && expectedRoles.includes(currentUser.roles!)) {
      return true;
    }

    // Redirect the user to the login page or a forbidden page
    const navigationExtras: NavigationExtras = {
      queryParams: { returnUrl: state.url }
    };

    this.router.navigate(['/login'], navigationExtras);
    return false;
}
}