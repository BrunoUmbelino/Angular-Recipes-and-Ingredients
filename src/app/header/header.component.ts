import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() elementSelected = new EventEmitter<string>();

  onSelect(element: string) {
    this.elementSelected.emit(element);
  }

  constructor() {}

  ngOnInit(): void {}
}
