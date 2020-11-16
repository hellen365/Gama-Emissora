import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  obra: string;
  dataInicio: string;
  dataFim: string;
  valor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: "Veronica Silva", obra: 'Projeto Final Avanade', dataInicio: "15/11/2020", dataFim: '16/11/2020', valor: "R$ 20.000"},
];

@Component({
  selector: 'app-minhas-contratacao',
  templateUrl: './minhas-contratacao.component.html',
  styleUrls: ['./minhas-contratacao.component.css']
})


export class MinhasContratacaoComponent implements OnInit {

  displayedColumns: string[] = ['name','obra', 'dataInicio', 'dataFim', 'valor'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    
  }

}
