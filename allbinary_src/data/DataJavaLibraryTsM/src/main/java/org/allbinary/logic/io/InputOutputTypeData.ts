
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
        




export class InputOutputTypeData
            extends Object
         {
        

    private static readonly instance: InputOutputTypeData = new InputOutputTypeData();
        
        

    public static getInstance(): InputOutputTypeData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly NAME: string = "INPUT_OUTPUT_TYPE_NAME";
        
        

    public readonly FILE: string = "INPUT_OUTPUT_TYPE_FILE";
        
        

    public readonly RESPONSE: string = "INPUT_OUTPUT_TYPE_RESPONSE";
        
        

    public readonly DB: string = "INPUT_OUTPUT_TYPE_DB";
        
        

    public readonly JSP: string = "jsp";
        
        

    public readonly JSP_FRAGMENT: string = "jspf";
        
        

    public readonly PHP: string = "php";
        
        

    public readonly ASP: string = "asp";
        
        

    public readonly PL: string = "pl";
        
        

    public readonly DEFAULT: string = JSP;
        
        

    public readonly DEFAULT_FRAGMENT: string = JSP_FRAGMENT;
        
        

}
                
            

