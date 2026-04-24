
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
        



import { Comparator } from "../../../../../java/util/Comparator.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StringComparator
            extends Object
         implements Comparator {
        
public constructor (){

            super();
        }


    public compare(anyType: any = {}, object2: any = {}): number{
var anyType = anyType
var object2 = object2

    var string: string = anyType as String;
        
        
;
    

    var string2: string = object2 as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return string.compareTo(string2);;
    
}


}
                
            

