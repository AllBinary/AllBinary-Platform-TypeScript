
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

      
import { InputAutomationRobotServiceInterface } from '../../../../../../bundle/input/automation/robot/InputAutomationRobotServiceInterface.js';
      //not GWT import const InputAutomationRobotServiceInterface = globalThis.bundle.input.automation.robot.InputAutomationRobotServiceInterface;

      
import { InputAutomationServiceConsumer } from '../../../../../../org/allbinary/osgi/service/InputAutomationServiceConsumer.js';
      //not GWT import const InputAutomationServiceConsumer = globalThis.org.allbinary.osgi.service.InputAutomationServiceConsumer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationRobotOSGIServiceVisitor } from './InputAutomationRobotOSGIServiceVisitor.js';
//not GWT import const  = globalThis.org.allbinary.input.automation.robot.osgi.InputAutomationRobotOSGIServiceVisitor;

                
export class InputAutomationRobotServiceConsumer extends InputAutomationServiceConsumer {
        

public constructor (bundleContext: BundleContext){
            super(InputAutomationRobotServiceInterface.constructor.toString()!, bundleContext, new InputAutomationRobotOSGIServiceVisitor());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}



