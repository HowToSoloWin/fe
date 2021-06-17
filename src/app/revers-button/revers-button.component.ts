import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-revers-button',
  templateUrl: './revers-button.component.html',
  styleUrls: ['./revers-button.component.scss']
})
export class ReversButtonComponent implements OnInit {

  @Input() userName!: String;
  constructor() { }

  ngOnInit(): void {
  }

}
