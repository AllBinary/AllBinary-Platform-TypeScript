
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
//not GWT import const BasicDecimal

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
type PositionStrings<T = any, U = any> = typeof PositionStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PositionStrings;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
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

    let stringBuffer: StringMaker = new StringMaker();;
    

    let positionStrings: PositionStrings = PositionStrings.getInstance()!;;
    
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

