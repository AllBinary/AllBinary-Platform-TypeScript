
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
        



import { EGLConfig } from "../../../../../javax/microedition/khronos/egl/EGLConfig.js";

    
import { GL10 } from "../../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { InitEmulatorFactory } from "../../../../../org/allbinary/emulator/InitEmulatorFactory.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    

import { RendererStrings } from "./RendererStrings.js";

import { Thread } from "./Thread.js";

export class EmulatorCustomRenderer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly renderStrings: RendererStrings = RendererStrings.getInstance()!;
        
        

    public onSurfaceCreated(gl: GL10, eglConfig: EGLConfig){
    //var gl = gl
    //var eglConfig = eglConfig
this.logUtil!.putF(commonStrings!.START, this, this.renderStrings!.ON_SURFACE_CREATED);
    

    var initEmulatorFactory: InitEmulatorFactory = InitEmulatorFactory.getInstance()!;
        
        
;
    

                        if(!initEmulatorFactory!.isInitEmulator();

                        )
                        
                                    {
                                    
        try {
            
    var WAIT_FOR_EMULATOR: string = "Waiting on Emulator Initialization";
        
        
;
    

        while(!initEmulatorFactory!.isInitEmulator();

                        )
        {
PreLogUtil.put(WAIT_FOR_EMULATOR, this, this.renderStrings!.ON_SURFACE_CREATED);
    
Thread.sleep(180);
    
}


                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, this.renderStrings!.ON_SURFACE_CREATED, e);
    
}


                                    }
                                
}


}
                
            

