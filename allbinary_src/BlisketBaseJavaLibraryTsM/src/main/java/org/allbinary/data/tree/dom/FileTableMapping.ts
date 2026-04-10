
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

    

export class FileTableMapping
            extends Object
        
                , TableMappingInterface {
        

    private file: AbFile
public constructor (file: AbFile){

            super();
            var file = file
this.file= file
}


                @Throws(Exception::class)
            
    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getPath() as Object;
    
}


                @Throws(Exception::class)
            
    public toVector(): Vector{

    var filePropertyVector: Vector = new Vector();
        
        

add(file.getAbsolutePath())
add(file.getCanonicalPath())
add(file.getName())
add(file.getParent())
add(file.getPath())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePropertyVector;
    
}


                @Throws(Exception::class)
            
    public toHashMap(): HashMap<Any, Any>{

    var filePropertyHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var pathUtil: PathUtil = PathUtil.getInstance()!;
        
        


    var rootFileName: string = pathUtil!.getNameFromPath(pathUtil!.getWithoutExtension(file.getPath()))!;
        
        


    var fileData: FileData = FileData.getInstance()!;
        
        

put(fileData!.ROOT_NAME, rootFileName)
put(fileData!.ISFILE, Boolean.valueOf(file.isFile())!.toString())
put(fileData!.ISDIRECTORY, Boolean.valueOf(file.isDirectory())!.toString())
put(fileData!.ISHIDDEN, Boolean.valueOf(file.isHidden())!.toString())
put(fileData!.ISABSOLUTE, Boolean.valueOf(file.isAbsolute())!.toString())
put(fileData!.ABSOLUTE_PATH, file.getAbsolutePath())
put(fileData!.CANONICAL_PATH, file.getCanonicalPath())
put(fileData!.NAME, file.getName())
put(fileData!.PARENT, file.getParent())
put(fileData!.PATH, file.getPath())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePropertyHashMap;
    
}


}
                
            

