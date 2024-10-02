import { Component } from '@angular/core'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './core/components/header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cv';
}
