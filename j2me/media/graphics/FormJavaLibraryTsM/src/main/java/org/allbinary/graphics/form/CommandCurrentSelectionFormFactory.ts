
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { TouchFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/TouchFeatureFactory.js';
      const TouchFeatureFactory = globalThis.org.allbinary.game.configuration.feature.TouchFeatureFactory;

      
//not game specific package import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScrollSelectionFormNoneFactory } from './ScrollSelectionFormNoneFactory.js';
import { CommandCurrentSelectionForm } from './CommandCurrentSelectionForm.js';
import { ScrollSelectionForm } from './ScrollSelectionForm.js';
import { FormType } from './FormType.js';

export class CommandCurrentSelectionFormFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(title: string, items: ABCustomItem[], rectangle: Rectangle, formType: FormType, border: number, moveForSmallScreen: boolean, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor): ScrollSelectionForm{

                        if(Features.getInstance()!.isFeature(TouchFeatureFactory.getInstance()!.TOUCH_ENABLED))
                        
                                    {
                                    
    var scrollSelectionForm: ScrollSelectionForm = new CommandCurrentSelectionForm(title, items, border, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor);;
    
scrollSelectionForm!.init(rectangle, formType);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scrollSelectionForm;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ScrollSelectionFormNoneFactory.getInstance();;
    

                        }
                            
}


}
                
            

