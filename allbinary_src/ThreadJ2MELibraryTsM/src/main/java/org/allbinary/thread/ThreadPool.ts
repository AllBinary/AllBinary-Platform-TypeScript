
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

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class ThreadPool
            extends Object
         {
        

    private static readonly ROOT_NAME: string = "-PooledThread-";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly NULL_RUNNABLE: NullRunnable = NullRunnable.getInstance()!;
        
        

    readonly threadPoolStrings: ThreadPoolStrings = ThreadPoolStrings.getInstance()!;
        
        

    readonly threadObjectUtil: ThreadObjectUtil = ThreadObjectUtil.getInstance()!;
        
        

    private readonly poolName: string

    private readonly priority: number

    private isAlive: boolean = false;
        
        

    private taskQueue: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

    private threadID: number= 0

    private numThreads: number
public constructor (poolName: string, numThreads: number)                        

                            : this(poolName, numThreads, Thread.NORM_PRIORITY){

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
this.poolName= poolName
this.priority= priority
this.numThreads= numThreads
}


    public init(){

    
                        if(!this.isAlive)
                        
                                    {
                                    this.isAlive= true
this.taskQueue= BasicArrayList()

    var pooledThread: PooledThread





                        for (
    var i: number = 0;
        
        
i < this.numThreads; i++)
        {
pooledThread= PooledThread()
setPriority(priority)
start()
}


                                    }
                                
}


                @Throws(Exception::class)
            
    public runAPriorityTask(){



                            throw RuntimeException()
}


    public runTaskWithPriority(task: PriorityRunnable){
    //var task = task

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {

    
                        if(!this.isAlive)
                        
                                    {
                                    this.init()

                                    }
                                

    
                        if(task != 
                                    null
                                )
                        
                                    {
                                    
    var size: number = this.taskQueue!.size()!;
        
        


    var runnable: PriorityRunnable


    var lowerPriorityRunnable: PriorityRunnable = threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
runnable= this.taskQueue!.get(index) as PriorityRunnable

    
                        if(runnable.getPriority() > task.getPriority())
                        
                                    {
                                    lowerPriorityRunnable= runnable
break;

                    

                                    }
                                
}


    
                        if(lowerPriorityRunnable == threadObjectUtil!.NULL_PRIORITY_RUNNABLE || lowerPriorityRunnable == NULL_RUNNABLE)
                        
                                    {
                                    add(task)

                                    }
                                
                        else {
                            
    var index: number = this.taskQueue!.indexOf(lowerPriorityRunnable)!;
        
        

add(index, task)

                        }
                            
notify()

                                    }
                                
}

}


    public runTask(task: Runnable){
    //var task = task

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {

    
                        if(!isAlive)
                        
                                    {
                                    this.init()

                                    }
                                

    
                        if(task != 
                                    null
                                )
                        
                                    {
                                    add(task)
notify()

                                    }
                                
}

}


                @Throws(InterruptedException::class)
            
    getTask(): Runnable{

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {

        while(this.taskQueue!.size() == 0)
        {

    
                        if(!this.isAlive)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NULL_RUNNABLE;
    

                                    }
                                
this.wait()
}


    var runnable: Runnable = this.taskQueue!.remove(0) as Runnable;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return runnable;
    
}

}


    public clear(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {

    
                        if(this.isAlive)
                        
                                    {
                                    clear()

                                    }
                                
}

}


    public close(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {

    
                        if(this.isAlive)
                        
                                    {
                                    this.isAlive= false
clear()

                                    }
                                
}

}


    public join(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {
this.isAlive= false
clear()
notifyAll()
}

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
                                    this.isAlive= false
clear()

                                    }
                                
}


    startTask(task: Runnable){
    //var task = task
}


    completedTask(task: Runnable){
    //var task = task
}


    private runningTask: boolean= false

export inner class PooledThread extends Thread {
        
/*Static stuff is not allowed for Typescript inner classes*//**/

public constructor ()                        

                            : super(StringMaker().
                            append(poolName)!.append(ROOT_NAME)!.appendint(threadID++)!.toString()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
put(commonStrings!.CONSTRUCTOR, this, commonStrings!.CONSTRUCTOR)
}


    private readonly INTERRUPT_EXCEPTION: string = "Exit InterruptedException";
        
        

    public run(){
threadStarted()

        while(true)
        {

    var task2: Runnable = threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
        
        


        try {
            task2= getTask()
runningTask= true
startTask(task2)
} catch(ex: InterruptedException)
            {
put(INTERRUPT_EXCEPTION, this, commonStrings!.RUN)
break;

                    
}


    
                        if(task2 == threadObjectUtil!.NULL_PRIORITY_RUNNABLE)
                        
                                    {
                                    break;

                    

                                    }
                                

        try {
            run()
completedTask(task2)
runningTask= false
} catch(e: Exception)
            {
put(StringMaker().
                            append(commonStrings!.EXCEPTION_LABEL)!.append(StringUtil.getInstance()!.toString(task2))!.toString(), this, commonStrings!.RUN, e)
}

}

threadStopped()
}


}
                
            
}
                
            

