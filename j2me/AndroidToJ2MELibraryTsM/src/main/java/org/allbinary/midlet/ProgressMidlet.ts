
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
        



            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Runnable } from '../../../java/lang/Runnable.js';
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { TsUtil } from '../../../org/allbinary/TsUtil.js';
      const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not game specific package import { Processor } from '../../../org/allbinary/canvas/Processor.js';
      const Processor = globalThis.org.allbinary.canvas.Processor;

      
//not game specific package import { Globals } from '../../../org/allbinary/globals/Globals.js';
      const Globals = globalThis.org.allbinary.globals.Globals;

      
//not game specific package import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AbeClientInformationInterface } from '../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { ClientInformationFactory } from '../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js';
      const ClientInformationFactory = globalThis.org.allbinary.logic.system.security.licensing.ClientInformationFactory;

      
//not game specific package import { PrimaryThreadPool } from '../../../org/allbinary/thread/PrimaryThreadPool.js';
      const PrimaryThreadPool = globalThis.org.allbinary.thread.PrimaryThreadPool;

      
//not game specific package import { ThreadPool } from '../../../org/allbinary/thread/ThreadPool.js';
      const ThreadPool = globalThis.org.allbinary.thread.ThreadPool;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryMidlet } from './AllBinaryMidlet.js';
import { MidletExitProcessorFactory } from './MidletExitProcessorFactory.js';
import { ExitRunnable } from './ExitRunnable.js';

export class ProgressMidlet extends AllBinaryMidlet {
        

    public readonly abeClientInformation: AbeClientInformationInterface;

public constructor (clientInformationFactory: ClientInformationFactory){

            super();
        Globals.getInstance()!.init(TsUtil.getInstance()!.getClassClassLoader(this), StringUtil.getInstance()!.EMPTY_STRING);
    
this.preInit();
    
this.abeClientInformation= clientInformationFactory!.getInstance();
    
}


    public preInit(){
}


    exitProgress(isProgress: boolean){

    var processor: Processor = MidletExitProcessorFactory.getInstance()!.getExitInstance(this)!;;
    

        try {
            
    var primaryThreadPool: ThreadPool = PrimaryThreadPool.getInstance()!;;
    

    var runnable: Runnable = new ExitRunnable(this, processor, isProgress);;
    
primaryThreadPool!.runTask(runnable);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "exit", e);
    

        try {
            processor.process();
    

                //: 
} catch(e2) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "exit", e);
    
}

}

}


}
                
            

