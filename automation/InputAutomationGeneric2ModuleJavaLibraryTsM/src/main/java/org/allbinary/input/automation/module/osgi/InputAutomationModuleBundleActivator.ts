
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
        
//not game specific package import { BundleActivator } from '../../../../../../org/osgi/framework/BundleActivator.js';
      const BundleActivator = globalThis.org.osgi.framework.BundleActivator;

      
//not game specific package import { BundleContext } from '../../../../../../org/osgi/framework/BundleContext.js';
      const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
//not game specific package import { ServiceFactory } from '../../../../../../org/osgi/framework/ServiceFactory.js';
      const ServiceFactory = globalThis.org.osgi.framework.ServiceFactory;

      
//not game specific package import { ServiceReference } from '../../../../../../org/osgi/framework/ServiceReference.js';
      const ServiceReference = globalThis.org.osgi.framework.ServiceReference;

      
//not game specific package import { InputAutomationModuleServiceInterface } from '../../../../../../bundle/input/automation/module/InputAutomationModuleServiceInterface.js';
      const InputAutomationModuleServiceInterface = globalThis.bundle.input.automation.module.InputAutomationModuleServiceInterface;

      
//not game specific package import { InputAutomationConfigurationModuleChangeListener } from '../../../../../../bundle/input/automation/module/configuration/InputAutomationConfigurationModuleChangeListener.js';
      const InputAutomationConfigurationModuleChangeListener = globalThis.bundle.input.automation.module.configuration.InputAutomationConfigurationModuleChangeListener;

      
//not game specific package import { InputAutomationConfigurationModuleChangeEvent } from '../../../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationModuleChangeEvent.js';
      const InputAutomationConfigurationModuleChangeEvent = globalThis.org.allbinary.input.automation.configuration.InputAutomationConfigurationModuleChangeEvent;

      
//not game specific package import { InputAutomationConfigurationUtil } from '../../../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationUtil.js';
      const InputAutomationConfigurationUtil = globalThis.org.allbinary.input.automation.configuration.InputAutomationConfigurationUtil;

      
//not game specific package import { InputAutomationModuleFactoryInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
      const InputAutomationModuleFactoryInterface = globalThis.org.allbinary.input.automation.module.InputAutomationModuleFactoryInterface;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { OSGIActivatorUtil } from '../../../../../../org/allbinary/osgi/OSGIActivatorUtil.js';
      const OSGIActivatorUtil = globalThis.org.allbinary.osgi.OSGIActivatorUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationModuleBundleActivator
            extends Object
         implements BundleActivator {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private inputAutomationModuleInterface: InputAutomationModuleFactoryInterface[];

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
            
    getInputAutomationConfigurationModuleChangeListener(context: BundleContext): InputAutomationConfigurationModuleChangeListener{

    var serviceReference: ServiceReference = context.getServiceReference(InputAutomationConfigurationModuleChangeListener.constructor.toString()!)!;;
    

                        if(serviceReference != 
                                    null
                                )
                        
                                    {
                                    
    var inputAutomationConfigurationModuleChangeListener: InputAutomationConfigurationModuleChangeListener = context.getService(serviceReference) as InputAutomationConfigurationModuleChangeListener;;
    

                        if(inputAutomationConfigurationModuleChangeListener == 
                                    null
                                )
                        
                                    throw new Exception("No Service For ServiceReference");
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationConfigurationModuleChangeListener;
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No ServiceReference: " +InputAutomationConfigurationModuleChangeListener.constructor.toString()!, this, "addModules");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    addModules(context: BundleContext){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "addModules");
    

    var inputAutomationConfigurationModuleChangeListener: InputAutomationConfigurationModuleChangeListener = this.getInputAutomationConfigurationModuleChangeListener(context)!;;
    

                        if(inputAutomationConfigurationModuleChangeListener != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;index < this.getInputAutomationModuleInterface()!.length; index++)
        {

    var inputAutomationConfigurationModuleChangeEvent: InputAutomationConfigurationModuleChangeEvent = InputAutomationConfigurationUtil.getChangeEvent(this.getInputAutomationModuleInterface()[index]!)!;;
    
inputAutomationConfigurationModuleChangeListener!.onAdd(inputAutomationConfigurationModuleChangeEvent);
    
}


                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION, this, "addModules");
    
}

}


                //@Throws(Exception.constructor)
            
    public registerAsService(bundleContext: BundleContext){
OSGIActivatorUtil.registerAsService(bundleContext, getServiceFactory(), InputAutomationModuleServiceInterface.constructor.toString()!);
    
}


    removeModules(context: BundleContext){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "removeModules");
    

    var inputAutomationConfigurationModuleChangeListener: InputAutomationConfigurationModuleChangeListener = this.getInputAutomationConfigurationModuleChangeListener(context)!;;
    

                        if(inputAutomationConfigurationModuleChangeListener != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;index < this.getInputAutomationModuleInterface()!.length; index++)
        {

    var inputAutomationConfigurationModuleChangeEvent: InputAutomationConfigurationModuleChangeEvent = InputAutomationConfigurationUtil.getChangeEvent(this.getInputAutomationModuleInterface()[index]!)!;;
    
inputAutomationConfigurationModuleChangeListener!.onRemove(inputAutomationConfigurationModuleChangeEvent);
    
}


                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION, this, "removeModules");
    
}

}


                //@Throws(Exception.constructor)
            
    public start(context: BundleContext){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.START);
    
this.addModules(context);
    
this.registerAsService(context);
    
}


                //@Throws(Exception.constructor)
            
    public stop(context: BundleContext){
this.logUtil!.putF(this.commonStrings!.START, this, "stop");
    
this.removeModules(context);
    
}


    getInputAutomationModuleInterface(): InputAutomationModuleFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputAutomationModuleInterface;
    
}


    setInputAutomationModuleInterface(inputAutomationModuleInterface: InputAutomationModuleFactoryInterface[]){
this.inputAutomationModuleInterface= inputAutomationModuleInterface;
    
}


    getServiceFactory(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serviceFactory;
    
}


    setServiceFactory(serviceObject: ServiceFactory){
this.serviceFactory= serviceObject;
    
}


}
                
            

