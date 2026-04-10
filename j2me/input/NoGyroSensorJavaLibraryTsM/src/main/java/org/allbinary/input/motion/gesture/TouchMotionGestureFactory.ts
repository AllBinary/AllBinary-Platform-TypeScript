
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

    

export class TouchMotionGestureFactory
            extends Object
         {
        

    private static readonly MOTION: TouchMotionGestureFactory = new TouchMotionGestureFactory();
        
        

    public static getInstance(): TouchMotionGestureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MOTION;
    
}


    public readonly LEFT: MotionGestureInput

    public readonly RIGHT: MotionGestureInput

    public readonly UP: MotionGestureInput

    public readonly DOWN: MotionGestureInput

    public readonly PRESSED: MotionGestureInput

    public readonly RELEASED: MotionGestureInput

    public readonly DIAGONAL_DOWN_RIGHT: MotionGestureInput

    public readonly DIAGONAL_DOWN_LEFT: MotionGestureInput

    public readonly DIAGONAL_UP_RIGHT: MotionGestureInput

    public readonly DIAGONAL_UP_LEFT: MotionGestureInput

    public readonly NO_MOTION: MotionGestureInput

    public readonly LAST_MOTION: MotionGestureInput
private constructor (){

            super();
            
    var MAX: number = InputFactory.getInstance()!.MAX;
        
        

LEFT= MotionGestureInput(MAX -3, "Left Touch")
RIGHT= MotionGestureInput(MAX -4, "Right Touch")
UP= MotionGestureInput(MAX -5, "Up Touch")
DOWN= MotionGestureInput(MAX -6, "Down Touch")
PRESSED= MotionGestureInput(MAX -7, "Screen Press")
RELEASED= MotionGestureInput(MAX -8, "Released")
DIAGONAL_DOWN_RIGHT= MotionGestureInput(MAX -9, "Diagonal Dn R")
DIAGONAL_DOWN_LEFT= MotionGestureInput(MAX -10, "Diagonal Dn L")
DIAGONAL_UP_RIGHT= MotionGestureInput(MAX -11, "Diagonal Up R")
DIAGONAL_UP_LEFT= MotionGestureInput(MAX -12, "Diagonal Up L")
NO_MOTION= MotionGestureInput(MAX -2, "No Motion")
LAST_MOTION= MotionGestureInput(MAX -19, "Last Motion")
}


}
                
            

