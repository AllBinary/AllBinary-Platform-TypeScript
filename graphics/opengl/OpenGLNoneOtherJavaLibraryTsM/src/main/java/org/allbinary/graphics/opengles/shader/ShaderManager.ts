
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { GL10 } from "../../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ShaderManager
            extends Object
         {
        

    private static readonly instance: ShaderManager = new ShaderManager( -1,  -1);
        
        

    public static getInstance(): ShaderManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly LOAD_SHADER: string = "loadShader";
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public readonly GL_VERTEX_SHADER: number

    public readonly GL_FRAGMENT_SHADER: number
public constructor (GL_VERTEX_SHADER: number, GL_FRAGMENT_SHADER: number){

            super();
            //var GL_VERTEX_SHADER = GL_VERTEX_SHADER
    //var GL_FRAGMENT_SHADER = GL_FRAGMENT_SHADER
this.GL_VERTEX_SHADER= GL_VERTEX_SHADER;
    
this.GL_FRAGMENT_SHADER= GL_FRAGMENT_SHADER;
    
}


    public load(gl: GL10, resource: string, shaderAsStringArray: string[], shaderType: number): number{
    //var gl = gl
    //var resource = resource
    //var shaderAsStringArray = shaderAsStringArray
    //var shaderType = shaderType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public loadShader(gl: GL10, resource: string, stringList: BasicArrayList, shaderType: number): number{
    //var gl = gl
    //var resource = resource
    //var stringList = stringList
    //var shaderType = shaderType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


}
                
            

