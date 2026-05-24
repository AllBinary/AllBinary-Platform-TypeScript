
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


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { File } from '../../../../java/io/File.js';
      
import { FileOutputStream } from '../../../../java/io/FileOutputStream.js';
      
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { Bitmap } from '../../../../android/graphics/Bitmap.js';
      
import { Canvas } from '../../../../android/graphics/Canvas.js';
      
import { Paint } from '../../../../android/graphics/Paint.js';
      
import { Rect } from '../../../../android/graphics/Rect.js';
      
import { Typeface } from '../../../../android/graphics/Typeface.js';
      
import { ResourceUtil } from '../../../../org/allbinary/data/resource/ResourceUtil.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      
import { PreResourceImageUtil } from '../../../../org/allbinary/image/PreResourceImageUtil.js';
      
import { OpenGLESImage } from '../../../../org/allbinary/image/opengles/OpenGLESImage.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { AndroidImageInterface } from '../../../../org/microemu/android/device/AndroidImageInterface.js';
      
import { AndroidImmutableImage } from '../../../../org/microemu/android/device/AndroidImmutableImage.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TrueTypeFontUtilBase } from './TrueTypeFontUtilBase.js';
//TTF
export class TrueTypeFontUtil extends TrueTypeFontUtilBase {
        

    private static readonly instance: TrueTypeFontUtil = new TrueTypeFontUtil();

    public static getInstance(): TrueTypeFontUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TrueTypeFontUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;

    private readonly realFontSize: number = 18;

    public fontImage: OpenGLESImage = OpenGLESImage.NULL_OPENGL_IMAGE;
private constructor (){
            super(1);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public saveFontAtlasAsFile(){

        try {
            
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    

    var file: File = ResourceUtil.getInstance()!.getContext()!.getFilesDir()!;
;
    

    var path: string = file.getAbsolutePath() +CanvasStrings.getInstance()!.FONT_ATLAS;
;
    
this.logUtil!.putF(path, this, commonStrings!.CONSTRUCTOR);
    

    var fos: FileOutputStream = new FileOutputStream(path);
;
    

    var bitmap: Bitmap = (getImage as AndroidImageInterface).getBitmap()!;
;
    
bitmap.compress(Bitmap.CompressFormat.PNG, 100, fos);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.EXCEPTION, e);
    
}

}


    public getFontBitmapGL(gl: GL10, filename: string, cellSize: number, basicColor: BasicColor): Image{

                        if(this.fontImage == OpenGLESImage.NULL_OPENGL_IMAGE)
                        
                                    {
                                    
    var cellsPerRow2: number = this.CELLS_PER_ROW *2;
;
    

    var cellsPerRow3: number = this.CELLS_PER_ROW *3;
;
    

    var cellsPerRow4: number = this.CELLS_PER_ROW *4;
;
    

    var cellsPerRow5: number = this.CELLS_PER_ROW *5;
;
    

    var cellsPerRow6: number = this.CELLS_PER_ROW *6;
;
    

    var cellsPerRow7: number = this.CELLS_PER_ROW *7;
;
    

    var typeface: Typeface = Typeface.DEFAULT;
;
    

    var textureSize: number = this.getAsTextureSize(this.CELLS_PER_ROW *cellSize)!;
;
    

    var bitmap: Bitmap = Bitmap.createBitmap(textureSize, textureSize, Bitmap.Config.ARGB_8888)!;
;
    

    var canvas: Canvas = new Canvas(bitmap);
;
    

    var paint: Paint = new Paint();
;
    
paint.setTypeface(typeface);
    
paint.setTextSize(this.realFontSize);
    
paint.setAlpha(Math.round(basicColor!.alpha));
    
paint.setColor(basicColor!.intValue());
    

    var biggestHeight: number = 0;
;
    

    var bounds: Rect = new Rect();
;
    

    var x: number= 0
;
    

    var y: number= 0
;
    




                        for (
    var index: number = 0;
index < this.size; index++)
        {
this.characterArray[0]= this.pattern[index];
    
paint.getTextBounds(this.characterArray, 0, 1, bounds);
    
this._characterWidth[index]= bounds.right;
    

                        if(bounds.bottom -bounds.top > biggestHeight)
                        
                                    {
                                    biggestHeight= bounds.bottom -bounds.top;
    

                                    }
                                
x= (index % this.CELLS_PER_ROW) *cellSize;
    
x += (cellSize>>1);
    
x -= (this._characterWidth[index]>>1);
    
y= 0;
    

                        if(index >= this.CELLS_PER_ROW)
                        
                                    {
                                    y += cellSize;
    

                                    }
                                

                        if(index >= cellsPerRow2)
                        
                                    {
                                    y += cellSize;
    

                                    }
                                

                        if(index >= cellsPerRow3)
                        
                                    {
                                    y += cellSize;
    

                                    }
                                

                        if(index >= cellsPerRow4)
                        
                                    {
                                    y += cellSize;
    

                                    }
                                

                        if(index >= cellsPerRow5)
                        
                                    {
                                    y += cellSize;
    

                                    }
                                

                        if(index >= cellsPerRow6)
                        
                                    {
                                    y += cellSize;
    

                                    }
                                

                        if(index >= cellsPerRow7)
                        
                                    {
                                    y += cellSize;
    

                                    }
                                
y += cellSize;
    
y -= (cellSize>>2);
    
canvas.drawText(this.characterArray, 0, 1, x -3, y -6, paint);
    
}

canvas.save();
    

    var image: Image = AndroidImmutableImage.create(bitmap)!;
;
    
this.fontImage= this.preResourceImageUtil!.encapsulate(image) as OpenGLESImage;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fontImage;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fontImage;
    

                        }
                            
}


    public getFontWidths(filename: string, fontSize: number): number[]{

    var typeface: Typeface = Typeface.DEFAULT;
;
    

    var paint: Paint = new Paint();
;
    
paint.setTypeface(typeface);
    
paint.setTextSize(fontSize);
    
paint.setARGB(255, 255, 255, 255);
    

    var bounds: Rect = new Rect();
;
    




                        for (
    var index: number = 0;
index < this.size; index++)
        {
this.characterArray[0]= this.pattern[index];
    
paint.getTextBounds(this.characterArray, 0, 1, bounds);
    

                        if(index < this.lastCapIndex)
                        
                                    {
                                    
                        if(this.characterArray[0] == '1')
                        
                                    {
                                    this._characterWidth[index]= bounds.right +3;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'J' || this.characterArray[0] == 'V' || this.characterArray[0] == '2' || this.characterArray[0] == '9' || this.characterArray[0] == 'I' || this.characterArray[0] == 'N' || this.characterArray[0] == 'U')
                        
                                    {
                                    this._characterWidth[index]= bounds.right +1;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == '4' || this.characterArray[0] == 'C' || this.characterArray[0] == 'E' || this.characterArray[0] == 'O')
                        
                                    {
                                    this._characterWidth[index]= bounds.right -2;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'B' || this.characterArray[0] == 'D' || this.characterArray[0] == 'G' || this.characterArray[0] == 'H' || this.characterArray[0] == 'T' || this.characterArray[0] == 'W')
                        
                                    {
                                    this._characterWidth[index]= bounds.right -3;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'A' || this.characterArray[0] == 'Q' || this.characterArray[0] == 'R')
                        
                                    {
                                    this._characterWidth[index]= bounds.right -5;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'M')
                        
                                    {
                                    this._characterWidth[index]= bounds.right -6;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'm')
                        
                                    {
                                    this._characterWidth[index]= bounds.right -8;
    

                                    }
                                
                        else {
                            this._characterWidth[index]= bounds.right;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(this.characterArray[0] == ' ')
                        
                                    {
                                    this._characterWidth[index]= bounds.right +10;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'l' || this.characterArray[0] == 'i' || this.characterArray[0] == 'j' || this.characterArray[0] == '.' || this.characterArray[0] == '!' || this.characterArray[0] == '|')
                        
                                    {
                                    this._characterWidth[index]= bounds.right +6;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'f' || this.characterArray[0] == 't' || this.characterArray[0] == 'u' || this.characterArray[0] == 'v')
                        
                                    {
                                    this._characterWidth[index]= bounds.right +1;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'r')
                        
                                    {
                                    this._characterWidth[index]= bounds.right +2;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'a' || this.characterArray[0] == 'b' || this.characterArray[0] == 'g' || this.characterArray[0] == 'u')
                        
                                    {
                                    this._characterWidth[index]= bounds.right -1;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'o' || this.characterArray[0] == 'e')
                        
                                    {
                                    this._characterWidth[index]= bounds.right -2;
    

                                    }
                                
                             else 
                        if(this.characterArray[0] == 'm')
                        
                                    {
                                    this._characterWidth[index]= bounds.right -7;
    

                                    }
                                
                        else {
                            this._characterWidth[index]= bounds.right;
    

                        }
                            

                        }
                            
}

this._characterWidth[0]= (fontSize>>1) -2;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this._characterWidth;
    
}


}
                
            

