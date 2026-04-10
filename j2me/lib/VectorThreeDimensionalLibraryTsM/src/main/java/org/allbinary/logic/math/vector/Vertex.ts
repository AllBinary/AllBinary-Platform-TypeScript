
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
        



import { BasicDecimal } from "../../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { PositionStrings } from "../../../../../org/allbinary/math/PositionStrings.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class Vertex
            extends Object
         {
        

    public x: BasicDecimal = new BasicDecimal();
        
        

    public y: BasicDecimal = new BasicDecimal();
        
        

    public z: BasicDecimal = new BasicDecimal();
        
        
public constructor (x: number, y: number, z: number){

            super();
            var x = x
var y = y
var z = z
this.x.set(x)
this.y.set(y)
this.z.set(z)
}

public constructor (x: number, y: number){

            super();
            var x = x
var y = y
this.x.set(x)
this.y.set(y)
}

public constructor (){

            super();
            }


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        

stringBuffer!.append(positionStrings!.X_LABEL)
stringBuffer!.append(x.toString())
stringBuffer!.append(CommonSeps.getInstance()!.SPACE)
stringBuffer!.append(positionStrings!.Y_LABEL)
stringBuffer!.append(y.toString())
stringBuffer!.append(CommonSeps.getInstance()!.SPACE)
stringBuffer!.append(positionStrings!.Z_LABEL)
stringBuffer!.append(z.toString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

