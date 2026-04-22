
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { TableMappingInterface } from "../../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UserEmailEventConfigurationInterface } from "./UserEmailEventConfigurationInterface.js";

import { UserEmailEventConfigurationData } from "./UserEmailEventConfigurationData.js";

export class UserEmailEventConfigurationMapping
            extends Object
         implements TableMappingInterface {
        

    private userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface
public constructor (userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface){

            super();
        var userEmailEventConfigurationInterface = userEmailEventConfigurationInterface
this.userEmailEventConfigurationInterface= userEmailEventConfigurationInterface;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(UserEmailEventConfigurationData.NAME, this.userEmailEventConfigurationInterface!.getName());
    
hashMap!.put(UserEmailEventConfigurationData.LISTENER_CLASSPATH, this.userEmailEventConfigurationInterface!.getEventListenerClassPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserEmailEventConfigurationData.NAME;
    
}


                //@Throws(Error::class)
            
    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        
;
    
vector.add(this.userEmailEventConfigurationInterface!.getName());
    
vector.add(this.userEmailEventConfigurationInterface!.getEventListenerClassPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}
                
            

