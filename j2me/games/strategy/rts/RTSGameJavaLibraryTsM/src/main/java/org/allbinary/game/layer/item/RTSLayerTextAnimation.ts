
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RTSLayerTextAnimation extends Animation {
        

    private readonly myFont: MyFont = MyFont.getInstance()!;
        
        

    private readonly image: Image

    private readonly text: string
public constructor (text: string, image: Image){

            super();
                //var text = text
    //var image = image
this.text= text;
    
this.image= image;
    
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
super.paint(graphics, x, y);
    

    var adjustedCostY: number = image.getHeight() -this.myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    
graphics.drawString(text, x, y +adjustedCostY, 0);
    
}


}
                
            

