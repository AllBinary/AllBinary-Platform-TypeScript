
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        




export class LogConfigTypeFactory
            extends Object
         {
        

    private static readonly instance: LogConfigTypeFactory = new LogConfigTypeFactory();
        
        

    public static getInstance(): LogConfigTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly NO_DESCRIPTION: string = "No Description";
        
        

    public readonly FILE: LogConfigType = new LogConfigType("File", NO_DESCRIPTION);
        
        

    public readonly FILEERROR: LogConfigType = new LogConfigType("File Error", NO_DESCRIPTION);
        
        

    public readonly IDLOGGING: LogConfigType = new LogConfigType("ID Logging", NO_DESCRIPTION);
        
        

    public readonly REPLACE: LogConfigType = new LogConfigType("Replace", NO_DESCRIPTION);
        
        

    public readonly REPLACE_INFO: LogConfigType = new LogConfigType("Replace Info", NO_DESCRIPTION);
        
        

    public readonly REPLACEERROR: LogConfigType = new LogConfigType("Replace Error", NO_DESCRIPTION);
        
        

}
                
            

