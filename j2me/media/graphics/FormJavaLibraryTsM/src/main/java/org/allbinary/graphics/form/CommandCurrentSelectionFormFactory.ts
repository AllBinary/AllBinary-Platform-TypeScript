
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
        



import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { TouchFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/TouchFeatureFactory.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    

import { ScrollSelectionFormNoneFactory } from "./ScrollSelectionFormNoneFactory.js";

export class CommandCurrentSelectionFormFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(title: string, items: CustomItem[], rectangle: Rectangle, formType: FormType, border: number, moveForSmallScreen: boolean, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor): ScrollSelectionForm{
    //var title = title
    //var items = items
    //var rectangle = rectangle
    //var formType = formType
    //var border = border
    //var moveForSmallScreen = moveForSmallScreen
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor

                        if(Features.getInstance()!.isFeature(TouchFeatureFactory.getInstance()!.TOUCH_ENABLED))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CommandCurrentSelectionForm(title, items, rectangle, formType, border, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ScrollSelectionFormNoneFactory.getInstance();

                        ;
    

                        }
                            
}


}
                
            

