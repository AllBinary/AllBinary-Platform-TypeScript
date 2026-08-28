
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { NullCanvas } from '../../../../../javax/microedition/lcdui/NullCanvas.js';
      const NullCanvas = globalThis.javax.microedition.lcdui.NullCanvas;

      
//not game specific package import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
      const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
//not game specific package import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
      const ProcessPaintable = globalThis.org.allbinary.graphics.paint.ProcessPaintable;

      
//not game specific package import { CircularIndexUtil } from '../../../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class BufferedGameCanvasPaintHelper extends ProcessPaintable {
        

    private static readonly MAX_IMAGES: number = 4;

    private gameCanvas: Canvas = NullCanvas.NULL_CANVAS;

    private readonly offScreenImage: Image[] = new Array(BufferedGameCanvasPaintHelper.MAX_IMAGES);

    private previousImage: Image = NullImage.NULL_IMAGE;

    private readonly circularIndexUtil: CircularIndexUtil = CircularIndexUtil.createInstance(BufferedGameCanvasPaintHelper.MAX_IMAGES)!;

    private readonly drawCircularIndexUtil: CircularIndexUtil = CircularIndexUtil.createInstanceAt(BufferedGameCanvasPaintHelper.MAX_IMAGES -1, BufferedGameCanvasPaintHelper.MAX_IMAGES)!;

public constructor (gameCanvas: AllBinaryGameCanvas){

            super();
        


                            throw new Exception("No Longer Used");
                    
}


    public process(){

    var myCanvas: MyCanvas = (this.gameCanvas as MyCanvas);;
    
myCanvas!.draw(this.offScreenImage[this.circularIndexUtil!.getIndex()]!.getGraphics());
    
this.circularIndexUtil!.next();
    
this.drawCircularIndexUtil!.next();
    
}


    private anchor: number = Anchor.TOP_LEFT;

    public paint(graphics: Graphics){
this.previousImage= this.offScreenImage[this.drawCircularIndexUtil!.getIndex()]!;
    
graphics.drawImage(this.previousImage, 0, 0, this.anchor);
    
}


}



