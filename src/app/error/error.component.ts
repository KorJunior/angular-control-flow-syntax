import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-child',
  imports: [],
  template: '<p>Hola</p>',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponentChild {
  constructor() {
    throw new Error('Simulated error in child component for testing purposes');
  }
}
 


@Component({
  selector: 'app-error',
  imports: [ErrorComponentChild],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent implements OnInit {
  protected isContentReady = false;
  protected isContentReadyError = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isContentReady = true;
    }, 3000);
  }
}


