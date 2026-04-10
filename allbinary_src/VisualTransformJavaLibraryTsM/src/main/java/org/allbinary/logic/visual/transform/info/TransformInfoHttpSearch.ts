
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
        



import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { SearchRequest } from "../../../../../../org/allbinary/logic/control/search/SearchRequest.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class TransformInfoHttpSearch extends TransformInfoHttp {
        
public constructor (searchRequest: SearchRequest)                        

                            : super(searchRequest!.getPropertiesHashMap(), searchRequest!.getPageContext()){

            super();
            var searchRequest = searchRequest


                            //For kotlin this is before the body of the constructor.
                    

                        if(searchRequest!.getStoreFront()!.getName() != 
                                    null
                                )
                        
                                    {
                                    this.setStoreName(searchRequest!.getStoreFront()!.getName())

                                    }
                                
                        else {
                            this.setStoreName(StringUtil.getInstance()!.EMPTY_STRING)

                        }
                            

    var dataFileName: string = searchRequest!.getXslFile()!;
        
        

this.setTemplateFile(dataFileName)
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
                
            

