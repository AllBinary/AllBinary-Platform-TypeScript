
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
import { GL } from '../../../javax/microedition/khronos/opengles/GL.js';
      //not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
import { GL10 } from '../../../javax/microedition/khronos/opengles/GL10.js';
      //not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not plain js import { Font } from '../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { FontDebugBase } from '../../../org/allbinary/graphics/font/FontDebugBase.js';
      //not GWT import const FontDebugBase = globalThis.org.allbinary.graphics.font.FontDebugBase;

      
import { OpenGLSurfaceChangedInterface } from '../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js';
      //not GWT import const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GraphicsInterface } from './GraphicsInterface.js';
import { NullGL10 } from './NullGL10.js';

export class OpenGLESGraphics extends Graphics implements OpenGLSurfaceChangedInterface, GraphicsInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    gl: GL10 = NullGL10.NULL_GL10;

public constructor (){

            super();
        }


    public updateGL(gl: GL){
}


    public set(gl: GL){
}


                //@Throws(Exception.constructor)
            
    public init(){
}


                //@Throws(Exception.constructor)
            
    public update(){
}


    public setOrthoginalMode(){
}


    public setCameraMode(){
}


    public getGl10(): GL10{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl;
    
}


    public setFontDebug(font: Font, fontDebug: FontDebugBase){



                            throw new RuntimeException();
                    
}


}



