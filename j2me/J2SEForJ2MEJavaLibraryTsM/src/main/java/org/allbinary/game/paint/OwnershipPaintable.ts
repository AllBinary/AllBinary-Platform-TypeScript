
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
        



//not game specific package import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not game specific package import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //J2SEForJ2ME
export class OwnershipPaintable extends Paintable implements UpdateMyFontInterface {
        

    public static getInstance(): OwnershipPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OwnershipPaintable();
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private readonly COPYRIGHT: string = "AllBinary Copyright (c) 2011";

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;

    private color: number = this.basicColor!.intValue()!;

    private anchor: number = Anchor.TOP_LEFT;

    private COPYRIGHT_Y: number= 0;

    private beginWidth: number= 0;

private constructor (){

            super();
        }


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.COPYRIGHT_Y= 2 *font.getHeight();
    
this.beginWidth= (font.stringWidth(this.COPYRIGHT)>>1);
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
this.color= basicColor!.intValue();
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
graphics.setColor(this.color);
    

    var halfWidth: number = this.displayInfo!.getLastHalfWidth()!;;
    

    var height: number = this.displayInfo!.getLastHeight()!;;
    
graphics.drawString(this.COPYRIGHT, halfWidth -this.beginWidth, height -COPYRIGHT_Y, this.anchor);
    
}


}



