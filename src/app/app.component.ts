import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myAngular';
  ngOnInit() {
    console.log('Hello fromm ngOnInit');
    this.title='Hello from BridgeLabz';
  
  }
  
}




