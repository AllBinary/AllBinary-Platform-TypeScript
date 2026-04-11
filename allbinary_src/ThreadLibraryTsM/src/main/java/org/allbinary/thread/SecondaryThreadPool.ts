
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
        



import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    

export class SecondaryThreadPool extends ThreadPool {
        

    private static readonly instance: ThreadPool = new SecondaryThreadPool("Secondary", 1);
        
        

    public static getInstance(): ThreadPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

public constructor (poolName: string, numThreads: number)                        

                            : super(poolName, numThreads){

            super();
                //var poolName = poolName
    //var numThreads = numThreads


                            //For kotlin this is before the body of the constructor.
                    
}


    public runTask(task: Runnable){
var task = task
logUtil!.put(new StringMaker().
                            append(StringUtil.getInstance()!.toString(task))!.appendlong(System.currentTimeMillis())!.toString(), this, this.threadPoolStrings!.ADD_TASK);
    
super.runTask(task);
    
}


    startTask(task: Runnable){
var task = task
logUtil!.put(new StringMaker().
                            append(this.threadPoolStrings!.START_TASK)!.append(StringUtil.getInstance()!.toString(task))!.appendlong(System.currentTimeMillis())!.toString(), this, this.commonStrings!.RUN);
    
}


    completedTask(task: Runnable){
var task = task
logUtil!.put(new StringMaker().
                            append(this.threadPoolStrings!.COMPLETE_TASK)!.append(StringUtil.getInstance()!.toString(task))!.appendlong(System.currentTimeMillis())!.toString(), this, this.commonStrings!.RUN);
    
}


}
                
            

