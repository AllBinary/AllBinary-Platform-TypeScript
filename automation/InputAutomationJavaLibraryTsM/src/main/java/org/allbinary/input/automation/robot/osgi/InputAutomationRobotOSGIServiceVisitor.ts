
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
        
import { InputAutomationRobotServiceInterface } from '../../../../../../bundle/input/automation/robot/InputAutomationRobotServiceInterface.js';
//not GWT import const InputAutomationRobotServiceInterface = globalThis.bundle.input.automation.robot.InputAutomationRobotServiceInterface;

      
import { InputRobotFactory } from '../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
//not GWT import const InputRobotFactory = globalThis.org.allbinary.input.automation.robot.InputRobotFactory;

      
import { InputRobotInterface } from '../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
//not GWT import const InputRobotInterface = globalThis.org.allbinary.input.automation.robot.InputRobotInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { OSGIServiceInterface } from '../../../../../../org/allbinary/osgi/OSGIServiceInterface.js';
//not GWT import const OSGIServiceInterface = globalThis.org.allbinary.osgi.OSGIServiceInterface;

      
import { OSGIServiceVisitorInterface } from '../../../../../../org/allbinary/osgi/OSGIServiceVisitorInterface.js';
//not GWT import const OSGIServiceVisitorInterface = globalThis.org.allbinary.osgi.OSGIServiceVisitorInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationRobotOSGIServiceVisitor
            extends Object
         implements OSGIServiceVisitorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (){

            super();
        }


    public visit(anyType: any = {}): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.visit(anyType as OSGIServiceInterface);;
    
}


    public visit(osgiServiceInterface: OSGIServiceInterface): Boolean{

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "visit");
    

    var inputAutomationRobotServiceInterface: InputAutomationRobotServiceInterface = osgiServiceInterface as InputAutomationRobotServiceInterface;;
    

    var inputRobotInterfaceArray: InputRobotInterface[] = inputAutomationRobotServiceInterface!.getInputRobotInterfaceArray()!;;
    




                        for (
    var index: number = 0;index < inputRobotInterfaceArray!.length; index++)
        {
this.logUtil!.putF("Adding: " +inputRobotInterfaceArray[index]!.getName(), this, "visit");
    
InputRobotFactory.getInstance()!.add(inputRobotInterfaceArray[index]!);
    
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



