
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
        
import { InputAutomationModuleService } from '../../../../../../bundle/input/automation/module/InputAutomationModuleService.js';
//not GWT import const InputAutomationModuleService = globalThis.bundle.input.automation.module.InputAutomationModuleService;

      
import { InputAutomationJFrame } from '../../../../../../org/allbinary/input/automation/InputAutomationJFrame.js';
//not GWT import const InputAutomationJFrame = globalThis.org.allbinary.input.automation.InputAutomationJFrame;

      
import { InputAutomationConfigurationUtil } from '../../../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationUtil.js';
//not GWT import const InputAutomationConfigurationUtil = globalThis.org.allbinary.input.automation.configuration.InputAutomationConfigurationUtil;

      
import { InputAutomationModuleFactoryInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
//not GWT import const InputAutomationModuleFactoryInterface = globalThis.org.allbinary.input.automation.module.InputAutomationModuleFactoryInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { OSGIServiceInterface } from '../../../../../../org/allbinary/osgi/OSGIServiceInterface.js';
//not GWT import const OSGIServiceInterface = globalThis.org.allbinary.osgi.OSGIServiceInterface;

      
import { OSGIServiceVisitorInterface } from '../../../../../../org/allbinary/osgi/OSGIServiceVisitorInterface.js';
//not GWT import const OSGIServiceVisitorInterface = globalThis.org.allbinary.osgi.OSGIServiceVisitorInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationModuleOSGIServiceVisitor
            extends Object
         implements OSGIServiceVisitorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (){

            super();
        }


    public visit(anyType: any = {}): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.visit(anyType as OSGIServiceInterface);;
    
}


    public visit(osgiServiceInterface: OSGIServiceInterface): Boolean{

        try {
            
    var inputAutomationModuleService: InputAutomationModuleService = osgiServiceInterface as InputAutomationModuleService;;
    

    var inputAutomationModuleInterfaceArray: InputAutomationModuleFactoryInterface[] = inputAutomationModuleService!.getInputAutomationModuleInterfaceArray()!;;
    




                        for (
    var index: number = 0;index < inputAutomationModuleInterfaceArray!.length; index++)
        {
InputAutomationJFrame.getInstance()!.onAdd(InputAutomationConfigurationUtil.getChangeEvent(inputAutomationModuleInterfaceArray[index]!));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "visit", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


}



