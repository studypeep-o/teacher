import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post1Component } from './mycomponent/post1/post1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Post1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teacher';
}
