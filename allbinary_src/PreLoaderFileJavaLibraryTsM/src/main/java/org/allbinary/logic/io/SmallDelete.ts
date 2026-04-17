
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
        



import { DataOutputStream } from "../../../../java/io/DataOutputStream.js";

    
import { FileOutputStream } from "../../../../java/io/FileOutputStream.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { FileUtil } from "../../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class SmallDelete
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private fileName: string

    private string: string
public constructor (fileName: string){

            super();
            var fileName = fileName
this.fileName= fileName;
    
string= FileUtil.getInstance()!.readAsString(fileName);
    
}


    public deleteAtStart(start: string, end: string): boolean{
var start = start
var end = end

        try {
            
    var beginIndex: number= 0
var endIndex: number= 0
;
    
beginIndex= this.string.indexOf(start);
    
endIndex= this.string.indexOf(end);
    

                        if(endIndex > beginIndex && beginIndex >= 0 && endIndex >= 0 && beginIndex < 10 && endIndex < 525)
                        
                                    {
                                    
    var text: string = this.string.substring(endIndex, this.string.length)!;
        
        
;
    

    var idFile: FileOutputStream = new FileOutputStream(this.fileName);
        
        
;
    

    var idOutData: DataOutputStream = new DataOutputStream(idFile);
        
        
;
    
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
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "deleteAtStart", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public deleteBetween(start: string, end: string, newText: string): boolean{
var start = start
var end = end
var newText = newText

        try {
            
    var beginIndex: number= 0
var endIndex: number= 0
;
    
beginIndex= this.string.indexOf(start);
    
endIndex= this.string.indexOf(end);
    

                        if(endIndex > beginIndex && beginIndex >= 0 && endIndex >= 0 && beginIndex < 50 && endIndex < 425)
                        
                                    {
                                    
    var newStart: string = this.string.substring(0, beginIndex)!;
        
        
;
    

    var text: string = this.string.substring(endIndex +end.length, this.string.length)!;
        
        
;
    

    var idFile: FileOutputStream = new FileOutputStream(this.fileName);
        
        
;
    

    var idOutData: DataOutputStream = new DataOutputStream(idFile);
        
        
;
    
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
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "deleteAtStart", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}
                
            

