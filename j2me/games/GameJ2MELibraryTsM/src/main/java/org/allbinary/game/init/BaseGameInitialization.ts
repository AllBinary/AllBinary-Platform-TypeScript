
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
        



import { CommandListener } from "../../../../javax/microedition/lcdui/CommandListener.js";

    
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { GameConfigurationCentral } from "../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { ChangedGameFeatureListener } from "../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js";

    
import { InputFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js";

    
import { MainFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { PlatformInputMappingFactory } from "../../../../org/allbinary/game/input/PlatformInputMappingFactory.js";

    
import { GameKeyEventFactory } from "../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { FeaturedResourceRelativeRelationshipFactory } from "../../../../org/allbinary/game/resource/FeaturedResourceRelativeRelationshipFactory.js";

    
import { ResourceInitialization } from "../../../../org/allbinary/game/resource/ResourceInitialization.js";

    
import { ResourceLoadingLevelFactory } from "../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js";

    
import { ProgressCanvas } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { GameFeatureImageCacheFactory } from "../../../../org/allbinary/image/GameFeatureImageCacheFactory.js";

    
import { CompleteMotionGestureInputToGameMotionGestureInput } from "../../../../org/allbinary/input/motion/CompleteMotionGestureInputToGameMotionGestureInput.js";

    
import { BasicTouchInputFactory } from "../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GameInitializationInterface } from "./GameInitializationInterface.js";

export class BaseGameInitialization
            extends Object
         implements GameInitializationInterface {
        

    public static readonly NULL_BASE_GAME_INITIALIZATION: BaseGameInitialization = new BaseGameInitialization([], 0);
        
        

    readonly resourceInitializationArray: ResourceInitialization[]

    private readonly portion: number

    private initialized: boolean= false

    readonly EARLY_RESOURCES: number = 0;
        
        

    readonly GAME_RESOURCES: number = 1;
        
        

    readonly EARLY_CHANGABLE_RESOURCES: number = 2;
        
        

    readonly GAME_CHANGABLE_RESOURCES: number = 3;
        
        
public constructor (resourceInitializationArray: ResourceInitialization[], portion: number){

            super();
            //var resourceInitializationArray = resourceInitializationArray
    //var portion = portion
this.resourceInitializationArray= resourceInitializationArray;
    
this.portion= portion;
    
}


                //@Throws(Error::class)
            
    public initKey(portion: number){
var portion = portion
}


                //@Throws(Error::class)
            
    initKeyMapping(abeClientInformation: AbeClientInformationInterface, portion: number){
    //var abeClientInformation = abeClientInformation
var portion = portion

                        if(ChangedGameFeatureListener.getInstance()!.isChanged(InputFeatureFactory.getInstance()!.INPUT_MAPPING))
                        
                                    {
                                    PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.init(abeClientInformation);
    
ProgressCanvasFactory.getInstance()!.addPortion(50, "Game Keys");
    
ChangedGameFeatureListener.getInstance()!.remove(InputFeatureFactory.getInstance()!.INPUT_MAPPING);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public init(abeClientInformation: AbeClientInformationInterface, commandListener: CommandListener, level: number){
    //var abeClientInformation = abeClientInformation
    //var commandListener = commandListener
    //var level = level

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        
;
    

                        if(!this.isInitialized();

                         && (level == resourceLoadingLevelFactory!.LOAD_ALL.getLevel() || level == resourceLoadingLevelFactory!.LOAD_EARLY.getLevel()))
                        
                                    {
                                    
    var localPortion: number = 40;
        
        
;
    

                        if(level == resourceLoadingLevelFactory!.LOAD_EARLY.getLevel())
                        
                                    {
                                    localPortion= 8;
    

                                    }
                                
this.setInitialized(true);
    
this.initKey(getPortion());
    
this.initKeyMapping(abeClientInformation, getPortion());
    
GameKeyEventFactory.getInstance()!.init();
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    
progressCanvas!.addPortion(localPortion, "Game Key Events");
    
BasicTouchInputFactory.getInstance()!.init(PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
    
progressCanvas!.addPortion(localPortion, "Touch Input");
    
CompleteMotionGestureInputToGameMotionGestureInput.getInstance()!.init();
    
progressCanvas!.addPortion(localPortion, "Motion Input");
    
GameFeatureImageCacheFactory.init();
    
progressCanvas!.addPortion(localPortion, "Image Cache");
    
this.resourceInitializationArray[this.EARLY_RESOURCES]!.init();
    

                                    }
                                
}


    private gameInitialized: boolean= false

    private allLoaded: boolean= false

                //@Throws(Error::class)
            
    public resourceInitialization(level: number){
var level = level

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        
;
    

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

    var changedGameFeatureListener: ChangedGameFeatureListener = ChangedGameFeatureListener.getInstance()!;
        
        
;
    

    var gameConfigurationCentral: GameConfigurationCentral = GameConfigurationCentral.getInstance()!;
        
        
;
    

                        if(changedGameFeatureListener!.isChanged(gameConfigurationCentral!.SCALE))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        if(ChangedGameFeatureListener.getInstance()!.isChanged(MainFeatureFactory.getInstance()!.STATIC))
                        
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
    

    var featuredAnimationInterfaceFactoryInterfaceFactory: FeaturedAnimationInterfaceFactoryInterfaceFactory = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!;
        
        
;
    
featuredAnimationInterfaceFactoryInterfaceFactory!.clear();
    
FeaturedResourceRelativeRelationshipFactory.getInstance()!.clear();
    
}


    setGameInitialized(gameInitialized: boolean){
var gameInitialized = gameInitialized
this.gameInitialized= gameInitialized;
    
}


    isGameInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameInitialized;
    
}


    getPortion(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return portion;
    
}


    public setInitialized(initialized: boolean){
var initialized = initialized
this.initialized= initialized;
    
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initialized;
    
}


}
                
            

