
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
        



import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { DestroyedLayerProcessor } from "../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js";

    
import { DestroyEventCircularStaticPool } from "../../../../../org/allbinary/game/combat/destroy/event/DestroyEventCircularStaticPool.js";

    
import { DestroyedEventHandler } from "../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { AllBinaryGameCanvas } from "../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { BasicBuildGameInitializerFactory } from "../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { DropLayerProcessor } from "../../../../../org/allbinary/game/layer/drop/DropLayerProcessor.js";

    
import { GroupLayerManagerListener } from "../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js";

    
import { HighScoresFactoryInterface } from "../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js";

    
import { ProgressCanvasFactory } from "../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { BasicLayerProcessor } from "../../../../../org/allbinary/layer/BasicLayerProcessor.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    

export class CombatGameCanvas extends AllBinaryGameCanvas {
        

    basicLayerProcessor: BasicLayerProcessor[] = [];
        
        
public constructor (cmdListener: CommandListener, gameLayerManager: AllBinaryGameLayerManager, highScoresFactoryInterface: HighScoresFactoryInterface, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory, buffered: boolean)                        

                            : super(cmdListener, gameLayerManager, highScoresFactoryInterface, gameInitializationInterfaceFactoryInterface, buffered){

            super();
                //var cmdListener = cmdListener
    //var gameLayerManager = gameLayerManager
    //var highScoresFactoryInterface = highScoresFactoryInterface
    //var gameInitializationInterfaceFactoryInterface = gameInitializationInterfaceFactoryInterface
    //var buffered = buffered


                            //For kotlin this is before the body of the constructor.
                    
}


    CombatGameCanvas_init(){
DestroyEventCircularStaticPool.getInstance()!.init(this);
    
ProgressCanvasFactory.getInstance()!.addPortion(50, "Destroy Events");
    
}


                //@Throws(Error::class)
            
    init(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
this.CombatGameCanvas_init();
    
super.init(abeClientInformation);
    
}


    initConfigurable(portion: number){
    //var portion = portion
DestroyedLayerProcessor.init();
    
ProgressCanvasFactory.getInstance()!.addPortion(portion, "Basic Processors");
    

    var features: Features = Features.getInstance()!;
        
        
;
    

    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;
        
        
;
    

                        if(features.isFeature(gameFeatureFactory!.DROPPED_ITEMS) && features.isFeature(gameFeatureFactory!.DROPPED_ITEMS_FROM_DEATH))
                        
                                    {
                                    basicLayerProcessor= new Array(2);
    
basicLayerProcessor[0]= DestroyedLayerProcessor.getInstance();
    
basicLayerProcessor[1]= DropLayerProcessor.getInstance();
    

                                    }
                                
                        else {
                            basicLayerProcessor= new Array(1);
    
basicLayerProcessor[0]= DestroyedLayerProcessor.getInstance();
    

                        }
                            
}


                //@Throws(Error::class)
            
    processPlayingGame(){
super.processPlayingGame();
    




                        for (
    var index: number = basicLayerProcessor!.length
                ;
        
        
--index >= 0; )
        {
basicLayerProcessor[index]!.process(this.gameLayerManager);
    
}

}


                //@Throws(Error::class)
            
    cleanupGame(){
super.cleanupGame();
    




                        for (
    var index: number = basicLayerProcessor!.length
                ;
        
        
--index >= 0; )
        {
basicLayerProcessor[index]!.getList()!.clear();
    
}

GroupLayerManagerListener.getInstance()!.clear();
    
GroupLayerManagerListener.getInstance()!.log();
    
DestroyedEventHandler.getInstance()!.removeAllListeners();
    
this.cleanupManager();
    
}


                //@Throws(Error::class)
            
    cleanupManager(){
this.gameLayerManager!.cleanup();
    
}


}
                
            

