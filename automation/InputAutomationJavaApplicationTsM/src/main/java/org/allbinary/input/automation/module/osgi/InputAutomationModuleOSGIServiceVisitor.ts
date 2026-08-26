
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
        
//not game specific package import { InputAutomationModuleService } from '../../../../../../bundle/input/automation/module/InputAutomationModuleService.js';
      const InputAutomationModuleService = globalThis.bundle.input.automation.module.InputAutomationModuleService;

      
//not game specific package import { InputAutomationJFrame } from '../../../../../../org/allbinary/input/automation/InputAutomationJFrame.js';
      const InputAutomationJFrame = globalThis.org.allbinary.input.automation.InputAutomationJFrame;

      
//not game specific package import { InputAutomationConfigurationUtil } from '../../../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationUtil.js';
      const InputAutomationConfigurationUtil = globalThis.org.allbinary.input.automation.configuration.InputAutomationConfigurationUtil;

      
//not game specific package import { InputAutomationModuleFactoryInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
      const InputAutomationModuleFactoryInterface = globalThis.org.allbinary.input.automation.module.InputAutomationModuleFactoryInterface;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { OSGIServiceInterface } from '../../../../../../org/allbinary/osgi/OSGIServiceInterface.js';
      const OSGIServiceInterface = globalThis.org.allbinary.osgi.OSGIServiceInterface;

      
//not game specific package import { OSGIServiceVisitorInterface } from '../../../../../../org/allbinary/osgi/OSGIServiceVisitorInterface.js';
      const OSGIServiceVisitorInterface = globalThis.org.allbinary.osgi.OSGIServiceVisitorInterface;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
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
                
            

