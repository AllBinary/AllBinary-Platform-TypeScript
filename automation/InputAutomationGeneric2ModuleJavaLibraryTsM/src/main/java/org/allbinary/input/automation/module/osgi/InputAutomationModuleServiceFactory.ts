
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
import { Bundle } from '../../../../../../org/osgi/framework/Bundle.js';
      //not GWT import const Bundle = globalThis.org.osgi.framework.Bundle;

      
import { ServiceFactory } from '../../../../../../org/osgi/framework/ServiceFactory.js';
      //not GWT import const ServiceFactory = globalThis.org.osgi.framework.ServiceFactory;

      
import { ServiceRegistration } from '../../../../../../org/osgi/framework/ServiceRegistration.js';
      //not GWT import const ServiceRegistration = globalThis.org.osgi.framework.ServiceRegistration;

      
import { InputAutomationModuleService } from '../../../../../../bundle/input/automation/module/InputAutomationModuleService.js';
      //not GWT import const InputAutomationModuleService = globalThis.bundle.input.automation.module.InputAutomationModuleService;

      
import { InputAutomationModuleFactoryInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
      //not GWT import const InputAutomationModuleFactoryInterface = globalThis.org.allbinary.input.automation.module.InputAutomationModuleFactoryInterface;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationModuleServiceFactory
            extends Object
         implements ServiceFactory {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private inputAutomationModuleInterfaceArray: InputAutomationModuleFactoryInterface[];

public constructor (){

            super();
        }


    public getService(bundle: Bundle, registration: ServiceRegistration): any{
this.logUtil!.putF(this.commonStrings!.START, this, "getService");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new InputAutomationModuleService(this.getInputAutomationModuleInterfaceArray());
    
}


    public ungetService(bundle: Bundle, registration: ServiceRegistration, service: any = {}){
}


    public getInputAutomationModuleInterfaceArray(): InputAutomationModuleFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputAutomationModuleInterfaceArray;
    
}


    public setInputAutomationModuleInterfaceArray(inputAutomationModuleInterfaceArray: InputAutomationModuleFactoryInterface[]){
this.inputAutomationModuleInterfaceArray= inputAutomationModuleInterfaceArray;
    
}


}



