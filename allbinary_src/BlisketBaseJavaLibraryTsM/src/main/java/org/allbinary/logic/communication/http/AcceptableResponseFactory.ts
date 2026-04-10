
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
        




export class AcceptableResponseFactory
            extends Object
         {
        

    private static readonly instance: AcceptableResponseFactory = new AcceptableResponseFactory();
        
        

    public static getInstance(): AcceptableResponseFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly HTML: AcceptableResponse = new AcceptableResponse("text/html", "html", 0);
        
        

    public readonly WML: AcceptableResponse = new AcceptableResponse("text/wml", "wml", 1);
        
        

    public readonly VXML: AcceptableResponse = new AcceptableResponse("text/vxml", "vxml", 2);
        
        

}
                
            

