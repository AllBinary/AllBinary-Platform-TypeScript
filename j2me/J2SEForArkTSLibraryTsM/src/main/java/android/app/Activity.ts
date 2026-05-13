import UIAbility from '@ohos.app.ability.UIAbility';
import { WindowManager } from '@kit.SpeechKit';
import { Runnable } from '../../java/lang/Runnable';
import { ProgressBar } from "../widget/ProgressBar";
import { Window } from "../view/Window.js";

/*actual*/ export class Activity
            extends UIAbility
{
  requestWindowFeature(FEATURE_PROGRESS: undefined) {
    throw new Error('Method not implemented.');
  }

  setContentView(progressLayout: number) {
    throw new Error('Method not implemented.');
  }

  getWindow(): Window {
    throw new Error('Method not implemented.');
  }

  getWindowManager(): WindowManager {
    throw new Error('Method not implemented.');
  }

  setProgressBarVisibility(arg0: boolean) {
    throw new Error('Method not implemented.');
  }
  setProgress(arg0: number) {
    throw new Error('Method not implemented.');
  }
  setProgressBarIndeterminate(indeterminate: boolean) {
    throw new Error('Method not implemented.');
  }
        
  findViewById(arg0: number): ProgressBar {
    throw new Error('Method not implemented.');
  }
    
  runOnUiThread(dismissTitleProgressBarRunnable: Runnable) {
    throw new Error('Method not implemented.');
  }

}

