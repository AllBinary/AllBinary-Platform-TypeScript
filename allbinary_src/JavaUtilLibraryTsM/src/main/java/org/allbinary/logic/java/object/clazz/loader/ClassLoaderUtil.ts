
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ClassLoader } from './ClassLoader.js';

export class ClassLoaderUtil
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getName(anyType: any = {}): string{
var anyType = anyType

    var classLoader: ClassLoader = anyType!.constructor.name.java.classLoader!;
;
    

                        if(classLoader != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "ClassLoader: " +classLoader!.constructor.name.toString()!;
    

                                    }
                                



                            throw new Exception("Unable to get ClassLoader");
                    
}

private constructor (){

            super();
        }


}
                
            

