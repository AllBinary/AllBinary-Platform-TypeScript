
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      //not GWT import const Font = globalThis.javax.microedition.lcdui.Font;

      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      //not GWT import const Image = globalThis.javax.microedition.lcdui.Image;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      //not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RTSLayerTextAnimation extends Animation implements UpdateMyFontInterface {
        

    private readonly image: Image;

    private readonly text: string;

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private fontHeight: number = 0;

public constructor (text: string, image: Image){

            super();
        this.text= text;
    
this.image= image;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.fontHeight= font.getHeight();
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.myFontProcessor!.process(graphics);
    
super.paintXY(graphics, x, y);
    

    var adjustedCostY: number = this.image.getHeight() -this.fontHeight;;
    
graphics.drawString(this.text, x, y +adjustedCostY, 0);
    
}


}



