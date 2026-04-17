
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { Resource } from "../../org/eclipse/swt/graphics/Resource.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DisposalUtil
            extends Object
         {
        

    private static readonly instance: DisposalUtil = new DisposalUtil();
        
        

    public static getInstance(): DisposalUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public dispose(resource: Resource){
    //var resource = resource

                        if(!resource.isDisposed();

                        )
                        
                                    {
                                    resource.dispose();
    

                                    }
                                
}


}
                
            

