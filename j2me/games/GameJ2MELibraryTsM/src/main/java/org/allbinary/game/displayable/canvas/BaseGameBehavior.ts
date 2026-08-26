
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { GameAdStateFactory } from '../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
      const GameAdStateFactory = globalThis.org.allbinary.business.advertisement.GameAdStateFactory;

      
//not game specific package import { GameAdState } from '../../../../../org/allbinary/game/GameAdState.js';
      const GameAdState = globalThis.org.allbinary.game.GameAdState;

      
//not game specific package import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { CurrentDisplayableFactory } from '../../../../../org/allbinary/graphics/opengles/CurrentDisplayableFactory.js';
      const CurrentDisplayableFactory = globalThis.org.allbinary.graphics.opengles.CurrentDisplayableFactory;

      
//not game specific package import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DemoGameBehavior } from './DemoGameBehavior.js';
import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class BaseGameBehavior extends DemoGameBehavior {
        

    private static readonly instanceC: BaseGameBehavior = new BaseGameBehavior();

    public static getInstance(): DemoGameBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BaseGameBehavior.instanceC;
    
}


                //@Throws(Exception.constructor)
            
    public init(){

    var gameAdState: GameAdState = GameAdStateFactory.getInstance()!.getCurrentInstance()!;;
    
gameAdState!.playingAdState();
    
}


    public pause(allBinaryGameCanvas: AllBinaryGameCanvas){

    var features: Features = Features.getInstance()!;;
    

                        if(features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;;
    
currentDisplayableFactory!.setRunnable(allBinaryGameCanvas!.gamePauseRunnable);
    

                                    }
                                
}


    public unPause(allBinaryGameCanvas: AllBinaryGameCanvas){

                        if(Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;;
    
currentDisplayableFactory!.setRunnable(allBinaryGameCanvas!.gameRunnable);
    
currentDisplayableFactory!.setDisplayable(allBinaryGameCanvas);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public updateTouch(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.updateTouch2();
    
}


                //@Throws(Exception.constructor)
            
    public updateScreenButtonPaintable(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.updateScreenButtonPaintable2();
    
}


                //@Throws(Exception.constructor)
            
    public setGameState(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.updateGameState();
    
}


    public removeAllGameKeyInputListeners(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.removeAllGameKeyInputListeners2();
    
}


                //@Throws(Exception.constructor)
            
    public updateEndGameProcessor(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.updateEndGameProcessor2();
    
}


                //@Throws(Exception.constructor)
            
    public buildGame(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.buildGame2();
    
}


                //@Throws(Exception.constructor)
            
    public run(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.run2();
    
}


                //@Throws(Exception.constructor)
            
    public setHighScore(abeClientInformation: AbeClientInformationInterface, allBinaryGameCanvas: AllBinaryGameCanvas, name: string, score: number, autoSubmit: boolean, isLast: boolean){
allBinaryGameCanvas!.setHighScore2(abeClientInformation, name, score, autoSubmit, isLast);
    
}


}
                
            

