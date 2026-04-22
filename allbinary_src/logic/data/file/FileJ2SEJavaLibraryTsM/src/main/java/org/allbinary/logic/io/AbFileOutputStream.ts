
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
        



import { FileNotFoundException } from "../../../../java/io/FileNotFoundException.js";

    
import { FileOutputStream } from "../../../../java/io/FileOutputStream.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbFileNativeUtil } from "../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbFileOutputStream extends FileOutputStream {
        
public constructor (name: string){
            super(name);
                    var name = name


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (name: string, append: boolean){
            super(name, append);
                    var name = name
var append = append


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (file: AbFile){
            super(AbFileNativeUtil.get(file));
                    var file = file


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (file: AbFile, append: boolean){
            super(AbFileNativeUtil.get(file), append);
                    var file = file
var append = append


                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

