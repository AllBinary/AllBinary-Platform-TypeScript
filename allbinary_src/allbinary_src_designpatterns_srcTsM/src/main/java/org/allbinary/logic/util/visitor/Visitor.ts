
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
        



import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { VisitorInterface } from "./VisitorInterface.js";

export class Visitor
            extends Object
         implements VisitorInterface {
        

    private static readonly instance: Visitor = new Visitor();
        
        

    public static getInstance(): Visitor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly nullUtil: NullUtil = NullUtil.getInstance()!;
        
        

    public visit(anyType: any = {}): any{
var anyType = anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nullUtil!.NULL_OBJECT;
    
}


}
                
            

