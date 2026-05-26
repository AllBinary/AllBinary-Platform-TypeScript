
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
      
import { OpenGLLogUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js';
      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { GLUtil } from '../../../../org/allbinary/opengles/GLUtil.js';
      
import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
      
import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLESImage } from './OpenGLESImage.js';
//This is not actually VBO impl
export class OpenGLESGL11VBOImage extends OpenGLESImage {
        

    private readonly glUtil: GLUtil = GLUtil.getInstance()!;

    private textureVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *2)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;

public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory){
            super(image, bitmapFactory, textureFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initVertices();
    
this.regionRectangleVertexFloatBuffer!.put(FloatBuffer.wrap(this.regionRectangleFloatArray));
    
this.regionTextureVertexFloatBuffer!.put(FloatBuffer.wrap(this.regionTextureRectangleFloatArray));
    
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
    
OpenGLLogUtil.getInstance()!.logError(gl10, this);
    

                                    }
                                
}


    readonly regionRectangleFloatArray: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];

    regionRectangleVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *3)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;

    private readonly regionTextureRectangleFloatArray: number[] = new Array(8);

    private regionTextureVertexFloatBuffer: FloatBuffer = ByteBuffer.allocateDirect(4 *4 *2)!.order(ByteOrder.nativeOrder())!.asFloatBuffer()!;

    public drawRegion(gl: GL10, viewHeight: number, x_src: number, y_src: number, width: number, height: number, x: number, y: number, z: number){
this.regionRectangleFloatArray[0]= x;
    
this.regionRectangleFloatArray[7]= viewHeight -y;
    
this.regionRectangleFloatArray[1]= this.regionRectangleFloatArray[7] -height;
    
this.regionRectangleFloatArray[3]= x +width;
    
this.regionRectangleFloatArray[4]= this.regionRectangleFloatArray[1]!;
    
this.regionRectangleFloatArray[6]= x;
    
this.regionRectangleFloatArray[9]= this.regionRectangleFloatArray[3]!;
    
this.regionRectangleFloatArray[10]= this.regionRectangleFloatArray[7]!;
    
this.regionTextureRectangleFloatArray[0]= x_src /this.getWidth();
    
this.regionTextureRectangleFloatArray[1]= () /this.getHeight();
    
this.regionTextureRectangleFloatArray[2]= () /this.getWidth();
    
this.regionTextureRectangleFloatArray[3]= this.regionTextureRectangleFloatArray[1]!;
    
this.regionTextureRectangleFloatArray[4]= this.regionTextureRectangleFloatArray[0]!;
    
this.regionTextureRectangleFloatArray[5]= y_src /this.getHeight();
    
this.regionTextureRectangleFloatArray[6]= this.regionTextureRectangleFloatArray[2]!;
    
this.regionTextureRectangleFloatArray[7]= this.regionTextureRectangleFloatArray[5]!;
    
this.glUtil!.position(this.regionRectangleVertexFloatBuffer, 0);
    
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, this.regionRectangleVertexFloatBuffer);
    
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glEnable(GL10.GL_TEXTURE_2D);
    
gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties!.textureID);
    
gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
this.glUtil!.position(this.regionTextureVertexFloatBuffer, 0);
    
gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, this.regionTextureVertexFloatBuffer);
    
gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4);
    
gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
gl.glDisable(GL10.GL_TEXTURE_2D);
    
}


    public draw(gl: GL10, x: number, y: number, z: number){
this.regionRectangleFloatArray[0]= x;
    
this.regionRectangleFloatArray[7]= DisplayInfoSingleton.getInstance()!.getLastHeight() -y;
    
this.regionRectangleFloatArray[1]= this.regionRectangleFloatArray[7] -this.getHeight();
    
this.regionRectangleFloatArray[3]= x +this.getWidth();
    
this.regionRectangleFloatArray[4]= this.regionRectangleFloatArray[1]!;
    
this.regionRectangleFloatArray[6]= x;
    
this.regionRectangleFloatArray[9]= this.regionRectangleFloatArray[3]!;
    
this.regionRectangleFloatArray[10]= this.regionRectangleFloatArray[7]!;
    
this.glUtil!.position(this.regionRectangleVertexFloatBuffer, 0);
    
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, this.regionRectangleVertexFloatBuffer);
    
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glEnable(GL10.GL_TEXTURE_2D);
    
gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties!.textureID);
    
gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
this.glUtil!.position(this.textureVertexFloatBuffer, 0);
    
gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, this.textureVertexFloatBuffer);
    
gl.glDrawArrays(GL10.GL_TRIANGLE_STRIP, 0, 4);
    
gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
    
gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
    
gl.glDisable(GL10.GL_TEXTURE_2D);
    
}


}
                
            

