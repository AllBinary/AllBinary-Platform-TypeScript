
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
        



import { NoDecimalTrigTable } from "../../../../../org/allbinary/math/NoDecimalTrigTable.js";

    

export class AxisMathVectorUtil
            extends Object
         {
        

    private static readonly instance: AxisMathVectorUtil = new AxisMathVectorUtil();
        
        

    public static getInstance(): AxisMathVectorUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly noDecimalTrigTable: NoDecimalTrigTable = NoDecimalTrigTable.getInstance()!;
        
        

    public calculateX(magnitude: number, angle: number): number{
var magnitude = magnitude
var angle = angle



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return magnitude *noDecimalTrigTable!.cos(angle) /10;
    
}


    public calculateY(magnitude: number, angle: number): number{
var magnitude = magnitude
var angle = angle



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return magnitude *noDecimalTrigTable!.sin(angle) /10;
    
}


    public calculateZ(magnitude: number, otherAngle: number): number{
var magnitude = magnitude
var otherAngle = otherAngle



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return magnitude *noDecimalTrigTable!.sin(otherAngle) /10;
    
}


}
                
            

