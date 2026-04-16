
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

    
import { CategoryPropertiesFactoryInterface } from "../../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js";

    
import { CategoryPropertiesInterface } from "../../../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { TransformInfoInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class RootStoreCategoryPropertiesFactory
            extends Object
        
                , CategoryPropertiesFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private categoryPropertiesInterface: CategoryPropertiesInterface
public constructor (transformInfoInterface: TransformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface
this.categoryPropertiesInterface= new RootStoreCategoryProperties(transformInfoInterface) as CategoryPropertiesInterface;
    
}

public constructor (transformInfoInterface: TransformInfoInterface, abPath: AbPath){

            super();
            var transformInfoInterface = transformInfoInterface
var abPath = abPath
this.categoryPropertiesInterface= new RootStoreCategoryProperties(transformInfoInterface, abPath) as CategoryPropertiesInterface;
    
}

public constructor (transformInfoInterface: TransformInfoInterface, node: Node){

            super();
            var transformInfoInterface = transformInfoInterface
var node = node
this.categoryPropertiesInterface= new RootStoreCategoryProperties(transformInfoInterface, node) as CategoryPropertiesInterface;
    
}

public constructor (transformInfoInterface: TransformInfoInterface, categoryPropertiesHashMap: HashMap<any, any>){

            super();
            var transformInfoInterface = transformInfoInterface
var categoryPropertiesHashMap = categoryPropertiesHashMap
this.categoryPropertiesInterface= new RootStoreCategoryProperties(transformInfoInterface, categoryPropertiesHashMap) as CategoryPropertiesInterface;
    
}


    public getInstance(): CategoryPropertiesInterface{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPropertiesInterface as CategoryPropertiesInterface;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

