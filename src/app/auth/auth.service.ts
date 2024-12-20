import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(usuario: string, password: string) {
    if(usuario == 'SV73088096' && password == '15051993') {
      sessionStorage.setItem('login', 'true');
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }

  logout() {
    sessionStorage.clear();
  }

  isLogin(): boolean {
    return !!sessionStorage.getItem('login');
  }
}
