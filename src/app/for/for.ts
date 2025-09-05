import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [NgFor],
  templateUrl: './for.html',
  styleUrl: './for.scss'
})
export class For {
  names: string[] = ['Alice', 'Bob', 'Charlie', 'David'];
}
