
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

        


            import { Runnable } from '../../../java/lang/Runnable.js';
        
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThreadPool } from './ThreadPool.js';
//sameFolderImports - not GWT import - same folder const ThreadPool
//This is mainly for network communications.
export class ImageThreadPool extends ThreadPool {
        

    private static readonly instance: ThreadPool = new ImageThreadPool("ImageLoader", 1, ThreadPool.NORMAL_PRIORITY);

    public static getInstance(): ThreadPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageThreadPool.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (poolName: string, numThreads: number, priority: number){
            super(poolName, numThreads, priority);
                    

                            //For kotlin this is before the body of the constructor.
                    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public runTask(task: Runnable){
super.runTask(task);
    
}


    startTask(task: Runnable){
}


    completedTask(task: Runnable){
}


}

