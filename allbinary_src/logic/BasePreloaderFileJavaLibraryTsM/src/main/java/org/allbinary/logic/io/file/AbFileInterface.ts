
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
        



//not game specific package import { FilenameFilter } from '../../../../../java/io/FilenameFilter.js';
      const FilenameFilter = globalThis.java.io.FilenameFilter;

      
//not game specific package import { IOException } from '../../../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { URI } from '../../../../../java/net/URI.js';
      const URI = globalThis.java.net.URI;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AbFileInterface {
        

    canRead(): boolean

    canWrite(): boolean

                //@Throws(IOException.constructor)
            
    createNewFile(): boolean

                //@Throws(IOException.constructor)
            
    delete(): boolean

    deleteOnExit()

    exists(): boolean

    getAbsolutePath(): string

                //@Throws(IOException.constructor)
            
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

    listWithFilter(filter: FilenameFilter): string[]

    mkdir(): boolean

    mkdirs(): boolean

    setLastModified(time: number): boolean

    setReadOnly(): boolean

    toString(): string

    toURI(): URI

}



