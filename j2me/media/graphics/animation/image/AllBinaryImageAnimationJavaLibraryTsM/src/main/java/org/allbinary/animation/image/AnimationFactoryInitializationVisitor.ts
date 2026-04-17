
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { PositionStrings } from "../../../../org/allbinary/math/PositionStrings.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AnimationFactoryInitializationVisitor
            extends Object
         {
        

    public width: number= 0

    public height: number= 0

    public dx: number= 0

    public dy: number= 0

    public originalDx: number= 0

    public originalDy: number= 0

    public visit(){
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(PositionStrings.getInstance()!.DX_LABEL)!.appendfloat(this.dx.toFloat());
    
stringBuffer!.append(PositionStrings.getInstance()!.DY_LABEL)!.appendfloat(this.dy.toFloat());
    
stringBuffer!.append(commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(width);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(height);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

