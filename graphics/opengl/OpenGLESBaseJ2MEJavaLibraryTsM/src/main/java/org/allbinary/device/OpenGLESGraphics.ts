
        /* Generated Code Do Not Modify */
        



import { GL } from "../../../javax/microedition/khronos/opengles/GL.js";

    
import { GL10 } from "../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Font } from "../../../javax/microedition/lcdui/Font.js";

    
import { FontDebugBase } from "../../../org/allbinary/graphics/font/FontDebugBase.js";

    
import { OpenGLSurfaceChangedInterface } from "../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class OpenGLESGraphics
            extends Object
        
                , OpenGLSurfaceChangedInterface
                , GraphicsInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    gl: GL10 = NullGL10.NULL_GL10;
        
        
 constructor (){

            super();
            }


    public update(gl: GL){
var gl = gl
}


    public set(gl: GL){
var gl = gl
}


                //@Throws(Error::class)
            
    public init(){
}


                //@Throws(Error::class)
            
    public update(){
}


    public setOrthoginalMode(){
}


    public setCameraMode(){
}


    public getGlP(): GL10{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gl;
    
}


    public setFont(font: Font, fontDebug: FontDebugBase){
    //var font = font
    //var fontDebug = fontDebug



                            throw RuntimeException()
}


}
                
            

