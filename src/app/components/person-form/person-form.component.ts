import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <  <div [formGroup]="form">
  <input type="text" formControlName="nome" placeholder="Nome"/>
  <input type="text" formControlName="sobrenome" placeholder="Sobrenome"/>
  <input type="date" formControlName="datanasci" placeholder="Data de Nascimento"/>
</div>
  `,
})
export class PersonFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;

  }


}
