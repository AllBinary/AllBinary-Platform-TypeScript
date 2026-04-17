
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
        



import { Serializable } from "../../../../java/io/Serializable.js";

    
import { HashMap } from "../../../../java/util/HashMap.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UserInterface } from "./UserInterface.js";

export interface UserFactoryInterface extends Serializable {
        

                //@Throws(Error::class)
            
    public getInstance(hashMap: HashMap<any, any>): UserInterface

}
                
            

