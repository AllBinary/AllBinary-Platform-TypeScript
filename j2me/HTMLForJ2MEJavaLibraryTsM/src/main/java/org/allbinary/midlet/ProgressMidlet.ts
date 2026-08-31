
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
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Processor } from '../../../org/allbinary/canvas/Processor.js';
      //not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
import { AbeClientInformationInterface } from '../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ClientInformationFactory } from '../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js';
      //not GWT import const ClientInformationFactory = globalThis.org.allbinary.logic.system.security.licensing.ClientInformationFactory;

      
import { PrimaryThreadPool } from '../../../org/allbinary/thread/PrimaryThreadPool.js';
      //not GWT import const PrimaryThreadPool = globalThis.org.allbinary.thread.PrimaryThreadPool;

      
import { ThreadPool } from '../../../org/allbinary/thread/ThreadPool.js';
      //not GWT import const ThreadPool = globalThis.org.allbinary.thread.ThreadPool;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryMidlet } from './AllBinaryMidlet.js';
import { MidletExitProcessorFactory } from './MidletExitProcessorFactory.js';
import { ExitRunnable } from './ExitRunnable.js';

export class ProgressMidlet extends AllBinaryMidlet {
        

    public readonly abeClientInformation: AbeClientInformationInterface;

public constructor (clientInformationFactory: ClientInformationFactory){

            super();
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



