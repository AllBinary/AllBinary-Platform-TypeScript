
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
        



            import { Object } from "../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../java/lang/Exception.js";
        
import { InputRobotInterface } from "../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationRobotInterfaceWrapper } from "./InputAutomationRobotInterfaceWrapper.js";
import { InputAutomationRobotChangeEvent } from "./InputAutomationRobotChangeEvent.js";

export class InputAutomationRobotUtil
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getChangeEvent(inputRobotInterface: InputRobotInterface): InputAutomationRobotChangeEvent{
var inputRobotInterface = inputRobotInterface

    var inputAutomationRobotInterfaceWrapper: InputAutomationRobotInterfaceWrapper = new InputAutomationRobotInterfaceWrapper(inputRobotInterface);
;
    

    var inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent = new InputAutomationRobotChangeEvent(inputAutomationRobotInterfaceWrapper);
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationRobotChangeEvent;
    
}

private constructor (){

            super();
        }


}
                
            

