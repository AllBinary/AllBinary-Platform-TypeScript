
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
        
            import { Integer } from '../../../../../../../../../java/lang/Integer.js';
        
            import { Thread } from '../../../../../../../../../java/lang/Thread.js';
        
import { InputRobotInterface } from '../../../../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
//not GWT import const InputRobotInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { TimeDelayHelper } from '../../../../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { KeyboardActionScriptInputInterface } from './KeyboardActionScriptInputInterface.js';
//sameFolderImports - not GWT import - same folder const KeyboardActionScriptInputInterface

export class KeyboardInputAutomationProcessor
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static process(keyActionScriptInputInterface: KeyboardActionScriptInputInterface){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(CommonLabels.getInstance()!.START +keyActionScriptInputInterface!.toString(), "KeyInputAutomationProcessor", commonStrings!.PROCESS);
    

    let inputRobotInterface: InputRobotInterface = keyActionScriptInputInterface!.getInputRobotInterface()!;;
    

    let integer: Integer[] = keyActionScriptInputInterface!.getKeyArray()!;;
    

                        if(keyActionScriptInputInterface!.getDelayBetweenKeys() == 0)
                        
                                    {
                                    



                        for (
    let index: number = 0;index < keyActionScriptInputInterface!.getKeyArray()!.length; index++)
        {

                        if(keyActionScriptInputInterface!.isPress())
                        
                                    {
                                    inputRobotInterface!.keyPress(integer[index]!);
    

                                    }
                                
}

Thread.sleep(keyActionScriptInputInterface!.getTime());
    




                        for (
    let index: number = keyActionScriptInputInterface!.getKeyArray()!.length -1;index >= 0; index--)
        {

                        if(keyActionScriptInputInterface!.isRelease())
                        
                                    {
                                    inputRobotInterface!.keyRelease(integer[index]!);
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    let index: number = 0;index < keyActionScriptInputInterface!.getKeyArray()!.length; index++)
        {

                        if(keyActionScriptInputInterface!.isPress())
                        
                                    {
                                    inputRobotInterface!.keyPress(integer[index]!);
    

                                    }
                                
Thread.sleep(keyActionScriptInputInterface!.getTime());
    

                        if(keyActionScriptInputInterface!.isRelease())
                        
                                    {
                                    inputRobotInterface!.keyRelease(integer[index]!);
    

                                    }
                                

    let timeHelper: TimeDelayHelper = new TimeDelayHelper(keyActionScriptInputInterface!.getDelayBetweenKeys());;
    

    let toLong: number = 0;;
    

        while(!timeHelper!.isTimeTNT() || toLong > 6000)
        {
toLong++;
    
Thread.sleep(50);
    
}

}


                        }
                            
}


private constructor (){

            super();
        }


}

