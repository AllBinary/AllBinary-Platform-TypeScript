
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
        




import { System } from "./System.js";

export class NativeLibraryHelper
            extends Object
         {
        

    private library: string
public constructor (library: string){

            super();
            var library = library
this.library= library;
    
}


    public load(){
System.loadLibrary(library);
    
}


}
                
            

