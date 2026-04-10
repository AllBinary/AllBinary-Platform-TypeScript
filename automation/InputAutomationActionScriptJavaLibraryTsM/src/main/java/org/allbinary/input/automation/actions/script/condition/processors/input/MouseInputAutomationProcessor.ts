
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
        



import { InputRobotInterface } from "../../../../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class MouseInputAutomationProcessor
            extends Object
         {
        

                @Throws(Exception::class)
            
    public static process(mouseActionScriptInputInterface: MouseActionScriptInputInterface){
var mouseActionScriptInputInterface = mouseActionScriptInputInterface

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        


    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(StringMaker().
                            append("Start - Processing Mouse Input at: ")!.append(mouseActionScriptInputInterface!.getPoint()!.toString())!.append(" clicks: ")!.appendint(mouseActionScriptInputInterface!.getButtonClicks())!.toString(), "MouseInputAutomationProcessor", commonStrings!.PROCESS)

    var inputRobotInterface: InputRobotInterface = mouseActionScriptInputInterface!.getInputRobotInterface()!;
        
        


    
                        if(mouseActionScriptInputInterface!.getPoint()!.x !=  -1 && mouseActionScriptInputInterface!.getPoint()!.y !=  -1)
                        
                                    {
                                    mouseMove(mouseActionScriptInputInterface!.getPoint())

                                    }
                                
sleep(mouseActionScriptInputInterface!.getTime())

    
                        if(mouseActionScriptInputInterface!.getButtonClicks() != 0)
                        
                                    {
                                    mousePress(mouseActionScriptInputInterface!.getButtonClicks())
sleep(mouseActionScriptInputInterface!.getTime())
mouseRelease(mouseActionScriptInputInterface!.getButtonClicks())

                                    }
                                
sleep(mouseActionScriptInputInterface!.getTime())
}

private constructor (){

            super();
            }


}
                
            

