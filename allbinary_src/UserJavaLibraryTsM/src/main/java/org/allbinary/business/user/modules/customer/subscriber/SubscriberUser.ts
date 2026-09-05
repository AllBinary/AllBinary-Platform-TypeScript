
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { User } from '../../../../../../../org/allbinary/business/user/modules/User.js';
//not GWT import const User = globalThis.org.allbinary.business.user.modules.User;

      
import { Subscription } from '../../../../../../../org/allbinary/business/user/subscription/Subscription.js';
//not GWT import const Subscription = globalThis.org.allbinary.business.user.subscription.Subscription;

      
import { WeblisketSessionInterface } from '../../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js';
//not GWT import const WeblisketSessionInterface = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSessionInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SubscriberUser extends User {
        

    private subscription: Subscription;

public constructor (){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.subscription= new Subscription();
    
}


public constructor (userHashMap: HashMap<any, any>){
            super(userHashMap);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.subscription= new Subscription();
    
}


    public validateSession(weblisketSession: WeblisketSessionInterface){
super.validateSession(weblisketSession);
    
this.updateSession(weblisketSession);
    
}


    public updateSession(weblisketSession: WeblisketSessionInterface){
weblisketSession!.setStoreName(this.getPermissions());
    
}


    public isSessionValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.subscription.isSubscribed();;
    
}


}



