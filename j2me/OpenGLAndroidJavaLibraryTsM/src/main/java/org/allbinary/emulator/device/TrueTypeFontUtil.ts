
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
        



import { File } from "../../../../java/io/File.js";

    
import { FileOutputStream } from "../../../../java/io/FileOutputStream.js";

    
import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Bitmap } from "../../../../android/graphics/Bitmap.js";

    
import { Canvas } from "../../../../android/graphics/Canvas.js";

    
import { Paint } from "../../../../android/graphics/Paint.js";

    
import { Rect } from "../../../../android/graphics/Rect.js";

    
import { Typeface } from "../../../../android/graphics/Typeface.js";

    
import { ResourceUtil } from "../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { PreResourceImageUtil } from "../../../../org/allbinary/image/PreResourceImageUtil.js";

    
import { OpenGLESImage } from "../../../../org/allbinary/image/opengles/OpenGLESImage.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { AndroidImageInterface } from "../../../../org/microemu/android/device/AndroidImageInterface.js";

    
import { AndroidImmutableImage } from "../../../../org/microemu/android/device/AndroidImmutableImage.js";

    

import { CompressFormat } from "./CompressFormat.js";

import { Config } from "./Config.js";

export class TrueTypeFontUtil extends TrueTypeFontUtilBase {
        

    private static readonly instance: TrueTypeFontUtil = new TrueTypeFontUtil();
        
        

    public static getInstance(): TrueTypeFontUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;
        
        

    private readonly realFontSize: number = 18;
        
        

    public fontImage: OpenGLESImage = OpenGLESImage.NULL_OPENGL_IMAGE;
        
        
private constructor ()                        

                            : super(1){

            super();
            

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
    

    var bitmap: Bitmap = 
                                    (getImage as AndroidImageInterface).getBitmap()!;
        
        
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


    public getFontBitmap(gl: GL10, filename: string, cellSize: number, basicColor: BasicColor): Image{
    //var gl = gl
    //var filename = filename
    //var cellSize = cellSize
    //var basicColor = basicColor

                        if(this.fontImage == OpenGLESImage.NULL_OPENGL_IMAGE)
                        
                                    {
                                    
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
    

    var typeface: Typeface = Typeface.DEFAULT;
        
        
;
    

    var textureSize: number = this.getAsTextureSize(CELLS_PER_ROW *cellSize)!;
        
        
;
    

    var bitmap: Bitmap = Bitmap.createBitmap(textureSize, textureSize, Bitmap.Config.ARGB_8888)!;
        
        
;
    

    var canvas: Canvas = new Canvas(bitmap);
        
        
;
    

    var paint: Paint = new Paint();
        
        
;
    
paint.setTypeface(typeface);
    
paint.setTextSize(realFontSize.toFloat());
    
paint.setAlpha(basicColor!.alpha.toInt());
    
paint.setColor(basicColor!.toInt());
    

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
        
        
index < size; index++)
        {
characterArray[0]= pattern[index];
    
paint.getTextBounds(characterArray, 0, 1, bounds);
    
_characterWidth[index]= bounds.right;
    

                        if(bounds.bottom -bounds.top > biggestHeight)
                        
                                    {
                                    biggestHeight= bounds.bottom -bounds.top;
    

                                    }
                                
x= (index % CELLS_PER_ROW) *cellSize;
    
x += (cellSize shr 1);
    
x -= (_characterWidth[index] shr 1);
    
y= 0;
    

                        if(index >= CELLS_PER_ROW)
                        
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
    
y -= (cellSize shr 2);
    
canvas.drawText(characterArray, 0, 1, x.toFloat() -3, y.toFloat() -6, paint);
    
}

canvas.save();
    

    var image: Image = AndroidImmutableImage.create(bitmap)!;
        
        
;
    
this.fontImage= this.preResourceImageUtil!.encapsulate(image);

                         as OpenGLESImage;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fontImage;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fontImage;
    

                        }
                            
}


    public getFontWidths(filename: string, fontSize: number): number[]{
    //var filename = filename
    //var fontSize = fontSize

    var typeface: Typeface = Typeface.DEFAULT;
        
        
;
    

    var paint: Paint = new Paint();
        
        
;
    
paint.setTypeface(typeface);
    
paint.setTextSize(fontSize.toFloat());
    
paint.setARGB(255, 255, 255, 255);
    

    var bounds: Rect = new Rect();
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
characterArray[0]= pattern[index];
    
paint.getTextBounds(characterArray, 0, 1, bounds);
    

                        if(index < lastCapIndex)
                        
                                    {
                                    
                        if(characterArray[0] == '1')
                        
                                    {
                                    _characterWidth[index]= bounds.right +3;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'J' || characterArray[0] == 'V' || characterArray[0] == '2' || characterArray[0] == '9' || characterArray[0] == 'I' || characterArray[0] == 'N' || characterArray[0] == 'U')
                        
                                    {
                                    _characterWidth[index]= bounds.right +1;
    

                                    }
                                
                             else 
                        if(characterArray[0] == '4' || characterArray[0] == 'C' || characterArray[0] == 'E' || characterArray[0] == 'O')
                        
                                    {
                                    _characterWidth[index]= bounds.right -2;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'B' || characterArray[0] == 'D' || characterArray[0] == 'G' || characterArray[0] == 'H' || characterArray[0] == 'T' || characterArray[0] == 'W')
                        
                                    {
                                    _characterWidth[index]= bounds.right -3;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'A' || characterArray[0] == 'Q' || characterArray[0] == 'R')
                        
                                    {
                                    _characterWidth[index]= bounds.right -5;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'M')
                        
                                    {
                                    _characterWidth[index]= bounds.right -6;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'm')
                        
                                    {
                                    _characterWidth[index]= bounds.right -8;
    

                                    }
                                
                        else {
                            _characterWidth[index]= bounds.right;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(characterArray[0] == ' ')
                        
                                    {
                                    _characterWidth[index]= bounds.right +10;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'l' || characterArray[0] == 'i' || characterArray[0] == 'j' || characterArray[0] == '.' || characterArray[0] == '!' || characterArray[0] == '|')
                        
                                    {
                                    _characterWidth[index]= bounds.right +6;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'f' || characterArray[0] == 't' || characterArray[0] == 'u' || characterArray[0] == 'v')
                        
                                    {
                                    _characterWidth[index]= bounds.right +1;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'r')
                        
                                    {
                                    _characterWidth[index]= bounds.right +2;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'a' || characterArray[0] == 'b' || characterArray[0] == 'g' || characterArray[0] == 'u')
                        
                                    {
                                    _characterWidth[index]= bounds.right -1;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'o' || characterArray[0] == 'e')
                        
                                    {
                                    _characterWidth[index]= bounds.right -2;
    

                                    }
                                
                             else 
                        if(characterArray[0] == 'm')
                        
                                    {
                                    _characterWidth[index]= bounds.right -7;
    

                                    }
                                
                        else {
                            _characterWidth[index]= bounds.right;
    

                        }
                            

                        }
                            
}

_characterWidth[0]= (fontSize shr 1) -2;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return _characterWidth;
    
}


}
                
            

