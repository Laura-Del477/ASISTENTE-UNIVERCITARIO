
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formRegister!: FormGroup;

  isRegister: boolean = true;

  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  // Inicializar formulario

  formInit() {

    this.formRegister = this.fb.group({
      email: [''],
      fullName: [''],
      pass: [''],
      confirmPass: ['']
    });

  }

  // Método para registrar usuario

  registrarUsuario() {

    const data = this.formRegister.value;

    // Validar campos vacíos

    if (
      !data.email ||
      !data.fullName ||
      !data.pass ||
      !data.confirmPass
    ) {

      this.isRegister = false;
      this.mensaje = 'Todos los campos son obligatorios.';

      return;
    }

    // Validar correo

    if (!data.email.includes('@')) {

      this.isRegister = false;
      this.mensaje = 'Ingresa un correo válido.';

      return;
    }

    // Validar contraseñas

    if (data.pass !== data.confirmPass) {

      this.isRegister = false;
      this.mensaje = 'Las contraseñas no coinciden.';

      return;
    }

    // Guardar información del usuario

    sessionStorage.setItem('emailRegister', data.email);
    sessionStorage.setItem('fullNameRegister', data.fullName);
    sessionStorage.setItem('passRegister', data.pass);

    this.isRegister = true;
    this.mensaje = '¡Registro exitoso! Redirigiendo al inicio de sesión...';

    // Redireccionar al Login

    setTimeout(() => {

      this.router.navigate(['/auth/login']);

    }, 1500);

  }

}
