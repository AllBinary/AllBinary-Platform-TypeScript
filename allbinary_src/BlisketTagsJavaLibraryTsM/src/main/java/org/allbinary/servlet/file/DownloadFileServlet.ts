
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

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CloudStreamUtil } from '../../../../org/allbinary/logic/io/CloudStreamUtil.js';
      const CloudStreamUtil = globalThis.org.allbinary.logic.io.CloudStreamUtil;

      
//not game specific package import { StreamUtil } from '../../../../org/allbinary/logic/io/StreamUtil.js';
      const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { BlisketServletUtil } from '../../../../org/allbinary/servlet/BlisketServletUtil.js';
      const BlisketServletUtil = globalThis.org.allbinary.servlet.BlisketServletUtil;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DownloadFileServlet extends HttpServlet {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly DOWNLOAD: string = "download";

    private readonly DEFAULT_BUFFER_SIZE: number = 16384;

                //@Throws(ServletException.constructor, IOException.constructor)
            
    processRequest(request: HttpServletRequest, response: HttpServletResponse){

    var inputStream: InputStream = 
                null
            ;;
    

        try {
            BlisketServletUtil.getInstance()!.init(request);
    

    var requestPath: string = request.getRequestURI()!;;
    

                        if(requestPath == 
                                    null
                                )
                        
                                    {
                                    response.sendError(HttpServletResponse.SC_NOT_FOUND);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var beginIndex: number = requestPath!.indexOf(this.DOWNLOAD)!;;
    

    var filePath: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(beginIndex >= 0)
                        
                                    {
                                    filePath= requestPath!.substring(beginIndex +this.DOWNLOAD.length);
    

                                    }
                                
                        else {
                            response.sendError(HttpServletResponse.SC_NOT_FOUND);
    

                        }
                            

    var file: AbFile = AbFile.createAbFile(URLGLOBALS.getWebappPath() +filePath)!;;
    

                        if(!file.exists())
                        
                                    {
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
                                    inputStream= CloudStreamUtil.getInstance()!.getFile(file);
    

    var contentType: string = getServletContext()!.getMimeType(file.getName())!;;
    

                        if(contentType == 
                                    null
                                )
                        
                                    {
                                    contentType= "application/octet-stream";
    

                                    }
                                
response.reset();
    
response.setBufferSize(this.DEFAULT_BUFFER_SIZE);
    
response.setContentType(contentType);
    
response.setHeader("Content-Length", length.slice(, ).join(''));
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("attachment; filename=\"");
    
stringBuffer!.append(file.getName());
    
stringBuffer!.append(CommonSeps.getInstance()!.QUOTE);
    
response.setHeader("Content-Disposition", stringBuffer!.toString());
    
StreamUtil.getInstance()!.get(inputStream, response.getOutputStream(), new Array(16348));
    

                                    }
                                
                        else {
                            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "You are not Authorized");
    

                        }
                            

                                    }
                                
                        else {
                            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Please Login");
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "processRequest()", e);
    

                                    }
                                
response.sendError(HttpServletResponse.SC_NOT_FOUND);
    
}

         finally {
            StreamUtil.getInstance()!.close(response.getOutputStream());
    

                        if(!StreamUtil.getInstance()!.close(inputStream))
                        
                                    {
                                    
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
                        return "Serves Up Cloud Files";
    
}


}



