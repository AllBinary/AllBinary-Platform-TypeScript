
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
        




export class ThemeData
            extends Object
         {
        

    private static readonly instance: ThemeData = new ThemeData();
        
        

    public static getInstance(): ThemeData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly NAME: string = "THEME_NAME";
        
        

    public readonly PATH: string = "THEME_PATH";
        
        

    public readonly PREVIEW_IMAGE_NAME: string = "THEME_PREVIEW_IMAGE_NAME";
        
        

    public readonly PREVIEW_IMAGE_PATH: string = "THEME_PREVIEW_IMAGE_PATH";
        
        

}
                
            

