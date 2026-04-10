
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
        




export class LockedResources
            extends Object
         {
        

    private static readonly instance: LockedResources = new LockedResources();
        
        

    public static getInstance(): LockedResources{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly LOCKED_DEMO_GAME_FEATURE_RESOURCE: string = "/locked_demo_game_feature_64_by_64.png";
        
        

}
                
            

