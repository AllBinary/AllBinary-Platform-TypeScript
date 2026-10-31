
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
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { User } from '../../../../../../../../org/allbinary/business/user/modules/User.js';
//not GWT import const User

import { WeblisketSessionInterface } from '../../../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js';
//not GWT import const WeblisketSessionInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomerStoreAdminUser extends User {
        

    public constructor(...args: any[]) {
        if(args.length === 0) {
            super();
            this.constructor$0();
            
        }
        else if(args.length === 1) {
            const userHashMap = args[0];
            super(userHashMap);
            this.constructor$1(userHashMap);
            
        }
        
    }
    
    private constructor$0(): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$1(userHashMap: HashMap<any, any>): void {
        

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

