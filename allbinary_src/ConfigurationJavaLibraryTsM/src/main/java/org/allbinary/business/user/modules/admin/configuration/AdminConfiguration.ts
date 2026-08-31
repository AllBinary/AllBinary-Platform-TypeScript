
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
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { ContextConfiguration } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfiguration.js';
      //not GWT import const ContextConfiguration = globalThis.org.allbinary.business.context.configuration.ContextConfiguration;

      
import { ContextConfigurationData } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationData.js';
      //not GWT import const ContextConfigurationData = globalThis.org.allbinary.business.context.configuration.ContextConfigurationData;

      
import { ContextConfigurationDomDocumentMapping } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationDomDocumentMapping.js';
      //not GWT import const ContextConfigurationDomDocumentMapping = globalThis.org.allbinary.business.context.configuration.ContextConfigurationDomDocumentMapping;

      
import { ContextConfigurationInterface } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterface.js';
      //not GWT import const ContextConfigurationInterface = globalThis.org.allbinary.business.context.configuration.ContextConfigurationInterface;

      
import { ContextConfigurationInterfaceFactory } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterfaceFactory.js';
      //not GWT import const ContextConfigurationInterfaceFactory = globalThis.org.allbinary.business.context.configuration.ContextConfigurationInterfaceFactory;

      
import { ContextConfigurationPathUtil } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationPathUtil.js';
      //not GWT import const ContextConfigurationPathUtil = globalThis.org.allbinary.business.context.configuration.ContextConfigurationPathUtil;

      
import { RequestParams } from '../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      //not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { CryptFileWriter } from '../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileWriter.js';
      //not GWT import const CryptFileWriter = globalThis.org.allbinary.logic.control.crypt.file.CryptFileWriter;

      
//not plain js import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdminConfigurationInterface } from './AdminConfigurationInterface.js';
//not GWT import const  = globalThis.org.allbinary.business.user.modules.admin.configuration.AdminConfigurationInterface;

                import { AdminConfigurationData } from './AdminConfigurationData.js';
//not GWT import const  = globalThis.org.allbinary.business.user.modules.admin.configuration.AdminConfigurationData;

                
export class AdminConfiguration
            extends Object
         implements AdminConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private contextConfigurationInterface: ContextConfigurationInterface;

public constructor (){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.contextConfigurationInterface= ContextConfigurationInterfaceFactory.getInstance()!.getInstance(AdminConfigurationData.CONTEXTNAME);
    
}


public constructor (request: HttpServletRequest){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.getFormData(new RequestParams(request).toHashMap());
    
}


public constructor (storeHashMap: HashMap<any, any>){

            super();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.getFormData(storeHashMap);
    
}


                //@Throws(Exception.constructor)
            
    getFormData(storeHashMap: HashMap<any, any>){
this.logUtil!.putF(this.commonStrings!.START, this, "getFormData");
    
this.setContextConfigurationInterface(new ContextConfiguration(storeHashMap) as ContextConfigurationInterface);
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public write(){

    var contextConfigurationDomDocumentMapping: ContextConfigurationDomDocumentMapping = new ContextConfigurationDomDocumentMapping(this.getContextConfigurationInterface());;
    

    var cryptFileWriter: CryptFileWriter = new CryptFileWriter(ContextConfigurationData.getInstance()!.UNCRYPTED_EXTENSION, ContextConfigurationData.getInstance()!.ENCRYPTED_EXTENSION);;
    
cryptFileWriter!.write(ContextConfigurationPathUtil.getAbPath(AdminConfigurationData.CONTEXTNAME), contextConfigurationDomDocumentMapping!.toXmlDoc());
    
}


    public getContextConfigurationInterface(): ContextConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.contextConfigurationInterface;
    
}


    public setContextConfigurationInterface(contextConfigurationInterface: ContextConfigurationInterface){
this.contextConfigurationInterface= contextConfigurationInterface;
    
}


}



