
        /* Generated Code Do Not Modify */
        



import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { OpenGLStrings } from "../../../../org/allbinary/image/opengles/OpenGLStrings.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    

export class OpenGLLogUtil
            extends Object
         {
        

    private static readonly instance: OpenGLLogUtil = new OpenGLLogUtil();
        
        

    public static getInstance(): OpenGLLogUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly MAX_TEXTURE: string = " Max Texture Size: ";
        
        

    public logError(gl: GL10){
    //var gl = gl

    var error: number = gl.glGetError()!;
        
        


                        if(error != GL10.GL_NO_ERROR)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(OpenGLStrings.getInstance()!.GL_ERROR_LABEL)
stringBuffer!.appendint(error)

                        if(error == 1281)
                        
                                    {
                                    stringBuffer!.append(MAX_TEXTURE)

    var maxTextureSize: IntArray = IntArray(1);
        
        

gl.glGetIntegerv(GL10.GL_MAX_TEXTURE_SIZE, maxTextureSize, 0)
stringBuffer!.appendint(maxTextureSize[0]!)

                                    }
                                

                        if(error == 1280)
                        
                                    {
                                    PreLogUtil.put(stringBuffer!.toString(), this, OpenGLStrings.getInstance()!.SET)

                                    }
                                
                        else {
                            ForcedLogUtil.log(stringBuffer!.toString(), this)

                        }
                            

                                    }
                                
}


    private readonly LOG_ERROR: string = "logError";
        
        

    private readonly IMAGE: string = " Image: ";
        
        

    public logError(gl: GL10, image: Image){
    //var gl = gl
    //var image = image

    var error: number = gl.glGetError()!;
        
        


                        if(error != GL10.GL_NO_ERROR)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(OpenGLStrings.getInstance()!.GL_ERROR_LABEL)
stringBuffer!.appendint(error)

                        if(error == 1281)
                        
                                    {
                                    stringBuffer!.append(MAX_TEXTURE)

    var maxTextureSize: IntArray = IntArray(1);
        
        

gl.glGetIntegerv(GL10.GL_MAX_TEXTURE_SIZE, maxTextureSize, 0)
stringBuffer!.appendint(maxTextureSize[0]!)

                                    }
                                
stringBuffer!.append(IMAGE)
stringBuffer!.append(image.toString())
PreLogUtil.put(stringBuffer!.toString(), this, LOG_ERROR)

                                    }
                                
}


}
                
            

