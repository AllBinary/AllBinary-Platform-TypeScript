
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

    

export class SmallInsert
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private fileName: string

    private string: string
public constructor (fileName: string){

            super();
            var fileName = fileName
this.fileName= fileName
string= FileUtil.getInstance()!.readAsString(fileName)
}


    public atBeginning(text: string): boolean{
var text = text

        try {
            
    var idFile: FileOutputStream = new FileOutputStream(this.fileName);
        
        


    var idOutData: DataOutputStream = new DataOutputStream(idFile);
        
        

idOutData!.writeBytes(text +this.string)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "insertAtBeginning", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public after(text: string, after: string): boolean{
var text = text
var after = after

        try {
            
    var index: number = this.string.indexOf(after)!;
        
        


                        if(index < 0)
                        
                                    {
                                    System.out.println("No such start: " +after +" in: " +this.string)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
index= index +after.length

    var start: string = this.string.substring(0, index)!;
        
        


    var end: string = this.string.substring(index +1, this.string.length)!;
        
        


    var idFile: FileOutputStream = new FileOutputStream(this.fileName);
        
        


    var idOutData: DataOutputStream = new DataOutputStream(idFile);
        
        

idOutData!.writeBytes(start +text +end)
idOutData!.close()
idFile!.close()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "after", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public atEnd(text: string): boolean{
var text = text

        try {
            
    var idFile: FileOutputStream = new FileOutputStream(this.fileName);
        
        


    var idOutData: DataOutputStream = new DataOutputStream(idFile);
        
        

idOutData!.writeBytes(this.string +text)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "insertAtEnd", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}
                
            

