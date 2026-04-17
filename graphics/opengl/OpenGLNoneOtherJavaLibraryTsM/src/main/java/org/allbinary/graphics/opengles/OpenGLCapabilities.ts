
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
        



import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLCapabilities
            extends Object
         {
        

    private static readonly instance: OpenGLCapabilities = new OpenGLCapabilities();
        
        

    public static getInstance(): OpenGLCapabilities{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly VERSION_1_0: string = "1.0";
        
        

    public readonly VERSION_1_1: string = "1.1";
        
        

    public readonly VERSION_2_0: string = "2.0";
        
        

    public readonly VERSION_3_0: string = "3.0";
        
        

    public readonly VERSION_3_1: string = "3.1";
        
        

    public readonly VERSION_3_2: string = "3.2";
        
        

    public readonly VERSION_HIGHER_THAN_EXISTS: string = "999.999";
        
        

    private glVersion: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public shaderVersion: number = 0;
        
        

    public glInstanceVersion: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public maxTextureSize: number = 64;
        
        
private constructor (){

            super();
            }


    public initCapabilities(gl: any = {}){
var gl = gl
}


    public isGlExtensionDrawTexture(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getGlVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return glVersion;
    
}


    public isVertexBufferObjectSupport(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isTextureSizeValid(widthAndHeight: number): boolean{
    //var widthAndHeight = widthAndHeight



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

