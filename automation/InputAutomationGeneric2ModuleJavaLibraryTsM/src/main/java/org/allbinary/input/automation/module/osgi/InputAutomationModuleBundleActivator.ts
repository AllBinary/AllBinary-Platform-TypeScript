
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
        



import { BundleActivator } from "../../../../../../org/osgi/framework/BundleActivator.js";

    
import { BundleContext } from "../../../../../../org/osgi/framework/BundleContext.js";

    
import { ServiceFactory } from "../../../../../../org/osgi/framework/ServiceFactory.js";

    
import { ServiceReference } from "../../../../../../org/osgi/framework/ServiceReference.js";

    
import { InputAutomationModuleServiceInterface } from "../../../../../../bundle/input/automation/module/InputAutomationModuleServiceInterface.js";

    
import { InputAutomationConfigurationModuleChangeListener } from "../../../../../../bundle/input/automation/module/configuration/InputAutomationConfigurationModuleChangeListener.js";

    
import { InputAutomationConfigurationModuleChangeEvent } from "../../../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationModuleChangeEvent.js";

    
import { InputAutomationConfigurationUtil } from "../../../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationUtil.js";

    
import { InputAutomationModuleFactoryInterface } from "../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { OSGIActivatorUtil } from "../../../../../../org/allbinary/osgi/OSGIActivatorUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class InputAutomationModuleBundleActivator
            extends Object
        
                , BundleActivator {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private inputAutomationModuleInterface: InputAutomationModuleFactoryInterface[]

    private serviceFactory: ServiceFactory
public constructor (){

            super();
            this.this.init()
}


                //@Throws(Error::class)
            
    public init(){



                            throw RuntimeException()
}


                //@Throws(Error::class)
            
    getInputAutomationConfigurationModuleChangeListener(context: BundleContext): InputAutomationConfigurationModuleChangeListener{
var context = context

    var serviceReference: ServiceReference = context.getServiceReference(InputAutomationConfigurationModuleChangeListener::class.toString()!)!;
        
        


                        if(serviceReference != 
                                    null
                                )
                        
                                    {
                                    
    var inputAutomationConfigurationModuleChangeListener: InputAutomationConfigurationModuleChangeListener = context.getService(serviceReference) as InputAutomationConfigurationModuleChangeListener;
        
        


                        if(inputAutomationConfigurationModuleChangeListener == 
                                    null
                                )
                        
                                    throw Error("No Service For ServiceReference")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationConfigurationModuleChangeListener;
    

                                    }
                                
                        else {
                            logUtil!.put("No ServiceReference: " +InputAutomationConfigurationModuleChangeListener::class.toString()!, this, "addModules")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    addModules(context: BundleContext){
var context = context

        try {
            logUtil!.put(this.commonStrings!.START, this, "addModules")

    var inputAutomationConfigurationModuleChangeListener: InputAutomationConfigurationModuleChangeListener = this.getInputAutomationConfigurationModuleChangeListener(context)!;
        
        


                        if(inputAutomationConfigurationModuleChangeListener != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < this.getInputAutomationModuleInterface()!.length; index++)
        {

    var inputAutomationConfigurationModuleChangeEvent: InputAutomationConfigurationModuleChangeEvent = InputAutomationConfigurationUtil.getChangeEvent(this.getInputAutomationModuleInterface()[index]!)!;
        
        

inputAutomationConfigurationModuleChangeListener!.onAdd(inputAutomationConfigurationModuleChangeEvent)
}


                                    }
                                
} catch(e: Exception)
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "addModules")
}

}


                //@Throws(Error::class)
            
    public registerAsService(bundleContext: BundleContext){
var bundleContext = bundleContext
OSGIActivatorUtil.registerAsService(bundleContext, getServiceFactory(), InputAutomationModuleServiceInterface::class.toString()!)
}


    removeModules(context: BundleContext){
var context = context

        try {
            logUtil!.put(this.commonStrings!.START, this, "removeModules")

    var inputAutomationConfigurationModuleChangeListener: InputAutomationConfigurationModuleChangeListener = this.getInputAutomationConfigurationModuleChangeListener(context)!;
        
        


                        if(inputAutomationConfigurationModuleChangeListener != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < this.getInputAutomationModuleInterface()!.length; index++)
        {

    var inputAutomationConfigurationModuleChangeEvent: InputAutomationConfigurationModuleChangeEvent = InputAutomationConfigurationUtil.getChangeEvent(this.getInputAutomationModuleInterface()[index]!)!;
        
        

inputAutomationConfigurationModuleChangeListener!.onRemove(inputAutomationConfigurationModuleChangeEvent)
}


                                    }
                                
} catch(e: Exception)
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "removeModules")
}

}


                //@Throws(Error::class)
            
    public start(context: BundleContext){
var context = context
logUtil!.put(this.commonStrings!.START, this, this.commonStrings!.START)
this.this.addModules(context)
this.this.registerAsService(context)
}


                //@Throws(Error::class)
            
    public stop(context: BundleContext){
var context = context
logUtil!.put(this.commonStrings!.START, this, "stop")
this.this.removeModules(context)
}


    getInputAutomationModuleInterface(): InputAutomationModuleFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationModuleInterface;
    
}


    setInputAutomationModuleInterface(inputAutomationModuleInterface: InputAutomationModuleFactoryInterface[]){
var inputAutomationModuleInterface = inputAutomationModuleInterface
this.inputAutomationModuleInterface= inputAutomationModuleInterface
}


    getServiceFactory(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return serviceFactory;
    
}


    setServiceFactory(serviceObject: ServiceFactory){
var serviceObject = serviceObject
this.serviceFactory= serviceObject
}


}
                
            

