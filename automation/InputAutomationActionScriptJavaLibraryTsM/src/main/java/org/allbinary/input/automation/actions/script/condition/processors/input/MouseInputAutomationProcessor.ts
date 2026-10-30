
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

        


            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
            import { Thread } from '../../../../../../../../../java/lang/Thread.js';
        
import { InputRobotInterface } from '../../../../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
//not GWT import const InputRobotInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MouseActionScriptInputInterface } from './MouseActionScriptInputInterface.js';
//sameFolderImports - not GWT import - same folder const MouseActionScriptInputInterface

export class MouseInputAutomationProcessor
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static process(mouseActionScriptInputInterface: MouseActionScriptInputInterface){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(new StringMaker().append("Start - Processing Mouse Input at: ")!.append(mouseActionScriptInputInterface!.getPoint()!.toString())!.append(" clicks: ")!.appendint(mouseActionScriptInputInterface!.getButtonClicks())!.toString(), "MouseInputAutomationProcessor", commonStrings!.PROCESS);
    

    let inputRobotInterface: InputRobotInterface = mouseActionScriptInputInterface!.getInputRobotInterface()!;;
    

                        if(mouseActionScriptInputInterface!.getPoint()!.x !=  -1 && mouseActionScriptInputInterface!.getPoint()!.y !=  -1)
                        
                                    {
                                    inputRobotInterface!.mouseMove(mouseActionScriptInputInterface!.getPoint());
    

                                    }
                                
Thread.sleep(mouseActionScriptInputInterface!.getTime());
    

                        if(mouseActionScriptInputInterface!.getButtonClicks() != 0)
                        
                                    {
                                    inputRobotInterface!.mousePress(mouseActionScriptInputInterface!.getButtonClicks());
    
Thread.sleep(mouseActionScriptInputInterface!.getTime());
    
inputRobotInterface!.mouseRelease(mouseActionScriptInputInterface!.getButtonClicks());
    

                                    }
                                
Thread.sleep(mouseActionScriptInputInterface!.getTime());
    
}


private constructor (){

            super();
        }


}

