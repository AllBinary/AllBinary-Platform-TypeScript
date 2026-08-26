
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
        



//not game specific package import { BundleContext } from '../../../../../../org/osgi/framework/BundleContext.js';
      const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
//not game specific package import { InputAutomationModuleServiceInterface } from '../../../../../../bundle/input/automation/module/InputAutomationModuleServiceInterface.js';
      const InputAutomationModuleServiceInterface = globalThis.bundle.input.automation.module.InputAutomationModuleServiceInterface;

      
//not game specific package import { InputAutomationServiceConsumer } from '../../../../../../org/allbinary/osgi/service/InputAutomationServiceConsumer.js';
      const InputAutomationServiceConsumer = globalThis.org.allbinary.osgi.service.InputAutomationServiceConsumer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationModuleOSGIServiceVisitor } from './InputAutomationModuleOSGIServiceVisitor.js';

export class InputAutomationModuleServiceConsumer extends InputAutomationServiceConsumer {
        

public constructor (bundleContext: BundleContext){
            super(InputAutomationModuleServiceInterface.constructor.toString()!, bundleContext, new InputAutomationModuleOSGIServiceVisitor());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

