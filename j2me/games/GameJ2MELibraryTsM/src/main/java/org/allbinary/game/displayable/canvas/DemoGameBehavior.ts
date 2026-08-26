
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameTypeFactory } from '../../../../../org/allbinary/game/GameTypeFactory.js';
      const GameTypeFactory = globalThis.org.allbinary.game.GameTypeFactory;

      
//not game specific package import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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
                
            

