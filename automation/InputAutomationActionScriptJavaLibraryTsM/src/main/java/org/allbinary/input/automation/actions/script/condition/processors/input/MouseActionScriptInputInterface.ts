
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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
        



import { awt } from "../../../../../../../../../java/awt.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ProfileActionScriptInputInterface } from "./ProfileActionScriptInputInterface.js";

import { Point } from "./Point.js";

export interface MouseActionScriptInputInterface extends ProfileActionScriptInputInterface {
        

    setPoint(point: Point)

    getPoint(): Point

    getButtonClicks(): number

    setButtonClicks(buttons: number)

    log()

}
                
            

