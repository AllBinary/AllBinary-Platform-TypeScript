
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

        


import { File } from '../../../../java/io/File.js';
//not GWT import const File

import { FileInputStream } from '../../../../java/io/FileInputStream.js';
//not GWT import const FileInputStream

import { FileNotFoundException } from '../../../../java/io/FileNotFoundException.js';
//not GWT import const FileNotFoundException

import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbFileInputStream extends FileInputStream {
        

    public constructor(...args: any[]) {
        if(args.length === 1 && typeof args[0] === 'string') {
            const name = args[0];
            super(name);
            this.constructor$0(name);
            
        }
        else if(args.length === 1 && args[0] instanceof AbFile) {
            const file = args[0];
            super(AbFileNativeUtil.get(file));
            this.constructor$1(file);
            
        }
        else if(args.length === 1) {
            const file = args[0];
            super(file);
            this.constructor$2(file);
            
        }
        
    }
    
    private constructor$0(name: string): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$1(file: AbFile): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$2(file: File): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
}

