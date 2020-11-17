import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/services/actor/actor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  displayedColumns: string[] = ['name', 'salary', 'sex'];
  dataSource = new MatTableDataSource([]);
  data: any[] = [];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private userService: UserService, private actorService: ActorService, private router: Router) { }

  ngOnInit(): void {
    this.actorService.list().subscribe((resp) => {
      this.data = resp;
      this.dataSource.data = resp
    }, (error) => console.log("Erro ao carregar Atores!"))
  }

}
