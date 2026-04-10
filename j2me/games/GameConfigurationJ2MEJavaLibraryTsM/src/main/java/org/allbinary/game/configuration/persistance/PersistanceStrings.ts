
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        




export class PersistanceStrings
            extends Object
         {
        

    private static readonly instance: PersistanceStrings = new PersistanceStrings();
        
        

    public static getInstance(): PersistanceStrings{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly SAVING: string = "Saving: ";
        
        

    public readonly NUMBER_OF_RECORDS: string = "Number of records: ";
        
        

    public readonly LOADING_ID: string = "Loading data with id: ";
        
        

    public readonly LOAD_ALL: string = "loadAll";
        
        

    public readonly DELETING_WITH_ID: string = "Deleting data with id: ";
        
        

    public readonly CLOSING_RECORDSTORE: string = "Closing RecordStore";
        
        

    public readonly NOT_SAVING: string = "Not Saving: ";
        
        

    public readonly ERROR_LOADING: string = "Error Loading gameActionInput: ";
        
        

    public readonly ERROR_LOADING_ID: string = "Error Loading id: ";
        
        

    public readonly ID: string = " id: ";
        
        

    public readonly GAME_ACTION_INPUT: string = " GameActionInput: ";
        
        

}
                
            

