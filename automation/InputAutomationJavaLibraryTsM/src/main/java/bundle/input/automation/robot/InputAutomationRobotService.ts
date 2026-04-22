
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
        



import { InputRobotInterface } from "../../../../org/allbinary/input/automation/robot/InputRobotInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { InputAutomationRobotServiceInterface } from "./InputAutomationRobotServiceInterface.js";

export class InputAutomationRobotService
            extends Object
         implements InputAutomationRobotServiceInterface {
        

    private inputRobotInterfaceArray: InputRobotInterface[]
public constructor (inputRobotInterfaceArray: InputRobotInterface[]){

            super();
        var inputRobotInterfaceArray = inputRobotInterfaceArray
this.setInputRobotInterfaceArray(inputRobotInterfaceArray);
    
}


    public getInputRobotInterfaceArray(): InputRobotInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputRobotInterfaceArray;
    
}


    public setInputRobotInterfaceArray(inputRobotInterfaceArray: InputRobotInterface[]){
var inputRobotInterfaceArray = inputRobotInterfaceArray
this.inputRobotInterfaceArray= inputRobotInterfaceArray;
    
}


}
                
            

