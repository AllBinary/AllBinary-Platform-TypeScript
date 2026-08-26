
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

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { DestroyedLayerProcessor } from '../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
      const DestroyedLayerProcessor = globalThis.org.allbinary.game.combat.destroy.DestroyedLayerProcessor;

      
//not game specific package import { DestroyEventCircularStaticPool } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyEventCircularStaticPool.js';
      const DestroyEventCircularStaticPool = globalThis.org.allbinary.game.combat.destroy.event.DestroyEventCircularStaticPool;

      
//not game specific package import { DestroyedEventHandler } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
      const DestroyedEventHandler = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEventHandler;

      
//not game specific package import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
      const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;

      
//not game specific package import { AllBinaryGameCanvas } from '../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
//not game specific package import { BasicBuildGameInitializerFactory } from '../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js';
      const BasicBuildGameInitializerFactory = globalThis.org.allbinary.game.init.BasicBuildGameInitializerFactory;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { DropLayerProcessor } from '../../../../../org/allbinary/game/layer/drop/DropLayerProcessor.js';
      const DropLayerProcessor = globalThis.org.allbinary.game.layer.drop.DropLayerProcessor;

      
//not game specific package import { GroupLayerManagerListener } from '../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js';
      const GroupLayerManagerListener = globalThis.org.allbinary.game.layer.identification.GroupLayerManagerListener;

      
//not game specific package import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
      const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;

      
//not game specific package import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not game specific package import { BasicLayerProcessor } from '../../../../../org/allbinary/layer/BasicLayerProcessor.js';
      const BasicLayerProcessor = globalThis.org.allbinary.layer.BasicLayerProcessor;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CombatGameCanvas extends AllBinaryGameCanvas {
        

    static basicLayerProcessor: BasicLayerProcessor[] = [];

public constructor (cmdListener: CommandListener, gameLayerManager: AllBinaryGameLayerManager, highScoresFactoryInterface: HighScoresFactoryInterface, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory, buffered: boolean){
            super(cmdListener, gameLayerManager, highScoresFactoryInterface, gameInitializationInterfaceFactoryInterface, buffered);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    CombatGameCanvas_init(){
DestroyEventCircularStaticPool.getInstance()!.init(this);
    
ProgressCanvasFactory.getInstance()!.addNormalPortion(50, "Destroy Events");
    
}


                //@Throws(Exception.constructor)
            
    initApp(abeClientInformation: AbeClientInformationInterface){
this.CombatGameCanvas_init();
    
super.initApp(abeClientInformation);
    
}


    initConfigurablePortion(portion: number){
DestroyedLayerProcessor.init();
    
ProgressCanvasFactory.getInstance()!.addNormalPortion(portion, "Basic Processors");
    

    var features: Features = Features.getInstance()!;;
    

    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;;
    

                        if(features.isFeature(gameFeatureFactory!.DROPPED_ITEMS) && features.isFeature(gameFeatureFactory!.DROPPED_ITEMS_FROM_DEATH))
                        
                                    {
                                    CombatGameCanvas.basicLayerProcessor= new Array(2);
    
CombatGameCanvas.basicLayerProcessor[0]= DestroyedLayerProcessor.getInstance();
    
CombatGameCanvas.basicLayerProcessor[1]= DropLayerProcessor.getInstance();
    

                                    }
                                
                        else {
                            CombatGameCanvas.basicLayerProcessor= new Array(1);
    
CombatGameCanvas.basicLayerProcessor[0]= DestroyedLayerProcessor.getInstance();
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    processPlayingGame(){
super.processPlayingGame();
    




                        for (
    var index: number = CombatGameCanvas.basicLayerProcessor!.length
                ;--index >= 0; )
        {
CombatGameCanvas.basicLayerProcessor[index]!.process(this.gameLayerManager);
    
}

}


                //@Throws(Exception.constructor)
            
    cleanupGame(){
super.cleanupGame();
    




                        for (
    var index: number = CombatGameCanvas.basicLayerProcessor!.length
                ;--index >= 0; )
        {
CombatGameCanvas.basicLayerProcessor[index]!.getList()!.clear();
    
}

GroupLayerManagerListener.getInstance()!.clear();
    
GroupLayerManagerListener.getInstance()!.log();
    
DestroyedEventHandler.getInstance()!.removeAllListeners();
    
this.cleanupManager();
    
}


                //@Throws(Exception.constructor)
            
    cleanupManager(){
this.gameLayerManager!.cleanup();
    
}


}
                
            

