import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuClosed: boolean = true;
  loggedInUser = false;
  isCollapsed = true;

  constructor(
    public router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    const maFunctionCallback= (event: NavigationStart) => {
      if(event instanceof(NavigationStart)){
        // this.menuClosed = !this.menuClosed;
        this.menuClosed = true;
      }      
    };
    // this.router.events.subscribe(maFunctionCallback);

    this.customerService.change.subscribe((loggedInStatus: boolean) => {
      this.loggedInUser = loggedInStatus;
    });
    this.loggedInUser = this.customerService.isLoggedIn;
  }

  basculerMenu(){
    this.menuClosed = !this.menuClosed;
  }
}
