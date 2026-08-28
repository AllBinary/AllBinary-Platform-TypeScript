
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { CustomTextBox } from '../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
      const CustomTextBox = globalThis.org.allbinary.graphics.form.item.CustomTextBox;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomTextBox2 extends CustomTextBox {
        

public constructor (cmdListener: CommandListener, label: string, text: string, maxSize: number, constraints: number, font: Font, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(cmdListener, label, text, maxSize, constraints, font, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.getTextFieldItem()!.setFocus(true);
    
}


}



