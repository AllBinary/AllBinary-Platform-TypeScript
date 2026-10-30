
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
        
            import { Thread } from '../../../java/lang/Thread.js';
        
            import { Runnable } from '../../../java/lang/Runnable.js';
        
import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil

import { RunnableCanvas } from '../../../org/allbinary/canvas/RunnableCanvas.js';
//not GWT import const RunnableCanvas

import { AllBinaryGameCanvas } from '../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
//not GWT import const AllBinaryGameCanvas

import { DemoCanvas } from '../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
//not GWT import const DemoCanvas

import { GameCanvasRunnableInterface } from '../../../org/allbinary/game/displayable/canvas/GameCanvasRunnableInterface.js';
//not GWT import const GameCanvasRunnableInterface

import { RunnableCanvasSingleThreadStartRunnable } from '../../../org/allbinary/game/displayable/canvas/RunnableCanvasSingleThreadStartRunnable.js';
//not GWT import const RunnableCanvasSingleThreadStartRunnable

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABRunnable } from './ABRunnable.js';
//sameFolderImports - not GWT import - same folder const ABRunnable
import { PrimaryThreadPool } from './PrimaryThreadPool.js';
//sameFolderImports - not GWT import - same folder const PrimaryThreadPool
import { ThreadPool } from './ThreadPool.js';
//sameFolderImports - not GWT import - same folder const ThreadPool

export class ThreadFactoryUtil
            extends Object
         {
        

    private static readonly instance: ThreadFactoryUtil = new ThreadFactoryUtil();

    public static getInstance(): ThreadFactoryUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ThreadFactoryUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public getInstanceGameCanvasRunnable(runnable: GameCanvasRunnableInterface): Thread{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstanceType(runnable, runnable.getType());;
    
}


    public getInstanceForRunnable(runnable: ABRunnable): Thread{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstanceType(runnable, runnable.getType());;
    
}


    getInstanceType(runnable: Runnable, type: number): Thread{

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
                        if(type == DemoCanvas.TYPE || type == AllBinaryGameCanvas.TYPE)
                        
                                    {
                                    
    let demoGameSingleThreadStartRunnable: RunnableCanvasSingleThreadStartRunnable = new RunnableCanvasSingleThreadStartRunnable(runnable as RunnableCanvas);;
    
PreLogUtil.put(new StringMaker().append("Using Pseudo Thread for DemoCanvas/AllBinaryGameCanvas under PlayN/HTML5: ")!.append(StringUtil.getInstance()!.toString(runnable))!.toString(), this, commonStrings!.CONSTRUCTOR);
    

    let primaryThreadPool: ThreadPool = PrimaryThreadPool.getInstance()!;;
    
primaryThreadPool!.runTask(demoGameSingleThreadStartRunnable);
    

                                    }
                                
                        else {
                            PreLogUtil.put(new StringMaker().append("Using Pseudo Thread for Runnable under PlayN/HTML5: ")!.append(StringUtil.getInstance()!.toString(runnable))!.toString(), this, commonStrings!.CONSTRUCTOR);
    

    let primaryThreadPool: ThreadPool = PrimaryThreadPool.getInstance()!;;
    
primaryThreadPool!.runTask(runnable);
    

                        }
                            

                                    }
                                

    let thread: Thread = new Thread(runnable, runnable.toString());;
    
this.logUtil!.putF(thread.toString(), this, commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return thread;
    
}


    public start(thread: Thread){
thread.start();
    
}


}

