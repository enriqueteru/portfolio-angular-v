import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroller-gal',
  templateUrl: './scroller-gal.component.html',
  styleUrls: ['./scroller-gal.component.scss'],
})
export class ScrollerGalComponent {
  @Input() data: any;
}
