
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
        




export class LogoData
            extends Object
         {
        

    private static readonly instance: LogoData = new LogoData();
        
        

    public static getInstance(): LogoData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly NAME: string = "LOGO_NAME";
        
        

    public readonly IMAGEPATH: string = "LOGO_IMAGE_PATH";
        
        

    public readonly IMAGEFILENAME: string = "LOGO_IMAGE_FILE_NAME";
        
        

    public readonly IMAGE: string = "LOGO_IMAGE";
        
        

}
                
            

