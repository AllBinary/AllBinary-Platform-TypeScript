
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

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { OpenGLESImage } from "../../../../org/allbinary/image/opengles/OpenGLESImage.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TrueTypeFontUtilBase } from "./TrueTypeFontUtilBase.js";

export class TrueTypeFontUtil extends TrueTypeFontUtilBase {
        

    private static readonly instance: TrueTypeFontUtil = new TrueTypeFontUtil();
        
        

    public static getInstance(): TrueTypeFontUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public fontImage: OpenGLESImage = OpenGLESImage.NULL_OPENGL_IMAGE;
        
        
private constructor (){
            super(1);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getAsTextureSize(textureSize: number): number{
var textureSize = textureSize



                            throw new RuntimeException()
}


    public getCellSize(cellSize: number): number{
var cellSize = cellSize



                            throw new RuntimeException()
}


    public getFontBitmap(filename: string, fontSize: number, cellSize: number, basicColor: BasicColor): Image{
    //var filename = filename
    //var fontSize = fontSize
    //var cellSize = cellSize
    //var basicColor = basicColor



                            throw new RuntimeException()
}


    public saveFontAtlasAsFile(){
}


    public getFontBitmap(gl: GL10, filename: string, cellSize: number, basicColor: BasicColor): Image{
    //var gl = gl
    //var filename = filename
    //var cellSize = cellSize
    //var basicColor = basicColor



                            throw new RuntimeException()
}


    public getFontWidths(filename: string, fontSize: number): number[]{
    //var filename = filename
    //var fontSize = fontSize



                            throw new RuntimeException()
}


}
                
            

