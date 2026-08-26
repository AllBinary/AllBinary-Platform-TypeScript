
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
//not game specific package import { GL } from '../../../javax/microedition/khronos/opengles/GL.js';
      const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
//not game specific package import { GL10 } from '../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { Font } from '../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { FontDebugBase } from '../../../org/allbinary/graphics/font/FontDebugBase.js';
      const FontDebugBase = globalThis.org.allbinary.graphics.font.FontDebugBase;

      
//not game specific package import { OpenGLSurfaceChangedInterface } from '../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js';
      const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GraphicsInterface } from './GraphicsInterface.js';
import { NullGL10 } from './NullGL10.js';

export class OpenGLESGraphics
            extends Object
         implements OpenGLSurfaceChangedInterface, GraphicsInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    gl: GL10 = NullGL10.NULL_GL10;

 constructor (){

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


    public getGlP(): GL10{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gl;
    
}


    public setFontDebug(font: Font, fontDebug: FontDebugBase){



                            throw new RuntimeException();
                    
}


}
                
            

