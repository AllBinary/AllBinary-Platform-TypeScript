
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
        




export class BooleanFactory
            extends Object
         {
        

    private static readonly instance: BooleanFactory = new BooleanFactory();
        
        

    public static getInstance(): BooleanFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly TRUE: Boolean = new true;
        
        

    public readonly FALSE: Boolean = new false;
        
        

    public readonly TRUE_STRING: string = TRUE.toString()!;
        
        

    public readonly FALSE_STRING: string = FALSE.toString()!;
        
        

    public readonly YES: string = "yes";
        
        

    public readonly NO: string = "no";
        
        

    public toString(bool: boolean): string{
var bool = bool

                        if(bool)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TRUE_STRING;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FALSE_STRING;
    

                        }
                            
}


}
                
            

