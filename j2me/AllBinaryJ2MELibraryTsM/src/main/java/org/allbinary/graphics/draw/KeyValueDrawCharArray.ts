
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
        
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { CharArrayFactory } from '../../../../org/allbinary/logic/java/character/CharArrayFactory.js';
      //not GWT import const CharArrayFactory = globalThis.org.allbinary.logic.java.character.CharArrayFactory;

      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      //not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class KeyValueDrawCharArray
            extends Object
         implements UpdateMyFontInterface {
        

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private readonly LABEL: string;

    private labelX: number;

    private valueX: number= 0;

    private value: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;

    private len: number= 0;

public constructor (label: string, x: number){

            super();
        this.LABEL= label;
    
this.labelX= x;
    
}


    public updateMeasurement(graphics: Graphics){

    var labelWidth: number = graphics.getFont()!.stringWidth(this.LABEL) -this.LABEL.length;;
    
this.valueX= labelWidth +this.labelX;
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public paint(graphics: Graphics, y: number){
this.myFontProcessor!.process(graphics);
    
graphics.drawString(this.LABEL, this.labelX, y, 0);
    
graphics.drawChars(this.value, 0, this.len, this.valueX, y, 0);
    
}


    public update(value: string[], len: number){
this.value= value;
    
this.len= len;
    
}


}



