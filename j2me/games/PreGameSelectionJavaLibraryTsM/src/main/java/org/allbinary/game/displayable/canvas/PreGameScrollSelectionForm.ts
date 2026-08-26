
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { FormTypeFactory } from '../../../../../org/allbinary/graphics/form/FormTypeFactory.js';
      const FormTypeFactory = globalThis.org.allbinary.graphics.form.FormTypeFactory;

      
//not game specific package import { ItemPaintableFactory } from '../../../../../org/allbinary/graphics/form/ItemPaintableFactory.js';
      const ItemPaintableFactory = globalThis.org.allbinary.graphics.form.ItemPaintableFactory;

      
//not game specific package import { ScrollCurrentSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollCurrentSelectionForm.js';
      const ScrollCurrentSelectionForm = globalThis.org.allbinary.graphics.form.ScrollCurrentSelectionForm;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PreGameScrollSelectionForm extends ScrollCurrentSelectionForm {
        

public constructor (title: string, items: ABCustomItem[], formPaintableFactory: ItemPaintableFactory, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, items, formPaintableFactory, 0, 3, false, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public init(rectangle: Rectangle){
super.init(rectangle, FormTypeFactory.getInstance()!.TEMP_HORIZONTAL_FORM);
    
}


}
                
            

