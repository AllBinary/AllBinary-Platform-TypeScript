
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { SoftwareInformation } from "../../../../org/allbinary/logic/system/SoftwareInformation.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GameAdStateBase } from "./GameAdStateBase.js";

export interface GameAdStateFactoryInterface {
        

                //@Throws(Error::class)
            
    getInstanceForApp(softwareInformation: SoftwareInformation): GameAdStateBase

}
                
            

