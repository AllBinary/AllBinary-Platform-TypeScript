
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { UserFactoryInterface } from '../../../../../../../../org/allbinary/business/user/UserFactoryInterface.js';
//not GWT import const UserFactoryInterface

import { UserInterface } from '../../../../../../../../org/allbinary/business/user/UserInterface.js';
//not GWT import const UserInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OrderStoreAdminUser } from './OrderStoreAdminUser.js';
//not GWT import - same folder const OrderStoreAdminUser

export class OrderStoreAdminUserFactory
            extends Object
         implements UserFactoryInterface {
        

public constructor (){

            super();
        }

getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(Exception.constructor)
            
    public getInstance$overload1(): UserInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OrderStoreAdminUser();
    
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(hashMap: HashMap<any, any>): UserInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OrderStoreAdminUser(hashMap);
    
}


}

