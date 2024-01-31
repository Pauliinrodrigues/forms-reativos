import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { FomularioFornecedorComponent } from './components/fomulario-fornecedor/fomulario-fornecedor.component';
import { PersonFormComponent } from "./components/person-form/person-form.component";
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  template: ` 
  <!-- <router-outlet></router-outlet>-->
  <!--<app-header/> -->
  <app-person-form/>
  

  `,
  imports: [CommonModule, RouterOutlet,
    HeaderComponent, FomularioFornecedorComponent, PersonFormComponent]
})
export class AppComponent {
  title = 'Aula-Pratica-latest';
}
