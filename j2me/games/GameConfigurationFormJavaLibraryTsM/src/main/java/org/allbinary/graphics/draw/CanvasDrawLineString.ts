
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
        
//not game specific package import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DrawStringUtil } from './DrawStringUtil.js';

export class CanvasDrawLineString
            extends Object
         implements UpdateMyFontInterface {
        

    public static readonly NULL_CANVAS_DRAW_LINE_STRING: CanvasDrawLineString = new CanvasDrawLineString(0, 0);

    private readonly drawStringUtil: DrawStringUtil = DrawStringUtil.getInstance()!;

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private x: number;

    private y: number;

    private fontHeight: number = 0;

public constructor (x: number, y: number){

            super();
        this.x= x;
    
this.y= y;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.fontHeight= font.getHeight();
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public paint(graphics: Graphics, string: string, line: number){
this.myFontProcessor!.process(graphics);
    
this.drawStringUtil!.drawCenterString(graphics, string, 0, string.length, this.x, this.y +(line *this.fontHeight));
    
}


}
                
            

