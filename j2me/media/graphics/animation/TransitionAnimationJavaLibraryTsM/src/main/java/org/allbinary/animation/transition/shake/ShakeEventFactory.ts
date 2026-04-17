
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
        
export class ShakeEventFactory
            extends Object
         {
        

    private static readonly instance: ShakeEventFactory = new ShakeEventFactory();
        
        

    public static getInstance(): ShakeEventFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public MICRO: ShakeEvent = new ShakeEvent();
        
        

    public SMALL: ShakeEvent = new ShakeEvent();
        
        

    public MEDIUM: ShakeEvent = new ShakeEvent();
        
        

    public LARGE: ShakeEvent = new ShakeEvent();
        
        

    public init(){
}


}
                
            

