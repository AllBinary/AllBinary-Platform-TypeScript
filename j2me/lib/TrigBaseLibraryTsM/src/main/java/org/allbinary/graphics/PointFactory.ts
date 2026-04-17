
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GPoint } from "./GPoint.js";

export class PointFactory
            extends Object
         {
        

    private static readonly instance: PointFactory = new PointFactory();
        
        

    public static getInstance(): PointFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public ZERO_ZERO: GPoint = this.getInstance(0, 0, 0)!;
        
        

    public init(){
}

private constructor (){

            super();
            }


    public getInstance(x: number, y: number): GPoint{
var x = x
var y = y



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GPoint(x, y, 0);
    
}


    public getInstance(x: number, y: number, z: number): GPoint{
var x = x
var y = y
var z = z



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GPoint(x, y, z);
    
}


}
                
            

