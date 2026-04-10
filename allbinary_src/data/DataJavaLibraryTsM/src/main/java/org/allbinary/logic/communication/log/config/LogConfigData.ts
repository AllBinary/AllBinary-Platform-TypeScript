
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
        




export class LogConfigData
            extends Object
         {
        

    private static readonly instance: LogConfigData = new LogConfigData();
        
        

    public static getInstance(): LogConfigData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly NAME: string = "LOG_CONFIG_NAME";
        
        

    public readonly DESCRIPTION: string = "LOG_CONFIG_DESCRIPTION";
        
        

    public readonly FILE: string = "LOG_CONFIG_FILE";
        
        

}
                
            

