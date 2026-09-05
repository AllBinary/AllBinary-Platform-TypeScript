
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { InputAutomationModuleFactoryInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
//not GWT import const InputAutomationModuleFactoryInterface = globalThis.org.allbinary.input.automation.module.InputAutomationModuleFactoryInterface;

      
import { InputAutomationModuleServiceFactory } from '../../../../../../org/allbinary/input/automation/module/osgi/InputAutomationModuleServiceFactory.js';
//not GWT import const InputAutomationModuleServiceFactory = globalThis.org.allbinary.input.automation.module.osgi.InputAutomationModuleServiceFactory;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericModuleFactory } from './GenericModuleFactory.js';
//not GWT import - same folder const GenericModuleFactory = globalThis.org.allbinary.input.automation.module.generic.GenericModuleFactory;

                
export class InputAutomationGenericModuleServiceFactory extends InputAutomationModuleServiceFactory {
        

    private static inputAutomationGenericModuleServiceFactory: InputAutomationGenericModuleServiceFactory = new InputAutomationGenericModuleServiceFactory();

    public static getInstance(): InputAutomationGenericModuleServiceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputAutomationGenericModuleServiceFactory.inputAutomationGenericModuleServiceFactory;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        
        try {
            
    var inputAutomationModuleInterfaceArray: InputAutomationModuleFactoryInterface[] = new Array(1);;
    
inputAutomationModuleInterfaceArray[0]= new GenericModuleFactory();
    
this.setInputAutomationModuleInterfaceArray(inputAutomationModuleInterfaceArray);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    
}

}


}



