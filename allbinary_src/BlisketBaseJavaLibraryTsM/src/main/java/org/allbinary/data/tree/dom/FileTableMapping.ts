
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { TableMappingInterface } from "../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileData } from "../../../../../org/allbinary/logic/io/file/FileData.js";

    
import { PathUtil } from "../../../../../org/allbinary/logic/io/path/PathUtil.js";

    

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

export class FileTableMapping
            extends Object
        
                , TableMappingInterface {
        

    private file: AbFile
public constructor (file: AbFile){

            super();
            var file = file
this.file= file;
    
}


                //@Throws(Error::class)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getPath();

                         as Object;
    
}


                //@Throws(Error::class)
            
    public toVector(): Vector{

    var filePropertyVector: Vector = new Vector();
        
        
;
    
filePropertyVector!.add(file.getAbsolutePath());
    
filePropertyVector!.add(file.getCanonicalPath());
    
filePropertyVector!.add(file.getName());
    
filePropertyVector!.add(file.getParent());
    
filePropertyVector!.add(file.getPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePropertyVector;
    
}


                //@Throws(Error::class)
            
    public toHashMap(): HashMap<any, any>{

    var filePropertyHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var pathUtil: PathUtil = PathUtil.getInstance()!;
        
        
;
    

    var rootFileName: string = pathUtil!.getNameFromPath(pathUtil!.getWithoutExtension(file.getPath()))!;
        
        
;
    

    var fileData: FileData = FileData.getInstance()!;
        
        
;
    
filePropertyHashMap!.put(fileData!.ROOT_NAME, rootFileName);
    
filePropertyHashMap!.put(fileData!.ISFILE, Boolean.valueOf(file.isFile())!.toString());
    
filePropertyHashMap!.put(fileData!.ISDIRECTORY, Boolean.valueOf(file.isDirectory())!.toString());
    
filePropertyHashMap!.put(fileData!.ISHIDDEN, Boolean.valueOf(file.isHidden())!.toString());
    
filePropertyHashMap!.put(fileData!.ISABSOLUTE, Boolean.valueOf(file.isAbsolute())!.toString());
    
filePropertyHashMap!.put(fileData!.ABSOLUTE_PATH, file.getAbsolutePath());
    
filePropertyHashMap!.put(fileData!.CANONICAL_PATH, file.getCanonicalPath());
    
filePropertyHashMap!.put(fileData!.NAME, file.getName());
    
filePropertyHashMap!.put(fileData!.PARENT, file.getParent());
    
filePropertyHashMap!.put(fileData!.PATH, file.getPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePropertyHashMap;
    
}


}
                
            

