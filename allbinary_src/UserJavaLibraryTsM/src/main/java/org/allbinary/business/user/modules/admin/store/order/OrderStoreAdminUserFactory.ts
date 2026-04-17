
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

    
import { UserFactoryInterface } from "../../../../../../../../org/allbinary/business/user/UserFactoryInterface.js";

    
import { UserInterface } from "../../../../../../../../org/allbinary/business/user/UserInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OrderStoreAdminUserFactory
            extends Object
         implements UserFactoryInterface {
        
public constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(): UserInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OrderStoreAdminUser();
    
}


                //@Throws(Error::class)
            
    public getInstance(hashMap: HashMap<any, any>): UserInterface{
var hashMap = hashMap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OrderStoreAdminUser(hashMap);
    
}


}
                
            

