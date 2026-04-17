
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { User } from "../../../../../../../org/allbinary/business/user/modules/User.js";

    
import { WeblisketSessionInterface } from "../../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreAdminUser extends User {
        
public constructor ()                        

                            : super(){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (userHashMap: HashMap<any, any>)                        

                            : super(userHashMap){

            super();
            var userHashMap = userHashMap


                            //For kotlin this is before the body of the constructor.
                    
}


    public validateSession(weblisketSession: WeblisketSessionInterface){
var weblisketSession = weblisketSession
super.validateSession(weblisketSession);
    
this.updateSession(weblisketSession);
    
}


    public updateSession(weblisketSession: WeblisketSessionInterface){
var weblisketSession = weblisketSession
weblisketSession!.setStoreName(this.getPermissions());
    
}


}
                
            

