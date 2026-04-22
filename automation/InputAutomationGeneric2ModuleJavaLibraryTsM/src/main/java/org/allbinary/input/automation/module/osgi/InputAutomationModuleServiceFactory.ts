
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
        



import { Bundle } from "../../../../../../org/osgi/framework/Bundle.js";

    
import { ServiceFactory } from "../../../../../../org/osgi/framework/ServiceFactory.js";

    
import { ServiceRegistration } from "../../../../../../org/osgi/framework/ServiceRegistration.js";

    
import { InputAutomationModuleService } from "../../../../../../bundle/input/automation/module/InputAutomationModuleService.js";

    
import { InputAutomationModuleFactoryInterface } from "../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationModuleServiceFactory
            extends Object
         implements ServiceFactory {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private inputAutomationModuleInterfaceArray: InputAutomationModuleFactoryInterface[]
public constructor (){

            super();
        }


    public getService(bundle: Bundle, registration: ServiceRegistration): any{
var bundle = bundle
var registration = registration
this.logUtil!.putF(this.commonStrings!.START, this, "getService");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new InputAutomationModuleService(this.getInputAutomationModuleInterfaceArray());
    
}


    public ungetService(bundle: Bundle, registration: ServiceRegistration, service: any = {}){
var bundle = bundle
var registration = registration
var service = service
}


    public getInputAutomationModuleInterfaceArray(): InputAutomationModuleFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationModuleInterfaceArray;
    
}


    public setInputAutomationModuleInterfaceArray(inputAutomationModuleInterfaceArray: InputAutomationModuleFactoryInterface[]){
var inputAutomationModuleInterfaceArray = inputAutomationModuleInterfaceArray
this.inputAutomationModuleInterfaceArray= inputAutomationModuleInterfaceArray;
    
}


}
                
            

