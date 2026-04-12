
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
        



import { InputStream } from "../../../../../../java/io/InputStream.js";

    
import { InputStreamReader } from "../../../../../../java/io/InputStreamReader.js";

    
import { ResourceUtil } from "../../../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class PartnerIdentifierFileUtil
            extends Object
         {
        

    private static readonly instance: PartnerIdentifierFileUtil = new PartnerIdentifierFileUtil();
        
        

    public static getInstance(): PartnerIdentifierFileUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly FILE_NAME: string = "partner.txt";
        
        

    public get(): string{

        try {
            
    var resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;
        
        
;
    

    var inputStream: InputStream = resourceUtil!.getResourceAsStream(this.FILE_NAME)!;
        
        
;
    

    var inputStreamReader: InputStreamReader = new InputStreamReader(inputStream);
        
        
;
    

    var chars: string[] = 
                                                        
                                                        new Array(30)
                                                    ;
        
        
;
    

    var size: number = inputStreamReader!.read(chars)!;
        
        
;
    

    var partnerString: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    partnerString= chars.concatToString(0, size)

                                    ;
    

                                    }
                                
inputStreamReader!.close();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return partnerString;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.NULL_STRING;
    
}

}


}
                
            

