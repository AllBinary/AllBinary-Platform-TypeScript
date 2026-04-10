
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
        



import { AbFile } from "../../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPath } from "../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    

export class HttpFilePermissionsUtil
            extends Object
         {
        

    private static readonly instance: HttpFilePermissionsUtil = new HttpFilePermissionsUtil();
        
        

    public static getInstance(): HttpFilePermissionsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public create(path: AbPath){
var path = path

    var file: AbFile = new AbFile(path);
        
        


                        if(!file.isFile())
                        
                                    {
                                    file.createNewFile()

                                    }
                                
}


}
                
            

