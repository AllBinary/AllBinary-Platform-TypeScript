
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Vertex
            extends Object
         {
        

    public x: BasicDecimal = new BasicDecimal(0);
        
        

    public y: BasicDecimal = new BasicDecimal(0);
        
        

    public z: BasicDecimal = new BasicDecimal(0);
        
        
public constructor (){

            super();
        }


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        
;
    
stringBuffer!.append(positionStrings!.X_LABEL);
    
stringBuffer!.append(this.x.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(positionStrings!.Y_LABEL);
    
stringBuffer!.append(this.y.toString());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(positionStrings!.Z_LABEL);
    
stringBuffer!.append(this.z.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

