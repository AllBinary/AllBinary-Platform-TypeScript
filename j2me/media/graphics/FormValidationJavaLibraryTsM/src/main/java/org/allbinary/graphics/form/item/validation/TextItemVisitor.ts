
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
        



import { BooleanFactory } from "../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { Visitor } from "../../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    

export class TextItemVisitor extends Visitor {
        
public constructor (){

            super();
            }


    public visit(anyType: any = {}): any = {}{
    //var anyType = anyType

    var value: string = anyType as String;
        
        
;
    

                        if(value.length < 2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.TRUE;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.FALSE;
    

                        }
                            
}


}
                
            

