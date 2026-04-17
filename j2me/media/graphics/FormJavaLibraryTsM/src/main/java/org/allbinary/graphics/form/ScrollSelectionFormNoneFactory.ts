
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
        



import { RectangleFactory } from "../../../../org/allbinary/graphics/RectangleFactory.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { FormTypeFactory } from "./FormTypeFactory.js";

import { ScrollSelectionForm } from "./ScrollSelectionForm.js";

export class ScrollSelectionFormNoneFactory
            extends Object
         {
        

    private static readonly instance: ScrollSelectionForm = new ScrollSelectionForm(StringUtil.getInstance()!.EMPTY_STRING, [], RectangleFactory.SINGLETON, FormTypeFactory.getInstance()!.HORIZONTAL_FORM, 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        
        

    public static getInstance(): ScrollSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


}
                
            

