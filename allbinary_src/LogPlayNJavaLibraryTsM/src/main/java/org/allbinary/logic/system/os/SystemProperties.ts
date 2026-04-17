
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
        
/*actual*/ export class SystemProperties
            extends Object
         {
        

    private static readonly instance: SystemProperties = new SystemProperties();
        
        

    /*actual*/ public static getInstance(): SystemProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SystemProperties.instance;
    
}


    private readonly OS_NAME: string = "os.name";
        
        

    private readonly OS_ARCH: string = "os.arch";
        
        

    private readonly OS_VERSION: string = "os.version";
        
        
private constructor (){

            super();
            }


    /*actual*/ public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty(OS_NAME);

                        ;
    
}


    /*actual*/ public getArch(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty(OS_ARCH);

                        ;
    
}


    /*actual*/ public getVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty(OS_VERSION);

                        ;
    
}


}
                
            

