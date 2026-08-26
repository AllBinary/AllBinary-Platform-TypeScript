
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { IOException } from '../../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { InputStream } from '../../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { HashMap } from '../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { ServletException } from '../../../../javax/servlet/ServletException.js';
      const ServletException = globalThis.javax.servlet.ServletException;

      
//not game specific package import { HttpServlet } from '../../../../javax/servlet/http/HttpServlet.js';
      const HttpServlet = globalThis.javax.servlet.http.HttpServlet;

      
//not game specific package import { HttpServletRequest } from '../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { HttpServletResponse } from '../../../../javax/servlet/http/HttpServletResponse.js';
      const HttpServletResponse = globalThis.javax.servlet.http.HttpServletResponse;

      
//not game specific package import { AuthenticationHelper } from '../../../../admin/taghelpers/AuthenticationHelper.js';
      const AuthenticationHelper = globalThis.admin.taghelpers.AuthenticationHelper;

      
//not game specific package import { AuthenticationHelperFactory } from '../../../../admin/taghelpers/AuthenticationHelperFactory.js';
      const AuthenticationHelperFactory = globalThis.admin.taghelpers.AuthenticationHelperFactory;

      
//not game specific package import { AuthenticationHelperUtil } from '../../../../admin/taghelpers/AuthenticationHelperUtil.js';
      const AuthenticationHelperUtil = globalThis.admin.taghelpers.AuthenticationHelperUtil;

      
//not game specific package import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { FileUploadData } from '../../../../org/allbinary/logic/communication/http/file/upload/FileUploadData.js';
      const FileUploadData = globalThis.org.allbinary.logic.communication.http.file.upload.FileUploadData;

      
//not game specific package import { HttpFileUploadUtil } from '../../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js';
      const HttpFileUploadUtil = globalThis.org.allbinary.logic.communication.http.file.upload.HttpFileUploadUtil;

      
//not game specific package import { HttpRequestUtil } from '../../../../org/allbinary/logic/communication/http/request/HttpRequestUtil.js';
      const HttpRequestUtil = globalThis.org.allbinary.logic.communication.http.request.HttpRequestUtil;

      
//not game specific package import { MultipartRequestParams } from '../../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js';
      const MultipartRequestParams = globalThis.org.allbinary.logic.communication.http.request.MultipartRequestParams;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbFileOutputStream } from '../../../../org/allbinary/logic/io/AbFileOutputStream.js';
      const AbFileOutputStream = globalThis.org.allbinary.logic.io.AbFileOutputStream;

      
//not game specific package import { StreamUtil } from '../../../../org/allbinary/logic/io/StreamUtil.js';
      const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { BlisketServletUtil } from '../../../../org/allbinary/servlet/BlisketServletUtil.js';
      const BlisketServletUtil = globalThis.org.allbinary.servlet.BlisketServletUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { FileItem } from '../../../../org/apache/commons/fileupload/FileItem.js';
      const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UploadFileServlet extends HttpServlet {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    requestHashMap: HashMap<any, any>;

    private fileName: string;

                //@Throws(ServletException.constructor, IOException.constructor)
            
    processRequest(request: HttpServletRequest, response: HttpServletResponse){

    var isError: boolean = false;;
    

    var inputStream: InputStream = 
                null
            ;;
    

        try {
            BlisketServletUtil.getInstance()!.init(request);
    
this.requestHashMap= new MultipartRequestParams(request).toHashMap();
    

    var filePath: string = this.requestHashMap!.get(FileUploadData.getInstance()!.UPLOAD_TO_FILE_PATH) as string;;
    

                        if(filePath == 
                                    null
                                )
                        
                                    {
                                    isError= true;
    
response.sendError(HttpServletResponse.SC_NOT_FOUND);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var authenticationHelper: AuthenticationHelper = new AuthenticationHelperFactory().getInstance(hashMap, request) as AuthenticationHelper;;
    

                        if(authenticationHelper!.isAuthenticated())
                        
                                    {
                                    
                        if(AuthenticationHelperUtil.getInstance()!.isAuthorized(authenticationHelper, filePath))
                        
                                    {
                                    this.saveFile(filePath);
    
response.setContentType("text/plain");
    
response.getOutputStream()!.write("OK!".getBytes());
    

                                    }
                                
                        else {
                            isError= true;
    
response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "You are not Authorized");
    

                        }
                            

                                    }
                                
                        else {
                            isError= true;
    
response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Please Login");
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "processRequest()", e);
    

                                    }
                                
isError= true;
    
response.sendError(HttpServletResponse.SC_NOT_FOUND);
    
}

         finally {
            
                        if(!isError)
                        
                                    {
                                    StreamUtil.getInstance()!.close(response.getOutputStream());
    

                                    }
                                

                        if(!StreamUtil.getInstance()!.close(inputStream))
                        
                                    {
                                    
                                    }
                                

         }
        
}


                //@Throws(Exception.constructor)
            
    saveFile(filePath: string){

    var fileOutputStream: AbFileOutputStream = 
                null
            ;;
    

        try {
            
    var fileItem: FileItem = this.requestHashMap!.get(FileUploadData.getInstance()!.FILE_DATA) as FileItem;;
    

                        if(fileItem != 
                                    null
                                 && fileItem!.getSize() > 1)
                        
                                    {
                                    this.fileName= HttpRequestUtil.getInstance()!.generateFileName(fileItem!.getName());
    

                        if(filePath!.endsWith("/") || filePath!.endsWith("\\"))
                        
                                    {
                                    filePath= filePath +this.fileName;
    

                                    }
                                

    var file: AbFile = AbFile.createAbFile(URLGLOBALS.getWebappPath() +filePath)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Uploaded File: ");
    
stringBuffer!.append(this.fileName);
    
stringBuffer!.append(" New File: ");
    
stringBuffer!.append(file.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "saveFile()");
    

                                    }
                                
HttpFileUploadUtil.log(fileItem);
    

    var byteArray: number[] = fileItem!.get()!;;
    

                        if(file.isFile())
                        
                                    {
                                    file.delete();
    
file.createNewFile();
    

                                    }
                                
fileOutputStream= AbFileOutputStream.createFromAbFile(file);
    
fileOutputStream!.write(byteArray);
    

                                    }
                                

         finally {
            
                        if(fileOutputStream != 
                                    null
                                )
                        
                                    {
                                    fileOutputStream!.close();
    

                                    }
                                

         }
        
}


                //@Throws(ServletException.constructor, IOException.constructor)
            
    doGet(request: HttpServletRequest, response: HttpServletResponse){
this.processRequest(request, response);
    
}


                //@Throws(ServletException.constructor, IOException.constructor)
            
    doPost(request: HttpServletRequest, response: HttpServletResponse){
this.processRequest(request, response);
    
}


    public getServletInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Upload Cloud Files";
    
}


}
                
            

