
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
        



import { DataInputStream } from "../../../../java/io/DataInputStream.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class LineReader
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private fileName: string

    private string: string

    private index: number = 0;
        
        

    private idFile: AbFileInputStream

    private idData: DataInputStream
public constructor (fileName: string){

            super();
                //var fileName = fileName

        try {
            
    var bytes: number[] = new Array(100000);
        
        
;
    
this.fileName= fileName;
    
idFile= AbFileInputStream(fileName);
    
idFile!.read(bytes);
    
string= bytes.decodeToString();
    

                //: 
} catch(e) 
            {
logUtil!.put("File: " +fileName, this, "LineReader", e);
    


                            {
                            
                            }
                    
}

}


    public hasNext(): boolean{

        try {
            
    var nextIndex: number = string.indexOf(CommonSeps.getInstance()!.NEW_LINE, index)!;
        
        
;
    

                        if(nextIndex ==  -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "hasNext", e);
    


                            {
                            
                            }
                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(Error::class)
            
    public next(): string{

        try {
            
    var nextIndex: number = string.indexOf(CommonSeps.getInstance()!.NEW_LINE, index)!;
        
        
;
    

                        if(nextIndex ==  -1)
                        
                                    {
                                    


                            throw Error("next() should have been called first")

                                    }
                                

    var temp: string = string.substring(index, nextIndex)!;
        
        
;
    
index= nextIndex +1;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return temp;
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "next", e);
    


                            {
                            
                            }
                    



                            throw e
}

}


}
                
            

