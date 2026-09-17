
        /* Generated Code Do Not Modify */

        


import { GameInitializedListenerInterface } from '../../../org/allbinary/game/configuration/event/GameInitializedListenerInterface.js';
//not GWT import const GameInitializedListenerInterface
import { DemoGameMidletEventListener } from '../../../org/allbinary/game/midlet/DemoGameMidletEventListener.js';
//not GWT import const DemoGameMidletEventListener
import { MidletCompositeInterface } from '../../../org/allbinary/midlet/MidletCompositeInterface.js';
//not GWT import const MidletCompositeInterface
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmulatorViewInterface } from './EmulatorViewInterface.js';
//not GWT import - same folder const EmulatorViewInterface
export interface AllBinaryMidletViewInterface extends MidletCompositeInterface, EmulatorViewInterface, DemoGameMidletEventListener, GameInitializedListenerInterface {
        

    onResume()

    onPause()

    onDestroy()

}



