
//Logic will need to map from ets to ts only
import UIAbilityContext from '@ohos.app.ability.UIAbility';
import { Resources } from "../content/res/Resources.js";

/*actual*/ export class Context extends UIAbilityContext
{
  static POWER_SERVICE: undefined;
  static KEYGUARD_SERVICE: undefined;
  static INPUT_METHOD_SERVICE: undefined;

  getSystemService(POWER_SERVICE: undefined): import("../os/PowerManager.js").PowerManager {
    throw new Error('Method not implemented.');
  }

  getResources(): Resources {
    throw new Error('Method not implemented.');
  }

}