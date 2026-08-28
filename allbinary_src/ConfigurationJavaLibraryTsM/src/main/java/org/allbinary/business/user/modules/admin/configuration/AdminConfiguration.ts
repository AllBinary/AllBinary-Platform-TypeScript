
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
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { ContextConfiguration } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfiguration.js';
      const ContextConfiguration = globalThis.org.allbinary.business.context.configuration.ContextConfiguration;

      
//not game specific package import { ContextConfigurationData } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationData.js';
      const ContextConfigurationData = globalThis.org.allbinary.business.context.configuration.ContextConfigurationData;

      
//not game specific package import { ContextConfigurationDomDocumentMapping } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationDomDocumentMapping.js';
      const ContextConfigurationDomDocumentMapping = globalThis.org.allbinary.business.context.configuration.ContextConfigurationDomDocumentMapping;

      
//not game specific package import { ContextConfigurationInterface } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterface.js';
      const ContextConfigurationInterface = globalThis.org.allbinary.business.context.configuration.ContextConfigurationInterface;

      
//not game specific package import { ContextConfigurationInterfaceFactory } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterfaceFactory.js';
      const ContextConfigurationInterfaceFactory = globalThis.org.allbinary.business.context.configuration.ContextConfigurationInterfaceFactory;

      
//not game specific package import { ContextConfigurationPathUtil } from '../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationPathUtil.js';
      const ContextConfigurationPathUtil = globalThis.org.allbinary.business.context.configuration.ContextConfigurationPathUtil;

      
//not game specific package import { RequestParams } from '../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CryptFileWriter } from '../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileWriter.js';
      const CryptFileWriter = globalThis.org.allbinary.logic.control.crypt.file.CryptFileWriter;

      
//not game specific package import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdminConfigurationInterface } from './AdminConfigurationInterface.js';
import { AdminConfigurationData } from './AdminConfigurationData.js';

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



