import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { LoadingComponent } from './loading/loading.component';
import { AdvancedDeferComponent } from './advanced-defer/advanced-defer.component';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  imports: [AdvancedDeferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-control-flow-syntax';
}
