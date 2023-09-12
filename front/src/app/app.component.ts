import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: 'app.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
