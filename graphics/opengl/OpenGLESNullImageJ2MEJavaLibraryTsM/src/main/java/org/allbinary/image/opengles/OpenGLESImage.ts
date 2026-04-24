
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

    
import { PlatformBitmapBase } from "../../../../org/allbinary/platform/graphics/PlatformBitmapBase.js";

    
import { PlatformBitmapBaseFactory } from "../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js";

    
import { PlatformTextureBaseFactory } from "../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { OpenGLSurfaceChangedInterface } from "./OpenGLSurfaceChangedInterface.js";

export class OpenGLESImage
            extends Object
         implements OpenGLSurfaceChangedInterface {
        

    public static readonly NULL_OPENGL_IMAGE: OpenGLESImage = new OpenGLESImage(NullCanvas.NULL_IMAGE, PlatformBitmapBaseFactory.NULL_PLATFORM_BITMAP_BASE_FACTORY, PlatformTextureBaseFactory.NULL_PLATFORM_TEXTURE_BASE_FACTORY);
        
        

    public static readonly texture2dList: BasicArrayList = new BasicArrayListD();
        
        

    public static readonly TYPE: number = 4;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly textureFactory: PlatformTextureBaseFactory

    public readonly openGLBitmap: PlatformBitmapBase

    public readonly openGLESImageProperties: OpenGLESImageProperties = new OpenGLESImageProperties();
        
        
public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory){

            super();
            //var image = image
    //var bitmapFactory = bitmapFactory
    //var textureFactory = textureFactory
this.openGLBitmap= bitmapFactory!.createBitmap(image);
    
this.textureFactory= textureFactory;
    
}


                //@Throws(Error::class)
            
    public set(gl: GL){
var gl = gl



                            throw new Error(this.commonStrings!.NOT_IMPLEMENTED)
}


    initTexture(gl: GL10): boolean{
var gl = gl



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


}
                
            

