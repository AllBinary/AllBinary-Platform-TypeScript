
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
        
export class TransformInfoData
            extends Object
         {
        

    private static readonly instance: TransformInfoData = new TransformInfoData();
        
        

    public static getInstance(): TransformInfoData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly PARENT: string = "TRANSFORM_INFO_PARENT";
        
        

    public readonly MAPPED: string = "TRANSFORM_INFO_MAPPED";
        
        

    public readonly NAME: string = "TRANSFORM_INFO_NAME";
        
        

    public readonly DESCRIPTION: string = "TRANSFORM_INFO_DESCRIPTION";
        
        

    public readonly CATEGORY: string = "TRANSFORM_INFO_CATEGORY";
        
        

    public readonly OBJECTFILENAME: string = "TRANSFORM_INFO_OBJECTFILENAME";
        
        

    public readonly OBJECT: string = "TRANSFORM_INFO_OBJECT";
        
        

    public readonly OBJECTCONFIGFILENAME: string = "TRANSFORM_INFO_OBJECTCONFIGFILENAME";
        
        

    public readonly OBJECTCONFIG: string = "TRANSFORM_INFO_OBJECTCONFIG";
        
        

    public readonly TEMPLATEFILENAME: string = "TRANSFORM_INFO_TEMPLATEFILENAME";
        
        

    public readonly TEMPLATE: string = "TRANSFORM_INFO_TEMPLATE";
        
        

    public readonly DATAFILENAME: string = "TRANSFORM_INFO_DATAFILENAME";
        
        

    public readonly DATA: string = "TRANSFORM_INFO_DATA";
        
        

    public readonly LABEL: string = "TRANSFORM_INFO_LABEL";
        
        

    public readonly OWNER: string = "OWNER_" +NAME;
        
        

    public readonly PARTIAL: string = "PARTIAL_" +NAME;
        
        

}
                
            

