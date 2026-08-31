
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Runnable } from '../../../../java/lang/Runnable.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Hashtable } from '../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { ProgressCanvas } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      //not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      //not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
      //not GWT import const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DemoGameMidlet } from './DemoGameMidlet.js';
//not GWT import const  = globalThis.org.allbinary.game.midlet.DemoGameMidlet;

                import { DemoGameMidletEvent } from './DemoGameMidletEvent.js';
//not GWT import const  = globalThis.org.allbinary.game.midlet.DemoGameMidletEvent;

                import { DemoGameMidletStateFactory } from './DemoGameMidletStateFactory.js';
//not GWT import const  = globalThis.org.allbinary.game.midlet.DemoGameMidletStateFactory;

                import { DemoGameMidletEventHandler } from './DemoGameMidletEventHandler.js';
//not GWT import const  = globalThis.org.allbinary.game.midlet.DemoGameMidletEventHandler;

                
export class CreateGameRunnable
            extends Object
         implements Runnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly demoGameMidlet: DemoGameMidlet;

    private readonly hashtable: Hashtable<any, any>;

    private readonly startGameMidletEvent: DemoGameMidletEvent;

public constructor (demoGameMidlet: DemoGameMidlet, hashtable: Hashtable<any, any>){

            super();
        this.demoGameMidlet= demoGameMidlet;
    
this.hashtable= hashtable;
    
this.startGameMidletEvent= new DemoGameMidletEvent(this, DemoGameMidletStateFactory.getInstance()!.START_GAME);
    
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
this.demoGameMidlet!.commandAction(MyCommandsFactory.getInstance()!.SET_DISPLAYABLE, progressCanvas);
    
this.demoGameMidlet!.stopGameCanvasRunnableInterface();
    
this.demoGameMidlet!.setGameCanvasRunnableInterface(this.demoGameMidlet!.createGameCanvasRunnableInterface());
    
this.demoGameMidlet!.getGameCanvasRunnableInterface()!.setLoadStateHashtable(this.hashtable);
    
this.demoGameMidlet!.startGameCanvasRunnableInterface();
    
DemoGameMidletEventHandler.getInstance()!.fireEvent(this.startGameMidletEvent);
    
this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}



