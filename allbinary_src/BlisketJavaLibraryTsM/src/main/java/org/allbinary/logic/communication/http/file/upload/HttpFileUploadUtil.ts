
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ClassUtil } from '../../../../../../../org/allbinary/logic/java/anyType/clazz/ClassUtil.js';
//not GWT import const ClassUtil = globalThis.org.allbinary.logic.java.anyType.clazz.ClassUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { FileItem } from '../../../../../../../org/apache/commons/fileupload/FileItem.js';
//not GWT import const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
import { FileItemStream } from '../../../../../../../org/apache/commons/fileupload/FileItemStream.js';
//not GWT import const FileItemStream = globalThis.org.apache.commons.fileupload.FileItemStream;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HttpFileUploadUtil
            extends Object
         {
        

    private static readonly instance: HttpFileUploadUtil = new HttpFileUploadUtil();

    public static getInstance(): HttpFileUploadUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HttpFileUploadUtil.instance;
    
}


                //@Throws(Exception.constructor)
            
    public static log(fileItem: FileItemStream){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    
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
                                    logUtil!.putF(stringBuffer!.toString(), getInstance(), "log()");
    

                                    }
                                
}


    public static log(fileItem: FileItem){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    
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
                                    logUtil!.putF(stringBuffer!.toString(), getInstance(), "log()");
    

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public isValid(anyType: any = {}): boolean{

                        if(anyType != 
                                    null
                                 && !(anyType instanceof String))
                        
                                    {
                                    
                        if(anyType instanceof FileItem)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Object Not Instance Of FileItem but is: " +ClassUtil.viewAll(anyType, CommonSeps.getInstance()!.NEW_LINE));
                    

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



