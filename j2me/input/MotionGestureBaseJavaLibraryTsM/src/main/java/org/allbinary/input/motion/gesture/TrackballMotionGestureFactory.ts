
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
        



import { InputFactory } from "../../../../../org/allbinary/game/input/InputFactory.js";

    

export class TrackballMotionGestureFactory
            extends Object
         {
        

    private static readonly MOTION: TrackballMotionGestureFactory = new TrackballMotionGestureFactory();
        
        

    public static getInstance(): TrackballMotionGestureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MOTION;
    
}


    public readonly LEFT: MotionGestureInput

    public readonly RIGHT: MotionGestureInput

    public readonly UP: MotionGestureInput

    public readonly DOWN: MotionGestureInput
private constructor (){

            super();
            
    var MAX: number = InputFactory.getInstance()!.MAX;
        
        
;
    
LEFT= new MotionGestureInput(MAX -26, "L Trackball");
    
RIGHT= new MotionGestureInput(MAX -27, "R Trackball");
    
UP= new MotionGestureInput(MAX -28, "Up Trackball");
    
DOWN= new MotionGestureInput(MAX -29, "D Trackball");
    
}


}
                
            

