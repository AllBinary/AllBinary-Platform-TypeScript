
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
        



import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { SWT } from "../../../../org/eclipse/swt/SWT.js";

    
import { ImageData } from "../../../../org/eclipse/swt/graphics/ImageData.js";

    
import { ImageLoader } from "../../../../org/eclipse/swt/graphics/ImageLoader.js";

    
import { SwtMutableImage } from "../../../../org/microemu/device/swt/SwtMutableImage.js";

    
import { AvianUtil } from "../../../../org/allbinary/AvianUtil.js";

    
import { ResourceUtil } from "../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { OpenGLCapabilities } from "../../../../org/allbinary/graphics/opengles/OpenGLCapabilities.js";

    
import { PreResourceImageUtil } from "../../../../org/allbinary/image/PreResourceImageUtil.js";

    
import { OpenGLESImage } from "../../../../org/allbinary/image/opengles/OpenGLESImage.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TrueTypeFontUtilBase } from "./TrueTypeFontUtilBase.js";

export class TrueTypeFontUtil extends TrueTypeFontUtilBase {
        

    private static readonly instance: TrueTypeFontUtil = new TrueTypeFontUtil();
        
        

    public static getInstance(): TrueTypeFontUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;
        
        

    private readonly widthFloatArray: number[]

    public fontImage: OpenGLESImage = OpenGLESImage.NULL_OPENGL_IMAGE;
        
        

    private readonly widthScale: number
private constructor (){
            super(2);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(AvianUtil.isAvian())
                        
                                    {
                                    this.widthFloatArray= new Array();
    

                                    }
                                
                        else {
                            this.widthFloatArray= new Array();
    

                        }
                            
this.widthScale= (this.scale == 2)
                        ?       
                                
                                        //Otherwise - thenExpr - DoubleLiteralExpr

                                :

                            
                                        //Otherwise - expression - elseExpr - DoubleLiteralExpr
;

    ;
    
}


    public getFontBitmap(gl: GL10, filename: string, cellSize: number, basicColor: BasicColor): Image{
    //var gl = gl
    //var filename = filename
    //var cellSize = cellSize
    //var basicColor = basicColor

        try {
            
                        if(this.fontImage == OpenGLESImage.NULL_OPENGL_IMAGE)
                        
                                    {
                                    
    var canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        
;
    

    var openGLCapabilities: OpenGLCapabilities = OpenGLCapabilities.getInstance()!;
        
        
;
    

                        if(openGLCapabilities!.isTextureSizeValid(1024) && this.scale == 2)
                        
                                    {
                                    
    var FONT_ATLAS_1024: string = "/font_1024.png";
        
        
;
    

    var image: Image = Image.createImage(ResourceUtil.getInstance()!.getResourceAsStream(FONT_ATLAS_1024))!;
        
        
;
    
image.setName(canvasStrings!.FONT_ATLAS);
    
this.fontImage= this.preResourceImageUtil!.encapsulate(image);

                         as OpenGLESImage;
    

                                    }
                                
                             else 
                        if(openGLCapabilities!.isTextureSizeValid(512))
                        
                                    {
                                    
    var FONT_ATLAS_512: string = "/font_512.png";
        
        
;
    

    var image: Image = Image.createImage(ResourceUtil.getInstance()!.getResourceAsStream(FONT_ATLAS_512))!;
        
        
;
    
image.setName(canvasStrings!.FONT_ATLAS);
    
this.fontImage= this.preResourceImageUtil!.encapsulate(image);

                         as OpenGLESImage;
    

                                    }
                                
                        else {
                            
    var FONT_ATLAS_512: string = "/font_512.png";
        
        
;
    

    var image: Image = Image.createImage(ResourceUtil.getInstance()!.getResourceAsStream(FONT_ATLAS_512))!;
        
        
;
    
image.setName(canvasStrings!.FONT_ATLAS);
    
this.fontImage= this.preResourceImageUtil!.encapsulate(image);

                         as OpenGLESImage;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fontImage;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fontImage;
    

                        }
                            

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.EXCEPTION, e);
    



                            throw new RuntimeException()
}

}


    public saveFontAtlasAsFile(){

    var image: Image = this.getFontBitmap2(
                            null, cellSize, BasicColorFactory.getInstance()!.WHITE)!;
        
        
;
    

    var imageLoader: ImageLoader = new ImageLoader();
        
        
;
    

    var imageData: ImageData = image = imageimage as SwtMutableImage
image.
                    image.getImageData()!;
        
        
;
    
imageData!.transparentPixel= imageData!.getPixel(0, 0);
    
imageLoader!.data= 
                                                [
                                                    imageData;
        
        
                                                ];
    
imageLoader!.save(CommonSeps.getInstance()!.PERIOD +CanvasStrings.getInstance()!.FONT_ATLAS, SWT.IMAGE_PNG);
    
}


    public getFontBitmap2(filename: string, cellSize: number, basicColor: BasicColor): Image{
    //var filename = filename
    //var cellSize = cellSize
    //var basicColor = basicColor

    var cellsPerRow2: number = CELLS_PER_ROW *2;
        
        
;
    

    var cellsPerRow3: number = CELLS_PER_ROW *3;
        
        
;
    

    var cellsPerRow4: number = CELLS_PER_ROW *4;
        
        
;
    

    var cellsPerRow5: number = CELLS_PER_ROW *5;
        
        
;
    

    var cellsPerRow6: number = CELLS_PER_ROW *6;
        
        
;
    

    var cellsPerRow7: number = CELLS_PER_ROW *7;
        
        
;
    

    var image: Image = Image.createImage(textureSize, textureSize)!;
        
        
;
    

    var graphics: Graphics = image.getGraphics()!;
        
        
;
    
graphics.setColor(basicColor!.toInt());
    

    var biggestHeight: number = 0;
        
        
;
    

    var bounds: Rectangle = new Rectangle(PointFactory.getInstance()!.getInstance(0, 0), cellSize, cellSize);
        
        
;
    

    var x: number= 0
;
    

    var y: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
characterArray[0]= pattern[index];
    
_characterWidth[index]= bounds.getMaxX();
    

                        if(bounds.getMaxY() -bounds.getPoint()!.getX() > biggestHeight)
                        biggestHeight= bounds.getMaxY() -bounds.getPoint()!.getX()
x= (index % CELLS_PER_ROW) *cellSize;
    
x += (cellSize>>1);
    
x -= (_characterWidth[index]>>1);
    
y=  -(cellSize>>1);
    

                        if(index >= CELLS_PER_ROW)
                        y += cellSize

                        if(index >= cellsPerRow2)
                        y += cellSize

                        if(index >= cellsPerRow3)
                        y += cellSize

                        if(index >= cellsPerRow4)
                        y += cellSize

                        if(index >= cellsPerRow5)
                        y += cellSize

                        if(index >= cellsPerRow6)
                        y += cellSize

                        if(index >= cellsPerRow7)
                        y += cellSize
y += cellSize;
    
y -= (cellSize>>2);
    
graphics.drawChar(characterArray[0]!, x, y, 0);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public getFontWidths(filename: string, fontSize: number): number[]{
var filename = filename
var fontSize = fontSize

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
characterArray[0]= pattern[index];
    

                        if(characterArray[0] == ' ')
                        
                                    {
                                    _characterWidth[index]= (fontSize /4);
    

                                    }
                                
                        else {
                            
    var shortPatternIndex: number = this.shortPattern!.indexOf(characterArray[0]!)!;
        
        
;
    

    var w: number = (widthFloatArray[shortPatternIndex] /75) +19;
        
        
;
    
_characterWidth[index]= w;
    

                        if(characterArray[0] == '.' || characterArray[0] == '1')
                        _characterWidth[index] += 4

                        if(characterArray[0] >= 'a' && characterArray[0] < 'k')
                        _characterWidth[index] -= 2

                        if(characterArray[0] >= 'k' && characterArray[0] < 'v')
                        _characterWidth[index] -= 4

                        if(characterArray[0] >= 'v' && characterArray[0] < 'z')
                        _characterWidth[index] -= 8

                        if(characterArray[0] == 'D')
                        _characterWidth[index] -= 4

                        if(characterArray[0] >= 'A' && characterArray[0] <= 'Z')
                        _characterWidth[index] -= 2

                        }
                            
_characterWidth[index] *= this.widthScale;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return _characterWidth;
    
}


}
                
            

