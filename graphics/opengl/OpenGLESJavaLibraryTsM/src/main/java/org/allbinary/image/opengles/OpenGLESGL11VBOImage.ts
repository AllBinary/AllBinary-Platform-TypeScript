
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
        



import { ByteBuffer } from "../../../../java/nio/ByteBuffer.js";

    
import { ByteOrder } from "../../../../java/nio/ByteOrder.js";

    
import { FloatBuffer } from "../../../../java/nio/FloatBuffer.js";

    
import { GL } from "../../../../javax/microedition/khronos/opengles/GL.js";

    
import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { OpenGLLogUtil } from "../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { GLUtil } from "../../../../org/allbinary/opengles/GLUtil.js";

    
import { PlatformBitmapBaseFactory } from "../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js";

    
import { PlatformTextureBaseFactory } from "../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js";

    

export class OpenGLESGL11VBOImage extends OpenGLESImage {
        

    private readonly glUtil: GLUtil = GLUtil.getInstance()!;
        
        

    private textureVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *2)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
        
        
public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory)                        

                            : super(image, bitmapFactory, textureFactory){

            super();
                //var image = image
    //var bitmapFactory = bitmapFactory
    //var textureFactory = textureFactory


                            //For kotlin this is before the body of the constructor.
                    
this.this.initVertices()
this.regionRectangleVertexFloatBuffer!.put(FloatBuffer.wrap(regionRectangleFloatArray))
this.regionTextureVertexFloatBuffer!.put(FloatBuffer.wrap(regionTextureRectangleFloatArray))
}


    initVertices(){
textureVertexFloatBuffer!.put(0)
textureVertexFloatBuffer!.put(1)
textureVertexFloatBuffer!.put(1)
textureVertexFloatBuffer!.put(1)
textureVertexFloatBuffer!.put(0)
textureVertexFloatBuffer!.put(0)
textureVertexFloatBuffer!.put(1)
textureVertexFloatBuffer!.put(0)
textureVertexFloatBuffer!.rewind()
}


    public set(gl: GL){
    //var gl = gl

    var gl10: GL10 = gl as GL10;
        
        


                        if(super.initTexture(gl10))
                        
                                    {
                                    this.textureFactory!.load(gl10, GL10.GL_TEXTURE_2D, 0, this, 0, true)
gl10.glDisable(GL10.GL_TEXTURE_2D)
OpenGLLogUtil.getInstance()!.logError(gl10, this)

                                    }
                                
}


    readonly regionRectangleFloatArray: FloatArray = floatArrayOf(0,0,0,0,0,0,0,0,0,0,0,0);
        
        

    regionRectangleVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *3)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
        
        

    private readonly regionTextureRectangleFloatArray: FloatArray = FloatArray(8);
        
        

    private regionTextureVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *2)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
        
        

    public drawRegion(gl: GL10, viewHeight: number, x_src: number, y_src: number, width: number, height: number, x: number, y: number, z: number){
    //var gl = gl
    //var viewHeight = viewHeight
    //var x_src = x_src
    //var y_src = y_src
    //var width = width
    //var height = height
    //var x = x
    //var y = y
    //var z = z
this.regionRectangleFloatArray[0]= x
this.regionRectangleFloatArray[7]= viewHeight -y
this.regionRectangleFloatArray[1]= this.regionRectangleFloatArray[7] -height
this.regionRectangleFloatArray[3]= x +width
this.regionRectangleFloatArray[4]= this.regionRectangleFloatArray[1]!
this.regionRectangleFloatArray[6]= x
this.regionRectangleFloatArray[9]= this.regionRectangleFloatArray[3]!
this.regionRectangleFloatArray[10]= this.regionRectangleFloatArray[7]!
regionTextureRectangleFloatArray[0]= x_src /this.getWidth()
regionTextureRectangleFloatArray[1]= () /this.getHeight()
regionTextureRectangleFloatArray[2]= () /this.getWidth()
regionTextureRectangleFloatArray[3]= regionTextureRectangleFloatArray[1]!
regionTextureRectangleFloatArray[4]= regionTextureRectangleFloatArray[0]!
regionTextureRectangleFloatArray[5]= y_src /this.getHeight()
regionTextureRectangleFloatArray[6]= regionTextureRectangleFloatArray[2]!
regionTextureRectangleFloatArray[7]= regionTextureRectangleFloatArray[5]!
this.glUtil!.position(regionRectangleVertexFloatBuffer, 0)
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, regionRectangleVertexFloatBuffer)
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY)
gl.glEnable(GL10.GL_TEXTURE_2D)
gl.glBindTexture(GL10.GL_TEXTURE_2D, openGLESImageProperties!.textureID)
gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY)
this.glUtil!.position(regionTextureVertexFloatBuffer, 0)
gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, regionTextureVertexFloatBuffer)
gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4)
gl.glDisableClientState(GL10.GL_VERTEX_ARRAY)
gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY)
gl.glDisable(GL10.GL_TEXTURE_2D)
}


    public draw(gl: GL10, x: number, y: number, z: number){
    //var gl = gl
    //var x = x
    //var y = y
    //var z = z
this.regionRectangleFloatArray[0]= x
this.regionRectangleFloatArray[7]= DisplayInfoSingleton.getInstance()!.getLastHeight() -y
this.regionRectangleFloatArray[1]= this.regionRectangleFloatArray[7] -this.getHeight()
this.regionRectangleFloatArray[3]= x +this.getWidth()
this.regionRectangleFloatArray[4]= this.regionRectangleFloatArray[1]!
this.regionRectangleFloatArray[6]= x
this.regionRectangleFloatArray[9]= this.regionRectangleFloatArray[3]!
this.regionRectangleFloatArray[10]= this.regionRectangleFloatArray[7]!
this.glUtil!.position(regionRectangleVertexFloatBuffer, 0)
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, regionRectangleVertexFloatBuffer)
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY)
gl.glEnable(GL10.GL_TEXTURE_2D)
gl.glBindTexture(GL10.GL_TEXTURE_2D, openGLESImageProperties!.textureID)
gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY)
this.glUtil!.position(textureVertexFloatBuffer, 0)
gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, textureVertexFloatBuffer)
gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4)
gl.glDisableClientState(GL10.GL_VERTEX_ARRAY)
gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY)
gl.glDisable(GL10.GL_TEXTURE_2D)
}


}
                
            

