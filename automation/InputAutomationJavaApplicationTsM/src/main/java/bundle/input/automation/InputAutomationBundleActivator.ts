
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Thread } from '../../../java/lang/Thread.js';
        
import { BundleActivator } from '../../../org/osgi/framework/BundleActivator.js';
//not GWT import const BundleActivator = globalThis.org.osgi.framework.BundleActivator;

      
import { BundleContext } from '../../../org/osgi/framework/BundleContext.js';
//not GWT import const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
import { InputAutomationConfigurationModuleChangeListener } from '../../../bundle/input/automation/module/configuration/InputAutomationConfigurationModuleChangeListener.js';
//not GWT import const InputAutomationConfigurationModuleChangeListener = globalThis.bundle.input.automation.module.configuration.InputAutomationConfigurationModuleChangeListener;

      
import { InputAutomationRobotChangeListener } from '../../../bundle/input/automation/robot/InputAutomationRobotChangeListener.js';
//not GWT import const InputAutomationRobotChangeListener = globalThis.bundle.input.automation.robot.InputAutomationRobotChangeListener;

      
import { InputAutomationJFrame } from '../../../org/allbinary/input/automation/InputAutomationJFrame.js';
//not GWT import const InputAutomationJFrame = globalThis.org.allbinary.input.automation.InputAutomationJFrame;

      
import { InputAutomationModuleServiceConsumer } from '../../../org/allbinary/input/automation/module/osgi/InputAutomationModuleServiceConsumer.js';
//not GWT import const InputAutomationModuleServiceConsumer = globalThis.org.allbinary.input.automation.module.osgi.InputAutomationModuleServiceConsumer;

      
import { InputAutomationNewBundleRunnable } from '../../../org/allbinary/input/automation/module/osgi/InputAutomationNewBundleRunnable.js';
//not GWT import const InputAutomationNewBundleRunnable = globalThis.org.allbinary.input.automation.module.osgi.InputAutomationNewBundleRunnable;

      
import { InputAutomationServiceFactory } from '../../../org/allbinary/input/automation/osgi/InputAutomationServiceFactory.js';
//not GWT import const InputAutomationServiceFactory = globalThis.org.allbinary.input.automation.osgi.InputAutomationServiceFactory;

      
import { InputAutomationRobotServiceConsumer } from '../../../org/allbinary/input/automation/robot/osgi/InputAutomationRobotServiceConsumer.js';
//not GWT import const InputAutomationRobotServiceConsumer = globalThis.org.allbinary.input.automation.robot.osgi.InputAutomationRobotServiceConsumer;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { OSGIActivatorUtil } from '../../../org/allbinary/osgi/OSGIActivatorUtil.js';
//not GWT import const OSGIActivatorUtil = globalThis.org.allbinary.osgi.OSGIActivatorUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationBundleActivatorListenerInterface } from './InputAutomationBundleActivatorListenerInterface.js';
//not GWT import - same folder const InputAutomationBundleActivatorListenerInterface = globalThis.bundle.input.automation.InputAutomationBundleActivatorListenerInterface;

                
export class InputAutomationBundleActivator
            extends Object
         implements BundleActivator, InputAutomationBundleActivatorListenerInterface {
        

    private static moduleManagementThread: Thread;

    private static bundleContext: BundleContext;

    public static getBundleContext(): BundleContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputAutomationBundleActivator.bundleContext;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

                //@Throws(Exception.constructor)
            
    public start(bundleContext: BundleContext){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.START);
    
this.bundleContext= bundleContext;
    
InputAutomationBundleActivator.moduleManagementThread= new Thread(new InputAutomationNewBundleRunnable(this));
    
InputAutomationBundleActivator.moduleManagementThread!.start();
    
InputAutomationJFrame.create(this);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.START, e);
    



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public registerAsService(){
OSGIActivatorUtil.registerAsService(this.getBundleContext(), InputAutomationServiceFactory.getInstance(), InputAutomationConfigurationModuleChangeListener.constructor.toString()!);
    
OSGIActivatorUtil.registerAsService(this.getBundleContext(), InputAutomationServiceFactory.getInstance(), InputAutomationRobotChangeListener.constructor.toString()!);
    
}


                //@Throws(Exception.constructor)
            
    public useServices(){
new InputAutomationRobotServiceConsumer(this.getBundleContext()).process();
    
new InputAutomationModuleServiceConsumer(this.getBundleContext()).process();
    
}


                //@Throws(Exception.constructor)
            
    public stop(context: BundleContext){
this.logUtil!.putF(this.commonStrings!.START, this, "stop");
    

                        if(InputAutomationJFrame.getInstance() != 
                                    null
                                )
                        
                                    {
                                    InputAutomationJFrame.destroy();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Nothing to stop", this, "stop");
    

                        }
                            
}


}



