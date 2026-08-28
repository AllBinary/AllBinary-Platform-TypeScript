
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
        



//not game specific package import { BuildMenuCompositeInterface } from '../../../../org/allbinary/game/input/BuildMenuCompositeInterface.js';
      const BuildMenuCompositeInterface = globalThis.org.allbinary.game.input.BuildMenuCompositeInterface;

      
//not game specific package import { RTSFormInput } from '../../../../org/allbinary/game/input/form/RTSFormInput.js';
      const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;

      
//not game specific package import { Capital } from '../../../../org/allbinary/game/layer/capital/Capital.js';
      const Capital = globalThis.org.allbinary.game.layer.capital.Capital;

      
//not game specific package import { DestroyedEventListenerInterface } from '../../../../org/allbinary/game/combat/destroy/event/DestroyedEventListenerInterface.js';
      const DestroyedEventListenerInterface = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEventListenerInterface;

      
//not game specific package import { PlayerGameInputCompositeInterface } from '../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js';
      const PlayerGameInputCompositeInterface = globalThis.org.allbinary.game.input.PlayerGameInputCompositeInterface;

      
//not game specific package import { GameNotificationHudCompositeInterface } from '../../../../org/allbinary/game/layer/hud/basic/notification/GameNotificationHudCompositeInterface.js';
      const GameNotificationHudCompositeInterface = globalThis.org.allbinary.game.layer.hud.basic.notification.GameNotificationHudCompositeInterface;

      
//not game specific package import { TickableInterface } from '../../../../org/allbinary/game/tick/TickableInterface.js';
      const TickableInterface = globalThis.org?.allbinary?.game?.tick?.TickableInterface;

      
//not game specific package import { Sound } from '../../../../org/allbinary/media/audio/Sound.js';
      const Sound = globalThis.org.allbinary.media.audio.Sound;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
import { PlayerOwnedRTSLayers } from './PlayerOwnedRTSLayers.js';

export interface RTSPlayerLayerInterface extends GameNotificationHudCompositeInterface, BuildMenuCompositeInterface, PlayerGameInputCompositeInterface, DestroyedEventListenerInterface, TickableInterface, PathFindingLayerInterface {
        

    getCapital(): Capital

    getRTSFormInput(): RTSFormInput

    add(sound: Sound)

    getPlayerOwnedRTSLayers(): PlayerOwnedRTSLayers

    implmentsArtificialIntelligenceCompositeInterface(): boolean

}



