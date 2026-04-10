
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
        



import { IOException } from "../../../../java/io/IOException.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { HashMap } from "../../../../java/util/HashMap.js";

    
import { ServletException } from "../../../../javax/servlet/ServletException.js";

    
import { HttpServlet } from "../../../../javax/servlet/http/HttpServlet.js";

    
import { HttpServletRequest } from "../../../../javax/servlet/http/HttpServletRequest.js";

    
import { HttpServletResponse } from "../../../../javax/servlet/http/HttpServletResponse.js";

    
import { AuthenticationHelper } from "../../../../admin/taghelpers/AuthenticationHelper.js";

    
import { AuthenticationHelperFactory } from "../../../../admin/taghelpers/AuthenticationHelperFactory.js";

    
import { AuthenticationHelperUtil } from "../../../../admin/taghelpers/AuthenticationHelperUtil.js";

    
import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { FileUploadData } from "../../../../org/allbinary/logic/communication/http/file/upload/FileUploadData.js";

    
import { HttpFileUploadUtil } from "../../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js";

    
import { HttpRequestUtil } from "../../../../org/allbinary/logic/communication/http/request/HttpRequestUtil.js";

    
import { MultipartRequestParams } from "../../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFileOutputStream } from "../../../../org/allbinary/logic/io/AbFileOutputStream.js";

    
import { StreamUtil } from "../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BlisketServletUtil } from "../../../../org/allbinary/servlet/BlisketServletUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { FileItem } from "../../../../org/apache/commons/fileupload/FileItem.js";

    

export class UploadFileServlet extends HttpServlet {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    requestHashMap: HashMap<Any, Any>

    private fileName: string

                //@Throws(ServletException::class, IOException::class)
            
    processRequest(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response

    var isError: boolean = false;
        
        


    var inputStream: InputStream = 
                null
            ;
        
        


        try {
            BlisketServletUtil.getInstance()!.init(request)
this.requestHashMap= MultipartRequestParams(request).
                            toHashMap()

    var filePath: string = this.requestHashMap!.get(FileUploadData.getInstance()!.UPLOAD_TO_FILE_PATH) as String;
        
        


                        if(filePath == 
                                    null
                                )
                        
                                    {
                                    isError= true
response.sendError(HttpServletResponse.SC_NOT_FOUND)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var authenticationHelper: AuthenticationHelper = AuthenticationHelperFactory().
                            getInstance(hashMap, request) as AuthenticationHelper;
        
        


                        if(authenticationHelper!.isAuthenticated())
                        
                                    {
                                    
                        if(AuthenticationHelperUtil.getInstance()!.isAuthorized(authenticationHelper, filePath))
                        
                                    {
                                    this.saveFile(filePath)
response.setContentType("text/plain")
response.getOutputStream()!.write("OK!".encodeToByteArray())

                                    }
                                
                        else {
                            isError= true
response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "You are not Authorized")

                        }
                            

                                    }
                                
                        else {
                            isError= true
response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Please Login")

                        }
                            
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.EXCEPTION, this, "processRequest()", e)

                                    }
                                
isError= true
response.sendError(HttpServletResponse.SC_NOT_FOUND)
}

         finally {
            
                        if(!isError)
                        
                                    {
                                    StreamUtil.getInstance()!.close(response.getOutputStream())

                                    }
                                

                        if(!StreamUtil.getInstance()!.close(inputStream))
                        
                                    {
                                    
                                    }
                                

         }
        
}


                //@Throws(Error::class)
            
    saveFile(filePath: string){
var filePath = filePath

    var fileOutputStream: AbFileOutputStream = 
                null
            ;
        
        


        try {
            
    var fileItem: FileItem = this.requestHashMap!.get(FileUploadData.getInstance()!.FILE_DATA) as FileItem;
        
        


                        if(fileItem != 
                                    null
                                 && fileItem!.getSize() > 1)
                        
                                    {
                                    this.fileName= HttpRequestUtil.getInstance()!.generateFileName(fileItem!.getName())

                        if(filePath!.endsWith("/") || filePath!.endsWith("\\"))
                        
                                    {
                                    filePath= filePath +this.fileName

                                    }
                                

    var file: AbFile = new AbFile(URLGLOBALS.getWebappPath() +filePath);
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Uploaded File: ")
stringBuffer!.append(this.fileName)
stringBuffer!.append(" New File: ")
stringBuffer!.append(file.getPath())
logUtil!.put(stringBuffer!.toString(), this, "saveFile()")

                                    }
                                
HttpFileUploadUtil.log(fileItem)

    var byteArray: ByteArray = fileItem!.get()!;
        
        


                        if(file.isFile())
                        
                                    {
                                    file.delete()
file.createNewFile()

                                    }
                                
fileOutputStream= AbFileOutputStream(file)
fileOutputStream!.write(byteArray)

                                    }
                                

         finally {
            
                        if(fileOutputStream != 
                                    null
                                )
                        
                                    {
                                    fileOutputStream!.close()

                                    }
                                

         }
        
}


                //@Throws(ServletException::class, IOException::class)
            
    doGet(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response
processRequest(request, response)
}


                //@Throws(ServletException::class, IOException::class)
            
    doPost(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response
processRequest(request, response)
}


    public getServletInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Upload Cloud Files";
    
}


}
                
            

