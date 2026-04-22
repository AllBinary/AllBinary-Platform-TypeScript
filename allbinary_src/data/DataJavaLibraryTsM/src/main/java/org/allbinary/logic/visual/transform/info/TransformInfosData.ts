
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
        
export class TransformInfosData
            extends Object
         {
        

    private static readonly instance: TransformInfosData = new TransformInfosData();
        
        

    public static getInstance(): TransformInfosData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    public readonly NAME: string = "TRANSFORM_INFOS_NAME";
        
        

    public readonly GROUP: string = "TRANSFORM_INFOS_GROUP";
        
        

    public readonly ALL: string = "TRANSFORM_INFOS_ALL";
        
        

    public readonly PREVIEW: string = "TRANSFORM_INFOS_PREVIEW";
        
        

    public readonly SMALL_PREVIEW: string = "TRANSFORM_INFOS_SMALL_PREVIEW";
        
        

}
                
            

