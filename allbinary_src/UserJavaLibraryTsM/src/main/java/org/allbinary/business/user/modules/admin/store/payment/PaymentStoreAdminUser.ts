
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
        



            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { User } from '../../../../../../../../org/allbinary/business/user/modules/User.js';
      const User = globalThis.org.allbinary.business.user.modules.User;

      
//not game specific package import { WeblisketSessionInterface } from '../../../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js';
      const WeblisketSessionInterface = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSessionInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentStoreAdminUser extends User {
        

public constructor (){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (userHashMap: HashMap<any, any>){
            super(userHashMap);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public validateSession(weblisketSession: WeblisketSessionInterface){
super.validateSession(weblisketSession);
    
this.updateSession(weblisketSession);
    
}


    public updateSession(weblisketSession: WeblisketSessionInterface){
weblisketSession!.setStoreName(this.getPermissions());
    
}


}



