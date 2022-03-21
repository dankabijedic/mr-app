import { Component, Input, OnInit } from '@angular/core';
import { Finished } from '../finished.model';

@Component({
  selector: 'app-finished-element',
  templateUrl: './finished-element.component.html',
  styleUrls: ['./finished-element.component.scss'],
})
export class FinishedElementComponent implements OnInit {
  @Input() finished: Finished = { id: 'f3', name: 'Neki', rating: '7', comment: 'Dap', imageUrl: '' };

  constructor() { }

  ngOnInit() {}

}
