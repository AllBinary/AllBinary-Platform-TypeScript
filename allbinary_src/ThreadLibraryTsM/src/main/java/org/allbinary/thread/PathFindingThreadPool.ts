
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Runnable } from '../../../java/lang/Runnable.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThreadPool } from './ThreadPool.js';
import { PriorityRunnable } from './PriorityRunnable.js';
//This is mainly for network communications.
export class PathFindingThreadPool extends ThreadPool {
        

    private static readonly instance: ThreadPool = new PathFindingThreadPool("PathFinding", 1, 1);

    public static getInstance(): ThreadPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PathFindingThreadPool.instance;
    
}

public constructor (poolName: string, numThreads: number, priority: number){
            super(poolName, numThreads, ThreadPool.NORMAL_PRIORITY);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public runTaskWithPriority(task: PriorityRunnable){
super.runTaskWithPriority(task);
    
}


    public runTask(task: Runnable){
super.runTask(task);
    
}


    startTask(task: Runnable){
}


    completedTask(task: Runnable){
}


}
                
            

