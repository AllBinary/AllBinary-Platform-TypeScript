
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

    
import { GL11 } from "../../../../javax/microedition/khronos/opengles/GL11.js";

    
import { GL11Ext } from "../../../../javax/microedition/khronos/opengles/GL11Ext.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { DisplayChangeEvent } from "../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { OpenGLLogUtil } from "../../../../org/allbinary/graphics/opengles/OpenGLLogUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { PlatformBitmapBaseFactory } from "../../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js";

    
import { PlatformTextureBaseFactory } from "../../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js";

    

export class OpenGLESGL11ExtImage extends OpenGLESImage {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private a: number= 0

    private readonly rectangle: IntArray
public constructor (image: Image, bitmapFactory: PlatformBitmapBaseFactory, textureFactory: PlatformTextureBaseFactory)                        

                            : super(image, bitmapFactory, textureFactory){

            super();
                //var image = image
    //var bitmapFactory = bitmapFactory
    //var textureFactory = textureFactory


                            //For kotlin this is before the body of the constructor.
                    
this.this.onDisplayChangeEvent(
                            null)
rectangle= intArrayOf(0,this.getHeight(), this.getWidth(),  -this.getHeight();
        
        )
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
    //var displayChangeEvent = displayChangeEvent

        try {
            logUtil!.put(commonStrings!.START, this, "onResize")
this.a= DisplayInfoSingleton.getInstance()!.getLastHeight() -this.getHeight()
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "onResize", e)
}

}


    public set(gl: GL){
    //var gl = gl
this.this.onDisplayChangeEvent(
                            null)

    var gl11: GL11 = gl as GL11;
        
        


                        if(super.initTexture(gl11))
                        
                                    {
                                    this.textureFactory!.load(gl11, GL10.GL_TEXTURE_2D, 0, this, 0, true)
gl11.glTexParameteriv(GL10.GL_TEXTURE_2D, GL11Ext.GL_TEXTURE_CROP_RECT_OES, rectangle, 0)
gl11.glDisable(GL10.GL_TEXTURE_2D)
OpenGLLogUtil.getInstance()!.logError(gl11, this)

                                    }
                                
}


    public draw(gl: GL10, x: number, y: number, z: number){
    //var gl = gl
    //var x = x
    //var y = y
    //var z = z
gl.glEnable(GL10.GL_TEXTURE_2D)
gl.glBindTexture(GL10.GL_TEXTURE_2D, openGLESImageProperties!.textureID)
gl = glgl as GL11Ext
gl.
                    glDrawTexfOES(x, a -y, z, this.getWidth(), this.getHeight())
gl.glDisable(GL10.GL_TEXTURE_2D)
}


}
                
            

