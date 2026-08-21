
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
        



import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Paintable } from './Paintable.js';

export class SimpleTextPaintable extends Paintable implements UpdateMyFontInterface {
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    private text: string;

    private basicColor: BasicColor;

    private topScoresWidth: number = 0;

    private fontHeight: number = 0;

    private anchor: number = Anchor.TOP_LEFT;

public constructor (text: string, basicColor: BasicColor){

            super();
        this.text= text;
    
this.basicColor= basicColor;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.topScoresWidth= (font.stringWidth(this.text)>>1);
    
this.fontHeight= font.getHeight();
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    var width: number = this.displayInfoSingleton!.getLast()[this.displayInfoSingleton!.WIDTH]!;;
    
graphics.setColor(this.getBasicColorP()!.intValue());
    
graphics.drawString(this.text, (width>>1) -this.topScoresWidth, this.fontHeight, this.anchor);
    
}


    public setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
}


    getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


    public setText(text: string){
this.text= text;
    
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public getText(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.text;
    
}


}
                
            

