
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
        
            import { Class } from '../../../../../../../../java/lang/Class.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { UserInterface } from '../../../../../../../../org/allbinary/business/user/UserInterface.js';
      const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
//not game specific package import { UserEmailEventListenerInterface } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js';
      const UserEmailEventListenerInterface = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventListenerInterface;

      
//not game specific package import { AbeFactory } from '../../../../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
      const AbeFactory = globalThis.org.allbinary.logic.system.loader.AbeFactory;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEmailEventConfigurationInterface } from './UserEmailEventConfigurationInterface.js';

export class UserEmailEventListenerFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(abeClientInformation: AbeClientInformationInterface, userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface, userInterface: UserInterface): UserEmailEventListenerInterface{

    var params: any[] = new Array(1);;
    

    var classes: Function[] = new Array(1);;
    
classes[0]= 
                                    //Otherwise - expression - AssignExpr - value - ClassExpr
;
    
params[0]= userInterface;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbeFactory.getInstance()!.getInstance(abeClientInformation, userEmailEventConfigurationInterface!.getEventListenerClassPath(), classes, params) as UserEmailEventListenerInterface;
    
}


private constructor (){

            super();
        }


}
                
            

