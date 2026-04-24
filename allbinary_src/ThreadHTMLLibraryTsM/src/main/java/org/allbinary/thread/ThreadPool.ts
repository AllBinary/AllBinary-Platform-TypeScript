
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

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { NullRunnable } from "./NullRunnable.js";

import { ThreadPoolStrings } from "./ThreadPoolStrings.js";

import { ThreadObjectUtil } from "./ThreadObjectUtil.js";

import { PriorityRunnable } from "./PriorityRunnable.js";

import { Runnable } from "./Runnable.js";

export class ThreadPool
            extends Object
         {
        

    public NORMAL_PRIORITY: number = 5;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly NULL_RUNNABLE: NullRunnable = NullRunnable.getInstance()!;
        
        

    readonly threadPoolStrings: ThreadPoolStrings = ThreadPoolStrings.getInstance()!;
        
        

    readonly threadObjectUtil: ThreadObjectUtil = ThreadObjectUtil.getInstance()!;
        
        

    private isAlive: boolean= false

    private taskQueue: BasicArrayList = new BasicArrayListD();
        
        

    private numThreads: number= 0

    private runningTask: boolean= false
public constructor (poolName: string, numThreads: number, priority: number){

            super();
            //var poolName = poolName
    //var numThreads = numThreads
    //var priority = priority
}


    private currentPriorityRunnable: PriorityRunnable = threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
        
        

                //@Throws(Error::class)
            
    public runAPriorityTask(){

                        if(!this.currentPriorityRunnable!.isDone();)
                        
                                    {
                                    this.currentPriorityRunnable!.run();
    

                                    }
                                
                        else {
                            
    var runnable: Runnable = this.getTask()!;
        
        
;
    

                        if(runnable == this.NULL_RUNNABLE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.currentPriorityRunnable= runnable as PriorityRunnable;
    

                        if(!(this.currentPriorityRunnable == this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE))
                        
                                    {
                                    this.currentPriorityRunnable!.reset();
    
this.currentPriorityRunnable!.run();
    

                                    }
                                

                        }
                            
}


                //@Throws(Error::class)
            
    public runATask(){

    var runnable: Runnable = this.getTask()!;
        
        
;
    

                        if(runnable != 
                                    null
                                )
                        
                                    {
                                    runnable.run();
    

                                    }
                                
}


    public init(){

                        if(!this.isAlive)
                        
                                    {
                                    this.isAlive= true;
    
this.taskQueue= new BasicArrayListD();
    

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public runTaskWithPriority(task: PriorityRunnable){
    //var task = task

                        if(!this.isAlive)
                        
                                    {
                                    this.init();
    

                                    }
                                

                        if(task != 
                                    null
                                )
                        
                                    {
                                    
    var size: number = this.taskQueue!.size()!;
        
        
;
    

    var runnable: PriorityRunnable
;
    

    var lowerPriorityRunnable: PriorityRunnable = this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
runnable= this.taskQueue!.get(index); as PriorityRunnable;
    

                        if(runnable.getPriority() > task.getPriority())
                        
                                    {
                                    lowerPriorityRunnable= runnable;
    
break;

                    

                                    }
                                
}


                        if(lowerPriorityRunnable == this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE || lowerPriorityRunnable == this.NULL_RUNNABLE)
                        
                                    {
                                    this.taskQueue!.add(task);
    

                                    }
                                
                        else {
                            
    var index: number = this.taskQueue!.indexOf(lowerPriorityRunnable)!;
        
        
;
    
this.taskQueue!.add(index, task);
    

                        }
                            

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public runTask(task: Runnable){
    //var task = task

                        if(!this.isAlive)
                        
                                    {
                                    this.init();
    

                                    }
                                

                        if(task != 
                                    null
                                )
                        
                                    {
                                    this.taskQueue!.add(task);
    

                                    }
                                
}


                //@Throws(InterruptedException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    getTask(): Runnable{

                        if(this.taskQueue!.isEmpty())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NULL_RUNNABLE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.taskQueue!.remove(0); as Runnable;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public clear(){
this.taskQueue!.clear();
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public close(){

                        if(this.isAlive)
                        
                                    {
                                    this.isAlive= false;
    
this.taskQueue!.clear();
    
this.currentPriorityRunnable= this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
    

                                    }
                                
}


    public join(){
this.isAlive= false;
    
this.taskQueue!.clear();
    
this.currentPriorityRunnable= this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
    
}


    public isBusy(): boolean{

                        if(!this.isAlive)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(this.taskQueue!.size() > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        if(this.runningTask)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    threadStarted(){
}


    threadStopped(){

                        if(this.numThreads == 1)
                        
                                    {
                                    this.isAlive= false;
    
this.taskQueue!.clear();
    
this.currentPriorityRunnable= this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
    

                                    }
                                
}


    startTask(task: Runnable){
    //var task = task
}


    completedTask(task: Runnable){
    //var task = task
}


}
                
            

