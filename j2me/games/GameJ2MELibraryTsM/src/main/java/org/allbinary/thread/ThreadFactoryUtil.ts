
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
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
      //not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
import { RunnableCanvas } from '../../../org/allbinary/canvas/RunnableCanvas.js';
      //not GWT import const RunnableCanvas = globalThis.org.allbinary.canvas.RunnableCanvas;

      
import { AllBinaryGameCanvas } from '../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      //not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
import { DemoCanvas } from '../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
      //not GWT import const DemoCanvas = globalThis.org.allbinary.game.displayable.canvas.DemoCanvas;

      
import { GameCanvasRunnableInterface } from '../../../org/allbinary/game/displayable/canvas/GameCanvasRunnableInterface.js';
      //not GWT import const GameCanvasRunnableInterface = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface;

      
import { RunnableCanvasSingleThreadStartRunnable } from '../../../org/allbinary/game/displayable/canvas/RunnableCanvasSingleThreadStartRunnable.js';
      //not GWT import const RunnableCanvasSingleThreadStartRunnable = globalThis.org.allbinary.game.displayable.canvas.RunnableCanvasSingleThreadStartRunnable;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } from '../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABRunnable } from './ABRunnable.js';
//not GWT import const ABRunnable = globalThis.org.allbinary.thread.ABRunnable;

                import { PrimaryThreadPool } from './PrimaryThreadPool.js';
//not GWT import const PrimaryThreadPool = globalThis.org.allbinary.thread.PrimaryThreadPool;

                import { ThreadPool } from './ThreadPool.js';
//not GWT import const ThreadPool = globalThis.org.allbinary.thread.ThreadPool;

                
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

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
                        if(type == DemoCanvas.TYPE || type == AllBinaryGameCanvas.TYPE)
                        
                                    {
                                    
    var demoGameSingleThreadStartRunnable: RunnableCanvasSingleThreadStartRunnable = new RunnableCanvasSingleThreadStartRunnable(runnable as RunnableCanvas);;
    
PreLogUtil.put(new StringMaker().append("Using Pseudo Thread for DemoCanvas/AllBinaryGameCanvas under PlayN/HTML5: ")!.append(StringUtil.getInstance()!.toString(runnable))!.toString(), this, commonStrings!.CONSTRUCTOR);
    

    var primaryThreadPool: ThreadPool = PrimaryThreadPool.getInstance()!;;
    
primaryThreadPool!.runTask(demoGameSingleThreadStartRunnable);
    

                                    }
                                
                        else {
                            PreLogUtil.put(new StringMaker().append("Using Pseudo Thread for Runnable under PlayN/HTML5: ")!.append(StringUtil.getInstance()!.toString(runnable))!.toString(), this, commonStrings!.CONSTRUCTOR);
    

    var primaryThreadPool: ThreadPool = PrimaryThreadPool.getInstance()!;;
    
primaryThreadPool!.runTask(runnable);
    

                        }
                            

                                    }
                                

    var thread: Thread = new Thread(runnable, runnable.toString());;
    
this.logUtil!.putF(thread.toString(), this, commonStrings!.CONSTRUCTOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return thread;
    
}


    public start(thread: Thread){
thread.start();
    
}


}



