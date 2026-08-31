
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
      //not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

                
export class StartIntermissionProcessor extends Processor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private gameCanvas: AllBinaryGameCanvas;

    private readonly WAIT: number = 5000;

public constructor (gameCanvas: AllBinaryGameCanvas){

            super();
        this.gameCanvas= gameCanvas;
    
}


                //@Throws(Exception.constructor)
            
    public process(){

                        if(this.gameCanvas!.getStartIntermissionInterface()!.getTimeDelayHelper()!.isElapsedTNT(this.WAIT))
                        
                                    {
                                    this.logUtil!.putF("Intermission End", this, this.commonStrings!.PROCESS);
    
this.gameCanvas!.getStartIntermissionInterface()!.setEnabled(false);
    

                                    }
                                
}


}



