
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
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { HttpServletRequest } from '../../../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { RootStoreCategoryProperties } from '../../../../../../../../org/allbinary/business/category/properties/root/store/RootStoreCategoryProperties.js';
//not GWT import const RootStoreCategoryProperties

import { StoreFrontFactory } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
//not GWT import const FREEBLISKET_PATH_GLOBALS

import { URLGLOBALS } from '../../../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

import { AbPath } from '../../../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { TransformInfoHttpStoreInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpStoreInterface.js';
//not GWT import const TransformInfoHttpStoreInterface

import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
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

    let transformInfoHttpStoreInterface: TransformInfoHttpStoreInterface = this.transformInfoInterface as TransformInfoHttpStoreInterface;;
    

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(transformInfoHttpStoreInterface!.getStoreName())!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(storeFrontInterface!.getName());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.THEMEPATH);
    

    let abPath: AbPath = new AbPath(stringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    

    let httpServletRequest: HttpServletRequest = transformInfoHttpStoreInterface!.getPageContext()!.getRequest() as HttpServletRequest;;
    
this.webAppAbPath= new AbPath(httpServletRequest!.getContextPath() +abPath!.toString(), StringUtil.getInstance()!.EMPTY_STRING);
    
this.setRootFilePath(new AbPath(URLGLOBALS.getMainPath() +abPath!.toString(), StringUtil.getInstance()!.EMPTY_STRING));
    
}


}

