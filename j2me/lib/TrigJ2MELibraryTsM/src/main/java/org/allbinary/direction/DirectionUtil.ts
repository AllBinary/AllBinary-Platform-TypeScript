
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
        



import { Angle } from "../../../org/allbinary/math/Angle.js";

    
import { AngleFactory } from "../../../org/allbinary/math/AngleFactory.js";

    

import { DirectionFactory } from "./DirectionFactory.js";

import { LEFT } from "./LEFT.js";

import { RIGHT } from "./RIGHT.js";

import { UP } from "./UP.js";

import { DOWN } from "./DOWN.js";

import { LEFT } from "./LEFT.js";

import { RIGHT } from "./RIGHT.js";

import { UP } from "./UP.js";

import { DOWN } from "./DOWN.js";

export class DirectionUtil
            extends Object
         {
        

    private static readonly instance: DirectionUtil = new DirectionUtil();
        
        

    public static getInstance(): DirectionUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private directionArray: Angle[] = new Array(10);
        
        

    private directionArray2: Angle[] = new Array(10);
        
        
private constructor (){

            super();
            
    var angleFactory: AngleFactory = AngleFactory.getInstance()!;
        
        
;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
        
        
;
    
directionArray[directionFactory!.LEFT.getValue()]= angleFactory!.LEFT;
    
directionArray[directionFactory!.RIGHT.getValue()]= angleFactory!.RIGHT;
    
directionArray[directionFactory!.UP.getValue()]= angleFactory!.UP;
    
directionArray[directionFactory!.DOWN.getValue()]= angleFactory!.DOWN;
    
directionArray2[directionFactory!.LEFT.getValue()]= angleFactory!.LEFT;
    
directionArray2[directionFactory!.RIGHT.getValue()]= angleFactory!.RIGHT;
    
directionArray2[directionFactory!.UP.getValue()]= angleFactory!.UP;
    
directionArray2[directionFactory!.DOWN.getValue()]= angleFactory!.DOWN;
    
}


    public getAngle(direction: Direction): Angle{
var direction = direction



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionArray2[direction.getValue()]!;
    
}


    public getFrameAngle(direction: Direction): Angle{
var direction = direction



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionArray[direction.getValue()]!;
    
}


}
                
            

