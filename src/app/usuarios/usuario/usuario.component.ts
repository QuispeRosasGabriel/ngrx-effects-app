import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  public constructor(private readonly router: ActivatedRoute) { }

  public ngOnInit(): void {
    this.router.params.subscribe(({id}) => console.log(id))
  }

}
