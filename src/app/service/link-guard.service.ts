import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LinkGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const param = next.params.name;
    const visitedUrls = JSON.parse(sessionStorage.getItem('visitedUrls'));
    let permitted = false;

    switch (param) {
      case 'animals':
        // return true;
        permitted = true;
        break;
      case 'books':
        if (visitedUrls.length >= 1) {
          permitted = true;
        }
        break;
      case 'music':
        if (visitedUrls.length >= 2) {
          permitted = true;
        }
          break;
      case 'health':
        if (visitedUrls.length >= 3) {
          permitted = true;
        }
          break;
      default:
      return false;
    }

    if (!permitted) {
      this.router.navigate(['/errorpage']);
    }

    // console.log('path', next.params.name);
    // const storedArray = JSON.parse(sessionStorage.getItem('arrayLinks'));
    // console.log('storedArray', storedArray);
    // console.log('session', window.sessionStorage);
    // return true;
  }
}
