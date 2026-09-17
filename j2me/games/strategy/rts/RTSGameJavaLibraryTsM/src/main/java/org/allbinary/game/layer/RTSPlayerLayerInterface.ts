
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

        


import { GameNotificationHudCompositeInterface } from '../../../../org/allbinary/game/ag/layer/hud/basic/notification/GameNotificationHudCompositeInterface.js';
//not GWT import const GameNotificationHudCompositeInterface

import { BuildMenuCompositeInterface } from '../../../../org/allbinary/game/input/BuildMenuCompositeInterface.js';
//not GWT import const BuildMenuCompositeInterface

import { RTSFormInput } from '../../../../org/allbinary/game/input/form/RTSFormInput.js';
//not GWT import const RTSFormInput

import { Capital } from '../../../../org/allbinary/game/layer/capital/Capital.js';
//not GWT import const Capital

import { DestroyedEventListenerInterface } from '../../../../org/allbinary/game/combat/destroy/event/DestroyedEventListenerInterface.js';
//not GWT import const DestroyedEventListenerInterface

import { PlayerGameInputCompositeInterface } from '../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js';
//not GWT import const PlayerGameInputCompositeInterface

import { TickableInterface } from '../../../../org/allbinary/game/tick/TickableInterface.js';
//not GWT import const TickableInterface

import { Sound } from '../../../../org/allbinary/media/audio/Sound.js';
//not GWT import const Sound

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
//not GWT import - same folder const PathFindingLayerInterface
import { PlayerOwnedRTSLayers } from './PlayerOwnedRTSLayers.js';
//not GWT import - same folder const PlayerOwnedRTSLayers

export interface RTSPlayerLayerInterface extends GameNotificationHudCompositeInterface, BuildMenuCompositeInterface, PlayerGameInputCompositeInterface, DestroyedEventListenerInterface, TickableInterface, PathFindingLayerInterface {
        

    getCapital(): Capital

    getRTSFormInput(): RTSFormInput

    add(sound: Sound)

    getPlayerOwnedRTSLayers(): PlayerOwnedRTSLayers

    implmentsArtificialIntelligenceCompositeInterface(): boolean

}



