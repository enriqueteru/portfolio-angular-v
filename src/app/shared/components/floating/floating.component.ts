import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.scss'],
})
export class FloatingComponent {
  Ypos: number = 0;
  styles: any;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    //In chrome and some browser scroll is given to body tag

    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos !== max - 10) {
      this.Ypos = pos - document.documentElement.offsetHeight;
      return (this.styles = {
        transform: 'translateY(' + -this.Ypos / 2 + 'px)',
      });
    }

    return 0;
  }
}
