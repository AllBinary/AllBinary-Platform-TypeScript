
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
        



import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DestroyableBaseBehavior
            extends Object
         implements DestroyableInterface {
        

    private static readonly instance: DestroyableBaseBehavior = new DestroyableBaseBehavior();
        
        

    public static getInstance(): DestroyableBaseBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constructor.name.toString()!;

                        ;
    
}


                //@Throws(Error::class)
            
    public isDestroyed(): boolean{



                            throw new Error(CommonStrings.getInstance()!.NOT_IMPLEMENTED)
}


    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
}


}
                
            

