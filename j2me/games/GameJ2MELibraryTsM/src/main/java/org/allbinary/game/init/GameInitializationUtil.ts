
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
        
//not game specific package import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
      const ChangedGameFeatureListener = globalThis.org.allbinary.game.configuration.event.ChangedGameFeatureListener;

      
//not game specific package import { GameInitializedEvent } from '../../../../org/allbinary/game/configuration/event/GameInitializedEvent.js';
      const GameInitializedEvent = globalThis.org.allbinary.game.configuration.event.GameInitializedEvent;

      
//not game specific package import { GameInitializedEventHandler } from '../../../../org/allbinary/game/configuration/event/GameInitializedEventHandler.js';
      const GameInitializedEventHandler = globalThis.org.allbinary.game.configuration.event.GameInitializedEventHandler;

      
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not game specific package import { ResourceLoadingLevelFactory } from '../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
      const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;

      
//not game specific package import { MyCanvas } from '../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInitializationInterface } from './GameInitializationInterface.js';
import { BasicBuildGameInitializerFactory } from './BasicBuildGameInitializerFactory.js';

export class GameInitializationUtil
            extends Object
         {
        

    private static readonly instance: GameInitializationUtil = new GameInitializationUtil();

    public static getInstance(): GameInitializationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInitializationUtil.instance;
    
}


    public readonly EVENT: GameInitializedEvent = new GameInitializedEvent(this);

                //@Throws(Exception.constructor)
            
    public initDemo(abeClientInformation: AbeClientInformationInterface, canvas: MyCanvas, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory){

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;;
    

                        if(ChangedGameFeatureListener.getInstance()!.isChangedFeature(mainFeatureFactory!.STATIC))
                        
                                    {
                                    
    var gameInitializationInterface: GameInitializationInterface = gameInitializationInterfaceFactoryInterface!.getInstance()!;;
    

    var features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(mainFeatureFactory!.LOAD_ALL))
                        
                                    {
                                    this.initGame(abeClientInformation, canvas, gameInitializationInterfaceFactoryInterface);
    

                                    }
                                
                             else 
                        if(features.isFeature(mainFeatureFactory!.LOAD_ONDEMAND))
                        
                                    {
                                    
    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;;
    
gameInitializationInterface!.init(abeClientInformation, canvas.getCustomCommandListener(), resourceLoadingLevelFactory!.LOAD_EARLY.getLevel());
    
this.EVENT.setResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_EARLY);
    

                                    }
                                
                        else {
                            


                            throw new Exception("No Loading Feature Available");
                    

                        }
                            
GameInitializedEventHandler.getInstance()!.fireEvent(this.EVENT);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public initGame(abeClientInformation: AbeClientInformationInterface, canvas: MyCanvas, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory){

                        if(ChangedGameFeatureListener.getInstance()!.isChangedFeature(MainFeatureFactory.getInstance()!.STATIC))
                        
                                    {
                                    
    var gameInitializationInterface: GameInitializationInterface = gameInitializationInterfaceFactoryInterface!.getInstance()!;;
    

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;;
    
gameInitializationInterface!.init(abeClientInformation, canvas.getCustomCommandListener(), resourceLoadingLevelFactory!.LOAD_ALL.getLevel());
    
this.EVENT.setResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_ALL);
    
GameInitializedEventHandler.getInstance()!.fireEvent(this.EVENT);
    
ChangedGameFeatureListener.getInstance()!.remove(MainFeatureFactory.getInstance()!.STATIC);
    

                                    }
                                
}


}



