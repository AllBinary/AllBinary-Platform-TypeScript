
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
        



import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { FormTypeFactory } from "../../../../../org/allbinary/graphics/form/FormTypeFactory.js";

    
import { ItemPaintableFactory } from "../../../../../org/allbinary/graphics/form/ItemPaintableFactory.js";

    
import { ScrollCurrentSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollCurrentSelectionForm.js";

    

export class PreGameScrollSelectionForm extends ScrollCurrentSelectionForm {
        
public constructor (title: string, items: CustomItem[], formPaintableFactory: ItemPaintableFactory, rectangle: Rectangle, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, items, formPaintableFactory, rectangle, FormTypeFactory.getInstance()!.TEMP_HORIZONTAL_FORM, 0, false, backgroundBasicColor, foregroundBasicColor){

            super();
            var title = title
var items = items
var formPaintableFactory = formPaintableFactory
var rectangle = rectangle
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public init(rectangle: Rectangle){
var rectangle = rectangle
super.init(rectangle, FormTypeFactory.getInstance()!.TEMP_HORIZONTAL_FORM);
    
}


}
                
            

