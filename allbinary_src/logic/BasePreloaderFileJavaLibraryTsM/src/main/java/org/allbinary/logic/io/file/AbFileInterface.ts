
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
        



import { FilenameFilter } from "../../../../../java/io/FilenameFilter.js";

    
import { IOException } from "../../../../../java/io/IOException.js";

    
import { URI } from "../../../../../java/net/URI.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AbFileInterface {
        

    canRead(): boolean

    canWrite(): boolean

                //@Throws(IOException::class)
            
    createNewFile(): boolean

                //@Throws(IOException::class)
            
    delete(): boolean

    deleteOnExit()

    exists(): boolean

    getAbsolutePath(): string

                //@Throws(IOException::class)
            
    getCanonicalPath(): string

    getParent(): string

    getPath(): string

    isAbsolute(): boolean

    isDirectory(): boolean

    isFile(): boolean

    isHidden(): boolean

    lastModified(): number

    length(): number

    list(): string[]

    list(filter: FilenameFilter): string[]

    mkdir(): boolean

    mkdirs(): boolean

    setLastModified(time: number): boolean

    setReadOnly(): boolean

    toString(): string

    toURI(): URI

}
                
            

