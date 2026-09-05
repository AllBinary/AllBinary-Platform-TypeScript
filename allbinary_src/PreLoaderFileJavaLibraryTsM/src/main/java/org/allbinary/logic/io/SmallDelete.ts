
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
        
import { DataOutputStream } from '../../../../java/io/DataOutputStream.js';
//not GWT import const DataOutputStream = globalThis.java.io.DataOutputStream;

      
import { FileOutputStream } from '../../../../java/io/FileOutputStream.js';
//not GWT import const FileOutputStream = globalThis.java.io.FileOutputStream;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbFileSystem } from '../../../../org/allbinary/logic/io/file/AbFileSystem.js';
//not GWT import const AbFileSystem = globalThis.org.allbinary.logic.io.file.AbFileSystem;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SmallDelete
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private fileName: string;

    private string: string;

public constructor (fileName: string){

            super();
        this.fileName= fileName;
    
this.string= AbFileSystem.getInstance()!.readAsString(fileName);
    
}


    public deleteAtStart(start: string, end: string): boolean{

        try {
            
    var beginIndex: number= 0;var endIndex: number= 0;;
    
beginIndex= this.string.indexOf(start);
    
endIndex= this.string.indexOf(end);
    

                        if(endIndex > beginIndex && beginIndex >= 0 && endIndex >= 0 && beginIndex < 10 && endIndex < 525)
                        
                                    {
                                    
    var text: string = this.string.substring(endIndex, this.string.length)!;;
    

    var idFile: FileOutputStream = new FileOutputStream(this.fileName);;
    

    var idOutData: DataOutputStream = new DataOutputStream(idFile);;
    
idOutData!.writeBytes(text);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "deleteAtStart", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public deleteBetween(start: string, end: string, newText: string): boolean{

        try {
            
    var beginIndex: number= 0;var endIndex: number= 0;;
    
beginIndex= this.string.indexOf(start);
    
endIndex= this.string.indexOf(end);
    

                        if(endIndex > beginIndex && beginIndex >= 0 && endIndex >= 0 && beginIndex < 50 && endIndex < 425)
                        
                                    {
                                    
    var newStart: string = this.string.substring(0, beginIndex)!;;
    

    var text: string = this.string.substring(endIndex +end.length, this.string.length)!;;
    

    var idFile: FileOutputStream = new FileOutputStream(this.fileName);;
    

    var idOutData: DataOutputStream = new DataOutputStream(idFile);;
    
idOutData!.writeBytes(newStart +newText +text);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "deleteAtStart", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}



