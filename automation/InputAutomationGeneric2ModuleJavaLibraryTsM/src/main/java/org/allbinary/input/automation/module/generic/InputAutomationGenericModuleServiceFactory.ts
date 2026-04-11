
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
        



import { InputAutomationModuleFactoryInterface } from "../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js";

    
import { InputAutomationModuleServiceFactory } from "../../../../../../org/allbinary/input/automation/module/osgi/InputAutomationModuleServiceFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class InputAutomationGenericModuleServiceFactory extends InputAutomationModuleServiceFactory {
        

    private inputAutomationGenericModuleServiceFactory: InputAutomationGenericModuleServiceFactory = new InputAutomationGenericModuleServiceFactory();
        
        

    public static getInstance(): InputAutomationGenericModuleServiceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationGenericModuleServiceFactory;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            
        try {
            
    var inputAutomationModuleInterfaceArray: InputAutomationModuleFactoryInterface[] = new Array(1);
        
        
;
    
inputAutomationModuleInterfaceArray[0]= GenericModuleFactory();
    
this.setInputAutomationModuleInterfaceArray(inputAutomationModuleInterfaceArray);
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    
}

}


}
                
            

