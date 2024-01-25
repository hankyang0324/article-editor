import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var highed: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
  title = 'article-editor';
  editPage = false;
  @ViewChild('container') container: ElementRef;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.editPage = this.router.url === '/editor';
      }
    });
  }

  ngAfterViewInit(): void {
    highed.Editor(this.container.nativeElement);
  }
}
