
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
        




export class ResourceLoadingLevelFactory
            extends Object
         {
        

    private static readonly instance: ResourceLoadingLevelFactory = new ResourceLoadingLevelFactory();
        
        

    public static getInstance(): ResourceLoadingLevelFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly LOAD_EARLY: ResourceLoadingLevel = new ResourceLoadingLevel("Load Early", Integer.MAX_VALUE);
        
        

    public readonly LOAD_TOUCH: ResourceLoadingLevel = new ResourceLoadingLevel("Load Touch", Integer.MAX_VALUE -1);
        
        

    public readonly LOAD_GAME: ResourceLoadingLevel = new ResourceLoadingLevel("Load Game", Integer.MAX_VALUE -2);
        
        

    public readonly LEVEL: ResourceLoadingLevel = new ResourceLoadingLevel("Level", Integer.MAX_VALUE -99);
        
        

    public readonly MAX_LEVEL: ResourceLoadingLevel = new ResourceLoadingLevel("Max Level", Integer.MAX_VALUE -100);
        
        

    public readonly LOAD_ALL: ResourceLoadingLevel = new ResourceLoadingLevel("Load All",  -1);
        
        

    private readonly RESOURCE_LOADING_LEVEL_ARRAY: ResourceLoadingLevel[] = 
                                                        [
                                                            this.LOAD_ALL,this.MAX_LEVEL,this.LEVEL,this.LOAD_GAME,this.LOAD_TOUCH,this.LOAD_EARLY
                                                        ];
        
        

    public getLevelString(level: number): string{
var level = level




                        for (
    var index: number = 0;
        
        
index < RESOURCE_LOADING_LEVEL_ARRAY.length; index++)
        {

                        if(level == RESOURCE_LOADING_LEVEL_ARRAY[index]!.getLevel())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RESOURCE_LOADING_LEVEL_ARRAY[index]!.getName();

                        ;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return level.toString();

                        ;
    
}


}
                
            

