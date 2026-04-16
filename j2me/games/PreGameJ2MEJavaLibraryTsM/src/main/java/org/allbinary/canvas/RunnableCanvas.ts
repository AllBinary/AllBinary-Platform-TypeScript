
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
        



import { CommandListener } from "../../../javax/microedition/lcdui/CommandListener.js";

    
import { NullCommandListener } from "../../../javax/microedition/lcdui/NullCommandListener.js";

    
import { NullWaitGameRunnable } from "../../../org/allbinary/game/displayable/canvas/NullWaitGameRunnable.js";

    
import { CanvasStrings } from "../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { MyCanvas } from "../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { NullThread } from "../../../org/allbinary/thread/NullThread.js";

    
import { RunnableInterface } from "../../../org/allbinary/thread/RunnableInterface.js";

    
import { ThreadObjectUtil } from "../../../org/allbinary/thread/ThreadObjectUtil.js";

    
import { TimeDelayHelper } from "../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

import { Processor } from "./Processor.js";

import { Thread } from "./Thread.js";

import { Thread } from "./Thread.js";

import { Thread } from "./Thread.js";

import { System } from "./System.js";

import { System } from "./System.js";

export class RunnableCanvas extends MyCanvas
                , RunnableInterface {
        

    readonly nullUtil: NullUtil = NullUtil.getInstance()!;
        
        

    private thread: Thread = NullThread.NULL_THREAD;
        
        

    private currentThread: Thread = NullThread.NULL_THREAD;
        
        

    private running: boolean= false

    readonly loopTimeHelper: TimeDelayHelper = new TimeDelayHelper(NullWaitGameRunnable.getInstance()!.WAIT);
        
        

    runnableCanvasRefreshHelper: Processor = Processor.getInstance()!;
        
        

    readonly commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        

    readonly threadObjectUtil: ThreadObjectUtil = ThreadObjectUtil.getInstance()!;
        
        
public constructor (commandListener: CommandListener, childNameList: BasicArrayList, hasParam: boolean)                        

                            : super(CommonStrings.getInstance()!.UNKNOWN, childNameList){

            super();
                //var commandListener = commandListener
    //var childNameList = childNameList
    //var hasParam = hasParam


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(new StringMaker().
                            append("delay: ")!.appendint(this.loopTimeHelper!.delay)!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    
this.runnableCanvasRefreshHelper= new RunnableCanvasRefreshHelper(this);
    

                        if(commandListener != 
                                    null
                                )
                        
                                    {
                                    this.initCommands(commandListener);
    

                                    }
                                
                             else 
                        if(hasParam)
                        
                                    {
                                    this.logUtil!.putF("commandListener was null", this, "initCommands");
    

                                    }
                                
}

public constructor (commandListener: CommandListener, childNameList: BasicArrayList)                        

                            : this(commandListener, childNameList, true){

            super();
                //var commandListener = commandListener
    //var childNameList = childNameList


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor ()                        

                            : this(NullCommandListener.NULL_COMMAND_LISTENER, CanvasStrings.getInstance()!.EMPTY_CHILD_NAME_LIST, false){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
this.logUtil!.putF(commonStrings!.NOT_IMPLEMENTED, this, "initCommands");
    
}


    public isMainCanvas(): boolean{

                        if(this.getCustomCommandListener() != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public setThread(thread: Thread){
var thread = thread
this.thread= thread;
    
}


    public setRunning(running: boolean){
var running = running
this.running= running;
    

                        if(!this.running)
                        
                                    {
                                    this.thread= NullThread.NULL_THREAD;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {
threadObjectUtil!.notifyObject(this);
    
}


                                    }
                                
this.logUtil!.putF(new StringMaker().
                            append(IS_RUNNING)!.appendboolean(this.running)!.toString(), this, SET_RUNNING);
    
}


    readonly SET_RUNNING: string = "setRunning";
        
        

    private readonly IS_RUNNING: string = "isRunning";
        
        

    private readonly THREAD: string = "Thread: ";
        
        

    private readonly NOT_EQUAL: string = " != ";
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{

                        if(this.thread == this.currentThread)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return running;
    

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(THREAD);
    

                        if(this.thread != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(this.thread.toString());
    

                                    }
                                
stringBuffer!.append(NOT_EQUAL);
    

                        if(this.currentThread != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(StringUtil.getInstance()!.toString(this.currentThread));
    

                                    }
                                
this.logUtil!.putF(stringBuffer!.toString(), this, IS_RUNNING);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getLoopTimeHelperP(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return loopTimeHelper;
    
}


    private pauseWait: number = 0;
        
        

    setWait(wait: number){
var wait = wait
loopTimeHelper!.delay= wait;
    
this.pauseWait= wait.toLong() *3;
    
this.logUtil!.putF(new StringMaker().
                            append("setWait - delay: ")!.appendint(this.loopTimeHelper!.delay)!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    
}


    getWait(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loopTimeHelper!.delay;
    
}


    public setCurrentThread(){
this.currentThread= Thread.currentThread();
    
}


    setCurrentThreadFake(){
this.currentThread= thread;
    
}


    showNotify(){

        try {
            this.stopWaiting();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "showNotify", e);
    
}

}


    private notified: boolean = false;
        
        

                //@Throws(Error::class)
            
    stopWaiting(){
this.notified= true;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {
this.threadObjectUtil!.notifyObject(this);
    
}

this.repaint();
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public waitOnNotify(wait: number){
var wait = wait

                        if(!this.notified)
                        
                                    {
                                    
                        if(wait > 0)
                        
                                    {
                                    threadObjectUtil!.waitObject(this, wait.toLong());
    

                                    }
                                
                        else {
                            threadObjectUtil!.waitObject(this);
    

                        }
                            

                                    }
                                
}


    private readonly PAUSE_SLEEP: string = "pause sleep";
        
        

                //@Throws(Error::class)
            
    public processSleep(){
Thread.sleep(pauseWait);
    
}


    public isPausable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public processGameSleep(sleep: number){
var sleep = sleep
Thread.sleep(sleep);
    
}


    private readonly START_PAUSE: string = "start pause - game thread sleep at: ";
        
        

    private readonly END_PAUSE: string = "end pause - game thread sleep at: ";
        
        

    private readonly PROCESS_LOOP_SLEEP: string = "processLoopSleep";
        
        

                //@Throws(Error::class)
            
    public processLoopSleep(){
this.runnableCanvasRefreshHelper!.process();
    

                        if(this.isPaused() && this.isRunning() && !this.isSingleThread();

                        )
                        
                                    {
                                    
    var stringMaker: StringMaker = new StringMaker();
        
        
;
    
this.logUtil!.putF(stringMaker!.append(START_PAUSE)!.appendlong(System.currentTimeMillis())!.append(PAUSE_SLEEP)!.appendlong(this.pauseWait)!.toString(), this, PROCESS_LOOP_SLEEP);
    

        while(this.isPaused() && this.isRunning() && !this.isSingleThread();

                        )
        {
this.processSleep();
    

                        if(!this.isPausable();

                        )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(END_PAUSE)!.appendlong(System.currentTimeMillis())!.toString(), this, PROCESS_LOOP_SLEEP);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
}


                                    }
                                

    var elapsedTime: number = this.loopTimeHelper!.getElapsed()!;
        
        
;
    

    var wait: number = this.loopTimeHelper!.delay.toLong();
        
        
;
    

                        if(elapsedTime > wait)
                        
                                    {
                                    elapsedTime= wait;
    

                                    }
                                
                        else {
                            processGameSleep(wait -elapsedTime);
    

                        }
                            
}


    public isSingleThread(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public run(){
this.setCurrentThread();
    
}


                //@Throws(Error::class)
            
    public end2(){
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


}
                
            

