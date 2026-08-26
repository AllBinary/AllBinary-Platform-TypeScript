
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { TableMappingInterface } from '../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
//not game specific package import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { FileData } from '../../../../../org/allbinary/logic/io/file/FileData.js';
      const FileData = globalThis.org.allbinary.logic.io.file.FileData;

      
//not game specific package import { AbPathData } from '../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { PathUtil } from '../../../../../org/allbinary/logic/io/path/PathUtil.js';
      const PathUtil = globalThis.org.allbinary.logic.io.path.PathUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FileTableMapping
            extends Object
         implements TableMappingInterface {
        

    private file: AbFile;

public constructor (file: AbFile){

            super();
        this.file= file;
    
}


                //@Throws(Exception.constructor)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getPath();
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): Vector{

    var filePropertyVector: Vector = new Vector();;
    
filePropertyVector!.add(this.file.getAbsolutePath());
    
filePropertyVector!.add(this.file.getCanonicalPath());
    
filePropertyVector!.add(this.file.getName());
    
filePropertyVector!.add(this.file.getParent());
    
filePropertyVector!.add(this.file.getPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePropertyVector;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    var filePropertyHashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var pathData: AbPathData = AbPathData.getInstance()!;;
    

    var pathUtil: PathUtil = PathUtil.getInstance()!;;
    

    var rootFileName: string = pathData!.getNameFromPath(pathUtil!.getWithoutExtension(this.file.getPath()))!;;
    

    var fileData: FileData = FileData.getInstance()!;;
    
filePropertyHashMap!.put(fileData!.ROOT_NAME, rootFileName);
    
filePropertyHashMap!.put(fileData!.ISFILE, Boolean.valueOf(this.file.isFile())!.toString());
    
filePropertyHashMap!.put(fileData!.ISDIRECTORY, Boolean.valueOf(this.file.isDirectory())!.toString());
    
filePropertyHashMap!.put(fileData!.ISHIDDEN, Boolean.valueOf(this.file.isHidden())!.toString());
    
filePropertyHashMap!.put(fileData!.ISABSOLUTE, Boolean.valueOf(this.file.isAbsolute())!.toString());
    
filePropertyHashMap!.put(fileData!.ABSOLUTE_PATH, file.getAbsolutePath());
    
filePropertyHashMap!.put(fileData!.CANONICAL_PATH, file.getCanonicalPath());
    
filePropertyHashMap!.put(fileData!.NAME, file.getName());
    
filePropertyHashMap!.put(fileData!.PARENT, file.getParent());
    
filePropertyHashMap!.put(fileData!.PATH, file.getPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePropertyHashMap;
    
}


}
                
            

