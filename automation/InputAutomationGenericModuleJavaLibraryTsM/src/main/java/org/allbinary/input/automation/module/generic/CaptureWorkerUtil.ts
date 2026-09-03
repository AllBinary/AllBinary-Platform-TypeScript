
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
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { ProfileActionScriptConditionInterface } from '../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js';
      //not GWT import const ProfileActionScriptConditionInterface = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionInterface;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CaptureWorkerUtil
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static processProfileActionConditions(vector: BasicArrayList, frame: Long){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonStrings!.START, "CaptureWorkerUtil", "processProfileActionConditions");
    

    var size: number = vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var profileActionConditionInterface: ProfileActionScriptConditionInterface = vector.get(index) as ProfileActionScriptConditionInterface;;
    

                        if(profileActionConditionInterface!.shouldProcess(frame))
                        
                                    {
                                    profileActionConditionInterface!.process(frame);
    

                                    }
                                
                        else {
                            
                        }
                            
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


}



