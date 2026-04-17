
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
        



import { InputFactory } from "../../../../org/allbinary/game/input/InputFactory.js";

    
import { MotionGestureInput } from "../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OrientationMotionGestureFactory
            extends Object
         {
        

    private static readonly instance: OrientationMotionGestureFactory = new OrientationMotionGestureFactory();
        
        

    public static getInstance(): OrientationMotionGestureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly LEFT: MotionGestureInput

    public readonly RIGHT: MotionGestureInput

    public readonly UP: MotionGestureInput

    public readonly DOWN: MotionGestureInput

    public readonly ROLL_LEFT: MotionGestureInput

    public readonly ROLL_RIGHT: MotionGestureInput
private constructor (){

            super();
            
    var MAX: number = InputFactory.getInstance()!.MAX;
        
        
;
    
LEFT= new MotionGestureInput(MAX -20, "Left Orient");
    
RIGHT= new MotionGestureInput(MAX -21, "Right Orient");
    
UP= new MotionGestureInput(MAX -22, "Up Orient");
    
DOWN= new MotionGestureInput(MAX -23, "Down Orient");
    
ROLL_LEFT= new MotionGestureInput(MAX -24, "Roll Left");
    
ROLL_RIGHT= new MotionGestureInput(MAX -25, "Roll Right");
    
}


}
                
            

