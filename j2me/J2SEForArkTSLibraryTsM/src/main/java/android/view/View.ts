//Logic will need to map from ets to ts only
//Via @Component

import { Runnable } from "../../java/lang/Runnable";
import { Resources } from "../content/res/Resources";
import { IBinder } from "../os/IBinder";

/*actual*/ export class View
{
  static GONE: number = 0;
  static VISIBLE: number = 1;
  static SYSTEM_UI_FLAG_IMMERSIVE_STICKY: any;
  static SYSTEM_UI_FLAG_HIDE_NAVIGATION: any;
  static SYSTEM_UI_FLAG_FULLSCREEN: number;

  setScaleX(ratio: number) {
    throw new Error('Method not implemented.');
  }

  setScaleY(ratio: number) {
    throw new Error('Method not implemented.');
  }

  getHeight(): number {
    throw new Error('Method not implemented.');
  }
  getWidth(): number {
    throw new Error('Method not implemented.');
  }

  getId(): number {
    throw new Error('Method not implemented.');
  }

  post(arg0: Runnable) {
    throw new Error('Method not implemented.');
  }

  getWindowToken(): IBinder {
    throw new Error('Method not implemented.');
  }

  setSystemUiVisibility(visibility: number) {
    throw new Error('Method not implemented.');
  }

  getResources(): Resources {
    throw new Error('Method not implemented.');
  }

  onWindowFocusChanged(hasFocus: boolean) {
    throw new Error('Method not implemented.');
  }
  requestFocus() {
    throw new Error('Method not implemented.');
  }
  setVisibility(VISIBLE: number) {
    throw new Error('Method not implemented.');
  }

  postInvalidate() {
    throw new Error('Method not implemented.');
  }
  invalidate() {
    throw new Error('Method not implemented.');
  }

  static OnFocusChangeListener = class {
  };

}
