
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
        
export class EntryData
            extends Object
         {
        

    private static readonly instance: EntryData = new EntryData();
        
        

    public static getInstance(): EntryData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    public readonly ID: string = "ENTRY_ID";
        
        

    public readonly ENCRYPTION: string = "ENTRY_ENCRYPTION";
        
        

    public readonly TIMECREATED: string = "ENTRY_TIMECREATED";
        
        

    public readonly LASTMODIFIED: string = "ENTRY_LASTMODIFIED";
        
        

    public readonly DEFAULT: string = "ENTRY_DEFAULT";
        
        

    public readonly SPECIAL: string = "ENTRY_SPECIAL";
        
        

    public readonly ENABLE: string = "ENTRY_ENABLE";
        
        

    public readonly YES: string = "Yes";
        
        

    public readonly NO: string = "No";
        
        

}
                
            

