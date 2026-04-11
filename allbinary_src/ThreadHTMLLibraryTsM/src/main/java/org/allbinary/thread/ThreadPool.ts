
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

    

export class ThreadPool
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly NULL_RUNNABLE: NullRunnable = NullRunnable.getInstance()!;
        
        

    readonly threadPoolStrings: ThreadPoolStrings = ThreadPoolStrings.getInstance()!;
        
        

    readonly threadObjectUtil: ThreadObjectUtil = ThreadObjectUtil.getInstance()!;
        
        

    private isAlive: boolean= false

    private taskQueue: BasicArrayList = new BasicArrayList();
        
        

    private numThreads: number= 0

    private runningTask: boolean= false
public constructor (poolName: string, numThreads: number)                        

                            : this(poolName, numThreads, 5){

            super();
                //var poolName = poolName
    //var numThreads = numThreads


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (poolName: string, numThreads: number, priority: number){

            super();
                //var poolName = poolName
    //var numThreads = numThreads
    //var priority = priority
}


    private currentPriorityRunnable: PriorityRunnable = threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
        
        

                //@Throws(Error::class)
            
    public runAPriorityTask(){

                        if(!currentPriorityRunnable!.isDone();

                        )
                        
                                    {
                                    currentPriorityRunnable!.run();
    

                                    }
                                
                        else {
                            
    var runnable: Runnable = this.getTask()!;
        
        
;
    

                        if(runnable == NULL_RUNNABLE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
currentPriorityRunnable= runnable as PriorityRunnable;
    

                        if(!(currentPriorityRunnable == threadObjectUtil!.NULL_PRIORITY_RUNNABLE))
                        
                                    {
                                    currentPriorityRunnable!.reset();
    
currentPriorityRunnable!.run();
    

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
                                    isAlive= true;
    
taskQueue= BasicArrayList();
    

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
    

    var lowerPriorityRunnable: PriorityRunnable = threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
runnable= this.taskQueue!.get(index);

                         as PriorityRunnable;
    

                        if(runnable.getPriority() > task.getPriority())
                        
                                    {
                                    lowerPriorityRunnable= runnable;
    
break;

                    

                                    }
                                
}


                        if(lowerPriorityRunnable == threadObjectUtil!.NULL_PRIORITY_RUNNABLE || lowerPriorityRunnable == NULL_RUNNABLE)
                        
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

                        if(!isAlive)
                        
                                    {
                                    this.init();
    

                                    }
                                

                        if(task != 
                                    null
                                )
                        
                                    {
                                    taskQueue!.add(task);
    

                                    }
                                
}


                //@Throws(InterruptedException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    getTask(): Runnable{

                        if(taskQueue!.isEmpty())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NULL_RUNNABLE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return taskQueue!.remove(0);

                         as Runnable;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public clear(){
taskQueue!.clear();
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public close(){

                        if(isAlive)
                        
                                    {
                                    isAlive= false;
    
taskQueue!.clear();
    
this.currentPriorityRunnable= threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
    

                                    }
                                
}


    public join(){
isAlive= false;
    
taskQueue!.clear();
    
this.currentPriorityRunnable= threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
    
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
    
taskQueue!.clear();
    
this.currentPriorityRunnable= threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
    

                                    }
                                
}


    startTask(task: Runnable){
    //var task = task
}


    completedTask(task: Runnable){
    //var task = task
}


}
                
            

