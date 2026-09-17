
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
        
import { Processor } from '../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor
import { AbeClientInformationInterface } from '../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface
import { ClientInformationFactory } from '../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js';
//not GWT import const ClientInformationFactory
import { PrimaryThreadPool } from '../../../org/allbinary/thread/PrimaryThreadPool.js';
//not GWT import const PrimaryThreadPool
import { ThreadPool } from '../../../org/allbinary/thread/ThreadPool.js';
//not GWT import const ThreadPool
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryMidlet } from './AllBinaryMidlet.js';
//not GWT import - same folder const AllBinaryMidletimport { MidletExitProcessorFactory } from './MidletExitProcessorFactory.js';
//not GWT import - same folder const MidletExitProcessorFactoryimport { ExitRunnable } from './ExitRunnable.js';
//not GWT import - same folder const ExitRunnable//J2MEForJ2ME
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



