
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
        



import { BundleActivator } from "../../../org/osgi/framework/BundleActivator.js";

    
import { BundleContext } from "../../../org/osgi/framework/BundleContext.js";

    
import { InputAutomationConfigurationModuleChangeListener } from "../../../bundle/input/automation/module/configuration/InputAutomationConfigurationModuleChangeListener.js";

    
import { InputAutomationRobotChangeListener } from "../../../bundle/input/automation/robot/InputAutomationRobotChangeListener.js";

    
import { InputAutomationJFrame } from "../../../org/allbinary/input/automation/InputAutomationJFrame.js";

    
import { InputAutomationModuleServiceConsumer } from "../../../org/allbinary/input/automation/module/osgi/InputAutomationModuleServiceConsumer.js";

    
import { InputAutomationNewBundleRunnable } from "../../../org/allbinary/input/automation/module/osgi/InputAutomationNewBundleRunnable.js";

    
import { InputAutomationServiceFactory } from "../../../org/allbinary/input/automation/osgi/InputAutomationServiceFactory.js";

    
import { InputAutomationRobotServiceConsumer } from "../../../org/allbinary/input/automation/robot/osgi/InputAutomationRobotServiceConsumer.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { OSGIActivatorUtil } from "../../../org/allbinary/osgi/OSGIActivatorUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationBundleActivator
            extends Object
         implements BundleActivator, InputAutomationBundleActivatorListenerInterface {
        

    private moduleManagementThread: Thread

    private bundleContext: BundleContext

    public static getBundleContext(): BundleContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bundleContext;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public start(bundleContext: BundleContext){
    //var bundleContext = bundleContext

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.START);
    
this.bundleContext= bundleContext;
    
moduleManagementThread= new Thread(new InputAutomationNewBundleRunnable(this));
    
moduleManagementThread!.start();
    
InputAutomationJFrame.create(this);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.START, e);
    



                            throw e
}

}


                //@Throws(Error::class)
            
    public registerAsService(){
OSGIActivatorUtil.registerAsService(this.getBundleContext(), InputAutomationServiceFactory.getInstance(), InputAutomationConfigurationModuleChangeListener::class.toString()!);
    
OSGIActivatorUtil.registerAsService(this.getBundleContext(), InputAutomationServiceFactory.getInstance(), InputAutomationRobotChangeListener::class.toString()!);
    
}


                //@Throws(Error::class)
            
    public useServices(){
new InputAutomationRobotServiceConsumer(this.getBundleContext()).
                            process();
    
new InputAutomationModuleServiceConsumer(this.getBundleContext()).
                            process();
    
}


                //@Throws(Error::class)
            
    public stop(context: BundleContext){
    //var context = context
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
                
            

