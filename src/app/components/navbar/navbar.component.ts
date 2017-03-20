import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
//import { FormControl } from '@angular/forms';
//import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Leetcode';
  username = "";

  //subscription: Subscription;
  //searchTerm: String;
  //private searchBox: FormControl = new FormControl;
  constructor(@Inject('auth') private auth) { }

  ngOnInit() {
      if (this.auth.authenticated()) {
        this.username = this.auth.getProfile().nickname;
      }
  }


  login(): void{
    // this.auth.login().then((profile) => {
    //   this.username = profile.nickname;
    // });
    this.auth.login()
              .then(profile => this.username = profile.nickname);
    //this.username = this.auth.getProfile().nickname;
  }

  logout(): void {
    this.auth.logout();
  }

  // searchProblem(): void {
  //   this.router.navigate(['/problems']);
  // }

}
