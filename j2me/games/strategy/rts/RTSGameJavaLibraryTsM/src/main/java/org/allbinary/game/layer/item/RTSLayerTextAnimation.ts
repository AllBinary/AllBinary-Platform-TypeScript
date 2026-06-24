
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
















                                        
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
                
            

