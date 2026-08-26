
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
        
//not game specific package import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
//not game specific package import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { GL11 } from '../../../../javax/microedition/khronos/opengles/GL11.js';
      const GL11 = globalThis.javax.microedition.khronos.opengles.GL11;

      
//not game specific package import { GL11Ext } from '../../../../javax/microedition/khronos/opengles/GL11Ext.js';
      const GL11Ext = globalThis.javax.microedition.khronos.opengles.GL11Ext;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { DisplayChangeEvent } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;

      
//not game specific package import { OpenGLLogUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js';
      const OpenGLLogUtil = globalThis.org.allbinary.graphics.opengles.OpenGLLogUtil;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PlatformBitmapBaseFactory } from '../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
      const PlatformBitmapBaseFactory = globalThis.org.allbinary.platform.graphics.PlatformBitmapBaseFactory;

      
//not game specific package import { PlatformTextureBaseFactory } from '../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
      const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLESImage } from './OpenGLESImage.js';
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
                
            

