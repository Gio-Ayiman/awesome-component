import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit {

  @Input() color = 'green'

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ){}

  ngAfterViewInit(): void {
    this.setBackgroundColor(this.color)
  }

  setBackgroundColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setBackgroundColor('blue');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBackgroundColor(this.color);
  }


}
