
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameFeatureFactory
            extends Object
         {
        

    private static readonly instance: GameFeatureFactory = new GameFeatureFactory();
        
        

    public static getInstance(): GameFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly SOUND: GameFeature = new GameFeature("Sound");
        
        

    public readonly MUSIC: GameFeature = new GameFeature("Music");
        
        

    public readonly SCREEN_SHAKE: Feature = new Feature("Screen Shake");
        
        

    public readonly POST_IMAGE_LOADING_MODIFICATION: Feature = new Feature("Post Image Loading Modification (Scaling, Rotation, or Other)");
        
        

    public readonly HEALTH_BARS: GameFeature = new GameFeature("Health Bars");
        
        

    public readonly DAMAGE_FLOATERS: GameFeature = new GameFeature("Damage Floaters");
        
        

    public readonly GAME_INPUT_LAYER_PROCESSOR: GameFeature = new GameFeature("Game Input Layer Processor");
        
        

    public readonly ARTIFICIAL_INTELLEGENCE_PROCESSOR: GameFeature = new GameFeature("Artificial Intelligence Layer Processor");
        
        

    public readonly COLLIDABLE_INTERFACE_LAYER_PROCESSOR: GameFeature = new GameFeature("Collidable Interface Layer Processor");
        
        

    public readonly TICKABLE_LAYER_PROCESSOR: GameFeature = new GameFeature("Tickable Layer Processor");
        
        

    public readonly CHEATING: GameFeature = new GameFeature("Cheating");
        
        

    public readonly DROPPED_ITEMS: GameFeature = new GameFeature("Drops");
        
        

    public readonly DROPPED_ITEMS_FROM_DEATH: GameFeature = new GameFeature("Drops from Dead");
        
        

    public readonly TEST_DESTROYED_LAYER_PROCESSOR: GameFeature = new GameFeature("Destroyed Layer Processor");
        
        

    public readonly COLLISIONS_WITH_SOURCE: GameFeature = new GameFeature("Allow Collisions With Source");
        
        

    public readonly COLLISIONS_FORCED_TWO_DIMENSIONAL: GameFeature = new GameFeature("Collisions Forced Two Dimensional");
        
        

}
                
            

