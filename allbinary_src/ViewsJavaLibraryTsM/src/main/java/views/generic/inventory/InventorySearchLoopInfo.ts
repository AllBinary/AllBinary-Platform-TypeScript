
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

export class InventorySearchLoopInfo
            extends Object
         {
        

    public lastPage: number =  -1;
        
        

    public currentPage: number =  -1;
        
        

    public numberOfResultsOnCurrentPage: number = 0;
        
        

    public numberOfResults: number = 0;
        
        

    private readonly CURRENT: string = "current: ";
        
        

    private readonly NUM: string = " num: ";
        
        

    private readonly LAST: string = " last: ";
        
        

    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(CURRENT)
appendint(currentPage)
append(NUM)
appendint(numberOfResults)
append(LAST)
appendint(lastPage)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

