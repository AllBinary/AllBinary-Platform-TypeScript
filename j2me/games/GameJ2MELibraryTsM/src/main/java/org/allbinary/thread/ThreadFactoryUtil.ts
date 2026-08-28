
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
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
      const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
//not game specific package import { RunnableCanvas } from '../../../org/allbinary/canvas/RunnableCanvas.js';
      const RunnableCanvas = globalThis.org.allbinary.canvas.RunnableCanvas;

      
//not game specific package import { AllBinaryGameCanvas } from '../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
//not game specific package import { DemoCanvas } from '../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
      const DemoCanvas = globalThis.org.allbinary.game.displayable.canvas.DemoCanvas;

      
//not game specific package import { GameCanvasRunnableInterface } from '../../../org/allbinary/game/displayable/canvas/GameCanvasRunnableInterface.js';
      const GameCanvasRunnableInterface = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface;

      
//not game specific package import { RunnableCanvasSingleThreadStartRunnable } from '../../../org/allbinary/game/displayable/canvas/RunnableCanvasSingleThreadStartRunnable.js';
      const RunnableCanvasSingleThreadStartRunnable = globalThis.org.allbinary.game.displayable.canvas.RunnableCanvasSingleThreadStartRunnable;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABRunnable } from './ABRunnable.js';
import { PrimaryThreadPool } from './PrimaryThreadPool.js';
import { ThreadPool } from './ThreadPool.js';

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



