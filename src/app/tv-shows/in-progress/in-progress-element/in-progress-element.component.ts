import { Component, Input, OnInit } from '@angular/core';
import { InProgress } from '../in-progress.model';

@Component({
  selector: 'app-in-progress-element',
  templateUrl: './in-progress-element.component.html',
  styleUrls: ['./in-progress-element.component.scss'],
})
export class InProgressElementComponent implements OnInit {
  @Input() inprogress: InProgress = { id: 'q3', name: 'Neki', imageUrl: '' };

  constructor() { }

  ngOnInit() {}

 

}
