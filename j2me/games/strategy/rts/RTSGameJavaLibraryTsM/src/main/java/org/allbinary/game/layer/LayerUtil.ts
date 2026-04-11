
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { PositionStrings } from "../../../../org/allbinary/math/PositionStrings.js";

    

export class LayerUtil
            extends Object
         {
        

    private static readonly HASHTABLE: string = "Hashtable: ";
        
        

    public static toString(hashtable: Hashtable<any, any>, x: number, y: number, z: number): string{
var hashtable = hashtable
var x = x
var y = y
var z = z

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(HASHTABLE);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(hashtable));
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.X_LABEL);
    
stringBuffer!.appendint(x);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.Y_LABEL);
    
stringBuffer!.appendint(y);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.Z_LABEL);
    
stringBuffer!.appendint(z);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

