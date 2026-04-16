
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
        



import { GameType } from "../../../../org/allbinary/game/GameType.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    

export interface AdvancedRTSPlayerLayerInterface extends RTSPlayerLayerInterface {
        

    getAdvancedPlayerOwnedRTSLayers(): AdvancedPlayerOwnedRTSLayers

    isLocalPlayer(): boolean

    getGameType(): GameType

    getDecalBasicColor(): BasicColor

}
                
            

