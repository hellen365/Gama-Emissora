import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from './select-item';

@Component({
  selector: 'tv-select',
  templateUrl: './tv-select.component.html',
  styleUrls: ['./tv-select.component.css']
})
export class TvSelectComponent implements OnInit {

  @Input() itens: SelectItem[] = [];
  @Input() label: string = '';
  @Input() formCtrl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
