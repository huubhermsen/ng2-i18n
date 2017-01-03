import { Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "./translate.service";

@Pipe({
  name: "i18n"
})
class TranslatePipe implements PipeTransform
{
  constructor(private _translate: TranslateService) {}

  public transform(value: any)
  {

  }
}

export {
  TranslatePipe
}
