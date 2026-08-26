
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { InputAutomationGenericModuleServiceFactory } from '../../../../../org/allbinary/input/automation/module/generic/InputAutomationGenericModuleServiceFactory.js';
      const InputAutomationGenericModuleServiceFactory = globalThis.org.allbinary.input.automation.module.generic.InputAutomationGenericModuleServiceFactory;

      
//not game specific package import { InputAutomationModuleBundleActivator } from '../../../../../org/allbinary/input/automation/module/osgi/InputAutomationModuleBundleActivator.js';
      const InputAutomationModuleBundleActivator = globalThis.org.allbinary.input.automation.module.osgi.InputAutomationModuleBundleActivator;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationGenericModuleBundleActivator extends InputAutomationModuleBundleActivator {
        

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public init(){

    var inputAutomationGenericModuleServiceFactory: InputAutomationGenericModuleServiceFactory = InputAutomationGenericModuleServiceFactory.getInstance()!;;
    
this.setInputAutomationModuleInterface(inputAutomationGenericModuleServiceFactory!.getInputAutomationModuleInterfaceArray());
    
this.setServiceFactory(inputAutomationGenericModuleServiceFactory);
    
}


}
                
            

