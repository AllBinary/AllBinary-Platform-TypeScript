
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
        



import { InputAutomationRobotServiceInterface } from "../../../../../../bundle/input/automation/robot/InputAutomationRobotServiceInterface.js";

    
import { InputRobotFactory } from "../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js";

    
import { InputRobotInterface } from "../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { OSGIServiceInterface } from "../../../../../../org/allbinary/osgi/OSGIServiceInterface.js";

    
import { OSGIServiceVisitorInterface } from "../../../../../../org/allbinary/osgi/OSGIServiceVisitorInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class InputAutomationRobotOSGIServiceVisitor
            extends Object
        
                , OSGIServiceVisitorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
public constructor (){

            super();
            }


    public visit(anyType: any = {}): any = {}{
    //var anyType = anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.visit(anyType as OSGIServiceInterface);
    
}


    public visit(osgiServiceInterface: OSGIServiceInterface): Boolean{
    //var osgiServiceInterface = osgiServiceInterface

        try {
            put(this.commonStrings!.START, this, "visit")

    var inputAutomationRobotServiceInterface: InputAutomationRobotServiceInterface = osgiServiceInterface as InputAutomationRobotServiceInterface;
        
        


    var inputRobotInterfaceArray: InputRobotInterface[] = inputAutomationRobotServiceInterface!.getInputRobotInterfaceArray()!;
        
        





                        for (
    var index: number = 0;
        
        
index < inputRobotInterfaceArray!.length; index++)
        {
put("Adding: " +inputRobotInterfaceArray[index]!.getName(), this, "visit")
add(inputRobotInterfaceArray[index]!)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "visit", e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


}
                
            

