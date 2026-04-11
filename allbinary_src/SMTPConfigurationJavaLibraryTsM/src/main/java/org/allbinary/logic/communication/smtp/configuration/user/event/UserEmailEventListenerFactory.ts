
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
        



import { UserInterface } from "../../../../../../../../org/allbinary/business/user/UserInterface.js";

    
import { UserEmailEventListenerInterface } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js";

    
import { AbeFactory } from "../../../../../../../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    

export class UserEmailEventListenerFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(abeClientInformation: AbeClientInformationInterface, userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface, userInterface: UserInterface): UserEmailEventListenerInterface{
    //var abeClientInformation = abeClientInformation
    //var userEmailEventConfigurationInterface = userEmailEventConfigurationInterface
    //var userInterface = userInterface

    var params: any[] = new Array(1);
        
        
;
    

    var classes: Function[] = new Array(1);
        
        
;
    
classes[0]= 
                                    //Otherwise - expression - AssignExpr - value - ClassExpr
;
    
params[0]= userInterface as Object;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbeFactory.getInstance()!.getInstance(abeClientInformation, userEmailEventConfigurationInterface!.getEventListenerClassPath(), classes, params);

                         as UserEmailEventListenerInterface;
    
}

private constructor (){

            super();
            }


}
                
            

