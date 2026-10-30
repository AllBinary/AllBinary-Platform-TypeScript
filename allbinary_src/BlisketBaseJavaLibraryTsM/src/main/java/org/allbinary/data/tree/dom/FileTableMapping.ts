
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
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { TableMappingInterface } from '../../../../../org/allbinary/data/tables/TableMappingInterface.js';
//not GWT import const TableMappingInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { FileData } from '../../../../../org/allbinary/logic/io/file/FileData.js';
//not GWT import const FileData

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

import { PathUtil } from '../../../../../org/allbinary/logic/io/path/PathUtil.js';
//not GWT import const PathUtil

















                                        
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
            
    public toVector(): BasicArrayList{

    let filePropertyVector: BasicArrayList = new BasicArrayListD();;
    
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

    let filePropertyHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let pathData: AbPathData = AbPathData.getInstance()!;;
    

    let pathUtil: PathUtil = PathUtil.getInstance()!;;
    

    let rootFileName: string = pathData!.getNameFromPath(pathUtil!.getWithoutExtension(this.file.getPath()))!;;
    

    let fileData: FileData = FileData.getInstance()!;;
    
filePropertyHashMap!.put(fileData!.ROOT_NAME, rootFileName);
    
filePropertyHashMap!.put(fileData!.ISFILE, Boolean.valueOf(this.file.isFile())!.toString());
    
filePropertyHashMap!.put(fileData!.ISDIRECTORY, Boolean.valueOf(this.file.isDirectory())!.toString());
    
filePropertyHashMap!.put(fileData!.ISHIDDEN, Boolean.valueOf(this.file.isHidden())!.toString());
    
filePropertyHashMap!.put(fileData!.ISABSOLUTE, Boolean.valueOf(this.file.isAbsolute())!.toString());
    
filePropertyHashMap!.put(fileData!.ABSOLUTE_PATH, this.file.getAbsolutePath());
    
filePropertyHashMap!.put(fileData!.CANONICAL_PATH, this.file.getCanonicalPath());
    
filePropertyHashMap!.put(fileData!.NAME, this.file.getName());
    
filePropertyHashMap!.put(fileData!.PARENT, this.file.getParent());
    
filePropertyHashMap!.put(fileData!.PATH, this.file.getPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePropertyHashMap;
    
}


}

