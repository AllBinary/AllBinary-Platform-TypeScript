
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { Bundle } from '../../../../../org/osgi/framework/Bundle.js';
//not GWT import const Bundle = globalThis.org.osgi.framework.Bundle;

      
import { ServiceFactory } from '../../../../../org/osgi/framework/ServiceFactory.js';
//not GWT import const ServiceFactory = globalThis.org.osgi.framework.ServiceFactory;

      
import { ServiceRegistration } from '../../../../../org/osgi/framework/ServiceRegistration.js';
//not GWT import const ServiceRegistration = globalThis.org.osgi.framework.ServiceRegistration;

      
import { InputAutomationJFrame } from '../../../../../org/allbinary/input/automation/InputAutomationJFrame.js';
//not GWT import const InputAutomationJFrame = globalThis.org.allbinary.input.automation.InputAutomationJFrame;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationServiceFactory
            extends Object
         implements ServiceFactory {
        

    private static readonly inputAutomationServiceFactory: InputAutomationServiceFactory = new InputAutomationServiceFactory();

    public static getInstance(): InputAutomationServiceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputAutomationServiceFactory.inputAutomationServiceFactory;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

private constructor (){

            super();
        }


    public getService(bundle: Bundle, registration: ServiceRegistration): any{
this.logUtil!.putF(this.commonStrings!.START, this, "getService");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputAutomationJFrame.getInstance();;
    
}


    public ungetService(bundle: Bundle, registration: ServiceRegistration, service: any = {}){
}


}



