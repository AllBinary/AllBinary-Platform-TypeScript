
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
        
//not game specific package import { BundleActivator } from '../../../org/osgi/framework/BundleActivator.js';
      const BundleActivator = globalThis.org.osgi.framework.BundleActivator;

      
//not game specific package import { BundleContext } from '../../../org/osgi/framework/BundleContext.js';
      const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
//not game specific package import { InputAutomationConfigurationModuleChangeListener } from '../../../bundle/input/automation/module/configuration/InputAutomationConfigurationModuleChangeListener.js';
      const InputAutomationConfigurationModuleChangeListener = globalThis.bundle.input.automation.module.configuration.InputAutomationConfigurationModuleChangeListener;

      
//not game specific package import { InputAutomationRobotChangeListener } from '../../../bundle/input/automation/robot/InputAutomationRobotChangeListener.js';
      const InputAutomationRobotChangeListener = globalThis.bundle.input.automation.robot.InputAutomationRobotChangeListener;

      
//not game specific package import { InputAutomationJFrame } from '../../../org/allbinary/input/automation/InputAutomationJFrame.js';
      const InputAutomationJFrame = globalThis.org.allbinary.input.automation.InputAutomationJFrame;

      
//not game specific package import { InputAutomationModuleServiceConsumer } from '../../../org/allbinary/input/automation/module/osgi/InputAutomationModuleServiceConsumer.js';
      const InputAutomationModuleServiceConsumer = globalThis.org.allbinary.input.automation.module.osgi.InputAutomationModuleServiceConsumer;

      
//not game specific package import { InputAutomationNewBundleRunnable } from '../../../org/allbinary/input/automation/module/osgi/InputAutomationNewBundleRunnable.js';
      const InputAutomationNewBundleRunnable = globalThis.org.allbinary.input.automation.module.osgi.InputAutomationNewBundleRunnable;

      
//not game specific package import { InputAutomationServiceFactory } from '../../../org/allbinary/input/automation/osgi/InputAutomationServiceFactory.js';
      const InputAutomationServiceFactory = globalThis.org.allbinary.input.automation.osgi.InputAutomationServiceFactory;

      
//not game specific package import { InputAutomationRobotServiceConsumer } from '../../../org/allbinary/input/automation/robot/osgi/InputAutomationRobotServiceConsumer.js';
      const InputAutomationRobotServiceConsumer = globalThis.org.allbinary.input.automation.robot.osgi.InputAutomationRobotServiceConsumer;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { OSGIActivatorUtil } from '../../../org/allbinary/osgi/OSGIActivatorUtil.js';
      const OSGIActivatorUtil = globalThis.org.allbinary.osgi.OSGIActivatorUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationBundleActivatorListenerInterface } from './InputAutomationBundleActivatorListenerInterface.js';

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



