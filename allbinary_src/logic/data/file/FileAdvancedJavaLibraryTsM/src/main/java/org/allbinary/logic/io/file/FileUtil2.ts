
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFileInputStream } from "../../../../../org/allbinary/logic/io/AbFileInputStream.js";

    
import { StreamUtil } from "../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

import { SimpleFileUtil } from "./SimpleFileUtil.js";

export class FileUtil2
            extends Object
         {
        

    private static readonly instance: FileUtil2 = new FileUtil2();
        
        

    public static getInstance(): FileUtil2{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    public loadFileAsList(file: AbFile, max: number, byteArray1: number[]): BasicArrayList{
    //var file = file
    //var max = max
    //var byteArray1 = byteArray1

    var inputStream: AbFileInputStream = 
                null
            ;
        
        
;
    

        try {
            inputStream= new AbFileInputStream(file);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.ADD, e);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleFileUtil.getInstance()!.loadFileAsList(inputStream, max, byteArray1);

                        ;
    
}


}
                
            

