
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
        



            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { HttpServletRequest } from '../../../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { RootStoreCategoryProperties } from '../../../../../../../../org/allbinary/business/category/properties/root/store/RootStoreCategoryProperties.js';
      const RootStoreCategoryProperties = globalThis.org.allbinary.business.category.properties.root.store.RootStoreCategoryProperties;

      
//not game specific package import { StoreFrontFactory } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
//not game specific package import { URLGLOBALS } from '../../../../../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { AbPath } from '../../../../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { AbPathData } from '../../../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { TransformInfoHttpStoreInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpStoreInterface.js';
      const TransformInfoHttpStoreInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpStoreInterface;

      
//not game specific package import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RootStoreThemeCategoryProperties extends RootStoreCategoryProperties {
        

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (transformInfoInterface: TransformInfoInterface, abPath: AbPath){
            super(transformInfoInterface, abPath);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (transformInfoInterface: TransformInfoInterface, node: Node){
            super(transformInfoInterface, node);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (transformInfoInterface: TransformInfoInterface, categoryPropertiesHashMap: HashMap<any, any>){
            super(transformInfoInterface, categoryPropertiesHashMap);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public initPath(){

    var transformInfoHttpStoreInterface: TransformInfoHttpStoreInterface = this.transformInfoInterface as TransformInfoHttpStoreInterface;;
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(transformInfoHttpStoreInterface!.getStoreName())!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(storeFrontInterface!.getName());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.THEMEPATH);
    

    var abPath: AbPath = new AbPath(stringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    

    var httpServletRequest: HttpServletRequest = transformInfoHttpStoreInterface!.getPageContext()!.getRequest() as HttpServletRequest;;
    
this.webAppAbPath= new AbPath(httpServletRequest!.getContextPath() +abPath!.toString(), StringUtil.getInstance()!.EMPTY_STRING);
    
this.setRootFilePath(new AbPath(URLGLOBALS.getMainPath() +abPath!.toString(), StringUtil.getInstance()!.EMPTY_STRING));
    
}


}
                
            

