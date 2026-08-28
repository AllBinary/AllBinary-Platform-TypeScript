
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not game specific package import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
      const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DemoGameMidlet } from './DemoGameMidlet.js';
import { DemoGameMidletEvent } from './DemoGameMidletEvent.js';
import { DemoGameMidletStateFactory } from './DemoGameMidletStateFactory.js';
import { DemoGameMidletEventHandler } from './DemoGameMidletEventHandler.js';

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



