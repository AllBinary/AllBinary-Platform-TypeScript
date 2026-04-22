
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { PositionStrings } from "../../../org/allbinary/math/PositionStrings.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GPoint
            extends Object
         {
        

    private static readonly POINT_LABEL: string = "Point: ";
        
        

    public static toStringStatic(x: number, y: number, z: number): string{
var x = x
var y = y
var z = z

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        
;
    
stringBuffer!.append(POINT_LABEL);
    
stringBuffer!.append(positionStrings!.X_LABEL);
    
stringBuffer!.appendint(x);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(positionStrings!.Y_LABEL);
    
stringBuffer!.appendint(y);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(positionStrings!.Z_LABEL);
    
stringBuffer!.appendint(z);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    private readonly x: number

    private readonly y: number

    private readonly z: number
public constructor (point: GPoint){

            super();
        var point = point
this.x= point.getX();
    
this.y= point.getY();
    
this.z= point.getZ();
    
}

public constructor (x: number, y: number){

            super();
        var x = x
var y = y
this.x= x;
    
this.y= y;
    
this.z= 3;
    
}

public constructor (x: number, y: number, z: number){

            super();
        var x = x
var y = y
var z = z
this.x= x;
    
this.y= y;
    
this.z= z;
    
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x;
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y;
    
}


    public getZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return z;
    
}


    public getRawX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x;
    
}


    public getRawY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y;
    
}


    public getRawZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return z;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return toStringStatic(this.getX(), this.getY(), this.getZ());

                        ;
    
}


}
                
            

