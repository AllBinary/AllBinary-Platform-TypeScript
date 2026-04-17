
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
        



import { Hashtable } from "../../java/util/Hashtable.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ThreedObjResources
            extends Object
         {
        

    private static readonly instance: ThreedObjResources = new ThreedObjResources();
        
        

    public static getInstance(): ThreedObjResources{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        

    public get(resourceName: string): string{
    //var resourceName = resourceName

    var resourceName2: string = this.hashtable.get(resourceName as Object);

                         as String;
        
        
;
    

                        if(resourceName2 != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resourceName2;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resourceName;
    
}


}
                
            

