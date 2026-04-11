
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
        



import { Input } from "../../../../../../org/allbinary/game/input/Input.js";

    
import { InputFactory } from "../../../../../../org/allbinary/game/input/InputFactory.js";

    
import { MotionGestureInput } from "../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { TouchMotionGestureFactory } from "../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { AllBinaryEventObjectFactoryInterface } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObjectFactoryInterface.js";

    

export class MotionEventFactory
            extends Object
        
                , AllBinaryEventObjectFactoryInterface {
        

    private index: number = 0;
        
        

    private readonly source: any

    private readonly id: number
public constructor (source: any = {}, id: number){

            super();
            var source = source
var id = id
this.source= source;
    
this.id= id;
    
index= TouchMotionGestureFactory.getInstance()!.LAST_MOTION.getId();
    
}


    public getInstance(): AllBinaryEventObject{

    var inputFactory: InputFactory = InputFactory.getInstance()!;
        
        
;
    

    var input: Input = inputFactory!.getInstance(index++)!;
        
        
;
    

                        if(input == inputFactory!.NO_INPUT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MotionGestureEvent(this.source, this.id, TouchMotionGestureFactory.getInstance()!.NO_MOTION as MotionGestureInput);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MotionGestureEvent(this.source, this.id, input as MotionGestureInput);
    

                        }
                            
}


}
                
            

