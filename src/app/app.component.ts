import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imageUrl = '../assets/BL_logo_square_png.png';
  ngOnInit() {
    this.title = 'Hello from BridgeLabz';

  }

}




