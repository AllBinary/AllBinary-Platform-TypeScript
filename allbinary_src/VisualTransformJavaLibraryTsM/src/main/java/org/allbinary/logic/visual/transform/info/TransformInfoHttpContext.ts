
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

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class TransformInfoHttpContext extends TransformInfoHttp {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
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
        
        

append("Database HashMap: ")
append(databaseHashMap!.toString())
append("\nProperties HashMap: ")
append(propertiesHashMap!.toString())
put(stringBuffer!.toString(), this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
this.setStoreName(StringUtil.getInstance()!.EMPTY_STRING)
}

public constructor (propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext)                        

                            : super(propertiesHashMap, pageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("Properties HashMap: " +propertiesHashMap!.toString(), this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
this.setStoreName(StringUtil.getInstance()!.EMPTY_STRING)
}


                @Throws(Exception::class)
            
    getPath(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getMainPath())
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.INSTALLPATH)
append(this.getStoreName())
append(AbPathData.getInstance()!.SEPARATOR)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


                @Throws(Exception::class)
            
    public getTemplateFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(this.getPath(), this.getTemplateFile());
    
}


                @Throws(Exception::class)
            
    public getObjectConfigFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(this.getPath(), this.getObjectConfigFile());
    
}


                @Throws(Exception::class)
            
    public getDataFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(this.getPath(), this.getDataFile());
    
}


}
                
            

