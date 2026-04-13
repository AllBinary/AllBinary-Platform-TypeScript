
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    

export class TableDataFactory
            extends Object
         {
        

    private static readonly instance: TableDataFactory = new TableDataFactory();
        
        

    public static getInstance(): TableDataFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly INTEGER_MAX_VALUE_STRING: string = Integer.toString(Integer.MAX_VALUE)!;
        
        

    public readonly ZERO_STRING: string = CommonPhoneStrings.getInstance()!.ZERO;
        
        

}
                
            

