
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { FormTypeFactory } from "../../../../org/allbinary/graphics/form/FormTypeFactory.js";

    
import { MultipleScrollSelectionHorizontalForm } from "../../../../org/allbinary/graphics/form/MultipleScrollSelectionHorizontalForm.js";

    
import { CommonButtons } from "../../../../org/allbinary/input/motion/button/CommonButtons.js";

    
import { TouchButtonLocationHelper } from "../../../../org/allbinary/input/motion/button/TouchButtonLocationHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RTSScrollSelectionFormFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(formLabel: string, items: CustomItem[]): MultipleScrollSelectionHorizontalForm{
    //var formLabel = formLabel
    //var items = items

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        
;
    

    var touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var menuX: number = CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE +touchButtonLocationHelper!.getColumnsRemainderHalf();
        
        
;
    

    var width: number = displayInfo!.getLastWidth() -(menuX *2);
        
        
;
    

    var menuRectangle: Rectangle = new Rectangle(PointFactory.getInstance()!.getInstance0(menuX, 16), width, CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MultipleScrollSelectionHorizontalForm.create(formLabel, items, menuRectangle, FormTypeFactory.getInstance()!.HORIZONTAL_FORM, 0, basicColorFactory!.BLACK, basicColorFactory!.WHITE);;
    
}


}
                
            

