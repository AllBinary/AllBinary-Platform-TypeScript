
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

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CloudStreamUtil } from "../../../../org/allbinary/logic/io/CloudStreamUtil.js";

    
import { StreamUtil } from "../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BlisketServletUtil } from "../../../../org/allbinary/servlet/BlisketServletUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class DownloadFileServlet extends HttpServlet {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly DOWNLOAD: string = "download";
        
        

    private readonly DEFAULT_BUFFER_SIZE: number = 16384;
        
        

                @Throws(ServletException::class, IOException::class)
            
    processRequest(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response

    var inputStream: InputStream = 
                null
            ;
        
        


        try {
            init(request)

    var requestPath: string = request.getRequestURI()!;
        
        


    
                        if(requestPath == 
                                    null
                                )
                        
                                    {
                                    sendError(HttpServletResponse.SC_NOT_FOUND)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var beginIndex: number = requestPath!.indexOf(DOWNLOAD)!;
        
        


    var filePath: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        


    
                        if(beginIndex >= 0)
                        
                                    {
                                    filePath= requestPath!.substring(beginIndex +DOWNLOAD.length)

                                    }
                                
                        else {
                            sendError(HttpServletResponse.SC_NOT_FOUND)

                        }
                            

    var file: AbFile = new AbFile(URLGLOBALS.getWebappPath() +filePath);
        
        


    
                        if(!file.exists())
                        
                                    {
                                    sendError(HttpServletResponse.SC_NOT_FOUND)



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
                                    inputStream= CloudStreamUtil.getInstance()!.getFile(file)

    var contentType: string = getServletContext()!.getMimeType(file.getName())!;
        
        


    
                        if(contentType == 
                                    null
                                )
                        
                                    {
                                    contentType= "application/octet-stream"

                                    }
                                
reset()
setBufferSize(DEFAULT_BUFFER_SIZE)
setContentType(contentType)
setHeader("Content-Length", file.length.concatToString()

                                    )

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("attachment; filename=\"")
append(file.getName())
append("\"")
setHeader("Content-Disposition", stringBuffer!.toString())
get(inputStream, response.getOutputStream(), ByteArray(16348))

                                    }
                                
                        else {
                            sendError(HttpServletResponse.SC_UNAUTHORIZED, "You are not Authorized")

                        }
                            

                                    }
                                
                        else {
                            sendError(HttpServletResponse.SC_UNAUTHORIZED, "Please Login")

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put(this.commonStrings!.EXCEPTION, this, "processRequest()", e)

                                    }
                                
sendError(HttpServletResponse.SC_NOT_FOUND)
}

         finally {
            close(response.getOutputStream())

    
                        if(!StreamUtil.getInstance()!.close(inputStream))
                        
                                    {
                                    
                                    }
                                

         }
        
}


                @Throws(ServletException::class, IOException::class)
            
    doGet(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response
processRequest(request, response)
}


                @Throws(ServletException::class, IOException::class)
            
    doPost(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response
processRequest(request, response)
}


    public getServletInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Serves Up Cloud Files";
    
}


}
                
            

