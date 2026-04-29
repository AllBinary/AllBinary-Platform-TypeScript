
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { HttpServletRequest } from "../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { AbContext } from "../../../../../../org/allbinary/business/context/AbContext.js";

    
import { StoreFrontData } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { RequestParams } from "../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { WeblisketSessionInterface } from "../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlData } from "../../../../../../org/allbinary/logic/communication/sql/AbSqlData.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoObjectConfig } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfig.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformInfo } from "./TransformInfo.js";

import { TransformInfoHttpInterface } from "./TransformInfoHttpInterface.js";

import { TransformInfoData } from "./TransformInfoData.js";

export class TransformInfoHttp extends TransformInfo implements TransformInfoHttpInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abContext: AbContext
public constructor (propertiesHashMap: HashMap, pageContext: PageContext, crud: boolean){
            super();
                    var propertiesHashMap = propertiesHashMap
var pageContext = pageContext
var crud = crud


                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(propertiesHashMap, pageContext);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, "Constructor(HashMap, PageContext, boolean)");
    

                                    }
                                
this.override(propertiesHashMap);
    
}

public constructor (request: HttpServletRequest, propertiesHashMap: HashMap, pageContext: PageContext){
            super();
                    var request = request
var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(propertiesHashMap, pageContext);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, "Constructor(HttpServletRequest, HashMap, PageContext)");
    

                                    }
                                
this.set(new RequestParams( as HttpServletRequestrequest).
                            toHashMap());
    
this.override(propertiesHashMap);
    
}

public constructor (databaseHashMap: HashMap, propertiesHashMap: HashMap, pageContext: PageContext){
            super();
                    var databaseHashMap = databaseHashMap
var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(propertiesHashMap, pageContext);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, "Constructor(HashMap, HashMap, PageContext)");
    

                                    }
                                
this.set(databaseHashMap);
    
}

public constructor (propertiesHashMap: HashMap, pageContext: PageContext){
            super();
                    var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(propertiesHashMap, pageContext);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, "Constructor(HashMap, PageContext)");
    

                                    }
                                
this.set(propertiesHashMap);
    
}

public constructor (parentViewOfThisTransformInfoInterface: TransformInfoHttp){
            super();
                    var parentViewOfThisTransformInfoInterface = parentViewOfThisTransformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(parentViewOfThisTransformInfoInterface!.getPropertiesHashMap(), parentViewOfThisTransformInfoInterface!.getPageContext());
    
}


                //@Throws(Error::class)
            
    set(hashMap: HashMap){
var hashMap = hashMap

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +hashMap!.toString(), this, "set()");
    

                                    }
                                

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
;
    
this.setName( as StringhashMap!.get(transformInfoData!.NAME));
    
this.setStoreName( as StringhashMap!.get(StoreFrontData.getInstance()!.NAME));
    
this.setObjectFile( as StringhashMap!.get(transformInfoData!.OBJECTFILENAME));
    
this.setObject( as StringhashMap!.get(transformInfoData!.OBJECT));
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
;
    

    var objectConfigString: string =  as StringhashMap!.get(transformInfoData!.OBJECTCONFIG);;
;
    

                        if(stringValidationUtil!.isValidRequired(objectConfigString, 10, AbSqlData.MAXBLOB))
                        
                                    {
                                    this.setObjectConfig(objectConfigString);
    

                                    }
                                
                        else {
                            this.setObjectConfig(new TransformInfoObjectConfig(this).
                            toString());
    

                        }
                            

                        if(!stringValidationUtil!.isEmpty( as StringhashMap!.get(transformInfoData!.OBJECTCONFIGFILENAME));)
                        
                                    {
                                    this.setObjectConfigFile( as StringhashMap!.get(transformInfoData!.OBJECTCONFIGFILENAME));
    

                                    }
                                
this.setTemplateFile( as StringhashMap!.get(transformInfoData!.TEMPLATEFILENAME));
    
this.setTemplate( as StringhashMap!.get(transformInfoData!.TEMPLATE));
    
this.setDataFile( as StringhashMap!.get(transformInfoData!.DATAFILENAME));
    
this.setData( as StringhashMap!.get(transformInfoData!.DATA));
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.log(), this, "set()");
    

                                    }
                                
}


    public getWeblisketSession(): WeblisketSessionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abContext!.getWeblisketSession();;
    
}


    public getPageContext(): PageContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abContext!.getPageContext();;
    
}


    public getPropertiesHashMap(): HashMap{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abContext!.getPropertiesHashMap();;
    
}


                //@Throws(Error::class)
            
    public getTemplateFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH, this.getTemplateFile());
    
}


                //@Throws(Error::class)
            
    public getObjectConfigFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH, this.getObjectConfigFile());
    
}


                //@Throws(Error::class)
            
    public getDataFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH, this.getDataFile());
    
}


}
                
            

