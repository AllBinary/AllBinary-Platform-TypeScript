
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
        
//not game specific package import { ByteArrayOutputStream } from '../../../java/io/ByteArrayOutputStream.js';
      const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
//not game specific package import { IOException } from '../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { InputStream } from '../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { ServletException } from '../../../javax/servlet/ServletException.js';
      const ServletException = globalThis.javax.servlet.ServletException;

      
//not game specific package import { HttpServlet } from '../../../javax/servlet/http/HttpServlet.js';
      const HttpServlet = globalThis.javax.servlet.http.HttpServlet;

      
//not game specific package import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { HttpServletResponse } from '../../../javax/servlet/http/HttpServletResponse.js';
      const HttpServletResponse = globalThis.javax.servlet.http.HttpServletResponse;

      
//not game specific package import { URLGLOBALS } from '../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CloudStreamUtil } from '../../../org/allbinary/logic/io/CloudStreamUtil.js';
      const CloudStreamUtil = globalThis.org.allbinary.logic.io.CloudStreamUtil;

      
//not game specific package import { StreamUtil } from '../../../org/allbinary/logic/io/StreamUtil.js';
      const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
//not game specific package import { AbFile } from '../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BlisketServletUtil } from './BlisketServletUtil.js';

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
                
            

