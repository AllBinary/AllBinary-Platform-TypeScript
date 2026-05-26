
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { InterruptedException } from '../../../java/lang/InterruptedException.js';
        
            import { Thread } from '../../../java/lang/Thread.js';
        
            import { Runnable } from '../../../java/lang/Runnable.js';
        
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThreadObjectUtil } from './ThreadObjectUtil.js';
import { ThreadPool } from './ThreadPool.js';

export class PooledThread extends Thread {
        

    private readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly threadObjectUtil: ThreadObjectUtil = ThreadObjectUtil.getInstance()!;

    private readonly threadPool: ThreadPool;

public constructor (threadPool: ThreadPool){
            super(threadPool!.createName());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR);
    
this.threadPool= threadPool;
    
}


    private readonly INTERRUPT_EXCEPTION: string = "Exit InterruptedException";

    public run(){
this.threadPool!.threadStarted();
    

        while(true)
        {

    var task2: Runnable = this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;;
    

        try {
            task2= this.threadPool!.getTask();
    
this.threadPool!.runningTask= true;
    
this.threadPool!.startTask(task2);
    

                //: 
} catch(ex) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(this.INTERRUPT_EXCEPTION, this, this.commonStrings!.RUN);
    
break;

                    
}


                        if(task2 == this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE)
                        
                                    {
                                    break;

                    

                                    }
                                

        try {
            task2.run();
    
this.threadPool!.completedTask(task2);
    
this.threadPool!.runningTask= false;
    

                //: 
} catch(e) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.put(new StringMaker().append(this.commonStrings!.EXCEPTION_LABEL)!.append(StringUtil.getInstance()!.toString(task2))!.toString(), this, this.commonStrings!.RUN, e);
    
}

}

this.threadPool!.threadStopped();
    
}


}
                
            

