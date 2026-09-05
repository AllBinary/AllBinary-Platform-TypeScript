
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbFileInputStream } from '../../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;

      
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimpleFileUtil } from './SimpleFileUtil.js';
//not GWT import - same folder const SimpleFileUtil = globalThis.org.allbinary.logic.io.file.SimpleFileUtil;

                import { AbFile } from './AbFile.js';
//not GWT import - same folder const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

                
export class FileUtil2
            extends Object
         {
        

    private static readonly instance: FileUtil2 = new FileUtil2();

    public static getInstance(): FileUtil2{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileUtil2.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;

private constructor (){

            super();
        }


    public loadFileAsList(file: AbFile, max: number, byteArray1: number[]): BasicArrayList{

    var inputStream: AbFileInputStream = 
                null
            ;;
    

        try {
            inputStream= new AbFileInputStream(file);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleFileUtil.getInstance()!.loadFileAsList(inputStream, max, byteArray1);;
    
}


}



