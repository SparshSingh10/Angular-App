import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imageUrl = '../assets/BL_logo_square_png.png';
  url = 'https://www.bridgelabz.com/';
  userName: string = '';
  ngOnInit() {
    this.title = 'Hello from BridgeLabz';
  }

  onClick($event: MouseEvent) {
    console.log('Save button is clicked!', $event);
    window.open(this.url, '_blank');
  }

}




