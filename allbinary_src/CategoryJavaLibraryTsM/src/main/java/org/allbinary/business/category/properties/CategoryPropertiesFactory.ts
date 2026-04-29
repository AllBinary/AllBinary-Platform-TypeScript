
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CategoryPropertiesFactoryInterface } from "./CategoryPropertiesFactoryInterface.js";

import { CategoryPropertiesInterface } from "./CategoryPropertiesInterface.js";

export class CategoryPropertiesFactory
            extends Object
         implements CategoryPropertiesFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private categoryPropertiesInterface: CategoryPropertiesInterface
public constructor (name: string){

            super();
        var name = name
this.categoryPropertiesInterface=  as CategoryPropertiesInterfacenew CategoryProperties(name);
    
}

public constructor (node: Node){

            super();
        var node = node
this.categoryPropertiesInterface=  as CategoryPropertiesInterfacenew CategoryProperties(node);
    
}

public constructor (categoryPropertiesHashMap: HashMap){

            super();
        var categoryPropertiesHashMap = categoryPropertiesHashMap
this.categoryPropertiesInterface=  as CategoryPropertiesInterfacenew CategoryProperties(categoryPropertiesHashMap);
    
}


    public getInstance(): CategoryPropertiesInterface{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as CategoryPropertiesInterfacethis.categoryPropertiesInterface;
    

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
                
            

