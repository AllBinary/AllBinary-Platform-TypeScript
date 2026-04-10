
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

    

export class BaseGameBehavior extends DemoGameBehavior {
        

    private static readonly instance: BaseGameBehavior = new BaseGameBehavior();
        
        

    public static getInstance(): DemoGameBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                @Throws(Exception::class)
            
    public init(){

    var gameAdState: GameAdState = GameAdStateFactory.getInstance()!.getCurrentInstance()!;
        
        

playingAdState()
}


    public pause(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas

    var features: Features = Features.getInstance()!;
        
        


    
                        if(features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;
        
        

setRunnable(allBinaryGameCanvas!.gamePauseRunnable)

                                    }
                                
}


    public unPause(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas

    
                        if(Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;
        
        

setRunnable(allBinaryGameCanvas!.gameRunnable)
setDisplayable(allBinaryGameCanvas)

                                    }
                                
}


                @Throws(Exception::class)
            
    public updateTouch(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
updateTouch2()
}


                @Throws(Exception::class)
            
    public updateScreenButtonPaintable(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
updateScreenButtonPaintable2()
}


                @Throws(Exception::class)
            
    public setGameState(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
setGameState()
}


    public removeAllGameKeyInputListeners(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
removeAllGameKeyInputListeners2()
}


                @Throws(Exception::class)
            
    public updateEndGameProcessor(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
updateEndGameProcessor2()
}


                @Throws(Exception::class)
            
    public buildGame(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
buildGame2()
}


                @Throws(Exception::class)
            
    public run(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
run2()
}


                @Throws(Exception::class)
            
    public setHighScore(abeClientInformation: AbeClientInformationInterface, allBinaryGameCanvas: AllBinaryGameCanvas, name: string, score: number, autoSubmit: boolean, isLast: boolean){
    //var abeClientInformation = abeClientInformation
    //var allBinaryGameCanvas = allBinaryGameCanvas
    //var name = name
    //var score = score
    //var autoSubmit = autoSubmit
    //var isLast = isLast
setHighScore2(abeClientInformation, name, score, autoSubmit, isLast)
}


}
                
            

