
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;

      
import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
//not GWT import const ChangedGameFeatureListener = globalThis.org.allbinary.game.configuration.event.ChangedGameFeatureListener;

      
import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

      
import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
import { PlatformInputMappingFactory } from '../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
//not GWT import const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
import { GameKeyEventFactory } from '../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
import { FeaturedResourceRelativeRelationshipFactory } from '../../../../org/allbinary/game/resource/FeaturedResourceRelativeRelationshipFactory.js';
//not GWT import const FeaturedResourceRelativeRelationshipFactory = globalThis.org.allbinary.game.resource.FeaturedResourceRelativeRelationshipFactory;

      
import { ResourceInitialization } from '../../../../org/allbinary/game/resource/ResourceInitialization.js';
//not GWT import const ResourceInitialization = globalThis.org.allbinary.game.resource.ResourceInitialization;

      
import { ResourceLoadingLevelFactory } from '../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
//not GWT import const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;

      
import { ProgressCanvas } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
//not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
//not GWT import const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;

      
import { CompleteMotionGestureInputToGameMotionGestureInput } from '../../../../org/allbinary/input/motion/CompleteMotionGestureInputToGameMotionGestureInput.js';
//not GWT import const CompleteMotionGestureInputToGameMotionGestureInput = globalThis.org.allbinary.input.motion.CompleteMotionGestureInputToGameMotionGestureInput;

      
import { BasicTouchInputFactory } from '../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js';
//not GWT import const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;

      
import { CancelTouchButtonInputFactory } from '../../../../org/allbinary/input/motion/button/CancelTouchButtonInputFactory.js';
//not GWT import const CancelTouchButtonInputFactory = globalThis.org.allbinary.input.motion.button.CancelTouchButtonInputFactory;

      
import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInitializationInterface } from './GameInitializationInterface.js';
//not GWT import - same folder const GameInitializationInterface = globalThis.org.allbinary.game.init.GameInitializationInterface;

                
export class BaseGameInitialization
            extends Object
         implements GameInitializationInterface {
        

    public static readonly NULL_BASE_GAME_INITIALIZATION: BaseGameInitialization = new BaseGameInitialization([], 0);

    readonly resourceInitializationArray: ResourceInitialization[];

    private readonly portion: number;

    private initialized: boolean= false;

    readonly EARLY_RESOURCES: number = 0;

    readonly GAME_RESOURCES: number = 1;

    readonly EARLY_CHANGABLE_RESOURCES: number = 2;

    readonly GAME_CHANGABLE_RESOURCES: number = 3;

public constructor (resourceInitializationArray: ResourceInitialization[], portion: number){

            super();
        this.resourceInitializationArray= resourceInitializationArray;
    
this.portion= portion;
    
}


                //@Throws(Exception.constructor)
            
    public initKey(portion: number){
}


                //@Throws(Exception.constructor)
            
    initKeyMapping(abeClientInformation: AbeClientInformationInterface, portion: number){

                        if(ChangedGameFeatureListener.getInstance()!.isChangedFeature(InputFeatureFactory.getInstance()!.INPUT_MAPPING))
                        
                                    {
                                    PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.init(abeClientInformation);
    
ProgressCanvasFactory.getInstance()!.addNormalPortion(50, "Game Keys");
    
ChangedGameFeatureListener.getInstance()!.remove(InputFeatureFactory.getInstance()!.INPUT_MAPPING);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public init(abeClientInformation: AbeClientInformationInterface, commandListener: CommandListener, level: number){

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;;
    

                        if(!this.isInitialized() && (level == resourceLoadingLevelFactory!.LOAD_ALL.getLevel() || level == resourceLoadingLevelFactory!.LOAD_EARLY.getLevel()))
                        
                                    {
                                    
    var localPortion: number = 40;;
    

                        if(level == resourceLoadingLevelFactory!.LOAD_EARLY.getLevel())
                        
                                    {
                                    localPortion= 8;
    

                                    }
                                
this.setInitialized(true);
    
this.initKey(this.getPortion());
    
this.initKeyMapping(abeClientInformation, this.getPortion());
    
GameKeyEventFactory.getInstance()!.init();
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.addNormalPortion(localPortion, "Game Key Events");
    
BasicTouchInputFactory.getInstance()!.init(PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
    
CancelTouchButtonInputFactory.getInstance();
    
progressCanvas!.addNormalPortion(localPortion, "Touch Input");
    
CompleteMotionGestureInputToGameMotionGestureInput.getInstance()!.init();
    
progressCanvas!.addNormalPortion(localPortion, "Motion Input");
    
GameFeatureImageCacheFactory.init();
    
progressCanvas!.addNormalPortion(localPortion, "Image Cache");
    
this.resourceInitializationArray[this.EARLY_RESOURCES]!.init();
    

                                    }
                                
}


    private gameInitialized: boolean= false;

    private allLoaded: boolean= false;

                //@Throws(Exception.constructor)
            
    public resourceInitialization(level: number){

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;;
    

                        if(this.resourceAnimationChange() && level == resourceLoadingLevelFactory!.LOAD_EARLY.getLevel())
                        
                                    {
                                    this.clearResources();
    
this.resourceInitializationArray[this.EARLY_CHANGABLE_RESOURCES]!.init();
    

                                    }
                                

                        if(this.resourceAnimationChange() && level == resourceLoadingLevelFactory!.LOAD_ALL.getLevel())
                        
                                    {
                                    
                        if(this.allLoaded)
                        
                                    {
                                    this.clearResources();
    

                                    }
                                

                        if(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.getList()!.size() == 0)
                        
                                    {
                                    this.resourceInitializationArray[this.EARLY_CHANGABLE_RESOURCES]!.init();
    

                                    }
                                
this.resourceInitializationArray[this.GAME_CHANGABLE_RESOURCES]!.init();
    
this.allLoaded= true;
    

                                    }
                                
}


    public resourceAnimationChange(): boolean{

    var changedGameFeatureListener: ChangedGameFeatureListener = ChangedGameFeatureListener.getInstance()!;;
    

    var gameConfigurationCentral: GameConfigurationCentral = GameConfigurationCentral.getInstance()!;;
    

                        if(changedGameFeatureListener!.isChangedGameConfiguration(gameConfigurationCentral!.SCALE))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        if(ChangedGameFeatureListener.getInstance()!.isChangedFeature(MainFeatureFactory.getInstance()!.STATIC))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    clearResources(){
this.allLoaded= false;
    
GameFeatureImageCacheFactory.releaseAll();
    

    var featuredAnimationInterfaceFactoryInterfaceFactory: FeaturedAnimationInterfaceFactoryInterfaceFactory = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!;;
    
featuredAnimationInterfaceFactoryInterfaceFactory!.clear();
    
FeaturedResourceRelativeRelationshipFactory.getInstance()!.clear();
    
}


    setGameInitialized(gameInitialized: boolean){
this.gameInitialized= gameInitialized;
    
}


    isGameInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameInitialized;
    
}


    getPortion(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.portion;
    
}


    public setInitialized(initialized: boolean){
this.initialized= initialized;
    
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initialized;
    
}


}



