
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
        
import { InputFactory } from "../../../../../../org/allbinary/game/input/InputFactory.js";

    
import { MotionGestureInput } from "../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { TouchMotionGestureFactory } from "../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { AllBinaryEventCircularPool } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventCircularPool.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionEventFactory } from "./MotionEventFactory.js";
import { MotionGestureEvent } from "./MotionGestureEvent.js";

export class MotionEventCircularPool
            extends Object
         {
        

    public static createPool(id: number): MotionEventCircularPool{
var id = id



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new MotionEventCircularPool(id);
    
}


    private static readonly MIN: number = TouchMotionGestureFactory.getInstance()!.LAST_MOTION.getId()!;

    private eventPool: AllBinaryEventCircularPool = new AllBinaryEventCircularPool((InputFactory.getInstance()!.MAX -1) -MotionEventCircularPool.MIN);
private constructor (id: number){

            super();
        var id = id
this.eventPool!.init(new MotionEventFactory(eventPool, id));
    
}


                //@Throws(Exception::class)
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(motionGestureInput: MotionGestureInput): MotionGestureEvent{
var motionGestureInput = motionGestureInput



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.eventPool!.getInstance(motionGestureInput!.getId() -MotionEventCircularPool.MIN) as MotionGestureEvent;
    
}


}
                
            

