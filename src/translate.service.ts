import { Injectable, Optional } from "@angular/core";
import { Observable } from "rxjs/Observable";

const MessageFormat = require("messageformat");

class TranslateServiceConfig
{
  locale: string;
  hot: boolean = false;
}

@Injectable()
class TranslateService
{
  private _locale: string;
  private _hot: boolean;
  
  constructor(@Optional() config: TranslateServiceConfig)
  {
    if (config) this._setConfig(config);
  }

  private _setConfig(config: TranslateServiceConfig)
  {
    this._locale = config.locale;
    this._hot = config.hot;
  }
}

export {
  TranslateService
}
