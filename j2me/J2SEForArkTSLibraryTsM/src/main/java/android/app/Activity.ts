import UIAbility from '@ohos.app.ability.UIAbility';
import { Runnable } from '../../java/lang/Runnable';
import { ProgressBar } from "../widget/ProgressBar";
import { Window } from "../view/Window.js";
import { AbilityConstant, Want } from '@kit.AbilityKit';
import { Intent } from '../content/Intent';
import { Resources } from '../content/res/Resources';
import { PackageManager } from '../content/pm/PackageManager';
import { Bundle } from '../os/Bundle';
import { WindowManager } from '../view/WindowManager';


/**
 * Activity - ArkTs implementation that maps Android Activity concepts to OpenHarmony UIAbility
 *
 * Android Lifecycle → OpenHarmony Lifecycle Mapping:
 * - onCreate() → onCreate()
 * - onStart() → onWindowStageCreate()
 * - onResume() → onForeground()
 * - onPause() → onBackground()
 * - onStop() → onWindowStageDestroy()
 * - onDestroy() → onDestroy()
 */
/*actual*/ export class Activity
  extends UIAbility
{
  static readonly RESULT_CANCELED: number = 0;

  protected intent: Want;

  getSystemService(INPUT_METHOD_SERVICE: undefined): import("../view/inputmethod/InputMethodManager").InputMethodManager {
    throw new Error('Method not implemented.');
  }

  onSaveInstanceState(outState: Bundle) {
    throw new Error('Method not implemented.');
  }

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    //hilog.info(0x0000, Activity.TAG, '%{public}s', 'Activity.onCreate()');
    this.intent = want;
    //this.onActivityCreate(want);
  }

  /**
   * Maps to Android Activity.onStart()
   * Called when the ability becomes visible to the user
   */
  onWindowStageCreate(windowStage: any): void {
    //hilog.info(0x0000, Activity.TAG, '%{public}s', 'Activity.onStart()');
    //this.onActivityStart();
    //this.setMainPage(windowStage);
  }

  /**
   * Maps to Android Activity.onResume()
   * Called when the ability gains focus and is ready to interact with user
   */
  onForeground(): void {
    //hilog.info(0x0000, Activity.TAG, '%{public}s', 'Activity.onResume()');
    //this.onActivityResume();
  }

  /**
   * Maps to Android Activity.onPause()
   * Called when the ability loses focus but is still partially visible
   */
  onBackground(): void {
    //hilog.info(0x0000, Activity.TAG, '%{public}s', 'Activity.onPause()');
    //this.onActivityPause();
  }

  /**
   * Maps to Android Activity.onStop()
   * Called when the ability is no longer visible
   */
  onWindowStageDestroy(): void {
    //hilog.info(0x0000, Activity.TAG, '%{public}s', 'Activity.onStop()');
    //this.onActivityStop();
  }

  /**
   * Maps to Android Activity.onDestroy()
   * Called when the ability is being destroyed
   */
  onDestroy(): void {
    //hilog.info(0x0000, Activity.TAG, '%{public}s', 'Activity.onDestroy()');
    //this.onActivityDestroy();
  }

  startActivity(mail: Intent) {
    throw new Error('Method not implemented.');
  }

  onStart() {
    throw new Error('Method not implemented.');
  }

  onStop() {
    throw new Error('Method not implemented.');
  }

  setIntent(intent: Intent) {
    throw new Error('Method not implemented.');
  }

  onPause() {
    throw new Error('Method not implemented.');
  }
  onResume() {
    throw new Error('Method not implemented.');
  }

  getPackageManager(): PackageManager {
    throw new Error('Method not implemented.');
  }

  getResources(): Resources {
    throw new Error('Method not implemented.');
  }

  getIntent(): Intent {
    throw new Error('Method not implemented.');
  }

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

  setResult(result: number) {
    throw new Error('Method not implemented.');
  }

  finish() {
    throw new Error('Method not implemented.');
  }

}

