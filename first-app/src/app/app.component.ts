import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
