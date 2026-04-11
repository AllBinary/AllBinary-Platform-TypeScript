
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
        



import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    

export class WebappClassLoaderInfo
            extends Object
         {
        

    private classLoader: any = NullUtil.getInstance()!.NULL_OBJECT;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static setLoader(classLoader: ClassLoader){
var classLoader = classLoader
WebappClassLoaderInfo.classLoader= classLoader;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getLoader(): ClassLoader{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return classLoader as ClassLoader;
    
}

private constructor (){

            super();
            }


}
                
            

