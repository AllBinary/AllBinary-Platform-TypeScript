
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
        



import { NamedInterface } from "../../../../../org/allbinary/layer/NamedInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface DamageableInterface extends NamedInterface {
        

                //@Throws(Error::class)
            
    public damage(damage: number, damageType: number)

                //@Throws(Error::class)
            
    public getDamage(damageType: number): number

}
                
            

