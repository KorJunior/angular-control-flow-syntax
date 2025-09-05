import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  protected selectedValue: string = 'option1';
}
