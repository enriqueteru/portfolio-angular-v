import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss'],
})
export class MarqueeComponent {
  @Input() marqueeText: string =
    'Creamos aplicaciones y páginas web impresionantes';
}
