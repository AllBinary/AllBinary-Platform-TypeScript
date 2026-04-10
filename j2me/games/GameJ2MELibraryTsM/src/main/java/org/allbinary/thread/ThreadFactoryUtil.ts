
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
        



import { J2MEUtil } from "../../../org/allbinary/J2MEUtil.js";

    
import { RunnableCanvas } from "../../../org/allbinary/canvas/RunnableCanvas.js";

    
import { AllBinaryGameCanvas } from "../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { DemoCanvas } from "../../../org/allbinary/game/displayable/canvas/DemoCanvas.js";

    
import { GameCanvasRunnableInterface } from "../../../org/allbinary/game/displayable/canvas/GameCanvasRunnableInterface.js";

    
import { RunnableCanvasSingleThreadStartRunnable } from "../../../org/allbinary/game/displayable/canvas/RunnableCanvasSingleThreadStartRunnable.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class ThreadFactoryUtil
            extends Object
         {
        

    private static readonly instance: ThreadFactoryUtil = new ThreadFactoryUtil();
        
        

    public static getInstance(): ThreadFactoryUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public getInstance(runnable: GameCanvasRunnableInterface): Thread{
    //var runnable = runnable



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(runnable, runnable.getType());
    
}


    public getInstance(runnable: ABRunnable): Thread{
    //var runnable = runnable



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(runnable, runnable.getType());
    
}


    getInstance(runnable: Runnable, type: number): Thread{
    //var runnable = runnable
    //var type = type

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
                        if(type == DemoCanvas.TYPE || type == AllBinaryGameCanvas.TYPE)
                        
                                    {
                                    
    var demoGameSingleThreadStartRunnable: RunnableCanvasSingleThreadStartRunnable = new RunnableCanvasSingleThreadStartRunnable(runnable as RunnableCanvas);
        
        

PreLogUtil.put(StringMaker().
                            append("Using Pseudo Thread for DemoCanvas/AllBinaryGameCanvas under PlayN/HTML5: ")!.append(StringUtil.getInstance()!.toString(runnable))!.toString(), this, commonStrings!.CONSTRUCTOR)

    var primaryThreadPool: ThreadPool = PrimaryThreadPool.getInstance()!;
        
        

primaryThreadPool!.runTask(demoGameSingleThreadStartRunnable)

                                    }
                                
                        else {
                            PreLogUtil.put(StringMaker().
                            append("Using Pseudo Thread for Runnable under PlayN/HTML5: ")!.append(StringUtil.getInstance()!.toString(runnable))!.toString(), this, commonStrings!.CONSTRUCTOR)

    var primaryThreadPool: ThreadPool = PrimaryThreadPool.getInstance()!;
        
        

primaryThreadPool!.runTask(runnable)

                        }
                            

                                    }
                                

    var thread: Thread = new Thread(runnable, runnable.toString());
        
        

logUtil!.put(thread.toString(), this, commonStrings!.CONSTRUCTOR)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return thread;
    
}


    public start(thread: Thread){
    //var thread = thread
thread.start()
}


}
                
            

