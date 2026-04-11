
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
        



import { GL } from "../../../../javax/microedition/khronos/opengles/GL.js";

    
import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { OpenGLESPostLoadPlatformImage } from "../../../../javax/microedition/lcdui/OpenGLESPostLoadPlatformImage.js";

    
import { PostLoadImageProcessor } from "../../../../javax/microedition/lcdui/PostLoadImageProcessor.js";

    
import { GraphicsStrings } from "../../../../org/allbinary/graphics/GraphicsStrings.js";

    
import { OpenGLBitmap } from "../../../../org/allbinary/graphics/OpenGLBitmap.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { PlatformBitmapBase } from "../../../../org/allbinary/platform/graphics/PlatformBitmapBase.js";

    
import { PlatformBitmapBaseFactory } from "../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js";

    
import { PlatformTextureBaseFactory } from "../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class OpenGLESImage extends Image
                , OpenGLSurfaceChangedInterface {
        

    public static readonly NULL_OPENGL_IMAGE: OpenGLESImage = new OpenGLESImage(NullCanvas.NULL_IMAGE, PlatformBitmapBaseFactory.NULL_PLATFORM_BITMAP_BASE_FACTORY, PlatformTextureBaseFactory.NULL_PLATFORM_TEXTURE_BASE_FACTORY);
        
        

    public static readonly texture2dList: BasicArrayList = new BasicArrayList();
        
        

    public static readonly TYPE: number = 4;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly textureFactory: PlatformTextureBaseFactory

    public readonly openGLBitmap: PlatformBitmapBase

    public imageProcessor: OpenGLESImageProcessor = OpenGLESImageProcessor.getInstance()!;
        
        

    public openGLESImageTranslate: OpenGLESImageTranslate = OpenGLESImageTranslate.getInstance()!;
        
        

    public readonly openGLESImageProperties: OpenGLESImageProperties = new OpenGLESImageProperties();
        
        
public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory)                        

                            : super(image.getName(), PostLoadImageProcessor.NULL_POST_LOAD_IMAGE_PROCESSOR){

            super();
                //var image = image
    //var bitmapFactory = bitmapFactory
    //var textureFactory = textureFactory


                            //For kotlin this is before the body of the constructor.
                    
this.openGLBitmap= bitmapFactory!.createBitmap(image);
    
this.textureFactory= textureFactory;
    
OpenGLImageCacheFactory.getInstance()!.init(this);
    
this.platformImage= OpenGLESPostLoadPlatformImage.getInstance();
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.openGLBitmap!.getHeight() *this.openGLESImageProperties!.scaleY2).toInt();
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.openGLBitmap!.getWidth() *this.openGLESImageProperties!.scaleX2).toInt();
    
}


                //@Throws(Error::class)
            
    public set(gl: GL){
var gl = gl



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


    initTexture(gl: GL10): boolean{
var gl = gl

                        if(!texture2dList!.contains(this);

                        )
                        
                                    {
                                    texture2dList!.add(this);
    

    var textures: number[] = new Array(1);
        
        
;
    
gl.glEnable(GL10.GL_TEXTURE_2D);
    

                        if(this.openGLESImageProperties!.textureID !=  -1)
                        
                                    {
                                    textures[0]= this.openGLESImageProperties!.textureID;
    
gl.glDeleteTextures(1, textures, 0);
    

                                    }
                                
gl.glGenTextures(1, textures, 0);
    
this.openGLESImageProperties!.textureID= textures[0]!;
    
gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties!.textureID);
    
gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);
    
gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_CLAMP_TO_EDGE);
    
gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_CLAMP_TO_EDGE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public drawRegion(gl: GL10, viewHeight: number, x_src: number, y_src: number, width: number, height: number, x: number, y: number, z: number){
var gl = gl
var viewHeight = viewHeight
var x_src = x_src
var y_src = y_src
var width = width
var height = height
var x = x
var y = y
var z = z
}


    public draw(gl: GL10, x: number, y: number, z: number){
var gl = gl
var x = x
var y = y
var z = z
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TYPE;
    
}


    public toString(): string{

    var graphicsStrings: GraphicsStrings = GraphicsStrings.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(this.getName())!.append(super.toString())!.append(graphicsStrings!.OPACITY)!.appendfloat(this.openGLESImageProperties!.alphaf)!.toString();

                        ;
    
}


}
                
            

