
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

        


import { BundleContext } from '../../../../../../org/osgi/framework/BundleContext.js';
      //not GWT import const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
import { InputAutomationModuleServiceInterface } from '../../../../../../bundle/input/automation/module/InputAutomationModuleServiceInterface.js';
      //not GWT import const InputAutomationModuleServiceInterface = globalThis.bundle.input.automation.module.InputAutomationModuleServiceInterface;

      
import { InputAutomationServiceConsumer } from '../../../../../../org/allbinary/osgi/service/InputAutomationServiceConsumer.js';
      //not GWT import const InputAutomationServiceConsumer = globalThis.org.allbinary.osgi.service.InputAutomationServiceConsumer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationModuleOSGIServiceVisitor } from './InputAutomationModuleOSGIServiceVisitor.js';
//not GWT import const InputAutomationModuleOSGIServiceVisitor = globalThis.org.allbinary.input.automation.module.osgi.InputAutomationModuleOSGIServiceVisitor;

                
export class InputAutomationModuleServiceConsumer extends InputAutomationServiceConsumer {
        

public constructor (bundleContext: BundleContext){
            super(InputAutomationModuleServiceInterface.constructor.toString()!, bundleContext, new InputAutomationModuleOSGIServiceVisitor());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}



