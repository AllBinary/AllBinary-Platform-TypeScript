
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
        



import { DataFileData } from "../../../../org/allbinary/data/file/DataFileData.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CategoryData
            extends Object
         {
        

    private static readonly instance: CategoryData = new CategoryData();
        
        

    public static getInstance(): CategoryData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly PARENT: string = "CATEGORY_PARENT";
        
        

    public readonly NAME: string = "CATEGORY_NAME";
        
        

    public readonly PATH: string = "CATEGORY_PATH";
        
        

    public readonly LABEL: string = "CATEGORY_LABEL";
        
        

    public readonly VIEW: string = "CATEGORY_VIEW_CATEGORY";
        
        

    public readonly LEVEL: string = "CATEGORY_LEVEL";
        
        

    public readonly REQUEST: string = "request";
        
        

    public readonly ROOTCATEGORY: string = "Category";
        
        

    public readonly UNCRYPTED_EXTENSION: string = DataFileData.UNCRYPTED_EXTENSION;
        
        

    public readonly ENCRYPTED_EXTENSION: string = DataFileData.ENCRYPTED_EXTENSION;
        
        

}
                
            

