
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
        
import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { CustomTextBox } from '../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomTextBox2 extends CustomTextBox {
        

public constructor (cmdListener: CommandListener, label: string, text: string, maxSize: number, constraints: number, font: Font, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(cmdListener, label, text, maxSize, constraints, font, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.getTextFieldItem()!.setFocus(true);
    
}


}
                
            

