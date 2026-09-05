
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

        


//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //SWTToJ2ME
export class AboutPaintable extends Paintable implements UpdateMyFontInterface {
        

    public static getInstance(info: string[], developers: string[]): AboutPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AboutPaintable(info, developers);
    
}


    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly ABOUT: string = CanvasStrings.getInstance()!.ABOUT;

    private readonly info: string[];

    private readonly developers: string[];

    private readonly paintableArray: Paintable[] = 
                                                        [
                                                            this
                                                        ];

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private charHeight: number= 0;

    private aboutBeginWidth: number= 0;

    private infoBeginWidth: number[];

    private developersBeginWidth: number[];

    private anchor: number = Anchor.TOP_LEFT;

private constructor (info: string[], developers: string[]){

            super();
        this.info= info;
    
this.infoBeginWidth= new Array(this.info.length);
    
this.developers= developers;
    
this.developersBeginWidth= new Array(this.developers.length);
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.charHeight= font.getHeight();
    
this.aboutBeginWidth= (font.stringWidth(this.ABOUT)>>1);
    

    var infoSize: number = this.info.length
                ;;
    




                        for (
    var index: number = 0;index < infoSize; index++)
        {
this.infoBeginWidth[index]= (font.stringWidth(this.info[index]!)>>1);
    
}


    var size: number = this.developers.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.developersBeginWidth[index]= (font.stringWidth(this.developers[index]!)>>1);
    
}

this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public getPaintableArrayInstance(): Paintable[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paintableArray;
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    var halfWidth: number = this.displayInfoSingleton!.getLastHalfWidth()!;;
    
graphics.drawString(this.ABOUT, halfWidth -this.aboutBeginWidth, 2 *this.charHeight, this.anchor);
    

    var infoSize: number = this.info.length
                ;;
    




                        for (
    var index: number = 0;index < infoSize; index++)
        {
graphics.drawString(this.info[index]!, halfWidth -this.infoBeginWidth[index], (4 +index) *this.charHeight, this.anchor);
    
}


    var size: number = this.developers.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
graphics.drawString(this.developers[index]!, halfWidth -this.developersBeginWidth[index], (5 +infoSize +index) *this.charHeight, this.anchor);
    
}

}


}



