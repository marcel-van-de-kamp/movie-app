import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'MOVIES!';

  constructor() { }

  ngOnInit(): void {

  }
}
