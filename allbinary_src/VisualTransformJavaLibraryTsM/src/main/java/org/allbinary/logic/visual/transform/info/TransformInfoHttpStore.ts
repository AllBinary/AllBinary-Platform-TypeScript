
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

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontData } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontInterface } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class TransformInfoHttpStore extends TransformInfoHttp
                , TransformInfoHttpStoreInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext)                        

                            : super(propertiesHashMap, pageContext, true){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Properties HashMap: " +propertiesHashMap!.toString(), this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
}

public constructor (databaseHashMap: HashMap<Any, Any>, propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext)                        

                            : super(databaseHashMap, propertiesHashMap, pageContext){

            super();
            var databaseHashMap = databaseHashMap
var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Database HashMap: ")
stringBuffer!.append(databaseHashMap!.toString())
stringBuffer!.append("\nProperties HashMap: ")
stringBuffer!.append(propertiesHashMap!.toString())
logUtil!.put(stringBuffer!.toString(), this, "Constructor(HashMap, HashMap , PageContext)")

                                    }
                                
this.setStoreName(databaseHashMap!.get(StoreFrontData.getInstance()!.NAME) as String)
}

public constructor (storeFrontInterface: StoreFrontInterface, propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext)                        

                            : super(propertiesHashMap, pageContext){

            super();
            var storeFrontInterface = storeFrontInterface
var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Properties HashMap: " +propertiesHashMap!.toString(), this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
this.setStoreName(storeFrontInterface!.getName())
}


                //@Throws(Error::class)
            
    getPath(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(URLGLOBALS.getMainPath())
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
stringBuffer!.append(this.getStoreName())
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


                //@Throws(Error::class)
            
    public getTemplateFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(this.getPath(), this.getTemplateFile());
    
}


                //@Throws(Error::class)
            
    public getObjectConfigFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(this.getPath(), this.getObjectConfigFile());
    
}


                //@Throws(Error::class)
            
    public getDataFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(this.getPath(), this.getDataFile());
    
}


}
                
            

