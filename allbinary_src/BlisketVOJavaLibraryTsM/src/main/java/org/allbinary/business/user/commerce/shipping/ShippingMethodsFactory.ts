
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { DynamicObjectData } from '../../../../../../org/allbinary/business/DynamicObjectData.js';
//not GWT import const DynamicObjectData

import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { BasicWeightShippingModuleView } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/BasicWeightShippingModuleView.js';
//not GWT import const BasicWeightShippingModuleView

import { NoShippingModuleView } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/NoShippingModuleView.js';
//not GWT import const NoShippingModuleView

import { ShippingInterface } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
//not GWT import const ShippingInterface

import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
//not GWT import const FREEBLISKET_PATH_GLOBALS

import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { CryptFileReader } from '../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader

import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeFactory } from '../../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
//not GWT import const AbeFactory

import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { TransformInfoObjectConfigData } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js';
//not GWT import const TransformInfoObjectConfigData

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingMethodsData } from './ShippingMethodsData.js';
//sameFolderImports - not GWT import - same folder const ShippingMethodsData
import { ShippingMethodData } from './ShippingMethodData.js';
//sameFolderImports - not GWT import - same folder const ShippingMethodData

export class ShippingMethodsFactory
            extends Object
         {
        

    private static readonly SHIPPINGMETHODSFILEPATHSTRING: string;

                private static initResult: number = ShippingMethodsFactory.init();
                private static init(): number { 
                    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let sep: string = AbPathData.getInstance()!.SEPARATOR;;
    
stringBuffer!.append(sep);
    
stringBuffer!.append("generic");
    
stringBuffer!.append(sep);
    
stringBuffer!.append("shipping");
    
stringBuffer!.append(sep);
    
SHIPPINGMETHODSFILEPATHSTRING= stringBuffer!.toString();
    


                    return 0;
                }
            
    private static readonly SHIPPINGMETHODSFILENAME: string = "shippingMethods.xml";

    private defaultShippingMethodInterface: ShippingInterface;

    private document: Document;

    private shippingVector: BasicArrayList;

public constructor (abeClientInformation: AbeClientInformationInterface, storeFrontInterface: StoreFrontInterface){

            super();
        
    let stringBuffer: StringMaker = new StringMaker();;
    

    let sep: string = AbPathData.getInstance()!.SEPARATOR;;
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(storeFrontInterface!.getName());
    
stringBuffer!.append(sep);
    
stringBuffer!.append(ShippingMethodsFactory.SHIPPINGMETHODSFILEPATHSTRING);
    

    let abPath: AbPath = new AbPath(stringBuffer!.toString(), this.SHIPPINGMETHODSFILENAME) as AbPath;;
    

    let data: string = new CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).get(abPath)!;;
    
this.document= DomDocumentHelper.create(data);
    
this.shippingVector= new BasicArrayListD();
    

    let nodeList: NodeList = this.document.getElementsByTagName(ShippingMethodsData.NAME)!;;
    




                        for (
    let index: number = 0;index < nodeList!.getLength(); index++)
        {

    let node: Node = nodeList!.item(index)!;;
    

    let shippingMethodNodeChildren: NodeList = node.getChildNodes()!;;
    

    let shippingMethodNameNode: Node = DomSearchHelper.getNode(ShippingMethodData.NAME, shippingMethodNodeChildren)!;;
    

    let classNameNode: Node = DomSearchHelper.getNode(DynamicObjectData.NAME, shippingMethodNameNode!.getChildNodes())!;;
    

    let shippingMethodClassName: string = DomNodeHelper.getTextNodeValue(classNameNode)!;;
    

    let shippingMethodInterface: ShippingInterface = AbeFactory.getInstance()!.getInstance(abeClientInformation, shippingMethodClassName) as ShippingInterface;;
    
this.shippingVector!.add(shippingMethodInterface);
    

    let defaultShippingMethodNameNode: Node = DomSearchHelper.getNode(ShippingMethodData.DEFAULT, shippingMethodNameNode!.getChildNodes())!;;
    

    let defaultShippingMethodNameNodeValue: string = DomNodeHelper.getTextNodeValue(defaultShippingMethodNameNode)!;;
    

                        if(defaultShippingMethodNameNodeValue != 
                                    null
                                 && defaultShippingMethodNameNodeValue!.compareTo(ShippingMethodData.DEFAULT) == 0)
                        this.defaultShippingMethodInterface= shippingMethodInterface
}


                        if(this.shippingVector!.size() < 1)
                        
                                    {
                                    this.defaultShippingMethodInterface= new BasicWeightShippingModuleView();
    
this.shippingVector!.add(this.defaultShippingMethodInterface);
    
this.shippingVector!.add(new NoShippingModuleView());
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getInstance(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingVector;
    
}


    public getDefaultInstance(): ShippingInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultShippingMethodInterface;
    
}


}

