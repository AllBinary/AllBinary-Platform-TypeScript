
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

      
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
//not GWT import const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DemoGameMidlet } from './DemoGameMidlet.js';
//not GWT import - same folder const DemoGameMidlet = globalThis.org.allbinary.game.midlet.DemoGameMidlet;

                import { DemoGameMidletEvent } from './DemoGameMidletEvent.js';
//not GWT import - same folder const DemoGameMidletEvent = globalThis.org.allbinary.game.midlet.DemoGameMidletEvent;

                import { DemoGameMidletStateFactory } from './DemoGameMidletStateFactory.js';
//not GWT import - same folder const DemoGameMidletStateFactory = globalThis.org.allbinary.game.midlet.DemoGameMidletStateFactory;

                import { DemoGameMidletEventHandler } from './DemoGameMidletEventHandler.js';
//not GWT import - same folder const DemoGameMidletEventHandler = globalThis.org.allbinary.game.midlet.DemoGameMidletEventHandler;

                
export class DemoRunnable
            extends Object
         implements Runnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly demoGameMidlet: DemoGameMidlet;

    private readonly startDemoGameMidletEvent: DemoGameMidletEvent;

public constructor (demoGameMidlet: DemoGameMidlet){

            super();
        this.demoGameMidlet= demoGameMidlet;
    
this.startDemoGameMidletEvent= new DemoGameMidletEvent(this.demoGameMidlet, DemoGameMidletStateFactory.getInstance()!.START_DEMO);
    
}


    public run(){

        try {
            this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.append("GameCanvasRunnableInterface")!.toString(), this, this.commonStrings!.RUN);
    
this.demoGameMidlet!.commandAction(MyCommandsFactory.getInstance()!.SET_DISPLAYABLE, ProgressCanvasFactory.getInstance());
    
this.demoGameMidlet!.setGameCanvasRunnableInterface(this.demoGameMidlet!.createDemoGameCanvasRunnableInterface());
    
this.demoGameMidlet!.demoSetup();
    
DemoGameMidletEventHandler.getInstance()!.fireEvent(this.startDemoGameMidletEvent);
    
this.demoGameMidlet!.startGameCanvasRunnableInterface();
    
this.demoGameMidlet!.postDemoSetup();
    
this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}



