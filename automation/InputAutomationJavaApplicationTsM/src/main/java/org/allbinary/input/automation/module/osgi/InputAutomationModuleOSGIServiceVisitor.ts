
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
        



import { InputAutomationModuleService } from "../../../../../../bundle/input/automation/module/InputAutomationModuleService.js";

    
import { InputAutomationJFrame } from "../../../../../../org/allbinary/input/automation/InputAutomationJFrame.js";

    
import { InputAutomationConfigurationUtil } from "../../../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationUtil.js";

    
import { InputAutomationModuleFactoryInterface } from "../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { OSGIServiceInterface } from "../../../../../../org/allbinary/osgi/OSGIServiceInterface.js";

    
import { OSGIServiceVisitorInterface } from "../../../../../../org/allbinary/osgi/OSGIServiceVisitorInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class InputAutomationModuleOSGIServiceVisitor
            extends Object
        
                , OSGIServiceVisitorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
public constructor (){

            super();
            }


    public visit(anyType: any = {}): any{
    //var anyType = anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.visit(anyType as OSGIServiceInterface);

                        ;
    
}


    public visit(osgiServiceInterface: OSGIServiceInterface): Boolean{
    //var osgiServiceInterface = osgiServiceInterface

        try {
            
    var inputAutomationModuleService: InputAutomationModuleService = osgiServiceInterface as InputAutomationModuleService;
        
        
;
    

    var inputAutomationModuleInterfaceArray: InputAutomationModuleFactoryInterface[] = inputAutomationModuleService!.getInputAutomationModuleInterfaceArray()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < inputAutomationModuleInterfaceArray!.length; index++)
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
                
            

