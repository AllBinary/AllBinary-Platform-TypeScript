
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
        
//not game specific package import { Bundle } from '../../../../../../org/osgi/framework/Bundle.js';
      const Bundle = globalThis.org.osgi.framework.Bundle;

      
//not game specific package import { ServiceFactory } from '../../../../../../org/osgi/framework/ServiceFactory.js';
      const ServiceFactory = globalThis.org.osgi.framework.ServiceFactory;

      
//not game specific package import { ServiceRegistration } from '../../../../../../org/osgi/framework/ServiceRegistration.js';
      const ServiceRegistration = globalThis.org.osgi.framework.ServiceRegistration;

      
//not game specific package import { InputAutomationModuleService } from '../../../../../../bundle/input/automation/module/InputAutomationModuleService.js';
      const InputAutomationModuleService = globalThis.bundle.input.automation.module.InputAutomationModuleService;

      
//not game specific package import { InputAutomationModuleFactoryInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
      const InputAutomationModuleFactoryInterface = globalThis.org.allbinary.input.automation.module.InputAutomationModuleFactoryInterface;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
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
                
            

