
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
        



import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class CompleteMotionGestureInputToGameMotionGestureInput
            extends Object
         {
        

    private static readonly instance: CompleteMotionGestureInputToGameMotionGestureInput = new CompleteMotionGestureInputToGameMotionGestureInput();
        
        

    public static getInstance(): CompleteMotionGestureInputToGameMotionGestureInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public init(){
PreLogUtil.put("No Touch Button = No Compound Motion Gestures", this, this.commonStrings!.INIT);
    
}


}
                
            

