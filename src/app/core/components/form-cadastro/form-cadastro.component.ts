import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form-cadastro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.scss',
})
export class FormCadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
    });
  }
  cadastrar() {
    if (this.cadastroForm.valid) {
      console.log('Cadastro realizado com sucesso!', this.cadastroForm.value);
    } else {
      console.log('Formulário inválido!');
    }
  }
}
