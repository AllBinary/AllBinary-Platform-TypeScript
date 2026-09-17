
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { ByteArrayOutputStream } from '../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream
import { IOException } from '../../../java/io/IOException.js';
//not GWT import const IOException
import { InputStream } from '../../../java/io/InputStream.js';
//not GWT import const InputStream
import { ServletException } from '../../../javax/servlet/ServletException.js';
//not GWT import const ServletException
import { HttpServlet } from '../../../javax/servlet/http/HttpServlet.js';
//not GWT import const HttpServlet
import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest
import { HttpServletResponse } from '../../../javax/servlet/http/HttpServletResponse.js';
//not GWT import const HttpServletResponse
import { URLGLOBALS } from '../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { CloudStreamUtil } from '../../../org/allbinary/logic/io/CloudStreamUtil.js';
//not GWT import const CloudStreamUtil
import { StreamUtil } from '../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil
import { AbFile } from '../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BlisketServletUtil } from './BlisketServletUtil.js';
//not GWT import - same folder const BlisketServletUtil
export class ImageServlet extends HttpServlet {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

                //@Throws(ServletException.constructor, IOException.constructor)
            
    processRequest(request: HttpServletRequest, response: HttpServletResponse){

    var inputStream: InputStream = 
                null
            ;;
    

        try {
            BlisketServletUtil.getInstance()!.init(request);
    

    var requestURI: string = request.getRequestURI()!;;
    

    var file: AbFile = AbFile.createAbFile(URLGLOBALS.getWebappPath() +requestURI)!;;
    
inputStream= CloudStreamUtil.getInstance()!.getFileLocal(file);
    

    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream(8000);;
    

    var byteArray: number[] = StreamUtil.getInstance()!.getByteArray(inputStream, outputStream, new Array(16384))!;;
    
response.setContentType("image/jpeg;charset=utf-8");
    
response.getOutputStream()!.write(byteArray);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "processRequest()", e);
    

                                    }
                                
}

         finally {
            StreamUtil.getInstance()!.close(response.getOutputStream());
    

                        if(!StreamUtil.getInstance()!.close(inputStream))
                        
                                    {
                                    response.sendError(HttpServletResponse.SC_NOT_FOUND);
    

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
                        return "Serves Up Image";
    
}


}



