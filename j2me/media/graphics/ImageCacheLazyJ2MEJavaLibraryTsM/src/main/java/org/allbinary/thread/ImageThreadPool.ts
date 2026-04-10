
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
        



import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class ImageThreadPool extends ThreadPool {
        

    private static readonly instance: ThreadPool = new ImageThreadPool("ImageLoader", 1);
        
        

    public static getInstance(): ThreadPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (poolName: string, numThreads: number)                        

                            : super(poolName, numThreads){

            super();
                //var poolName = poolName
    //var numThreads = numThreads


                            //For kotlin this is before the body of the constructor.
                    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public runTask(task: Runnable){
var task = task
runTask(task)
}


    startTask(task: Runnable){
var task = task
}


    completedTask(task: Runnable){
var task = task
}


}
                
            

