
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
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { CategoryPropertiesFactoryInterface } from '../../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js';
//not GWT import const CategoryPropertiesFactoryInterface = globalThis.org.allbinary.business.category.properties.CategoryPropertiesFactoryInterface;

      
import { CategoryPropertiesInterface } from '../../../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
//not GWT import const CategoryPropertiesInterface = globalThis.org.allbinary.business.category.properties.CategoryPropertiesInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbPath } from '../../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RootStoreCategoryProperties } from './RootStoreCategoryProperties.js';
//not GWT import - same folder const RootStoreCategoryProperties = globalThis.org.allbinary.business.category.properties.root.store.RootStoreCategoryProperties;

                
export class RootStoreCategoryPropertiesFactory
            extends Object
         implements CategoryPropertiesFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private categoryPropertiesInterface: CategoryPropertiesInterface;

public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        this.categoryPropertiesInterface= new RootStoreCategoryProperties(transformInfoInterface) as CategoryPropertiesInterface;
    
}


public constructor (transformInfoInterface: TransformInfoInterface, abPath: AbPath){

            super();
        this.categoryPropertiesInterface= new RootStoreCategoryProperties(transformInfoInterface, abPath) as CategoryPropertiesInterface;
    
}


public constructor (transformInfoInterface: TransformInfoInterface, node: Node){

            super();
        this.categoryPropertiesInterface= new RootStoreCategoryProperties(transformInfoInterface, node) as CategoryPropertiesInterface;
    
}


public constructor (transformInfoInterface: TransformInfoInterface, categoryPropertiesHashMap: HashMap<any, any>){

            super();
        this.categoryPropertiesInterface= new RootStoreCategoryProperties(transformInfoInterface, categoryPropertiesHashMap) as CategoryPropertiesInterface;
    
}


    public getInstance(): CategoryPropertiesInterface{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPropertiesInterface as CategoryPropertiesInterface;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}



