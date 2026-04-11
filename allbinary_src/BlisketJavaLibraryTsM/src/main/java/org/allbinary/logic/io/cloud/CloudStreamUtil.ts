
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
        



import { InputStream } from "../../../../java/io/InputStream.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    

export class CloudStreamUtil
            extends Object
         {
        

    private static readonly instance: CloudStreamUtil = new CloudStreamUtil();
        
        

    public static getInstance(): CloudStreamUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getFile(file: AbFile): InputStream{
var file = file

    var inputStream: InputStream = new AbFileInputStream(file);
        
        
;
    

    var available: number = inputStream!.available()!;
        
        
;
    

                        if(available > 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Cloud File Bytes: " +available, this, "processRequest()");
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


                //@Throws(Error::class)
            
    public getFileAnyWhere(file: AbFile): InputStream{
var file = file

    var inputStream: InputStream = new AbFileLocalInputStream(file);
        
        
;
    

    var available: number = inputStream!.available()!;
        
        
;
    

                        if(available > 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Local File Bytes: " +available, this, "processRequest()");
    

                                    }
                                

                                    }
                                
                        else {
                            inputStream= new AbFileInputStream(file);
    
available= inputStream!.available();
    

                        if(available > 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Cloud File Bytes: " +available, this, "processRequest()");
    

                                    }
                                

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


                //@Throws(Error::class)
            
    public getFileLocal(file: AbFile): InputStream{
var file = file

    var inputStream: InputStream = new AbFileLocalInputStream(file);
        
        
;
    

    var available: number = inputStream!.available()!;
        
        
;
    

                        if(available > 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Local File Bytes: " +available, this, "processRequest()");
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


}
                
            

