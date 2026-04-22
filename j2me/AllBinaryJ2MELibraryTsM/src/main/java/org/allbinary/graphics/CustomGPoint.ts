
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

export class CustomGPoint extends GPoint {
        

    public static readonly NULL_CUSTOM_POINT: CustomGPoint = new CustomGPoint(0, 0, 0);
        
        

    private x: number= 0

    private y: number= 0

    private z: number= 0
private constructor (point: GPoint){
            super(point);
                    var point = point


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (x: number, y: number){
            super(x, y);
                    var x = x
var y = y


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (x: number, y: number, z: number){
            super(x, y, z);
                    var x = x
var y = y
var z = z


                            //For kotlin this is before the body of the constructor.
                    
}


    public setX(x: number){
var x = x
this.x= x;
    
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x;
    
}


    public setY(y: number){
var y = y
this.y= y;
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y;
    
}


    public setZ(z: number){
var z = z
this.z= z;
    
}


    public getZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return z;
    
}


}
                
            

