
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
        



import { ARunnable } from "../../../../../org/allbinary/thread/ARunnable.js";

    
import { GameAdStateFactory } from "../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js";

    
import { GameAdState } from "../../../../../org/allbinary/game/GameAdState.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { CurrentDisplayableFactory } from "../../../../../org/allbinary/graphics/opengles/CurrentDisplayableFactory.js";

    
import { OpenGLFeatureFactory } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DemoGameBehavior } from "./DemoGameBehavior.js";

import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

export class BaseGameBehavior extends DemoGameBehavior {
        

    private static readonly instance: BaseGameBehavior = new BaseGameBehavior();
        
        

    public static getInstance(): DemoGameBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public init(){

    var gameAdState: GameAdState = GameAdStateFactory.getInstance()!.getCurrentInstance()!;
        
        
;
    
gameAdState!.playingAdState();
    
}


    public pause(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas

    var features: Features = Features.getInstance()!;
        
        
;
    

                        if(features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;
        
        
;
    
currentDisplayableFactory!.setRunnable(allBinaryGameCanvas!.gamePauseRunnable);
    

                                    }
                                
}


    public unPause(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas

                        if(Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;
        
        
;
    
currentDisplayableFactory!.setRunnable(allBinaryGameCanvas!.gameRunnable);
    
currentDisplayableFactory!.setDisplayable(allBinaryGameCanvas);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public updateTouch(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.updateTouch2();
    
}


                //@Throws(Error::class)
            
    public updateScreenButtonPaintable(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.updateScreenButtonPaintable2();
    
}


                //@Throws(Error::class)
            
    public setGameState(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.setGameState();
    
}


    public removeAllGameKeyInputListeners(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.removeAllGameKeyInputListeners2();
    
}


                //@Throws(Error::class)
            
    public updateEndGameProcessor(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.updateEndGameProcessor2();
    
}


                //@Throws(Error::class)
            
    public buildGame(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.buildGame2();
    
}


                //@Throws(Error::class)
            
    public run(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.run2();
    
}


                //@Throws(Error::class)
            
    public setHighScore(abeClientInformation: AbeClientInformationInterface, allBinaryGameCanvas: AllBinaryGameCanvas, name: string, score: number, autoSubmit: boolean, isLast: boolean){
    //var abeClientInformation = abeClientInformation
    //var allBinaryGameCanvas = allBinaryGameCanvas
    //var name = name
    //var score = score
    //var autoSubmit = autoSubmit
    //var isLast = isLast
allBinaryGameCanvas!.setHighScore2(abeClientInformation, name, score, autoSubmit, isLast);
    
}


}
                
            

