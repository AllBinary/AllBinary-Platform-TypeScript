
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { WeblisketSessionInterface } from "../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformInfoInterface } from "./TransformInfoInterface.js";

export interface TransformInfoHttpInterface extends TransformInfoInterface {
        

    public getWeblisketSession(): WeblisketSessionInterface

    public getPageContext(): PageContext

    public getPropertiesHashMap(): HashMap<any, any>

}
                
            

