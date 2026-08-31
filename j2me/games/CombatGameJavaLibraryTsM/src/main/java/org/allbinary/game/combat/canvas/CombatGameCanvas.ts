
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

      
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
import { DestroyedLayerProcessor } from '../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
      //not GWT import const DestroyedLayerProcessor = globalThis.org.allbinary.game.combat.destroy.DestroyedLayerProcessor;

      
import { DestroyEventCircularStaticPool } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyEventCircularStaticPool.js';
      //not GWT import const DestroyEventCircularStaticPool = globalThis.org.allbinary.game.combat.destroy.event.DestroyEventCircularStaticPool;

      
import { DestroyedEventHandler } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
      //not GWT import const DestroyedEventHandler = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEventHandler;

      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
      //not GWT import const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;

      
import { AllBinaryGameCanvas } from '../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      //not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
import { BasicBuildGameInitializerFactory } from '../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js';
      //not GWT import const BasicBuildGameInitializerFactory = globalThis.org.allbinary.game.init.BasicBuildGameInitializerFactory;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { DropLayerProcessor } from '../../../../../org/allbinary/game/layer/drop/DropLayerProcessor.js';
      //not GWT import const DropLayerProcessor = globalThis.org.allbinary.game.layer.drop.DropLayerProcessor;

      
import { GroupLayerManagerListener } from '../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js';
      //not GWT import const GroupLayerManagerListener = globalThis.org.allbinary.game.layer.identification.GroupLayerManagerListener;

      
import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
      //not GWT import const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;

      
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      //not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
import { BasicLayerProcessor } from '../../../../../org/allbinary/layer/BasicLayerProcessor.js';
      //not GWT import const BasicLayerProcessor = globalThis.org.allbinary.layer.BasicLayerProcessor;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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



