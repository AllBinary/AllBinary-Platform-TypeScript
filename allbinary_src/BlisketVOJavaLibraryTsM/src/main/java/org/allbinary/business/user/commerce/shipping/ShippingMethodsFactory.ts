
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
        
import { Vector } from '../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { DynamicObjectData } from '../../../../../../org/allbinary/business/DynamicObjectData.js';
      //not GWT import const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { BasicWeightShippingModuleView } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/BasicWeightShippingModuleView.js';
      //not GWT import const BasicWeightShippingModuleView = globalThis.org.allbinary.business.user.commerce.shipping.modules.BasicWeightShippingModuleView;

      
import { NoShippingModuleView } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/NoShippingModuleView.js';
      //not GWT import const NoShippingModuleView = globalThis.org.allbinary.business.user.commerce.shipping.modules.NoShippingModuleView;

      
import { ShippingInterface } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
      //not GWT import const ShippingInterface = globalThis.org.allbinary.business.user.commerce.shipping.modules.ShippingInterface;

      
import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      //not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { CryptFileReader } from '../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
      //not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { AbPathData } from '../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbeFactory } from '../../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
      //not GWT import const AbeFactory = globalThis.org.allbinary.logic.system.loader.AbeFactory;

      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { TransformInfoObjectConfigData } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js';
      //not GWT import const TransformInfoObjectConfigData = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigData;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingMethodsData } from './ShippingMethodsData.js';
//not GWT import const  = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodsData;

                import { ShippingMethodData } from './ShippingMethodData.js';
//not GWT import const  = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodData;

                
export class ShippingMethodsFactory
            extends Object
         {
        

    private static readonly SHIPPINGMETHODSFILEPATHSTRING: string;

                private static initResult: number = ShippingMethodsFactory.init();
                private static init(): number { 
                    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var sep: string = AbPathData.getInstance()!.SEPARATOR;;
    
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

    private shippingVector: Vector;

public constructor (abeClientInformation: AbeClientInformationInterface, storeFrontInterface: StoreFrontInterface){

            super();
        
    var stringBuffer: StringMaker = new StringMaker();;
    

    var sep: string = AbPathData.getInstance()!.SEPARATOR;;
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(storeFrontInterface!.getName());
    
stringBuffer!.append(sep);
    
stringBuffer!.append(ShippingMethodsFactory.SHIPPINGMETHODSFILEPATHSTRING);
    

    var abPath: AbPath = new AbPath(stringBuffer!.toString(), this.SHIPPINGMETHODSFILENAME) as AbPath;;
    

    var data: string = new CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).get(abPath)!;;
    
this.document= DomDocumentHelper.create(data);
    
this.shippingVector= new Vector();
    

    var nodeList: NodeList = this.document.getElementsByTagName(ShippingMethodsData.NAME)!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var node: Node = nodeList!.item(index)!;;
    

    var shippingMethodNodeChildren: NodeList = node.getChildNodes()!;;
    

    var shippingMethodNameNode: Node = DomSearchHelper.getNode(ShippingMethodData.NAME, shippingMethodNodeChildren)!;;
    

    var classNameNode: Node = DomSearchHelper.getNode(DynamicObjectData.NAME, shippingMethodNameNode!.getChildNodes())!;;
    

    var shippingMethodClassName: string = DomNodeHelper.getTextNodeValue(classNameNode)!;;
    

    var shippingMethodInterface: ShippingInterface = AbeFactory.getInstance()!.getInstance(abeClientInformation, shippingMethodClassName) as ShippingInterface;;
    
this.shippingVector!.add(shippingMethodInterface);
    

    var defaultShippingMethodNameNode: Node = DomSearchHelper.getNode(ShippingMethodData.DEFAULT, shippingMethodNameNode!.getChildNodes())!;;
    

    var defaultShippingMethodNameNodeValue: string = DomNodeHelper.getTextNodeValue(defaultShippingMethodNameNode)!;;
    

                        if(defaultShippingMethodNameNodeValue != 
                                    null
                                 && defaultShippingMethodNameNodeValue!.compareTo(ShippingMethodData.DEFAULT) == 0)
                        this.defaultShippingMethodInterface= shippingMethodInterface
}


                        if(this.shippingVector!.length < 1)
                        
                                    {
                                    this.defaultShippingMethodInterface= new BasicWeightShippingModuleView();
    
this.shippingVector!.add(this.defaultShippingMethodInterface);
    
this.shippingVector!.add(new NoShippingModuleView());
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getInstance(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingVector;
    
}


    public getDefaultInstance(): ShippingInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultShippingMethodInterface;
    
}


}



