
        /* Generated Code Do Not Modify */
        



import { GameInitializedListenerInterface } from '../../../org/allbinary/game/configuration/event/GameInitializedListenerInterface.js';
      //not GWT import const GameInitializedListenerInterface = globalThis.org.allbinary.game.configuration.event.GameInitializedListenerInterface;

      
import { DemoGameMidletEventListener } from '../../../org/allbinary/game/midlet/DemoGameMidletEventListener.js';
      //not GWT import const DemoGameMidletEventListener = globalThis.org.allbinary.game.midlet.DemoGameMidletEventListener;

      
import { MidletCompositeInterface } from '../../../org/allbinary/midlet/MidletCompositeInterface.js';
      //not GWT import const MidletCompositeInterface = globalThis.org.allbinary.midlet.MidletCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmulatorViewInterface } from './EmulatorViewInterface.js';

export interface AllBinaryMidletViewInterface extends MidletCompositeInterface, EmulatorViewInterface, DemoGameMidletEventListener, GameInitializedListenerInterface {
        

    onResume()

    onPause()

    onDestroy()

}



