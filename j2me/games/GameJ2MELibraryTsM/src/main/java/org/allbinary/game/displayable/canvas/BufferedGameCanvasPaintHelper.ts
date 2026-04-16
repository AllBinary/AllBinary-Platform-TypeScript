
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { Anchor } from "../../../../../org/allbinary/graphics/Anchor.js";

    
import { MyCanvas } from "../../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { ProcessPaintable } from "../../../../../org/allbinary/graphics/paint/ProcessPaintable.js";

    
import { CircularIndexUtil } from "../../../../../org/allbinary/util/CircularIndexUtil.js";

    

import {  } from "./.js";

export class BufferedGameCanvasPaintHelper extends ProcessPaintable {
        

    private static readonly MAX_IMAGES: number = 4;
        
        

    private gameCanvas: Canvas = NullCanvas.NULL_CANVAS;
        
        

    private readonly offScreenImage: Image[] = new Array(MAX_IMAGES);
        
        

    private previousImage: Image = NullCanvas.NULL_IMAGE;
        
        

    private readonly circularIndexUtil: CircularIndexUtil = CircularIndexUtil.getInstance(MAX_IMAGES)!;
        
        

    private readonly drawCircularIndexUtil: CircularIndexUtil = CircularIndexUtil.getInstance(MAX_IMAGES -1, MAX_IMAGES)!;
        
        
public constructor (gameCanvas: AllBinaryGameCanvas){

            super();
            var gameCanvas = gameCanvas



                            throw new Error("No Longer Used")
}


    public process(){

    var myCanvas: MyCanvas = (this.gameCanvas as MyCanvas);
        
        
;
    
myCanvas!.draw(this.offScreenImage[this.circularIndexUtil!.getIndex()]!.getGraphics());
    
this.circularIndexUtil!.next();
    
this.drawCircularIndexUtil!.next();
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
var graphics = graphics
this.previousImage= this.offScreenImage[this.drawCircularIndexUtil!.getIndex()]!;
    
graphics.drawImage(this.previousImage, 0, 0, anchor);
    
}


}
                
            

