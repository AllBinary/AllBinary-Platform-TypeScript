
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { ABRunnable } from '../../../../../org/allbinary/thread/ABRunnable.js';
      const ABRunnable = globalThis.org.allbinary.thread.ABRunnable;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DemoCanvas } from './DemoCanvas.js';

export class DemoGameStartupRunnable extends ABRunnable {
        

    public static readonly TYPE: number = 4;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly demoCanvas: DemoCanvas;

public constructor (demoCanvas: DemoCanvas){

            super();
        this.demoCanvas= demoCanvas;
    
}


    public run(){

        try {
            this.setRunning(true);
    
this.demoCanvas!.stopGameDemo();
    
this.demoCanvas!.create();
    
this.demoCanvas!.start();
    
this.setRunning(false);
    

                //: 
} catch(e) 
            {
this.setRunning(false);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DemoGameStartupRunnable.TYPE;
    
}


}



