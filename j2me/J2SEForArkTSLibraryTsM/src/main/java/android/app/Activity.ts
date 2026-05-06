import UIAbility from '@ohos.app.ability.UIAbility';
import { ARunnable } from '../../org/allbinary/thread/ARunnable';

/*actual*/ export class Activity
            extends UIAbility
{
    
  runOnUiThread(dismissTitleProgressBarRunnable: ARunnable) {
    throw new Error('Method not implemented.');
  }

}

