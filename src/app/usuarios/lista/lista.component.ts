import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario;
  public constructor(private readonly usuarioService: UsuarioService) { }

  public ngOnInit(): void {
    this.usuarioService.getUsers().subscribe((resp) => this.usuarios = resp );
  }

}
