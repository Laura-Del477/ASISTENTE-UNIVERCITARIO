
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formRegister!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.formRegister = this.fb.group({
      email: [""],
      fullName: [""],
      pass: [""],
      confirmPass: [""]
    });
  }

  // Metodo para registrar usuario

  registrarUsuario() {

    console.log("Estoy registrando un nuevo usuario");

    console.log(this.formRegister.value);

  }

}
