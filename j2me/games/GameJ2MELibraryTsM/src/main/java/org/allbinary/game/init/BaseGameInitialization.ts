
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
      const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
//not game specific package import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
      const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;

      
//not game specific package import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
      const ChangedGameFeatureListener = globalThis.org.allbinary.game.configuration.event.ChangedGameFeatureListener;

      
//not game specific package import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
      const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

      
//not game specific package import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not game specific package import { PlatformInputMappingFactory } from '../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
      const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
//not game specific package import { GameKeyEventFactory } from '../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
//not game specific package import { FeaturedResourceRelativeRelationshipFactory } from '../../../../org/allbinary/game/resource/FeaturedResourceRelativeRelationshipFactory.js';
      const FeaturedResourceRelativeRelationshipFactory = globalThis.org.allbinary.game.resource.FeaturedResourceRelativeRelationshipFactory;

      
//not game specific package import { ResourceInitialization } from '../../../../org/allbinary/game/resource/ResourceInitialization.js';
      const ResourceInitialization = globalThis.org.allbinary.game.resource.ResourceInitialization;

      
//not game specific package import { ResourceLoadingLevelFactory } from '../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
      const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;

      
//not game specific package import { ProgressCanvas } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
//not game specific package import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not game specific package import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
      const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;

      
//not game specific package import { CompleteMotionGestureInputToGameMotionGestureInput } from '../../../../org/allbinary/input/motion/CompleteMotionGestureInputToGameMotionGestureInput.js';
      const CompleteMotionGestureInputToGameMotionGestureInput = globalThis.org.allbinary.input.motion.CompleteMotionGestureInputToGameMotionGestureInput;

      
//not game specific package import { BasicTouchInputFactory } from '../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js';
      const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;

      
//not game specific package import { CancelTouchButtonInputFactory } from '../../../../org/allbinary/input/motion/button/CancelTouchButtonInputFactory.js';
      const CancelTouchButtonInputFactory = globalThis.org.allbinary.input.motion.button.CancelTouchButtonInputFactory;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInitializationInterface } from './GameInitializationInterface.js';

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



