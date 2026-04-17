
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
        



import { ChangedGameFeatureListener } from "../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js";

    
import { GameInitializedEvent } from "../../../../org/allbinary/game/configuration/event/GameInitializedEvent.js";

    
import { GameInitializedEventHandler } from "../../../../org/allbinary/game/configuration/event/GameInitializedEventHandler.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { MainFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { ResourceLoadingLevelFactory } from "../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js";

    
import { MyCanvas } from "../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicBuildGameInitializerFactory } from "./BasicBuildGameInitializerFactory.js";

export class GameInitializationUtil
            extends Object
         {
        

    private static readonly instance: GameInitializationUtil = new GameInitializationUtil();
        
        

    public static getInstance(): GameInitializationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly EVENT: GameInitializedEvent = new GameInitializedEvent(this);
        
        

                //@Throws(Error::class)
            
    public initDemo(abeClientInformation: AbeClientInformationInterface, canvas: MyCanvas, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory){
    //var abeClientInformation = abeClientInformation
    //var canvas = canvas
    //var gameInitializationInterfaceFactoryInterface = gameInitializationInterfaceFactoryInterface

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;
        
        
;
    

                        if(ChangedGameFeatureListener.getInstance()!.isChanged(mainFeatureFactory!.STATIC))
                        
                                    {
                                    
    var gameInitializationInterface: GameInitializationInterface = gameInitializationInterfaceFactoryInterface!.getInstance()!;
        
        
;
    

    var features: Features = Features.getInstance()!;
        
        
;
    

                        if(features.isFeature(mainFeatureFactory!.LOAD_ALL))
                        
                                    {
                                    this.initGame(abeClientInformation, canvas, gameInitializationInterfaceFactoryInterface);
    

                                    }
                                
                             else 
                        if(features.isFeature(mainFeatureFactory!.LOAD_ONDEMAND))
                        
                                    {
                                    
    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        
;
    
gameInitializationInterface!.init(abeClientInformation, canvas.getCustomCommandListener(), resourceLoadingLevelFactory!.LOAD_EARLY.getLevel());
    
this.EVENT.setResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_EARLY);
    

                                    }
                                
                        else {
                            


                            throw new Error("No Loading Feature Available")

                        }
                            
GameInitializedEventHandler.getInstance()!.fireEvent(EVENT);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public initGame(abeClientInformation: AbeClientInformationInterface, canvas: MyCanvas, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory){
    //var abeClientInformation = abeClientInformation
    //var canvas = canvas
    //var gameInitializationInterfaceFactoryInterface = gameInitializationInterfaceFactoryInterface

                        if(ChangedGameFeatureListener.getInstance()!.isChanged(MainFeatureFactory.getInstance()!.STATIC))
                        
                                    {
                                    
    var gameInitializationInterface: GameInitializationInterface = gameInitializationInterfaceFactoryInterface!.getInstance()!;
        
        
;
    

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        
;
    
gameInitializationInterface!.init(abeClientInformation, canvas.getCustomCommandListener(), resourceLoadingLevelFactory!.LOAD_ALL.getLevel());
    
this.EVENT.setResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_ALL);
    
GameInitializedEventHandler.getInstance()!.fireEvent(EVENT);
    
ChangedGameFeatureListener.getInstance()!.remove(MainFeatureFactory.getInstance()!.STATIC);
    

                                    }
                                
}


}
                
            

