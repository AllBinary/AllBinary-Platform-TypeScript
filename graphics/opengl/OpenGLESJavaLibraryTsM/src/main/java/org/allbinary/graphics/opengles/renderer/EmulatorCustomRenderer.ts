
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Thread } from '../../../../../java/lang/Thread.js';
        
//not game specific package import { EGLConfig } from '../../../../../javax/microedition/khronos/egl/EGLConfig.js';
      const EGLConfig = globalThis.javax.microedition.khronos.egl.EGLConfig;

      
//not game specific package import { GL10 } from '../../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { InitEmulatorFactory } from '../../../../../org/allbinary/emulator/InitEmulatorFactory.js';
      const InitEmulatorFactory = globalThis.org.allbinary.emulator.InitEmulatorFactory;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RendererStrings } from './RendererStrings.js';

export class EmulatorCustomRenderer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly renderStrings: RendererStrings = RendererStrings.getInstance()!;

    public onSurfaceCreated(gl: GL10, eglConfig: EGLConfig){
this.logUtil!.putF(this.commonStrings!.START, this, this.renderStrings!.ON_SURFACE_CREATED);
    

    var initEmulatorFactory: InitEmulatorFactory = InitEmulatorFactory.getInstance()!;;
    

                        if(!initEmulatorFactory!.isInitEmulator())
                        
                                    {
                                    
        try {
            
    var WAIT_FOR_EMULATOR: string = "Waiting on Emulator Initialization";;
    

        while(!initEmulatorFactory!.isInitEmulator())
        {
PreLogUtil.put(WAIT_FOR_EMULATOR, this, this.renderStrings!.ON_SURFACE_CREATED);
    
Thread.sleep(180);
    
}


                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.renderStrings!.ON_SURFACE_CREATED, e);
    
}


                                    }
                                
}


}
                
            

