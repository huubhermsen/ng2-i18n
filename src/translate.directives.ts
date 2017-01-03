import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[i18n]"
})
class TranslateDirective
{
  private _nativeElement: HTMLElement;

  constructor(private _element: ElementRef)
  {
    this._nativeElement = this._getNativeElement();
  }

  private _getNativeElement()
  {
    return this._element.nativeElement;
  }
}

export {
  TranslateDirective
}
