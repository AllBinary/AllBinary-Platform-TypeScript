
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
        
export class TenderTypeFactory
            extends Object
         {
        

    private static readonly instance: TenderTypeFactory = new TenderTypeFactory();
        
        

    public static getInstance(): TenderTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly CREDITCARD: TenderType = new TenderType("Credit Card");
        
        

    public readonly CHECK: TenderType = new TenderType("Check");
        
        

    public readonly ACH: TenderType = new TenderType("Ach");
        
        

}
                
            

