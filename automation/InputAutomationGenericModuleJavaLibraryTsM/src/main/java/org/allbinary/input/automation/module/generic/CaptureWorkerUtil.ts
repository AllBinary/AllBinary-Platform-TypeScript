
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { ProfileActionScriptConditionInterface } from "../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CaptureWorkerUtil
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static processProfileActionConditions(vector: Vector, frame: Long){
var vector = vector
var frame = frame

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.putF(commonStrings!.START, "CaptureWorkerUtil", "processProfileActionConditions");
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var profileActionConditionInterface: ProfileActionScriptConditionInterface = vector.get(index); as ProfileActionScriptConditionInterface;
        
        
;
    

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
                
            

