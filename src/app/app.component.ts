import { Component, HostListener, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sticky-div-app';

  public stickyDivOffset = 0;
  public stickyDivWidth = 0;
  public isSticky = false;
  
  @ViewChild('stickyDiv')
  private stickyDiv: ElementRef;


  @HostListener("window: scroll")
  onWindowScroll() {
    this.toggleStickyDiv();
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.stickyDivOffset = this.stickyDiv.nativeElement.offsetTop;
    this.stickyDivWidth = this.stickyDiv.nativeElement.offsetWidth;
    console.log(this.stickyDivOffset);
    console.log(this.stickyDiv);
  }

  private toggleStickyDiv() {
    if (this.stickyDivOffset - window.scrollY <= 20) {
      this.isSticky = true;
      // this.stickyDiv.nativeElement.style
    } else {
      this.isSticky = false;
    }
  }
}
