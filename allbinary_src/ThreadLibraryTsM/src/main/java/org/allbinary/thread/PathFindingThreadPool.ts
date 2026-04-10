
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

    

export class PathFindingThreadPool extends ThreadPool {
        

    private static readonly instance: ThreadPool = new PathFindingThreadPool("PathFinding", 1, 1);
        
        

    public static getInstance(): ThreadPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

public constructor (poolName: string, numThreads: number, priority: number)                        

                            : super(poolName, numThreads){

            super();
                //var poolName = poolName
    //var numThreads = numThreads
    //var priority = priority


                            //For kotlin this is before the body of the constructor.
                    
}


    public runTaskWithPriority(task: PriorityRunnable){
    //var task = task
super.runTaskWithPriority(task)
}


    public runTask(task: Runnable){
var task = task
super.runTask(task)
}


    startTask(task: Runnable){
var task = task
}


    completedTask(task: Runnable){
var task = task
}


}
                
            

