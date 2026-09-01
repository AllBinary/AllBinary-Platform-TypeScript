
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
        
import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      //not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      //not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      //not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { OpenGLESPostLoadPlatformImage } from '../../../../javax/microedition/lcdui/OpenGLESPostLoadPlatformImage.js';
      //not GWT import const OpenGLESPostLoadPlatformImage = globalThis.javax.microedition.lcdui.OpenGLESPostLoadPlatformImage;

      
//not plain js import { PostLoadImageProcessor } from '../../../../javax/microedition/lcdui/PostLoadImageProcessor.js';
      const PostLoadImageProcessor = globalThis.javax.microedition.lcdui.PostLoadImageProcessor;

      
import { GraphicsStrings } from '../../../../org/allbinary/graphics/GraphicsStrings.js';
      //not GWT import const GraphicsStrings = globalThis.org.allbinary.graphics.GraphicsStrings;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { PlatformBitmapBase } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBase.js';
      //not GWT import const PlatformBitmapBase = globalThis.org.allbinary.platform.graphics.PlatformBitmapBase;

      
import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
      //not GWT import const PlatformBitmapBaseFactory = globalThis.org.allbinary.platform.graphics.PlatformBitmapBaseFactory;

      
import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
      //not GWT import const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLSurfaceChangedInterface } from './OpenGLSurfaceChangedInterface.js';
//not GWT import const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;

                //not plain js import { OpenGLESImageProcessor } from './OpenGLESImageProcessor.js';
const OpenGLESImageProcessor = globalThis.org.allbinary.image.opengles.OpenGLESImageProcessor;

                //not plain js import { OpenGLESImageTranslate } from './OpenGLESImageTranslate.js';
const OpenGLESImageTranslate = globalThis.org.allbinary.image.opengles.OpenGLESImageTranslate;

                //not plain js import { OpenGLESImageProperties } from './OpenGLESImageProperties.js';
const OpenGLESImageProperties = globalThis.org.allbinary.image.opengles.OpenGLESImageProperties;

                import { OpenGLImageCacheFactory } from './OpenGLImageCacheFactory.js';
//not GWT import const OpenGLImageCacheFactory = globalThis.org.allbinary.image.opengles.OpenGLImageCacheFactory;

                //OpenGLESSWTJOGLImageJavaLibrary
export class OpenGLESImage extends Image implements OpenGLSurfaceChangedInterface {
        

    public static readonly NULL_OPENGL_IMAGE: OpenGLESImage = new OpenGLESImage(NullImage.NULL_IMAGE, PlatformBitmapBaseFactory.NULL_PLATFORM_BITMAP_BASE_FACTORY, PlatformTextureBaseFactory.NULL_PLATFORM_TEXTURE_BASE_FACTORY);

    public static readonly texture2dList: BasicArrayList = new BasicArrayListD();

    public static readonly TYPE: number = 4;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly textureFactory: PlatformTextureBaseFactory;

    public readonly openGLBitmap: PlatformBitmapBase;

    public imageProcessor: OpenGLESImageProcessor = OpenGLESImageProcessor.getInstance()!;

    public openGLESImageTranslate: OpenGLESImageTranslate = OpenGLESImageTranslate.getInstance()!;

    public readonly openGLESImageProperties: OpenGLESImageProperties = new OpenGLESImageProperties();

public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory){
            super(image.getName(), PostLoadImageProcessor.NULL_POST_LOAD_IMAGE_PROCESSOR);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.openGLBitmap= bitmapFactory!.createBitmap(image);
    
this.textureFactory= textureFactory;
    
OpenGLImageCacheFactory.getInstance()!.init(this);
    
this.platformImage= OpenGLESPostLoadPlatformImage.getInstance();
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round((this.openGLBitmap!.getHeight() *this.openGLESImageProperties!.scaleY2));
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round((this.openGLBitmap!.getWidth() *this.openGLESImageProperties!.scaleX2));
    
}


                //@Throws(Exception.constructor)
            
    public set(gl: GL){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    initTexture(gl: GL10): boolean{

                        if(!OpenGLESImage.texture2dList!.contains(this))
                        
                                    {
                                    OpenGLESImage.texture2dList!.add(this);
    

    var textures: number[] = new Array(1);;
    
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
}


    public draw(gl: GL10, x: number, y: number, z: number){
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLESImage.TYPE;
    
}


    public toString(): string{

    var graphicsStrings: GraphicsStrings = GraphicsStrings.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(this.getName())!.append(super.toString())!.append(graphicsStrings!.OPACITY)!.appendfloat(this.openGLESImageProperties!.alphaf)!.toString();;
    
}


}



