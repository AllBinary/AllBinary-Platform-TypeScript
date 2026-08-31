
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
        
//not plain js import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { CustomTextBox } from '../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
      //not GWT import const CustomTextBox = globalThis.org.allbinary.graphics.form.item.CustomTextBox;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomTextBox2 extends CustomTextBox {
        

public constructor (cmdListener: CommandListener, label: string, text: string, maxSize: number, constraints: number, font: Font, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(cmdListener, label, text, maxSize, constraints, font, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.getTextFieldItem()!.setFocus(true);
    
}


}



