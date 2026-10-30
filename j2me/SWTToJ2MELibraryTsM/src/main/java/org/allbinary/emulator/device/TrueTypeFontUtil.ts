
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL10

import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { SWT } from '../../../../org/eclipse/swt/SWT.js';
//not GWT import const SWT

import { ImageData } from '../../../../org/eclipse/swt/graphics/ImageData.js';
//not GWT import const ImageData

import { ImageLoader } from '../../../../org/eclipse/swt/graphics/ImageLoader.js';
//not GWT import const ImageLoader

import { SwtMutableImage } from '../../../../org/microemu/device/swt/SwtMutableImage.js';
//not GWT import const SwtMutableImage

import { AvianUtil } from '../../../../org/allbinary/AvianUtil.js';
//not GWT import const AvianUtil

//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
type ResourceUtil<T = any, U = any> = typeof ResourceUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ResourceUtil;

import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings

import { OpenGLCapabilities } from '../../../../org/allbinary/graphics/opengles/OpenGLCapabilities.js';
//not GWT import const OpenGLCapabilities

import { PreResourceImageUtil } from '../../../../org/allbinary/image/PreResourceImageUtil.js';
//not GWT import const PreResourceImageUtil

import { OpenGLESImage } from '../../../../org/allbinary/image/opengles/OpenGLESImage.js';
//not GWT import const OpenGLESImage

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TrueTypeFontUtilBase } from './TrueTypeFontUtilBase.js';
//sameFolderImports - not GWT import - same folder const TrueTypeFontUtilBase
//TTF
export class TrueTypeFontUtil extends TrueTypeFontUtilBase {
        

    private static readonly instance: TrueTypeFontUtil = new TrueTypeFontUtil();

    public static getInstance(): TrueTypeFontUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TrueTypeFontUtil.instance;
    
}


    private readonly preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;

    private readonly widthFloatArray: number[];

    public fontImage: OpenGLESImage = OpenGLESImage.NULL_OPENGL_IMAGE;

    private readonly widthScale: number;

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
                            
this.widthScale= ((this.scale == 2) ? 1.2f : 1f);
    
}


    public getFontBitmapGL(gl: GL10, filename: string, cellSize: number, basicColor: BasicColor): Image{

 try { 
                        if(this.fontImage == OpenGLESImage.NULL_OPENGL_IMAGE)
                        
                                    {
                                    
    let canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;;
    

    let openGLCapabilities: OpenGLCapabilities = OpenGLCapabilities.getInstance()!;;
    

                        if(openGLCapabilities!.isTextureSizeValid(1024) && this.scale == 2)
                        
                                    {
                                    
    let FONT_ATLAS_1024: string = "/font_1024.png";;
    

    let image: Image = Image.createImage(ResourceUtil.getInstance()!.getResourceAsStream(FONT_ATLAS_1024))!;;
    
image.setName(canvasStrings!.FONT_ATLAS);
    
this.fontImage= this.preResourceImageUtil!.encapsulate(image) as OpenGLESImage;
    

                                    }
                                
                             else 
                        if(openGLCapabilities!.isTextureSizeValid(512))
                        
                                    {
                                    
    let FONT_ATLAS_512: string = "/font_512.png";;
    

    let image: Image = Image.createImage(ResourceUtil.getInstance()!.getResourceAsStream(FONT_ATLAS_512))!;;
    
image.setName(canvasStrings!.FONT_ATLAS);
    
this.fontImage= this.preResourceImageUtil!.encapsulate(image) as OpenGLESImage;
    

                                    }
                                
                        else {
                            
    let FONT_ATLAS_512: string = "/font_512.png";;
    

    let image: Image = Image.createImage(ResourceUtil.getInstance()!.getResourceAsStream(FONT_ATLAS_512))!;;
    
image.setName(canvasStrings!.FONT_ATLAS);
    
this.fontImage= this.preResourceImageUtil!.encapsulate(image) as OpenGLESImage;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fontImage;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fontImage;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.EXCEPTION, e);
    



                            throw new RuntimeException();
                    

 }
   }
 
}


    public saveFontAtlasAsFile(){

    let image: Image = this.getFontBitmap(
                            null, cellSize, BasicColorFactory.getInstance()!.WHITE)!;;
    

    let imageLoader: ImageLoader = new ImageLoader();;
    

    let imageData: ImageData = image = imageimage as SwtMutableImage
image.
                    image.getImageData()!;;
    
imageData!.transparentPixel= imageData!.getPixel(0, 0);
    
imageLoader!.data= 
                                                [
                                                    imageData
                                                ];
    
imageLoader!.save(CommonSeps.getInstance()!.PERIOD +CanvasStrings.getInstance()!.FONT_ATLAS, SWT.IMAGE_PNG);
    
}


    public getFontBitmap(filename: string, cellSize: number, basicColor: BasicColor): Image{

    let cellsPerRow2: number = this.CELLS_PER_ROW *2;;
    

    let cellsPerRow3: number = this.CELLS_PER_ROW *3;;
    

    let cellsPerRow4: number = this.CELLS_PER_ROW *4;;
    

    let cellsPerRow5: number = this.CELLS_PER_ROW *5;;
    

    let cellsPerRow6: number = this.CELLS_PER_ROW *6;;
    

    let cellsPerRow7: number = this.CELLS_PER_ROW *7;;
    

    let image: Image = Image.createImage(textureSize, textureSize)!;;
    

    let graphics: Graphics = image.getGraphics()!;;
    
graphics.setColor(basicColor!.intValue());
    

    let biggestHeight: number = 0;;
    

    let bounds: Rectangle = new Rectangle(PointFactory.getInstance()!.createXY(0, 0), cellSize, cellSize);;
    

    let x: number= 0;;
    

    let y: number= 0;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
this.characterArray[0]= pattern[index];
    
_characterWidth[index]= bounds.getMaxX();
    

                        if(bounds.getMaxY() -bounds.getPoint()!.getX() > biggestHeight)
                        biggestHeight= bounds.getMaxY() -bounds.getPoint()!.getX()
x= (index % this.CELLS_PER_ROW) *cellSize;
    
x += (cellSize>>1);
    
x -= (_characterWidth[index]>>1);
    
y=  -(cellSize>>1);
    

                        if(index >= this.CELLS_PER_ROW)
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
    
graphics.drawChar(this.characterArray[0]!, x, y, 0);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public getFontWidths(filename: string, fontSize: number): number[]{

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
this.characterArray[0]= pattern[index];
    

                        if(this.characterArray[0] == ' ')
                        
                                    {
                                    _characterWidth[index]= (globalThis.Math.trunc(fontSize /4));
    

                                    }
                                
                        else {
                            
    let shortPatternIndex: number = this.shortPattern!.indexOf(this.characterArray[0]!)!;;
    

    let w: number = globalThis.Math.trunc((this.widthFloatArray[shortPatternIndex] /75)) +19;;
    
_characterWidth[index]= globalThis.Math.trunc(w);
    

                        if(this.characterArray[0] == '.' || this.characterArray[0] == '1')
                        _characterWidth[index] += 4

                        if(this.characterArray[0] >= 'a' && this.characterArray[0] < 'k')
                        _characterWidth[index] -= 2

                        if(this.characterArray[0] >= 'k' && this.characterArray[0] < 'v')
                        _characterWidth[index] -= 4

                        if(this.characterArray[0] >= 'v' && this.characterArray[0] < 'z')
                        _characterWidth[index] -= 8

                        if(this.characterArray[0] == 'D')
                        _characterWidth[index] -= 4

                        if(this.characterArray[0] >= 'A' && this.characterArray[0] <= 'Z')
                        _characterWidth[index] -= 2

                        }
                            
_characterWidth[index] *= this.widthScale;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return _characterWidth;
    
}


}

