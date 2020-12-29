import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  public constructor(private readonly usuarioService: UsuarioService) { }

  public ngOnInit(): void {
    this.usuarioService.getUsers().subscribe((resp) => console.log(resp) )
  }

}
