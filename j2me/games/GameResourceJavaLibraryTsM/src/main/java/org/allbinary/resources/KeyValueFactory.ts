
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
        



import { Hashtable } from "../../../java/util/Hashtable.js";

    

import { MAP } from "./MAP.js";

export class KeyValueFactory
            extends Object
         {
        

    private static readonly instance: KeyValueFactory = new KeyValueFactory();
        
        

    public static getInstance(): KeyValueFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly MAP: Hashtable<any, any> = new Hashtable<any, any>();
        
        

    public get(key: string): string{
var key = key

    var value: string = MAP.get(key as Object);

                         as String;
        
        
;
    

                        if(value == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return key;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


}
                
            

