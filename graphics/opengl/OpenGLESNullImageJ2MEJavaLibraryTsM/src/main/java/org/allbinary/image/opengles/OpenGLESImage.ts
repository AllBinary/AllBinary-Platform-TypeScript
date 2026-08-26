
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
        
//not game specific package import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
//not game specific package import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
//not game specific package import { PlatformBitmapBase } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBase.js';
      const PlatformBitmapBase = globalThis.org.allbinary.platform.graphics.PlatformBitmapBase;

      
//not game specific package import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
      const PlatformBitmapBaseFactory = globalThis.org.allbinary.platform.graphics.PlatformBitmapBaseFactory;

      
//not game specific package import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
      const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLSurfaceChangedInterface } from './OpenGLSurfaceChangedInterface.js';
import { OpenGLESImageProperties } from './OpenGLESImageProperties.js';
//OpenGLESNullImageJ2MEJavaLibrary
export class OpenGLESImage
            extends Object
         implements OpenGLSurfaceChangedInterface {
        

    public static readonly NULL_OPENGL_IMAGE: OpenGLESImage = new OpenGLESImage(NullImage.NULL_IMAGE, PlatformBitmapBaseFactory.NULL_PLATFORM_BITMAP_BASE_FACTORY, PlatformTextureBaseFactory.NULL_PLATFORM_TEXTURE_BASE_FACTORY);

    public static readonly texture2dList: BasicArrayList = new BasicArrayListD();

    public static readonly TYPE: number = 4;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly textureFactory: PlatformTextureBaseFactory;

    public readonly openGLBitmap: PlatformBitmapBase;

    public readonly openGLESImageProperties: OpenGLESImageProperties = new OpenGLESImageProperties();

public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory){

            super();
        this.openGLBitmap= bitmapFactory!.createBitmap(image);
    
this.textureFactory= textureFactory;
    
}


                //@Throws(Exception.constructor)
            
    public set(gl: GL){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    initTexture(gl: GL10): boolean{



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


}
                
            

