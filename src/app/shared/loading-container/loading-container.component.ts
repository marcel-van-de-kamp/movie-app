import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cw-loading-container',
  templateUrl: 'loading-container.component.html',
  styleUrls: ['loading-container.component.scss']
})
export class LoadingContainerComponent implements OnInit {
  @Input() loading: boolean;

  constructor() {

  }

  ngOnInit() {
  }
}
