
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ProfileActionScriptOutputInterface } from "./ProfileActionScriptOutputInterface.js";

import { ImageTypes } from "./ImageTypes.js";

export interface ImageActionScriptOutputInterface extends ProfileActionScriptOutputInterface {
        

    getImageTypes(): ImageTypes

    setImageTypes(imageTypes: ImageTypes)

    isSaved(): boolean

    setSaved(saved: boolean)

    isDisplay(): boolean

    setDisplay(display: boolean)

    log()

}
                
            

