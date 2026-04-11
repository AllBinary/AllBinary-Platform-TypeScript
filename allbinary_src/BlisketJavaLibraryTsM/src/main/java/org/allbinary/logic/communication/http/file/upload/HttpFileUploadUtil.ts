
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
        



import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ClassUtil } from "../../../../../../../org/allbinary/logic/java/anyType/clazz/ClassUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../../../org/allbinary/string/CommonSeps.js";

    
import { FileItem } from "../../../../../../../org/apache/commons/fileupload/FileItem.js";

    
import { FileItemStream } from "../../../../../../../org/apache/commons/fileupload/FileItemStream.js";

    

export class HttpFileUploadUtil
            extends Object
         {
        

    private static readonly instance: HttpFileUploadUtil = new HttpFileUploadUtil();
        
        

    public static getInstance(): HttpFileUploadUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public static log(fileItem: FileItemStream){
var fileItem = fileItem

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    
stringBuffer!.append("FileItem Log:");
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append("Content Type:");
    
stringBuffer!.append(fileItem!.getContentType());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append("Field Name:");
    
stringBuffer!.append(fileItem!.getFieldName());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append("Name:");
    
stringBuffer!.append(fileItem!.getName());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append("Size:");
    
stringBuffer!.append(" Not Calculated Yet");
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTP))
                        
                                    {
                                    logUtil!.put(stringBuffer!.toString(), getInstance(), "log()");
    

                                    }
                                
}


    public static log(fileItem: FileItem){
var fileItem = fileItem

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    
stringBuffer!.append("FileItem Log:");
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append("Content Type:");
    
stringBuffer!.append(fileItem!.getContentType());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append("Field Name:");
    
stringBuffer!.append(fileItem!.getFieldName());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append("Name:");
    
stringBuffer!.append(fileItem!.getName());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append("Size:");
    
stringBuffer!.appendlong(fileItem!.getSize());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    logUtil!.put(stringBuffer!.toString(), getInstance(), "log()");
    

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public isValid(anyType: any = {}): boolean{
var anyType = anyType

                        if(anyType != 
                                    null
                                 && !(anyType is String))
                        
                                    {
                                    
                        if(anyType is FileItem)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                            throw new Error("Object Not Instance Of FileItem but is: " +ClassUtil.viewAll(anyType, CommonSeps.getInstance()!.NEW_LINE))

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

