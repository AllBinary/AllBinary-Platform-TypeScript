
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { Visitor } from "../../../../org/allbinary/logic/util/visitor/Visitor.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ThrustAIVisitor extends Visitor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly TRUE: Boolean = BooleanFactory.getInstance()!.TRUE;
        
        
public constructor (){

            super();
        }


    public visit(anyType: any = {}): any{
var anyType = anyType

        try {
            
    var basicAI: BasicAI = anyType as BasicAI;
        
        
;
    
basicAI!.processAI(Canvas.UP);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.VISIT, e);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TRUE;
    
}


}
                
            

