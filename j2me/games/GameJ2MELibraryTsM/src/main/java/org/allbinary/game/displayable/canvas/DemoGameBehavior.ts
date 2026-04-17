
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
        



import { GameTypeFactory } from "../../../../../org/allbinary/game/GameTypeFactory.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

export class DemoGameBehavior
            extends Object
         {
        

    private static readonly instance: DemoGameBehavior = new DemoGameBehavior();
        
        

    public static getInstance(): DemoGameBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public init(){
}


    public pause(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


    public unPause(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


                //@Throws(Error::class)
            
    public updateTouch(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


                //@Throws(Error::class)
            
    public updateScreenButtonPaintable(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.setTouchPaintableP(NullPaintable.getInstance());
    
}


                //@Throws(Error::class)
            
    public setGameState(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


    public removeAllGameKeyInputListeners(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


                //@Throws(Error::class)
            
    public updateEndGameProcessor(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


                //@Throws(Error::class)
            
    public buildGame(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


                //@Throws(Error::class)
            
    public run(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(GameTypeFactory.getInstance()!.BOT.toString(), this, commonStrings!.RUN);
    
}


                //@Throws(Error::class)
            
    public setHighScore(abeClientInformation: AbeClientInformationInterface, allBinaryGameCanvas: AllBinaryGameCanvas, name: string, score: number, autoSubmit: boolean, isLast: boolean){
    //var abeClientInformation = abeClientInformation
    //var allBinaryGameCanvas = allBinaryGameCanvas
    //var name = name
    //var score = score
    //var autoSubmit = autoSubmit
    //var isLast = isLast
}


}
                
            

