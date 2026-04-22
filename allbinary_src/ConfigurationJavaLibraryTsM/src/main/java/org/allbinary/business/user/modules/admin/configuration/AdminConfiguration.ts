
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { HttpServletRequest } from "../../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { ContextConfiguration } from "../../../../../../../org/allbinary/business/context/configuration/ContextConfiguration.js";

    
import { ContextConfigurationData } from "../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationData.js";

    
import { ContextConfigurationDomDocumentMapping } from "../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationDomDocumentMapping.js";

    
import { ContextConfigurationInterface } from "../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterface.js";

    
import { ContextConfigurationInterfaceFactory } from "../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterfaceFactory.js";

    
import { ContextConfigurationPathUtil } from "../../../../../../../org/allbinary/business/context/configuration/ContextConfigurationPathUtil.js";

    
import { RequestParams } from "../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CryptFileWriter } from "../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileWriter.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AdminConfigurationInterface } from "./AdminConfigurationInterface.js";

import { AdminConfigurationData } from "./AdminConfigurationData.js";

export class AdminConfiguration
            extends Object
         implements AdminConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private contextConfigurationInterface: ContextConfigurationInterface
public constructor (){

            super();
        this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    
this.contextConfigurationInterface= ContextConfigurationInterfaceFactory.getInstance()!.getInstance(AdminConfigurationData.CONTEXTNAME);
    
}

public constructor (request: HttpServletRequest){

            super();
        var request = request
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    
this.getFormData(new RequestParams(request).
                            toHashMap());
    
}

public constructor (storeHashMap: HashMap<any, any>){

            super();
        var storeHashMap = storeHashMap
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    
this.getFormData(storeHashMap);
    
}


                //@Throws(Error::class)
            
    getFormData(storeHashMap: HashMap<any, any>){
var storeHashMap = storeHashMap
this.logUtil!.putF(this.commonStrings!.START, this, "getFormData");
    
this.setContextConfigurationInterface(new ContextConfiguration(storeHashMap) as ContextConfigurationInterface);
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public write(){

    var contextConfigurationDomDocumentMapping: ContextConfigurationDomDocumentMapping = new ContextConfigurationDomDocumentMapping(this.getContextConfigurationInterface());
        
        
;
    

    var cryptFileWriter: CryptFileWriter = new CryptFileWriter(ContextConfigurationData.getInstance()!.UNCRYPTED_EXTENSION, ContextConfigurationData.getInstance()!.ENCRYPTED_EXTENSION);
        
        
;
    
cryptFileWriter!.write(ContextConfigurationPathUtil.getAbPath(AdminConfigurationData.CONTEXTNAME), contextConfigurationDomDocumentMapping!.toXmlDoc());
    
}


    public getContextConfigurationInterface(): ContextConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return contextConfigurationInterface;
    
}


    public setContextConfigurationInterface(contextConfigurationInterface: ContextConfigurationInterface){
var contextConfigurationInterface = contextConfigurationInterface
this.contextConfigurationInterface= contextConfigurationInterface;
    
}


}
                
            

