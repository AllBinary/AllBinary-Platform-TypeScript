
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
        



import { ByteArrayOutputStream } from "../../../java/io/ByteArrayOutputStream.js";

    
import { IOException } from "../../../java/io/IOException.js";

    
import { InputStream } from "../../../java/io/InputStream.js";

    
import { ServletException } from "../../../javax/servlet/ServletException.js";

    
import { HttpServlet } from "../../../javax/servlet/http/HttpServlet.js";

    
import { HttpServletRequest } from "../../../javax/servlet/http/HttpServletRequest.js";

    
import { HttpServletResponse } from "../../../javax/servlet/http/HttpServletResponse.js";

    
import { URLGLOBALS } from "../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CloudStreamUtil } from "../../../org/allbinary/logic/io/CloudStreamUtil.js";

    
import { StreamUtil } from "../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../org/allbinary/logic/io/file/AbFile.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class CloudImageServlet extends HttpServlet {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

                //@Throws(ServletException::class, IOException::class)
            
    processRequest(request: HttpServletRequest, response: HttpServletResponse){
    //var request = request
    //var response = response

    var inputStream: InputStream = 
                null
            ;
        
        
;
    

        try {
            BlisketServletUtil.getInstance()!.init(request);
    

    var requestURI: string = request.getRequestURI()!;
        
        
;
    

    var file: AbFile = new AbFile(URLGLOBALS.getWebappPath() +requestURI);
        
        
;
    
inputStream= CloudStreamUtil.getInstance()!.getFile(file);
    

    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream(8000);
        
        
;
    

    var byteArray: number[] = StreamUtil.getInstance()!.getByteArray(inputStream, outputStream, new Array(16384))!;
        
        
;
    
response.setContentType("image/jpeg;charset=utf-8");
    
response.getOutputStream()!.write(byteArray);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.EXCEPTION, this, "processRequest()", e);
    

                                    }
                                
}

         finally {
            StreamUtil.getInstance()!.close(response.getOutputStream());
    

                        if(!StreamUtil.getInstance()!.close(inputStream);

                        )
                        
                                    {
                                    response.sendError(HttpServletResponse.SC_NOT_FOUND);
    

                                    }
                                

         }
        
}


                //@Throws(ServletException::class, IOException::class)
            
    doGet(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response
processRequest(request, response);
    
}


                //@Throws(ServletException::class, IOException::class)
            
    doPost(request: HttpServletRequest, response: HttpServletResponse){
var request = request
var response = response
processRequest(request, response);
    
}


    public getServletInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Serves Up Cloud Image";
    
}


}
                
            

