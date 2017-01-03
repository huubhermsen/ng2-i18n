import { NgModule, ModuleWithProviders, Optional, SkipSelf } from "@angular/core";
import { TranslateServiceConfig, TranslateService } from "./translate.service";

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

  static forRoot(config: TranslateServiceConfig){
    return {
      NgModule: TranslateModule,
      providers: [
        { provide: TranslateServiceConfig, useValue: config }
      ]
    }
  }
}

export {
  TranslateModule,
  TranslateService
}
