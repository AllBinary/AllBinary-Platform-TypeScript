
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
        



import { TouchButtonRecognizer } from "../../../../org/allbinary/input/motion/button/TouchButtonRecognizer.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MotionRecognizer } from "./MotionRecognizer.js";

export class OnlyTouchButtonRecognizer extends MotionRecognizer {
        

    private readonly touchButtonRecognizer: TouchButtonRecognizer

    private touchButtonProcessing: boolean = false;
        
        
public constructor (){

            super();
        this.touchButtonRecognizer= new TouchButtonRecognizer();
    
}


                //@Throws(Error::class)
            
    public processStartMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
var x = x
var y = y
var deviceId = deviceId
var modifiers = modifiers

                        if(this.touchButtonRecognizer!.pressTouchButtonInput(x, y, deviceId))
                        
                                    {
                                    this.touchButtonProcessing= true;
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public processEndMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
var x = x
var y = y
var deviceId = deviceId
var modifiers = modifiers

                        if(this.touchButtonProcessing)
                        
                                    {
                                    this.touchButtonProcessing= false;
    

                                    }
                                

                        if(this.touchButtonRecognizer!.releaseTouchButtonInput(x, y, deviceId))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public processDraggedMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
var x = x
var y = y
var deviceId = deviceId
var modifiers = modifiers

                        if(this.touchButtonProcessing)
                        
                                    {
                                    this.touchButtonRecognizer!.pressTouchButtonInput(x, y, deviceId);
    

                                    }
                                
}


}
                
            

