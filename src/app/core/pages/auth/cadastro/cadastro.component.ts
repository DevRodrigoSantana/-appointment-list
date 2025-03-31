
import { HeaderComponent } from '../../../share/header/header.component';
import { FormCadastroComponent } from './../../../components/form-cadastro/form-cadastro.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormCadastroComponent,HeaderComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {}
