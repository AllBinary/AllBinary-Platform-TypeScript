
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
        



            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { UserFactoryInterface } from '../../../../../../../../../org/allbinary/business/user/UserFactoryInterface.js';
      const UserFactoryInterface = globalThis.org.allbinary.business.user.UserFactoryInterface;

      
//not game specific package import { UserInterface } from '../../../../../../../../../org/allbinary/business/user/UserInterface.js';
      const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShipOrderStoreAdminUser } from './ShipOrderStoreAdminUser.js';

export class ShipOrderStoreAdminUserFactory
            extends Object
         implements UserFactoryInterface {
        

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(): UserInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ShipOrderStoreAdminUser();
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(hashMap: HashMap<any, any>): UserInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ShipOrderStoreAdminUser(hashMap);
    
}


}
                
            

