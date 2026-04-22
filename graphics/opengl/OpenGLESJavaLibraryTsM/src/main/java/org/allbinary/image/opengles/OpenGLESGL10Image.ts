
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { OpenGLESImage } from "./OpenGLESImage.js";

import { OpenGLESImageDraw } from "./OpenGLESImageDraw.js";

export class OpenGLESGL10Image extends OpenGLESImage {
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

    private readonly glUtil: GLUtil = GLUtil.getInstance()!;
        
        

    private readonly textureVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *2)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
        
        

    readonly regionRectangleFloatArray: number[] = floatArrayOf(0,0,0,0,0,0,0,0,0,0,0,0);
        
        

    readonly regionRectangleVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *3)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
        
        

    private readonly regionTextureRectangleFloatArray: number[] = new Array(8);
        
        

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
        
        
;
    

    var imageHeight: number = getHeight()!;
        
        
;
    
regionRectangleFloatArray[7]= viewHeight;
    
regionRectangleFloatArray[1]= regionRectangleFloatArray[7] -height;
    
regionRectangleFloatArray[3]= width;
    
regionRectangleFloatArray[4]= regionRectangleFloatArray[1]!;
    
regionRectangleFloatArray[9]= regionRectangleFloatArray[3]!;
    
regionRectangleFloatArray[10]= regionRectangleFloatArray[7]!;
    
regionTextureRectangleFloatArray[0]= x_src /imageWidth;
    
regionTextureRectangleFloatArray[1]= () /imageHeight;
    
regionTextureRectangleFloatArray[2]= () /imageWidth;
    
regionTextureRectangleFloatArray[3]= regionTextureRectangleFloatArray[1]!;
    
regionTextureRectangleFloatArray[4]= regionTextureRectangleFloatArray[0]!;
    
regionTextureRectangleFloatArray[5]= y_src /imageHeight;
    
regionTextureRectangleFloatArray[6]= regionTextureRectangleFloatArray[2]!;
    
regionTextureRectangleFloatArray[7]= regionTextureRectangleFloatArray[5]!;
    

    var u_center: number = (regionTextureRectangleFloatArray[0] +regionTextureRectangleFloatArray[2]) /2.0f;
        
        
;
    

    var v_center: number = (regionTextureRectangleFloatArray[5] +regionTextureRectangleFloatArray[1]) /2.0f;
        
        
;
    
glUtil!.rotateUVs(regionTextureRectangleFloatArray,  -openGLESImageProperties!.angle, u_center, v_center);
    
gl.glPushMatrix();
    
openGLESImageTranslate!.translate(gl, this@OpenGLESGL10Image, x,  -y);
    
imageProcessor!.scale(gl, openGLESImageProperties!.scaleX, openGLESImageProperties!.scaleY);
    
imageProcessor!.colorMask(gl, openGLESImageProperties!.redf, openGLESImageProperties!.greenf, openGLESImageProperties!.bluef, openGLESImageProperties!.alphaf);
    
openGLESImageTranslate!.translate2(gl, this@OpenGLESGL10Image);
    
regionRectangleVertexFloatBuffer!.put(regionRectangleFloatArray);
    
glUtil!.position(regionRectangleVertexFloatBuffer, 0);
    
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, regionRectangleVertexFloatBuffer);
    
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glEnable(GL10.GL_TEXTURE_2D);
    
gl.glBindTexture(GL10.GL_TEXTURE_2D, openGLESImageProperties!.textureID);
    
gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
regionTextureVertexFloatBuffer!.put(regionTextureRectangleFloatArray);
    
glUtil!.position(regionTextureVertexFloatBuffer, 0);
    
gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, regionTextureVertexFloatBuffer);
    
gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4);
    
gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
gl.glDisable(GL10.GL_TEXTURE_2D);
    
gl.glPopMatrix();
    
}

    public draw(gl: GL10, x: number, y: number, z: number){
    //var gl = gl
    //var x = x
    //var y = y
    //var z = z

    var width: number = getWidth()!;
        
        
;
    

    var height: number = getHeight()!;
        
        
;
    
regionRectangleFloatArray[7]= displayInfoSingleton!.getLastHeight();
    
regionRectangleFloatArray[1]= regionRectangleFloatArray[7] -height;
    
regionRectangleFloatArray[3]= width;
    
regionRectangleFloatArray[4]= regionRectangleFloatArray[1]!;
    
regionRectangleFloatArray[9]= regionRectangleFloatArray[3]!;
    
regionRectangleFloatArray[10]= regionRectangleFloatArray[7]!;
    
regionTextureRectangleFloatArray[0]= 0;
    
regionTextureRectangleFloatArray[1]= 1;
    
regionTextureRectangleFloatArray[2]= 1;
    
regionTextureRectangleFloatArray[3]= 1;
    
regionTextureRectangleFloatArray[4]= 0;
    
regionTextureRectangleFloatArray[5]= 0;
    
regionTextureRectangleFloatArray[6]= 1;
    
regionTextureRectangleFloatArray[7]= 0;
    
gl.glPushMatrix();
    
openGLESImageTranslate!.translate(gl, this@OpenGLESGL10Image, x,  -y);
    
imageProcessor!.scale(gl, openGLESImageProperties!.scaleX, openGLESImageProperties!.scaleY);
    
imageProcessor!.colorMask(gl, openGLESImageProperties!.redf, openGLESImageProperties!.greenf, openGLESImageProperties!.bluef, openGLESImageProperties!.alphaf);
    
openGLESImageTranslate!.translate2(gl, this@OpenGLESGL10Image);
    
regionRectangleVertexFloatBuffer!.put(regionRectangleFloatArray);
    
glUtil!.position(regionRectangleVertexFloatBuffer, 0);
    
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, regionRectangleVertexFloatBuffer);
    
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glEnable(GL10.GL_TEXTURE_2D);
    
gl.glBindTexture(GL10.GL_TEXTURE_2D, openGLESImageProperties!.textureID);
    
gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
glUtil!.rotateUVs(regionTextureRectangleFloatArray,  -openGLESImageProperties!.angle, 0.5f, 0.5f);
    
glUtil!.position(textureVertexFloatBuffer, 0);
    
textureVertexFloatBuffer!.put(regionTextureRectangleFloatArray);
    
glUtil!.position(textureVertexFloatBuffer, 0);
    
gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, textureVertexFloatBuffer);
    
gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4);
    
gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
gl.glDisable(GL10.GL_TEXTURE_2D);
    
gl.glPopMatrix();
    
}

                                }
                            ;
        
        

    private openGLESImageDraw: OpenGLESImageDraw = OpenGLESImageDraw.getInstance()!;
        
        
public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory){
            super(image, bitmapFactory, textureFactory);
                        //var image = image
    //var bitmapFactory = bitmapFactory
    //var textureFactory = textureFactory


                            //For kotlin this is before the body of the constructor.
                    
this.initVertices();
    
}


    initVertices(){
textureVertexFloatBuffer!.put(0);
    
textureVertexFloatBuffer!.put(1);
    
textureVertexFloatBuffer!.put(1);
    
textureVertexFloatBuffer!.put(1);
    
textureVertexFloatBuffer!.put(0);
    
textureVertexFloatBuffer!.put(0);
    
textureVertexFloatBuffer!.put(1);
    
textureVertexFloatBuffer!.put(0);
    
textureVertexFloatBuffer!.rewind();
    
}


    public set(gl: GL){
    //var gl = gl

    var gl10: GL10 = gl as GL10;
        
        
;
    

                        if(super.initTexture(gl10))
                        
                                    {
                                    this.textureFactory!.load(gl10, GL10.GL_TEXTURE_2D, 0, this, 0, true);
    
gl10.glDisable(GL10.GL_TEXTURE_2D);
    
this.openGLESImageDraw= this.realOpenGLESImageDraw;
    
OpenGLLogUtil.getInstance()!.logError(gl10, this);
    

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
this.openGLESImageDraw!.drawRegion(gl, viewHeight, x_src, y_src, width, height, x, y, z);
    
}


    public draw(gl: GL10, x: number, y: number, z: number){
    //var gl = gl
    //var x = x
    //var y = y
    //var z = z
this.openGLESImageDraw!.draw(gl, x, y, z);
    
}


}
                
            

