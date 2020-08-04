import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.scss']
})
export class CardCursosComponent implements OnInit {
  @Input()
  descricao: any;
  @Input()
  id: any;

  constructor() { }

  ngOnInit(): void {
  }

}
