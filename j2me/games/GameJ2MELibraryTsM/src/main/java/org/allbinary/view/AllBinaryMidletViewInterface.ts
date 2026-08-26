
        /* Generated Code Do Not Modify */
        



//not game specific package import { GameInitializedListenerInterface } from '../../../org/allbinary/game/configuration/event/GameInitializedListenerInterface.js';
      const GameInitializedListenerInterface = globalThis.org.allbinary.game.configuration.event.GameInitializedListenerInterface;

      
//not game specific package import { DemoGameMidletEventListener } from '../../../org/allbinary/game/midlet/DemoGameMidletEventListener.js';
      const DemoGameMidletEventListener = globalThis.org.allbinary.game.midlet.DemoGameMidletEventListener;

      
//not game specific package import { MidletCompositeInterface } from '../../../org/allbinary/midlet/MidletCompositeInterface.js';
      const MidletCompositeInterface = globalThis.org.allbinary.midlet.MidletCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmulatorViewInterface } from './EmulatorViewInterface.js';

export interface AllBinaryMidletViewInterface extends MidletCompositeInterface, EmulatorViewInterface, DemoGameMidletEventListener, GameInitializedListenerInterface {
        

    onResume()

    onPause()

    onDestroy()

}
                
            

