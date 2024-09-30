import { Component } from '@angular/core'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from './core/components/footer/footer.component'
import { HeaderComponent } from './core/components/header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cv';
}
