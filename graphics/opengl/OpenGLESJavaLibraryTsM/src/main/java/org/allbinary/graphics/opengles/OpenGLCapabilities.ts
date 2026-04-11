
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
        



import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { GL11 } from "../../../../javax/microedition/khronos/opengles/GL11.js";

    
import { AndroidUtil } from "../../../../org/allbinary/AndroidUtil.js";

    
import { OpenGLESGL10ImageFactory } from "../../../../org/allbinary/image/opengles/OpenGLESGL10ImageFactory.js";

    
import { OpenGLESGL11VBOImageFactory } from "../../../../org/allbinary/image/opengles/OpenGLESGL11VBOImageFactory.js";

    
import { OpenGLImageSpecificFactory } from "../../../../org/allbinary/image/opengles/OpenGLImageSpecificFactory.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Tokenizer } from "../../../../org/allbinary/logic/string/tokens/Tokenizer.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class OpenGLCapabilities
            extends Object
         {
        

    private static readonly instance: OpenGLCapabilities = new OpenGLCapabilities();
        
        

    public static getInstance(): OpenGLCapabilities{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly CUSTOM_GL_SURFACE_VIEW: boolean = true;
        
        

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    private initialized: boolean = false;
        
        

    private glVersionString: string = stringUtil!.EMPTY_STRING;
        
        

    private glShaderVersionString: string = stringUtil!.EMPTY_STRING;
        
        

    public shaderVersion: number = 0;
        
        

    private glRenderer: string = stringUtil!.EMPTY_STRING;
        
        

    private glVendor: string = stringUtil!.EMPTY_STRING;
        
        

    private glExtensions: string = stringUtil!.EMPTY_STRING;
        
        

    private possiblyAccelerated: boolean= false

    private acceleratedString: string = stringUtil!.EMPTY_STRING;
        
        

    public maxTextureSize: number = 64;
        
        

    public readonly VERSION_1_0: string = "1.0";
        
        

    public readonly VERSION_1_1: string = "1.1";
        
        

    public readonly VERSION_2_0: string = "2.0";
        
        

    public readonly VERSION_3_0: string = "3.0";
        
        

    public readonly VERSION_3_1: string = "3.1";
        
        

    public readonly VERSION_3_2: string = "3.2";
        
        

    public readonly VERSION_HIGHER_THAN_EXISTS: string = "999.999";
        
        

    public readonly VERSION_UNK: string = "Unk";
        
        

    public readonly GL_EXT_GPU_SHADER_100: string = "GL_ARB_shading_language_100";
        
        

    public readonly GL_EXT_GPU_SHADER4: string = "GL_EXT_gpu_shader4";
        
        

    private glVersion: string = this.glVersionString;
        
        

    public glInstanceVersion: string = VERSION_UNK;
        
        

    private glExtensionDrawTexture: boolean= false

    private glThreedDrawTexture: boolean= false

    private glExtensionGPUShader4: boolean= false

    private glExtensionGPUShader100: boolean= false

    private vertexBufferObjectSupport: boolean= false
private constructor (){

            super();
            }


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initialized;
    
}


    requireInitialization(){
}


    public initCapabilities(gl: GL10){
var gl = gl

    var METHOD_NAME: string = "initGLCapabilities";
        
        
;
    

        try {
            
    var features: Features = Features.getInstance()!;
        
        
;
    

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        
;
    

    var openGLImageSpecificFactory: OpenGLImageSpecificFactory = OpenGLImageSpecificFactory.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
this.glVersionString= gl.glGetString(GL10.GL_VERSION);
    

    var GL_SHADING_LANGUAGE_VERSION: number = 0x8b8c;
        
        
;
    
this.glShaderVersionString= gl.glGetString(GL_SHADING_LANGUAGE_VERSION);
    

                        if(this.glShaderVersionString == 
                                    null
                                )
                        
                                    {
                                    this.glShaderVersionString= stringUtil!.EMPTY_STRING;
    

                                    }
                                

        try {
            
                        if(this.glShaderVersionString != 
                                    null
                                 && this.glShaderVersionString!.indexOf('.') >= 0)
                        
                                    {
                                    
    var startIndex: number = this.glShaderVersionString!.lastIndexOf(' ')!;
        
        
;
    

                        if(startIndex >= 0)
                        
                                    {
                                    this.glShaderVersionString= this.glShaderVersionString!.substring(startIndex +1);
    

                                    }
                                
this.shaderVersion= Integer.parseInt(this.glShaderVersionString!.replace(CommonSeps.getInstance()!.PERIOD, StringUtil.getInstance()!.EMPTY_STRING));
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, METHOD_NAME, e);
    
}

this.glRenderer= gl.glGetString(GL10.GL_RENDERER);
    
this.glVendor= gl.glGetString(GL10.GL_VENDOR);
    
this.glExtensions= gl.glGetString(GL10.GL_EXTENSIONS);
    

                        if(this.glExtensions!.indexOf(this.GL_EXT_GPU_SHADER_100) >= 0)
                        
                                    {
                                    this.glExtensionGPUShader100= true;
    

                                    }
                                
                        else {
                            this.glExtensionGPUShader100= false;
    

                        }
                            

                        if(this.glExtensions!.indexOf(this.GL_EXT_GPU_SHADER4) >= 0)
                        
                                    {
                                    this.glExtensionGPUShader4= true;
    

                                    }
                                
                        else {
                            this.glExtensionGPUShader4= false;
    

                        }
                            

                        if(this.glRenderer == 
                                    null
                                )
                        
                                    {
                                    this.glRenderer= stringUtil!.EMPTY_STRING;
    

                                    }
                                

                        if(this.glRenderer!.lowercase()!.indexOf("pixelflinger") >= 0)
                        
                                    {
                                    this.acceleratedString= "Probably Not for " +this.glRenderer;
    
this.possiblyAccelerated= false;
    

                                    }
                                
                        else {
                            this.acceleratedString= "Probably for " +this.glRenderer;
    

                    //Otherwise - statement - EmptyStmt

this.possiblyAccelerated= true;
    

                        }
                            
this.glExtensionDrawTexture= false;
    

                        if(this.glVersionString == 
                                    null
                                )
                        
                                    {
                                    this.glVersionString= stringUtil!.EMPTY_STRING;
    
this.glVersion= this.VERSION_UNK;
    

                                    }
                                
                             else 
                        if(this.glVersionString!.indexOf(" 1.0") >= 0)
                        
                                    {
                                    this.glVersion= this.VERSION_1_0;
    

                                    }
                                
                             else 
                        if(this.glVersionString!.indexOf(" 1.1") >= 0)
                        
                                    {
                                    this.glVersion= this.VERSION_1_1;
    

                                    }
                                
                        else {
                            this.glVersion= this.VERSION_UNK;
    

                        }
                            

                        if(gl is GL11)
                        
                                    {
                                    this.glInstanceVersion= this.VERSION_1_1;
    

                                    }
                                
                             else 
                        if(gl is GL10)
                        
                                    {
                                    this.glInstanceVersion= this.VERSION_1_0;
    

                                    }
                                

                        if(this.glVendor == 
                                    null
                                )
                        
                                    {
                                    this.glVendor= stringUtil!.EMPTY_STRING;
    

                                    }
                                

                        if(this.glExtensions == 
                                    null
                                )
                        
                                    {
                                    this.glExtensions= stringUtil!.EMPTY_STRING;
    

                                    }
                                

                        if(this.possiblyAccelerated)
                        
                                    {
                                    PreLogUtil.put(new StringMaker().
                            append("VBO:?")!.appendboolean((this.glInstanceVersion == this.VERSION_1_1))!.append("||")!.appendboolean(this.isExtension(openGLFeatureFactory!.OPENGL_VERTEX_BUFFER_OBJECT))!.toString(), this, METHOD_NAME);
    

                        if((this.glInstanceVersion == this.VERSION_1_1 || this.isExtension(openGLFeatureFactory!.OPENGL_VERTEX_BUFFER_OBJECT)))
                        
                                    {
                                    
                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    PreLogUtil.put("VBO implementation was detected, but disabled by default for Android", this, METHOD_NAME);
    

                                    }
                                
                        else {
                            PreLogUtil.put("VBO implementation was detected, but disabled for now", this, METHOD_NAME);
    

                        }
                            

                                    }
                                

                                    }
                                

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AUTO_SELECT))
                        
                                    {
                                    
                        if(this.vertexBufferObjectSupport)
                        
                                    {
                                    openGLImageSpecificFactory!.setImageFactory(new OpenGLESGL11VBOImageFactory());
    

                                    }
                                
                        else {
                            stringBuffer!.append("OpenGL is on but ");
    
stringBuffer!.append(stringUtil!.toString(openGLFeatureFactory!.OPENGL_DRAW_TEXTURE));
    
stringBuffer!.append(" was not available");
    
PreLogUtil.put(stringBuffer!.toString(), this, METHOD_NAME);
    
openGLImageSpecificFactory!.setImageFactory(new OpenGLESGL10ImageFactory());
    

                        }
                            

                                    }
                                
                        else {
                            stringBuffer!.append(stringUtil!.toString(openGLFeatureFactory!.OPENGL_AUTO_SELECT));
    
stringBuffer!.append(" is not on");
    
PreLogUtil.put(stringBuffer!.toString(), this, METHOD_NAME);
    
openGLImageSpecificFactory!.setImageFactory(new OpenGLESGL10ImageFactory());
    

                        }
                            

    var maxTextureSizeArray: number[] = new Array(1);
        
        
;
    
gl.glGetIntegerv(GL10.GL_MAX_TEXTURE_SIZE, maxTextureSizeArray, 0);
    
this.maxTextureSize= maxTextureSizeArray[0]!;
    
this.initialized= true;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, METHOD_NAME, e);
    
}

}


    isExtension(gameFeature: OpenGLFeature): boolean{
var gameFeature = gameFeature

    var index: number = this.glExtensions!.indexOf(gameFeature!.getName())!;
        
        
;
    

                        if(index >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isGlExtensionDrawTexture(): boolean{
this.requireInitialization();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.glExtensionDrawTexture;
    
}


    public isGlExtensionGPUShader100(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.glExtensionGPUShader100;
    
}


    public isGlExtensionGPUShader4(): boolean{
this.requireInitialization();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.glExtensionGPUShader4;
    
}


    public getGlVersion(): string{
this.requireInitialization();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.glVersion;
    
}


    public getGlVersionString(): string{
this.requireInitialization();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.glVersionString;
    
}


    public getGlShaderVersion(): string{
this.requireInitialization();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.glShaderVersionString;
    
}


    public isGlThreedDrawTexture(): boolean{
this.requireInitialization();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.glThreedDrawTexture;
    
}


    public getGlRenderer(): string{
this.requireInitialization();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.glRenderer;
    
}


    public isVertexBufferObjectSupport(): boolean{
this.requireInitialization();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.vertexBufferObjectSupport;
    
}


    public isTextureSizeValid(widthAndHeight: number): boolean{
    //var widthAndHeight = widthAndHeight
this.requireInitialization();
    

                        if(this.maxTextureSize >= widthAndHeight)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("GL_VERSION: ");
    
stringBuffer!.append(this.glVersionString);
    
stringBuffer!.append(" GL_SHADING_LANGUAGE_VERSION: ");
    
stringBuffer!.append(this.glShaderVersionString);
    
stringBuffer!.append(" GL_RENDERER: ");
    
stringBuffer!.append(this.glRenderer);
    
stringBuffer!.append(" GL_VENDOR: ");
    
stringBuffer!.append(this.glVendor);
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(" Is Accelerated: ");
    
stringBuffer!.append(this.acceleratedString);
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(" VBO Support: ");
    
stringBuffer!.appendboolean(this.isVertexBufferObjectSupport());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(" Max Texture Size: ");
    
stringBuffer!.appendint(this.maxTextureSize);
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(" GL_EXTENSIONS: ");
    

        try {
            
    var tokenizer: Tokenizer = new Tokenizer(commonSeps!.SPACE);
        
        
;
    

    var list: BasicArrayList = tokenizer.getTokens(this.glExtensions, new BasicArrayList())!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(stringUtil!.toString(list.objectArray[index]!));
    
}


                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.put(commonStrings!.EXCEPTION, this, commonStrings!.TOSTRING, e);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

