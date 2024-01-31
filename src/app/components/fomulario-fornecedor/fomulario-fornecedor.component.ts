import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fomulario-fornecedor',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './fomulario-fornecedor.component.html',
  styleUrl: './fomulario-fornecedor.component.scss'
})
export class FomularioFornecedorComponent implements OnInit {

  private formBuilder = inject(FormBuilder);

  formulario = this.formBuilder.group({
    nome: [''],
    sobrenome: [''],
    datanasci: [''],
    rg: [''],
    hasCnh: false,
    cnh: [''],
  });

  constructor() { }

  ngOnInit(): void {

    this.formulario.controls.hasCnh.valueChanges.subscribe((value: boolean | null) => {
      if (value) {
        this.formulario.controls.cnh.enable();
      } else {
        this.formulario.controls.cnh.disable();
      }
    });
  }
}
