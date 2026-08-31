
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

      
import { GL11 } from '../../../../javax/microedition/khronos/opengles/GL11.js';
      //not GWT import const GL11 = globalThis.javax.microedition.khronos.opengles.GL11;

      
import { GL11Ext } from '../../../../javax/microedition/khronos/opengles/GL11Ext.js';
      //not GWT import const GL11Ext = globalThis.javax.microedition.khronos.opengles.GL11Ext;

      
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      //not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { DisplayChangeEvent } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      //not GWT import const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;

      
import { OpenGLLogUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js';
      //not GWT import const OpenGLLogUtil = globalThis.org.allbinary.graphics.opengles.OpenGLLogUtil;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
      //not GWT import const PlatformBitmapBaseFactory = globalThis.org.allbinary.platform.graphics.PlatformBitmapBaseFactory;

      
import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
      //not GWT import const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLESImage } from './OpenGLESImage.js';
//not GWT import const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;

                //Many devices don't support this even though it is supposed to
export class OpenGLESGL11ExtImage extends OpenGLESImage {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private a: number= 0;

    private readonly rectangle: number[];

public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory){
            super(image, bitmapFactory, textureFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.onDisplayChangeEvent(
                            null);
    
this.rectangle= [0,this.getHeight(), this.getWidth(),  -this.getHeight();];
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "onResize");
    
this.a= DisplayInfoSingleton.getInstance()!.getLastHeight() -this.getHeight();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onResize", e);
    
}

}


    public set(gl: GL){
this.onDisplayChangeEvent(
                            null);
    

    var gl11: GL11 = gl as GL11;;
    

                        if(super.initTexture(gl11))
                        
                                    {
                                    this.textureFactory!.load(gl11, GL10.GL_TEXTURE_2D, 0, this, 0, true);
    
gl11.glTexParameteriv(GL10.GL_TEXTURE_2D, GL11Ext.GL_TEXTURE_CROP_RECT_OES, this.rectangle, 0);
    
gl11.glDisable(GL10.GL_TEXTURE_2D);
    
OpenGLLogUtil.getInstance()!.logError(gl11, this);
    

                                    }
                                
}


    public draw(gl: GL10, x: number, y: number, z: number){
gl.glEnable(GL10.GL_TEXTURE_2D);
    
gl.glBindTexture(GL10.GL_TEXTURE_2D, this.openGLESImageProperties!.textureID);
    
gl = glgl as GL11Ext
gl.
                    glDrawTexfOES(x, this.a -y, z, this.getWidth(), this.getHeight());
    
gl.glDisable(GL10.GL_TEXTURE_2D);
    
}


}



