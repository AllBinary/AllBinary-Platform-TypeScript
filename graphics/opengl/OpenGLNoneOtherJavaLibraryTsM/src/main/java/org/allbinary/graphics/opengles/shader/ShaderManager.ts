
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { GL10 } from '../../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ShaderManager
            extends Object
         {
        

    private static readonly instance: ShaderManager = new ShaderManager( -1,  -1);

    public static getInstance(): ShaderManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ShaderManager.instance;
    
}


    readonly LOAD_SHADER: string = "loadShader";

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public readonly GL_VERTEX_SHADER: number;

    public readonly GL_FRAGMENT_SHADER: number;

public constructor (GL_VERTEX_SHADER: number, GL_FRAGMENT_SHADER: number){

            super();
        this.GL_VERTEX_SHADER= GL_VERTEX_SHADER;
    
this.GL_FRAGMENT_SHADER= GL_FRAGMENT_SHADER;
    
}


    public load(gl: GL10, resource: string, shaderAsStringArray: string[], shaderType: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public loadShader(gl: GL10, resource: string, stringList: BasicArrayList, shaderType: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


}



