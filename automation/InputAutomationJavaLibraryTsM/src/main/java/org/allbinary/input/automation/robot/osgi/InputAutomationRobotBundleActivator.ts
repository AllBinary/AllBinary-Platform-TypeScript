
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
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
import { BundleActivator } from '../../../../../../org/osgi/framework/BundleActivator.js';
      //not GWT import const BundleActivator = globalThis.org.osgi.framework.BundleActivator;

      
import { BundleContext } from '../../../../../../org/osgi/framework/BundleContext.js';
      //not GWT import const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
import { ServiceFactory } from '../../../../../../org/osgi/framework/ServiceFactory.js';
      //not GWT import const ServiceFactory = globalThis.org.osgi.framework.ServiceFactory;

      
import { ServiceReference } from '../../../../../../org/osgi/framework/ServiceReference.js';
      //not GWT import const ServiceReference = globalThis.org.osgi.framework.ServiceReference;

      
import { InputAutomationRobotChangeListener } from '../../../../../../bundle/input/automation/robot/InputAutomationRobotChangeListener.js';
      //not GWT import const InputAutomationRobotChangeListener = globalThis.bundle.input.automation.robot.InputAutomationRobotChangeListener;

      
import { InputAutomationRobotServiceInterface } from '../../../../../../bundle/input/automation/robot/InputAutomationRobotServiceInterface.js';
      //not GWT import const InputAutomationRobotServiceInterface = globalThis.bundle.input.automation.robot.InputAutomationRobotServiceInterface;

      
import { InputRobotInterface } from '../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
      //not GWT import const InputRobotInterface = globalThis.org.allbinary.input.automation.robot.InputRobotInterface;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { OSGIActivatorUtil } from '../../../../../../org/allbinary/osgi/OSGIActivatorUtil.js';
      //not GWT import const OSGIActivatorUtil = globalThis.org.allbinary.osgi.OSGIActivatorUtil;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationRobotUtil } from './InputAutomationRobotUtil.js';
//not GWT import const InputAutomationRobotUtil = globalThis.org.allbinary.input.automation.robot.osgi.InputAutomationRobotUtil;

                import { InputAutomationRobotChangeEvent } from './InputAutomationRobotChangeEvent.js';
//not GWT import const InputAutomationRobotChangeEvent = globalThis.org.allbinary.input.automation.robot.osgi.InputAutomationRobotChangeEvent;

                
export class InputAutomationRobotBundleActivator
            extends Object
         implements BundleActivator {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private inputRobotInterface: InputRobotInterface[];

    private serviceFactory: ServiceFactory;

public constructor (){

            super();
        this.init();
    
}


                //@Throws(Exception.constructor)
            
    public init(){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public registerAsService(bundleContext: BundleContext){
OSGIActivatorUtil.registerAsService(bundleContext, getServiceFactory(), InputAutomationRobotServiceInterface.constructor.toString()!);
    
}


                //@Throws(Exception.constructor)
            
    getInputAutomationRobotChangeListener(context: BundleContext): InputAutomationRobotChangeListener{

    var serviceReference: ServiceReference = context.getServiceReference(InputAutomationRobotChangeListener.constructor.toString()!)!;;
    

                        if(serviceReference != 
                                    null
                                )
                        
                                    {
                                    
    var inputAutomationRobotChangeListener: InputAutomationRobotChangeListener = context.getService(serviceReference) as InputAutomationRobotChangeListener;;
    

                        if(inputAutomationRobotChangeListener == 
                                    null
                                )
                        
                                    throw new Exception("No Service For ServiceReference");
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationRobotChangeListener;
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No ServiceReference: " +InputAutomationRobotChangeListener.constructor.toString()!, this, "getInputAutomationRobotChangeListener");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    addRobots(context: BundleContext){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "addRobots");
    

    var inputAutomationRobotChangeListener: InputAutomationRobotChangeListener = this.getInputAutomationRobotChangeListener(context)!;;
    

                        if(inputAutomationRobotChangeListener != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;index < this.getInputRobotInterface()!.length; index++)
        {

    var inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent = InputAutomationRobotUtil.getChangeEvent(this.getInputRobotInterface()[index]!)!;;
    
inputAutomationRobotChangeListener!.onAdd(inputAutomationRobotChangeEvent);
    
}


                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION, this, "addModules");
    
}

}


    removeRobots(context: BundleContext){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "removeRobots");
    

    var inputAutomationRobotChangeListener: InputAutomationRobotChangeListener = this.getInputAutomationRobotChangeListener(context)!;;
    

                        if(inputAutomationRobotChangeListener != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;index < this.getInputRobotInterface()!.length; index++)
        {

    var inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent = InputAutomationRobotUtil.getChangeEvent(this.getInputRobotInterface()[index]!)!;;
    
inputAutomationRobotChangeListener!.onRemove(inputAutomationRobotChangeEvent);
    
}


                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION, this, "removeRobots");
    
}

}


                //@Throws(Exception.constructor)
            
    public start(context: BundleContext){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.START);
    
this.addRobots(context);
    
this.registerAsService(context);
    
}


                //@Throws(Exception.constructor)
            
    public stop(context: BundleContext){
this.logUtil!.putF("Stop", this, this.commonStrings!.START);
    
this.removeRobots(context);
    
}


    getServiceFactory(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serviceFactory;
    
}


    setServiceFactory(serviceObject: ServiceFactory){
this.serviceFactory= serviceObject;
    
}


    public getInputRobotInterface(): InputRobotInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputRobotInterface;
    
}


    public setInputRobotInterface(inputRobotInterface: InputRobotInterface[]){
this.inputRobotInterface= inputRobotInterface;
    
}


}



