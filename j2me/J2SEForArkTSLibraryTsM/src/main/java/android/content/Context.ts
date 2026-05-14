
//Logic will need to map from ets to ts only
import { Resources } from "../content/res/Resources.js";

/*actual*/ export class Context
{
  static POWER_SERVICE: undefined;
  static KEYGUARD_SERVICE: undefined;

  getSystemService(POWER_SERVICE: undefined): import("../os/PowerManager.js").PowerManager {
    throw new Error('Method not implemented.');
  }
 
    getResources(): Resources {
        throw new Error('Method not implemented.');
    }

}