
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


        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
            import { InterruptedException } from '../../../java/lang/InterruptedException.js';
        
            import { Thread } from '../../../java/lang/Thread.js';
        
            import { Runnable } from '../../../java/lang/Runnable.js';
        
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      
import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
      
import { BasicArrayListUtil } from '../../../org/allbinary/util/BasicArrayListUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NullRunnable } from './NullRunnable.js';
import { ThreadPoolStrings } from './ThreadPoolStrings.js';
import { ThreadObjectUtil } from './ThreadObjectUtil.js';
import { PooledThread } from './PooledThread.js';
import { PriorityRunnable } from './PriorityRunnable.js';

export class ThreadPool
            extends Object
         {
        

    private static readonly ROOT_NAME: string = "-PooledThread-";

    public static readonly NORMAL_PRIORITY: number = Thread.NORM_PRIORITY;

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

    runningTask: boolean= false
public constructor (poolName: string, numThreads: number, priority: number){

            super();
        this.poolName= poolName;
    
this.priority= priority;
    
this.numThreads= numThreads;
    
}


    public init(){

                        if(!this.isAlive)
                        
                                    {
                                    this.isAlive= true;
    
this.taskQueue= new BasicArrayListD();
    

    var pooledThread: PooledThread
;
    




                        for (
    var i: number = 0;
i < this.numThreads; i++)
        {
pooledThread= new PooledThread(this);
    
pooledThread!.setPriority(this.priority);
    
pooledThread!.start();
    
}


                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public runAPriorityTask(){



                            throw new RuntimeException();
                    
}


    public runTaskWithPriority(task: PriorityRunnable){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        

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
runnable= this.taskQueue!.get(index) as PriorityRunnable;
    

                        if(runnable.getPriority() > task.getPriority())
                        
                                    {
                                    lowerPriorityRunnable= runnable;
    
break;

                    

                                    }
                                
}


                        if(lowerPriorityRunnable == this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE)
                        
                                    {
                                    this.taskQueue!.add(task);
    

                                    }
                                
                        else {
                            
    var index: number = this.taskQueue!.indexOf(lowerPriorityRunnable)!;
;
    
this.taskQueue!.addAt(index, task);
    

                        }
                            
this.notify();
    

                                    }
                                


}


    public runTask(task: Runnable){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        

                        if(!this.isAlive)
                        
                                    {
                                    this.init();
    

                                    }
                                

                        if(task != 
                                    null
                                )
                        
                                    {
                                    this.taskQueue!.add(task);
    
this.notify();
    

                                    }
                                


}


                //@Throws(InterruptedException.constructor)
            
    getTask(): Runnable{

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        

        while(this.taskQueue!.size() == 0)
        {

                        if(!this.isAlive)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NULL_RUNNABLE;
    

                                    }
                                
this.wait();
    
}


    var runnable: Runnable = this.taskQueue!.removeAt(0) as Runnable;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return runnable;
    


}


    public clear(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        

                        if(this.isAlive)
                        
                                    {
                                    this.taskQueue!.clear();
    

                                    }
                                


}


    public close(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        

                        if(this.isAlive)
                        
                                    {
                                    this.isAlive= false;
    
this.taskQueue!.clear();
    

                                    }
                                


}


    public join(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        
this.isAlive= false;
    
this.taskQueue!.clear();
    
this.notifyAll();
    


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
    

                                    }
                                
}


    startTask(task: Runnable){
}


    completedTask(task: Runnable){
}


    public createName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(this.poolName)!.append(ThreadPool.ROOT_NAME)!.appendint(this.threadID++)!.toString();;
    
}


}
                
            

