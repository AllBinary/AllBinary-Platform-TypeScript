//Logic will need to map from ets to ts only
//Via @Component

import { Resources } from "../content/res/Resources";

/*actual*/ export class View
{
  static GONE: number = 0;
  static VISIBLE: number = 1;

  getHeight(): number {
    throw new Error('Method not implemented.');
  }
  getWidth(): number {
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
