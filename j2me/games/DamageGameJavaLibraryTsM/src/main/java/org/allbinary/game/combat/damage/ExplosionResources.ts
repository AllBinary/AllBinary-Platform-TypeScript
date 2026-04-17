
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
        
export class ExplosionResources
            extends Object
         {
        

    private static readonly instance: ExplosionResources = new ExplosionResources();
        
        

    public static getInstance(): ExplosionResources{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly EXPLOSION_90_RESOURCE: string = "/explosion_sprite_90_by_90.png";
        
        

    public readonly EXPLOSION_60_RESOURCE: string = "/explosion_sprite_60_by_60.png";
        
        

    public readonly HALF_EXPLOSION_RESOURCE: string = "/explosion_sprite_30_by_30.png";
        
        

    public readonly THIRD_EXPLOSION_RESOURCE: string = "/explosion_sprite_15_by_15.png";
        
        

}
                
            

