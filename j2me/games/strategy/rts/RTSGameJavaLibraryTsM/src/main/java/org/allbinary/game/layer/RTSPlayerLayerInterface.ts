
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *   
                *  Created By: Travis Berthelot    
        */
        
        /* Generated Code Do Not Modify */
        



import { BuildMenuCompositeInterface } from "../../../../org/allbinary/game/input/BuildMenuCompositeInterface.js";

    
import { RTSFormInput } from "../../../../org/allbinary/game/input/form/RTSFormInput.js";

    
import { Capital } from "../../../../org/allbinary/game/layer/capital/Capital.js";

    
import { DestroyedEventListenerInterface } from "../../../../org/allbinary/game/combat/destroy/event/DestroyedEventListenerInterface.js";

    
import { PlayerGameInputCompositeInterface } from "../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js";

    
import { GameNotificationHudCompositeInterface } from "../../../../org/allbinary/game/layer/hud/basic/notification/GameNotificationHudCompositeInterface.js";

    
import { TickableInterface } from "../../../../org/allbinary/game/tick/TickableInterface.js";

    
import { Sound } from "../../../../org/allbinary/media/audio/Sound.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PathFindingLayerInterface } from "./PathFindingLayerInterface.js";

import { PlayerOwnedRTSLayers } from "./PlayerOwnedRTSLayers.js";

export interface RTSPlayerLayerInterface extends GameNotificationHudCompositeInterface, BuildMenuCompositeInterface, PlayerGameInputCompositeInterface, DestroyedEventListenerInterface, TickableInterface, PathFindingLayerInterface {
        

    getCapital(): Capital

    getRTSFormInput(): RTSFormInput

    add(sound: Sound)

    getPlayerOwnedRTSLayers(): PlayerOwnedRTSLayers

    implmentsArtificialIntelligenceCompositeInterface(): boolean

}
                
            

