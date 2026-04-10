
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ByteBuffer } from "../../../../java/nio/ByteBuffer.js";

    
import { ByteOrder } from "../../../../java/nio/ByteOrder.js";

    
import { FloatBuffer } from "../../../../java/nio/FloatBuffer.js";

    
import { GL } from "../../../../javax/microedition/khronos/opengles/GL.js";

    
import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { OpenGLLogUtil } from "../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js";

    
import { GLUtil } from "../../../../org/allbinary/opengles/GLUtil.js";

    
import { PlatformBitmapBaseFactory } from "../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js";

    
import { PlatformTextureBaseFactory } from "../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js";

    

export class OpenGLESGL10Image extends OpenGLESImage {
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

    private readonly glUtil: GLUtil = GLUtil.getInstance()!;
        
        

    private readonly textureVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *2)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
        
        

    readonly regionRectangleFloatArray: FloatArray = floatArrayOf(0,0,0,0,0,0,0,0,0,0,0,0);
        
        

    readonly regionRectangleVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *3)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
        
        

    private readonly regionTextureRectangleFloatArray: FloatArray = FloatArray(8);
        
        

    private readonly regionTextureVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *2)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
        
        

    private readonly realOpenGLESImageDraw: OpenGLESImageDraw = new object: OpenGLESImageDraw()
                                {
                                
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

    var imageWidth: number = getWidth()!;
        
        


    var imageHeight: number = getHeight()!;
        
        

regionRectangleFloatArray[7]= viewHeight
regionRectangleFloatArray[1]= regionRectangleFloatArray[7] -height
regionRectangleFloatArray[3]= width
regionRectangleFloatArray[4]= regionRectangleFloatArray[1]!
regionRectangleFloatArray[9]= regionRectangleFloatArray[3]!
regionRectangleFloatArray[10]= regionRectangleFloatArray[7]!
regionTextureRectangleFloatArray[0]= x_src /imageWidth
regionTextureRectangleFloatArray[1]= () /imageHeight
regionTextureRectangleFloatArray[2]= () /imageWidth
regionTextureRectangleFloatArray[3]= regionTextureRectangleFloatArray[1]!
regionTextureRectangleFloatArray[4]= regionTextureRectangleFloatArray[0]!
regionTextureRectangleFloatArray[5]= y_src /imageHeight
regionTextureRectangleFloatArray[6]= regionTextureRectangleFloatArray[2]!
regionTextureRectangleFloatArray[7]= regionTextureRectangleFloatArray[5]!

    var u_center: number = (regionTextureRectangleFloatArray[0] +regionTextureRectangleFloatArray[2]) /2.0f;
        
        


    var v_center: number = (regionTextureRectangleFloatArray[5] +regionTextureRectangleFloatArray[1]) /2.0f;
        
        

rotateUVs(regionTextureRectangleFloatArray,  -openGLESImageProperties!.angle, u_center, v_center)
glPushMatrix()
translate(gl, this@OpenGLESGL10Image, x,  -y)
scale(gl, openGLESImageProperties!.scaleX, openGLESImageProperties!.scaleY)
colorMask(gl, openGLESImageProperties!.redf, openGLESImageProperties!.greenf, openGLESImageProperties!.bluef, openGLESImageProperties!.alphaf)
translate2(gl, this@OpenGLESGL10Image)
put(regionRectangleFloatArray)
position(regionRectangleVertexFloatBuffer, 0)
glVertexPointer(3, GL10.GL_FLOAT, 0, regionRectangleVertexFloatBuffer)
glEnableClientState(GL10.GL_VERTEX_ARRAY)
glEnable(GL10.GL_TEXTURE_2D)
glBindTexture(GL10.GL_TEXTURE_2D, openGLESImageProperties!.textureID)
glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY)
put(regionTextureRectangleFloatArray)
position(regionTextureVertexFloatBuffer, 0)
glTexCoordPointer(2, GL10.GL_FLOAT, 0, regionTextureVertexFloatBuffer)
glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4)
glDisableClientState(GL10.GL_VERTEX_ARRAY)
glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY)
glDisable(GL10.GL_TEXTURE_2D)
glPopMatrix()
}

    public draw(gl: GL10, x: number, y: number, z: number){
    //var gl = gl
    //var x = x
    //var y = y
    //var z = z

    var width: number = getWidth()!;
        
        


    var height: number = getHeight()!;
        
        

regionRectangleFloatArray[7]= displayInfoSingleton!.getLastHeight()
regionRectangleFloatArray[1]= regionRectangleFloatArray[7] -height
regionRectangleFloatArray[3]= width
regionRectangleFloatArray[4]= regionRectangleFloatArray[1]!
regionRectangleFloatArray[9]= regionRectangleFloatArray[3]!
regionRectangleFloatArray[10]= regionRectangleFloatArray[7]!
regionTextureRectangleFloatArray[0]= 0
regionTextureRectangleFloatArray[1]= 1
regionTextureRectangleFloatArray[2]= 1
regionTextureRectangleFloatArray[3]= 1
regionTextureRectangleFloatArray[4]= 0
regionTextureRectangleFloatArray[5]= 0
regionTextureRectangleFloatArray[6]= 1
regionTextureRectangleFloatArray[7]= 0
glPushMatrix()
translate(gl, this@OpenGLESGL10Image, x,  -y)
scale(gl, openGLESImageProperties!.scaleX, openGLESImageProperties!.scaleY)
colorMask(gl, openGLESImageProperties!.redf, openGLESImageProperties!.greenf, openGLESImageProperties!.bluef, openGLESImageProperties!.alphaf)
translate2(gl, this@OpenGLESGL10Image)
put(regionRectangleFloatArray)
position(regionRectangleVertexFloatBuffer, 0)
glVertexPointer(3, GL10.GL_FLOAT, 0, regionRectangleVertexFloatBuffer)
glEnableClientState(GL10.GL_VERTEX_ARRAY)
glEnable(GL10.GL_TEXTURE_2D)
glBindTexture(GL10.GL_TEXTURE_2D, openGLESImageProperties!.textureID)
glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY)
rotateUVs(regionTextureRectangleFloatArray,  -openGLESImageProperties!.angle, 0.5f, 0.5f)
position(textureVertexFloatBuffer, 0)
put(regionTextureRectangleFloatArray)
position(textureVertexFloatBuffer, 0)
glTexCoordPointer(2, GL10.GL_FLOAT, 0, textureVertexFloatBuffer)
glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4)
glDisableClientState(GL10.GL_VERTEX_ARRAY)
glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY)
glDisable(GL10.GL_TEXTURE_2D)
glPopMatrix()
}

                                }
                            ;
        
        

    private openGLESImageDraw: OpenGLESImageDraw = OpenGLESImageDraw.getInstance()!;
        
        
public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory)                        

                            : super(image, bitmapFactory, textureFactory){

            super();
                //var image = image
    //var bitmapFactory = bitmapFactory
    //var textureFactory = textureFactory


                            //For kotlin this is before the body of the constructor.
                    
this.initVertices()
}


    initVertices(){
put(0)
put(1)
put(1)
put(1)
put(0)
put(0)
put(1)
put(0)
rewind()
}


    public set(gl: GL){
    //var gl = gl

    var gl10: GL10 = gl as GL10;
        
        


    
                        if(super.initTexture(gl10))
                        
                                    {
                                    load(gl10, GL10.GL_TEXTURE_2D, 0, this, 0, true)
glDisable(GL10.GL_TEXTURE_2D)
this.openGLESImageDraw= this.realOpenGLESImageDraw
logError(gl10, this)

                                    }
                                
}


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
drawRegion(gl, viewHeight, x_src, y_src, width, height, x, y, z)
}


    public draw(gl: GL10, x: number, y: number, z: number){
    //var gl = gl
    //var x = x
    //var y = y
    //var z = z
draw(gl, x, y, z)
}


}
                
            

