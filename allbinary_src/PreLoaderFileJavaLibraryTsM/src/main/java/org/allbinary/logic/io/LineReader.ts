
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { DataInputStream } from '../../../../java/io/DataInputStream.js';
//not GWT import const DataInputStream = globalThis.java.io.DataInputStream;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFileInputStream } from './AbFileInputStream.js';
//not GWT import - same folder const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;

                
export class LineReader
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private fileName: string;

    private string: string;

    private index: number = 0;

    private idFile: AbFileInputStream;

    private idData: DataInputStream;

public constructor (fileName: string){

            super();
        
        try {
            
    var bytes: number[] = new Array(100000);;
    
this.fileName= fileName;
    
this.idFile= new AbFileInputStream(fileName);
    
this.idFile!.read(bytes);
    
this.string= String.fromCharCode(...bytes);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("File: " +fileName, this, "LineReader", e);
    


                            {
                            
                            }
                    
}

}


    public hasNext(): boolean{

        try {
            
    var nextIndex: number = this.string.indexOf(CommonSeps.getInstance()!.NEW_LINE, index)!;;
    

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
this.logUtil!.put(commonStrings!.EXCEPTION, this, "hasNext", e);
    


                            {
                            
                            }
                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(Exception.constructor)
            
    public next(): string{

        try {
            
    var nextIndex: number = this.string.indexOf(CommonSeps.getInstance()!.NEW_LINE, index)!;;
    

                        if(nextIndex ==  -1)
                        
                                    {
                                    


                            throw new Exception("next() should have been called first");
                    

                                    }
                                

    var temp: string = this.string.substring(index, nextIndex)!;;
    
index= nextIndex +1;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return temp;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "next", e);
    


                            {
                            
                            }
                    



                            throw e;
                    
}

}


}



