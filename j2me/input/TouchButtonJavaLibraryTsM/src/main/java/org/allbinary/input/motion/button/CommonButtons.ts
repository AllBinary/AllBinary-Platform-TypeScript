
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
        



import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CommonButtons
            extends Object
         {
        

    private static readonly instance: CommonButtons = new CommonButtons();
        
        

    public static getInstance(): CommonButtons{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly STANDARD_BUTTON_SIZE: number

    public readonly NORMAL_BUTTON: Rectangle

    public readonly LARGE_BUTTON: Rectangle
private constructor (){

            super();
        
    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var commonButtonSize: number = 128;
        
        
;
    

        while(commonButtonSize > 64)
        {

    var totalColumns: number = displayInfo!.getLastWidth() /commonButtonSize;
        
        
;
    

    var totalRows: number = displayInfo!.getLastHeight() /commonButtonSize;
        
        
;
    

    var max: number = totalColumns;
        
        
;
    

                        if(totalRows > max)
                        
                                    {
                                    max= totalRows;
    

                                    }
                                

                        if(max > 9)
                        
                                    {
                                    break;

                    

                                    }
                                
commonButtonSize= commonButtonSize>>1;
    
}

this.STANDARD_BUTTON_SIZE= commonButtonSize;
    
this.NORMAL_BUTTON= new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, STANDARD_BUTTON_SIZE, STANDARD_BUTTON_SIZE);
    
this.LARGE_BUTTON= new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, STANDARD_BUTTON_SIZE<<1, STANDARD_BUTTON_SIZE<<1);
    
}


}
                
            

