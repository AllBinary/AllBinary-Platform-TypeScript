
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameTypeFactory } from '../../../../../org/allbinary/game/GameTypeFactory.js';
      //not GWT import const GameTypeFactory = globalThis.org.allbinary.game.GameTypeFactory;

      
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      //not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class DemoGameBehavior
            extends Object
         {
        

    private static readonly instance: DemoGameBehavior = new DemoGameBehavior();

    public static getInstance(): DemoGameBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DemoGameBehavior.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public init(){
}


    public pause(allBinaryGameCanvas: AllBinaryGameCanvas){
}


    public unPause(allBinaryGameCanvas: AllBinaryGameCanvas){
}


                //@Throws(Exception.constructor)
            
    public updateTouch(allBinaryGameCanvas: AllBinaryGameCanvas){
}


                //@Throws(Exception.constructor)
            
    public updateScreenButtonPaintable(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.setTouchPaintableP(NullPaintable.getInstance());
    
}


                //@Throws(Exception.constructor)
            
    public setGameState(allBinaryGameCanvas: AllBinaryGameCanvas){
}


    public removeAllGameKeyInputListeners(allBinaryGameCanvas: AllBinaryGameCanvas){
}


                //@Throws(Exception.constructor)
            
    public updateEndGameProcessor(allBinaryGameCanvas: AllBinaryGameCanvas){
}


                //@Throws(Exception.constructor)
            
    public buildGame(allBinaryGameCanvas: AllBinaryGameCanvas){
}


                //@Throws(Exception.constructor)
            
    public run(allBinaryGameCanvas: AllBinaryGameCanvas){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(GameTypeFactory.getInstance()!.BOT.toString(), this, commonStrings!.RUN);
    
}


                //@Throws(Exception.constructor)
            
    public setHighScore(abeClientInformation: AbeClientInformationInterface, allBinaryGameCanvas: AllBinaryGameCanvas, name: string, score: number, autoSubmit: boolean, isLast: boolean){
}


}



