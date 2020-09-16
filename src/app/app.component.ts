
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';
import { NgProgressComponent } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;

  constructor(private router: Router) {

    this.router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.progressBar.start();
        } else if (event instanceof RouteConfigLoadEnd) {
          this.progressBar.complete();
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
