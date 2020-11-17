import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem } from 'src/app/components/tv-select/select-item';
import { ActorService } from 'src/app/services/actor/actor.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profileItens: SelectItem [] = [
    {
      id: 1,
      label: "Admin"
    },
    {
      id: 2,
      label: "Ator"
    }
  ];
  sexItens: SelectItem [] = [
    {
      id: 'M',
      label: "Masculino"
    },
    {
      id: 'W',
      label: "Feminio"
    }
  ]

  profileCtrl: FormControl = new FormControl(1);
  sexCtrl: FormControl = new FormControl();
  nameCtrl: FormControl = new FormControl();
  salaryCtrl: FormControl = new FormControl();
  emailCtrl: FormControl = new FormControl();
  passwordCtrl: FormControl = new FormControl();

  constructor(private userService: UserService, private actorService: ActorService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister = () => {
    this.userService.register(this.emailCtrl.value, this.passwordCtrl.value, this.nameCtrl.value, this.profileCtrl.value)
    .subscribe(({data}) =>  {
      console.log(data.id);
      this.actorService.register([], this.sexCtrl.value, parseFloat(this.salaryCtrl.value), data.id).subscribe(() => {
        alert("Cadastrado com sucesso!");
      }, err => alert("Não foi possível fazer o cadastro do Ator" + err?.message))
    },  err => alert("Não foi possível fazer o cadastro do Usuário" + err?.message));
  }

}
