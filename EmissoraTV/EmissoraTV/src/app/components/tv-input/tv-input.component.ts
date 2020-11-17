import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tv-input',
  templateUrl: './tv-input.component.html',
  styleUrls: ['./tv-input.component.css']
})
export class TvInputComponent implements OnInit {

  @Input() label: string = "";
  @Input() formCtrl: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() prefix: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
