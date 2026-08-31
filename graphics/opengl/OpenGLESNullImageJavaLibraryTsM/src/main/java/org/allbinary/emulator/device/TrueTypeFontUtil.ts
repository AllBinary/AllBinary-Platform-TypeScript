
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
        



            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      //not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { OpenGLESImage } from '../../../../org/allbinary/image/opengles/OpenGLESImage.js';
      //not GWT import const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TrueTypeFontUtilBase } from './TrueTypeFontUtilBase.js';

export class TrueTypeFontUtil extends TrueTypeFontUtilBase {
        

    private static readonly instance: TrueTypeFontUtil = new TrueTypeFontUtil();

    public static getInstance(): TrueTypeFontUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TrueTypeFontUtil.instance;
    
}


    public fontImage: OpenGLESImage = OpenGLESImage.NULL_OPENGL_IMAGE;

private constructor (){
            super(1);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getAsTextureSize(textureSize: number): number{



                            throw new RuntimeException();
                    
}


    public getCellSize(cellSize: number): number{



                            throw new RuntimeException();
                    
}


    public getFontBitmap(filename: string, fontSize: number, cellSize: number, basicColor: BasicColor): Image{



                            throw new RuntimeException();
                    
}


    public saveFontAtlasAsFile(){
}


    public getFontBitmapGL(gl: GL10, filename: string, cellSize: number, basicColor: BasicColor): Image{



                            throw new RuntimeException();
                    
}


    public getFontWidths(filename: string, fontSize: number): number[]{



                            throw new RuntimeException();
                    
}


}



