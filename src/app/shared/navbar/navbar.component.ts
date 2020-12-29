import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  public constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public goUser(id: string) {
    if(!id) {
      return;
    }
    this.router.navigate(['/usuario', id])
  }

}
