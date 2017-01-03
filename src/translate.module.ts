import { NgModule, ModuleWithProviders, Optional, SkipSelf } from "@angular/core";
import { TranslateService } from "./translate.service";

@NgModule({
  providers: [
    TranslateService
  ],
  exports: [
    TranslateService
  ]
})
class TranslateModule 
{
  constructor(@Optional() @SkipSelf() parentModule: TranslateModule)
  {
    if (parentModule) {
      throw new Error("Ooops");
    }
  }

  static forRoot(){
    return {
      NgModule: TranslateModule,
      providers: [
        { provide: TranslateService, useValue: new TranslateService() }
      ]
    }
  }
}

export {
  TranslateModule,
  TranslateService
}
