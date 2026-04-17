
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

import { TransformInfoData } from "./TransformInfoData.js";

export class TransformInfoHttp extends TransformInfo implements TransformInfoHttpInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abContext: AbContext
public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext, crud: boolean)                        

                            : super(){

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

public constructor (request: HttpServletRequest, propertiesHashMap: HashMap<any, any>, pageContext: PageContext)                        

                            : super(){

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
                                
this.set(new RequestParams(request as HttpServletRequest).
                            toHashMap());
    
this.override(propertiesHashMap);
    
}

public constructor (databaseHashMap: HashMap<any, any>, propertiesHashMap: HashMap<any, any>, pageContext: PageContext)                        

                            : super(){

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

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext)                        

                            : super(){

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

public constructor (parentViewOfThisTransformInfoInterface: TransformInfoHttp)                        

                            : super(){

            super();
            var parentViewOfThisTransformInfoInterface = parentViewOfThisTransformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(parentViewOfThisTransformInfoInterface!.getPropertiesHashMap(), parentViewOfThisTransformInfoInterface!.getPageContext());
    
}


                //@Throws(Error::class)
            
    set(hashMap: HashMap<any, any>){
var hashMap = hashMap

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +hashMap!.toString(), this, "set()");
    

                                    }
                                

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
        
        
;
    
this.setName(hashMap!.get(transformInfoData!.NAME);

                         as String);
    
this.setStoreName(hashMap!.get(StoreFrontData.getInstance()!.NAME);

                         as String);
    
this.setObjectFile(hashMap!.get(transformInfoData!.OBJECTFILENAME);

                         as String);
    
this.setObject(hashMap!.get(transformInfoData!.OBJECT);

                         as String);
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

    var objectConfigString: string = hashMap!.get(transformInfoData!.OBJECTCONFIG);

                         as String;
        
        
;
    

                        if(stringValidationUtil!.isValidRequired(objectConfigString, 10, AbSqlData.MAXBLOB))
                        
                                    {
                                    this.setObjectConfig(objectConfigString);
    

                                    }
                                
                        else {
                            this.setObjectConfig(new TransformInfoObjectConfig(this).
                            toString());
    

                        }
                            

                        if(!stringValidationUtil!.isEmpty(hashMap!.get(transformInfoData!.OBJECTCONFIGFILENAME);

                         as String);

                        )
                        
                                    {
                                    this.setObjectConfigFile(hashMap!.get(transformInfoData!.OBJECTCONFIGFILENAME);

                         as String);
    

                                    }
                                
this.setTemplateFile(hashMap!.get(transformInfoData!.TEMPLATEFILENAME);

                         as String);
    
this.setTemplate(hashMap!.get(transformInfoData!.TEMPLATE);

                         as String);
    
this.setDataFile(hashMap!.get(transformInfoData!.DATAFILENAME);

                         as String);
    
this.setData(hashMap!.get(transformInfoData!.DATA);

                         as String);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.log(), this, "set()");
    

                                    }
                                
}


    public getWeblisketSession(): WeblisketSessionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abContext!.getWeblisketSession();

                        ;
    
}


    public getPageContext(): PageContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abContext!.getPageContext();

                        ;
    
}


    public getPropertiesHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abContext!.getPropertiesHashMap();

                        ;
    
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
                
            

