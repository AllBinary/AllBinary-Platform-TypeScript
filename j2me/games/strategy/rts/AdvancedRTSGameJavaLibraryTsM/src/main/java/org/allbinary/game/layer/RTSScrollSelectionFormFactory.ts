
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { FormTypeFactory } from '../../../../org/allbinary/graphics/form/FormTypeFactory.js';
      const FormTypeFactory = globalThis.org.allbinary.graphics.form.FormTypeFactory;

      
//not game specific package import { MultipleScrollSelectionHorizontalForm } from '../../../../org/allbinary/graphics/form/MultipleScrollSelectionHorizontalForm.js';
      const MultipleScrollSelectionHorizontalForm = globalThis.org.allbinary.graphics.form.MultipleScrollSelectionHorizontalForm;

      
//not game specific package import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { CommonButtons } from '../../../../org/allbinary/input/motion/button/CommonButtons.js';
      const CommonButtons = globalThis.org.allbinary.input.motion.button.CommonButtons;

      
//not game specific package import { TouchButtonLocationHelper } from '../../../../org/allbinary/input/motion/button/TouchButtonLocationHelper.js';
      const TouchButtonLocationHelper = globalThis.org.allbinary.input.motion.button.TouchButtonLocationHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RTSScrollSelectionFormFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(formLabel: string, items: ABCustomItem[]): ScrollSelectionForm{

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    

    var touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    var menuX: number = CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE +touchButtonLocationHelper!.getColumnsRemainderHalf();;
    

    var width: number = displayInfo!.getLastWidth() -(menuX *2);;
    

    var menuRectangle: Rectangle = new Rectangle(PointFactory.getInstance()!.createXY(menuX, 16), width, CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MultipleScrollSelectionHorizontalForm.createForm(formLabel, items, menuRectangle, FormTypeFactory.getInstance()!.HORIZONTAL_FORM, 0, basicColorFactory!.BLACK, basicColorFactory!.WHITE);;
    
}


}
                
            

