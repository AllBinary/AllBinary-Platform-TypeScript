
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
        



import { EGLConfig } from "../../../../../javax/microedition/khronos/egl/EGLConfig.js";

    
import { GL10 } from "../../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class CompositeShaderUpdater extends ShaderUpdater {
        

    private static readonly instance: CompositeShaderUpdater = new CompositeShaderUpdater(StringUtil.getInstance()!.getArrayInstance(), StringUtil.getInstance()!.getArrayInstance(), StringUtil.getInstance()!.getArrayInstance());
        
        

    public static getInstance(): CompositeShaderUpdater{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
public constructor (uniformBlockArray: string[], uniformArray: string[], attributeArray: string[])                        

                            : this(uniformBlockArray, uniformArray, attributeArray, IntArray(attributeArray!.length)){

            super();
                //var uniformBlockArray = uniformBlockArray
    //var uniformArray = uniformArray
    //var attributeArray = attributeArray


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (uniformBlockArray: string[], uniformArray: string[], attributeArray: string[], attributeHandleArray: IntArray){

            super();
                //var uniformBlockArray = uniformBlockArray
    //var uniformArray = uniformArray
    //var attributeArray = attributeArray
    //var attributeHandleArray = attributeHandleArray
}


    public onSurfaceCreated(gl: GL10, eglConfig: EGLConfig, programHandle: number){
    //var gl = gl
    //var eglConfig = eglConfig
    //var programHandle = programHandle
}


    public onSurfaceDestroyed(gl: GL10){
    //var gl = gl
}


}
                
            

