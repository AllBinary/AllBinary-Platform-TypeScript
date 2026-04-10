
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

    
import { InputAutomationRobotChangeListener } from "../../../../../../bundle/input/automation/robot/InputAutomationRobotChangeListener.js";

    
import { InputAutomationRobotServiceInterface } from "../../../../../../bundle/input/automation/robot/InputAutomationRobotServiceInterface.js";

    
import { InputRobotInterface } from "../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { OSGIActivatorUtil } from "../../../../../../org/allbinary/osgi/OSGIActivatorUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class InputAutomationRobotBundleActivator
            extends Object
        
                , BundleActivator {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private inputRobotInterface: InputRobotInterface[]

    private serviceFactory: ServiceFactory
public constructor (){

            super();
            this.init()
}


                @Throws(Exception::class)
            
    public init(){



                            throw RuntimeException()
}


                @Throws(Exception::class)
            
    public registerAsService(bundleContext: BundleContext){
var bundleContext = bundleContext
registerAsService(bundleContext, getServiceFactory(), InputAutomationRobotServiceInterface::class.toString()!)
}


                @Throws(Exception::class)
            
    getInputAutomationRobotChangeListener(context: BundleContext): InputAutomationRobotChangeListener{
var context = context

    var serviceReference: ServiceReference = context.getServiceReference(InputAutomationRobotChangeListener::class.toString()!)!;
        
        


    
                        if(serviceReference != 
                                    null
                                )
                        
                                    {
                                    
    var inputAutomationRobotChangeListener: InputAutomationRobotChangeListener = context.getService(serviceReference) as InputAutomationRobotChangeListener;
        
        


    
                        if(inputAutomationRobotChangeListener == 
                                    null
                                )
                        
                                    throw Exception("No Service For ServiceReference")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationRobotChangeListener;
    

                                    }
                                
                        else {
                            put("No ServiceReference: " +InputAutomationRobotChangeListener::class.toString()!, this, "getInputAutomationRobotChangeListener")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    addRobots(context: BundleContext){
var context = context

        try {
            put(this.commonStrings!.START, this, "addRobots")

    var inputAutomationRobotChangeListener: InputAutomationRobotChangeListener = this.getInputAutomationRobotChangeListener(context)!;
        
        


    
                        if(inputAutomationRobotChangeListener != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < this.getInputRobotInterface()!.length; index++)
        {

    var inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent = InputAutomationRobotUtil.getChangeEvent(this.getInputRobotInterface()[index]!)!;
        
        

onAdd(inputAutomationRobotChangeEvent)
}


                                    }
                                
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "addModules")
}

}


    removeRobots(context: BundleContext){
var context = context

        try {
            put(this.commonStrings!.START, this, "removeRobots")

    var inputAutomationRobotChangeListener: InputAutomationRobotChangeListener = this.getInputAutomationRobotChangeListener(context)!;
        
        


    
                        if(inputAutomationRobotChangeListener != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < this.getInputRobotInterface()!.length; index++)
        {

    var inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent = InputAutomationRobotUtil.getChangeEvent(this.getInputRobotInterface()[index]!)!;
        
        

onRemove(inputAutomationRobotChangeEvent)
}


                                    }
                                
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "removeRobots")
}

}


                @Throws(Exception::class)
            
    public start(context: BundleContext){
var context = context
put(this.commonStrings!.START, this, this.commonStrings!.START)
this.addRobots(context)
this.registerAsService(context)
}


                @Throws(Exception::class)
            
    public stop(context: BundleContext){
var context = context
put("Stop", this, this.commonStrings!.START)
this.removeRobots(context)
}


    getServiceFactory(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return serviceFactory;
    
}


    setServiceFactory(serviceObject: ServiceFactory){
var serviceObject = serviceObject
this.serviceFactory= serviceObject
}


    public getInputRobotInterface(): InputRobotInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputRobotInterface;
    
}


    public setInputRobotInterface(inputRobotInterface: InputRobotInterface[]){
var inputRobotInterface = inputRobotInterface
this.inputRobotInterface= inputRobotInterface
}


}
                
            

