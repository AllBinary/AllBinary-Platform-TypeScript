
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
        
export class CharacterSetData
            extends Object
         {
        

    private static readonly instance: CharacterSetData = new CharacterSetData();
        
        

    public static getInstance(): CharacterSetData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    public readonly US_ASCII: string = "US-ASCII";
        
        

    public readonly ISO_8859_1: string = "ISO-8859-1";
        
        

    public readonly UTF_8: string = "UTF-8";
        
        

    public readonly UTF_16: string = "UTF-16";
        
        

    public readonly UTF_16BE: string = "UTF-16BE";
        
        

    public readonly UTF_16LE: string = "UTF-16LE";
        
        

}
                
            

