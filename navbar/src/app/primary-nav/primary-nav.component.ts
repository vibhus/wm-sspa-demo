import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostListener('window:message', ['$event'])
  onMessage(event) {
    console.log('received message', event);
    if (event.data === 'NAVIGATE_HOME') {
      this.router.navigate(['/home']);
    }
  }

  redirectToWmApp() {
    document.body.classList.add('wm-app');
    console.log('updated navigation');
    this.router.navigate(['/wmapp']);
  }

  removeWmAppClass() {
    document.body.classList.remove('wm-app');
  }

}
