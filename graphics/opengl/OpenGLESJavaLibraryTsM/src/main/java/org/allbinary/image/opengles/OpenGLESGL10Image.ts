
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


        
import { ByteBuffer } from '../../../../java/nio/ByteBuffer.js';
      
import { ByteOrder } from '../../../../java/nio/ByteOrder.js';
      
import { FloatBuffer } from '../../../../java/nio/FloatBuffer.js';
      
import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { OpenGLLogUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js';
      
import { GLUtil } from '../../../../org/allbinary/opengles/GLUtil.js';
      
import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
      
import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLESImage } from './OpenGLESImage.js';
import { OpenGLESImageDraw } from './OpenGLESImageDraw.js';
import { OpenGLESImageProperties } from './OpenGLESImageProperties.js';
import { OpenGLESImageProcessor } from './OpenGLESImageProcessor.js';

export class OpenGLESGL10Image extends OpenGLESImage {
        

    private readonly textureVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *2)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;

    private readonly realOpenGLESImageDraw: OpenGLESImageDraw = new class extends OpenGLESImageDraw
                                {
                                
    private readonly glUtil: GLUtil = GLUtil.getInstance()!;
    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
    private readonly textureVertexFloatBuffer: FloatBuffer = OpenGLESGL10Image.prototype.textureVertexFloatBuffer;
    private readonly regionTextureRectangleFloatArray: number[] = new Array(8);
    private readonly regionTextureVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *2)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
    private readonly regionRectangleFloatArray: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
    readonly regionRectangleVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *3)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;
    readonly openGLESImageProperties: OpenGLESImageProperties = OpenGLESGL10Image.prototype.openGLESImageProperties;
    public drawRegion(gl: GL10, viewHeight: number, x_src: number, y_src: number, width: number, height: number, x: number, y: number, z: number){

    var imageWidth: number = OpenGLESGL10Image.prototype.getWidth()!;;
    

    var imageHeight: number = OpenGLESGL10Image.prototype.getHeight()!;;
    
this.regionRectangleFloatArray[7]= viewHeight;
    
this.regionRectangleFloatArray[1]= this.regionRectangleFloatArray[7] -height;
    
this.regionRectangleFloatArray[3]= width;
    
this.regionRectangleFloatArray[4]= this.regionRectangleFloatArray[1]!;
    
this.regionRectangleFloatArray[9]= this.regionRectangleFloatArray[3]!;
    
this.regionRectangleFloatArray[10]= this.regionRectangleFloatArray[7]!;
    
this.regionTextureRectangleFloatArray[0]= x_src /imageWidth;
    
this.regionTextureRectangleFloatArray[1]= () /imageHeight;
    
this.regionTextureRectangleFloatArray[2]= () /imageWidth;
    
this.regionTextureRectangleFloatArray[3]= this.regionTextureRectangleFloatArray[1]!;
    
this.regionTextureRectangleFloatArray[4]= this.regionTextureRectangleFloatArray[0]!;
    
this.regionTextureRectangleFloatArray[5]= y_src /imageHeight;
    
this.regionTextureRectangleFloatArray[6]= this.regionTextureRectangleFloatArray[2]!;
    
this.regionTextureRectangleFloatArray[7]= this.regionTextureRectangleFloatArray[5]!;
    

    var u_center: number = (this.regionTextureRectangleFloatArray[0] +this.regionTextureRectangleFloatArray[2]) /2.0;;
    

    var v_center: number = (this.regionTextureRectangleFloatArray[5] +this.regionTextureRectangleFloatArray[1]) /2.0;;
    
this.glUtil!.rotateUVs(this.regionTextureRectangleFloatArray,  -this.openGLESImageProperties!.angle, u_center, v_center);
    
gl.glPushMatrix();
    

    var imageProcessor: OpenGLESImageProcessor = OpenGLESGL10Image.prototype.imageProcessor;;
    
OpenGLESGL10Image.prototype.openGLESImageTranslate!.translate(gl, OpenGLESGL10Image.prototype, x,  -y);
    
imageProcessor!.scale(gl, this.openGLESImageProperties!.scaleX, this.openGLESImageProperties!.scaleY);
    
imageProcessor!.colorMask(gl, this.openGLESImageProperties!.redf, this.openGLESImageProperties!.greenf, this.openGLESImageProperties!.bluef, this.openGLESImageProperties!.alphaf);
    
OpenGLESGL10Image.prototype.openGLESImageTranslate!.translate2(gl, OpenGLESGL10Image.prototype);
    
this.regionRectangleVertexFloatBuffer!.put(this.regionRectangleFloatArray);
    
this.glUtil!.position(this.regionRectangleVertexFloatBuffer, 0);
    
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, this.regionRectangleVertexFloatBuffer);
    
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glEnable(GL10.GL_TEXTURE_2D);
    
gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties!.textureID);
    
gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
this.regionTextureVertexFloatBuffer!.put(this.regionTextureRectangleFloatArray);
    
this.glUtil!.position(this.regionTextureVertexFloatBuffer, 0);
    
gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, this.regionTextureVertexFloatBuffer);
    
gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4);
    
gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
gl.glDisable(GL10.GL_TEXTURE_2D);
    
gl.glPopMatrix();
    
}

    public draw(gl: GL10, x: number, y: number, z: number){

    var width: number = OpenGLESGL10Image.prototype.getWidth()!;;
    

    var height: number = OpenGLESGL10Image.prototype.getHeight()!;;
    
this.regionRectangleFloatArray[7]= this.displayInfoSingleton!.getLastHeight();
    
this.regionRectangleFloatArray[1]= this.regionRectangleFloatArray[7] -height;
    
this.regionRectangleFloatArray[3]= width;
    
this.regionRectangleFloatArray[4]= this.regionRectangleFloatArray[1]!;
    
this.regionRectangleFloatArray[9]= this.regionRectangleFloatArray[3]!;
    
this.regionRectangleFloatArray[10]= this.regionRectangleFloatArray[7]!;
    
this.regionTextureRectangleFloatArray[0]= 0;
    
this.regionTextureRectangleFloatArray[1]= 1;
    
this.regionTextureRectangleFloatArray[2]= 1;
    
this.regionTextureRectangleFloatArray[3]= 1;
    
this.regionTextureRectangleFloatArray[4]= 0;
    
this.regionTextureRectangleFloatArray[5]= 0;
    
this.regionTextureRectangleFloatArray[6]= 1;
    
this.regionTextureRectangleFloatArray[7]= 0;
    
gl.glPushMatrix();
    
OpenGLESGL10Image.prototype.openGLESImageTranslate!.translate(gl, OpenGLESGL10Image.prototype, x,  -y);
    

    var imageProcessor: OpenGLESImageProcessor = OpenGLESGL10Image.prototype.imageProcessor;;
    
imageProcessor!.scale(gl, this.openGLESImageProperties!.scaleX, this.openGLESImageProperties!.scaleY);
    
imageProcessor!.colorMask(gl, this.openGLESImageProperties!.redf, this.openGLESImageProperties!.greenf, this.openGLESImageProperties!.bluef, this.openGLESImageProperties!.alphaf);
    
OpenGLESGL10Image.prototype.openGLESImageTranslate!.translate2(gl, OpenGLESGL10Image.prototype);
    
this.regionRectangleVertexFloatBuffer!.put(this.regionRectangleFloatArray);
    
this.glUtil!.position(this.regionRectangleVertexFloatBuffer, 0);
    
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, this.regionRectangleVertexFloatBuffer);
    
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glEnable(GL10.GL_TEXTURE_2D);
    
gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties!.textureID);
    
gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
this.glUtil!.rotateUVs(this.regionTextureRectangleFloatArray,  -this.openGLESImageProperties!.angle, 0.5, 0.5);
    
this.glUtil!.position(this.textureVertexFloatBuffer, 0);
    
this.textureVertexFloatBuffer!.put(this.regionTextureRectangleFloatArray);
    
this.glUtil!.position(this.textureVertexFloatBuffer, 0);
    
gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, this.textureVertexFloatBuffer);
    
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
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initVertices();
    
}


    initVertices(){
this.textureVertexFloatBuffer!.put(0);
    
this.textureVertexFloatBuffer!.put(1);
    
this.textureVertexFloatBuffer!.put(1);
    
this.textureVertexFloatBuffer!.put(1);
    
this.textureVertexFloatBuffer!.put(0);
    
this.textureVertexFloatBuffer!.put(0);
    
this.textureVertexFloatBuffer!.put(1);
    
this.textureVertexFloatBuffer!.put(0);
    
this.textureVertexFloatBuffer!.rewind();
    
}


    public set(gl: GL){

    var gl10: GL10 = gl as GL10;;
    

                        if(super.initTexture(gl10))
                        
                                    {
                                    this.textureFactory!.load(gl10, GL10.GL_TEXTURE_2D, 0, this, 0, true);
    
gl10.glDisable(GL10.GL_TEXTURE_2D);
    
this.openGLESImageDraw= this.realOpenGLESImageDraw;
    
OpenGLLogUtil.getInstance()!.logError(gl10, this);
    

                                    }
                                
}


    public drawRegion(gl: GL10, viewHeight: number, x_src: number, y_src: number, width: number, height: number, x: number, y: number, z: number){
this.openGLESImageDraw!.drawRegion(gl, viewHeight, x_src, y_src, width, height, x, y, z);
    
}


    public draw(gl: GL10, x: number, y: number, z: number){
this.openGLESImageDraw!.draw(gl, x, y, z);
    
}


}
                
            

