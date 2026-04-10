
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { HttpServletRequest } from "../../../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { RootStoreCategoryProperties } from "../../../../../../../../org/allbinary/business/category/properties/root/store/RootStoreCategoryProperties.js";

    
import { StoreFrontFactory } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { AbPath } from "../../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoHttpStoreInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpStoreInterface.js";

    
import { TransformInfoInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    

export class RootStoreThemeCategoryProperties extends RootStoreCategoryProperties {
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (transformInfoInterface: TransformInfoInterface, abPath: AbPath)                        

                            : super(transformInfoInterface, abPath){

            super();
            var transformInfoInterface = transformInfoInterface
var abPath = abPath


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (transformInfoInterface: TransformInfoInterface, node: Node)                        

                            : super(transformInfoInterface, node){

            super();
            var transformInfoInterface = transformInfoInterface
var node = node


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (transformInfoInterface: TransformInfoInterface, categoryPropertiesHashMap: HashMap<Any, Any>)                        

                            : super(transformInfoInterface, categoryPropertiesHashMap){

            super();
            var transformInfoInterface = transformInfoInterface
var categoryPropertiesHashMap = categoryPropertiesHashMap


                            //For kotlin this is before the body of the constructor.
                    
}


                @Throws(Exception::class)
            
    public initPath(){

    var transformInfoHttpStoreInterface: TransformInfoHttpStoreInterface = this.transformInfoInterface as TransformInfoHttpStoreInterface;
        
        


    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(transformInfoHttpStoreInterface!.getStoreName())!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(AbPathData.getInstance()!.SEPARATOR)
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
append(storeFrontInterface!.getName())
append(AbPathData.getInstance()!.SEPARATOR)
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.THEMEPATH)

    var abPath: AbPath = new AbPath(stringBuffer!.toString());
        
        


    var httpServletRequest: HttpServletRequest = transformInfoHttpStoreInterface!.getPageContext()!.getRequest() as HttpServletRequest;
        
        

this.webAppAbPath= AbPath(httpServletRequest!.getContextPath() +abPath!.toString())
this.setRootFilePath(AbPath(URLGLOBALS.getMainPath() +abPath!.toString()))
}


}
                
            

