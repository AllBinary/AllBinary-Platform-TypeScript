
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
        



import { BundleContext } from "../../../../../../org/osgi/framework/BundleContext.js";

    
import { InputAutomationModuleServiceInterface } from "../../../../../../bundle/input/automation/module/InputAutomationModuleServiceInterface.js";

    
import { InputAutomationServiceConsumer } from "../../../../../../org/allbinary/osgi/service/InputAutomationServiceConsumer.js";

    

export class InputAutomationModuleServiceConsumer extends InputAutomationServiceConsumer {
        
public constructor (bundleContext: BundleContext)                        

                            : super(InputAutomationModuleServiceInterface::class.toString()!, bundleContext, new InputAutomationModuleOSGIServiceVisitor()){

            super();
            var bundleContext = bundleContext


                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

