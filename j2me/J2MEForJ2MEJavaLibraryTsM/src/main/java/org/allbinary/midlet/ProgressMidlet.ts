
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
        



import { Processor } from "../../../org/allbinary/canvas/Processor.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ClientInformationFactory } from "../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js";

    
import { PrimaryThreadPool } from "../../../org/allbinary/thread/PrimaryThreadPool.js";

    
import { ThreadPool } from "../../../org/allbinary/thread/ThreadPool.js";

    

export class ProgressMidlet extends AllBinaryMidlet {
        

    public readonly abeClientInformation: AbeClientInformationInterface
public constructor (clientInformationFactory: ClientInformationFactory){

            super();
                //var clientInformationFactory = clientInformationFactory
this.preInit()
this.abeClientInformation= clientInformationFactory!.getInstance()
}


    public preInit(){
}


    exit(isProgress: boolean){
var isProgress = isProgress

    var processor: Processor = MidletExitProcessorFactory.getInstance()!.getInstance(this)!;
        
        


        try {
            
    var primaryThreadPool: ThreadPool = PrimaryThreadPool.getInstance()!;
        
        


    var runnable: Runnable = new ExitRunnable(this, processor, isProgress);
        
        

primaryThreadPool!.runTask(runnable)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "exit", e)

        try {
            processor.process()
} catch(e2: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "exit", e)
}

}

}


}
                
            

