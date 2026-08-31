
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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

        


import { GameType } from '../../../../org/allbinary/game/GameType.js';
      //not GWT import const GameType = globalThis.org.allbinary.game.GameType;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSPlayerLayerInterface } from './RTSPlayerLayerInterface.js';
//not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

                import { AdvancedPlayerOwnedRTSLayers } from './AdvancedPlayerOwnedRTSLayers.js';
//not GWT import const AdvancedPlayerOwnedRTSLayers = globalThis.org.allbinary.game.layer.AdvancedPlayerOwnedRTSLayers;

                
export interface AdvancedRTSPlayerLayerInterface extends RTSPlayerLayerInterface {
        

    getAdvancedPlayerOwnedRTSLayers(): AdvancedPlayerOwnedRTSLayers

    isLocalPlayer(): boolean

    getGameType(): GameType

    getDecalBasicColor(): BasicColor

}



