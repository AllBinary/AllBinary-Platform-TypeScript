
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
        
//not game specific package import { Vector } from '../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { DynamicObjectData } from '../../../../../../org/allbinary/business/DynamicObjectData.js';
      const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { BasicWeightShippingModuleView } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/BasicWeightShippingModuleView.js';
      const BasicWeightShippingModuleView = globalThis.org.allbinary.business.user.commerce.shipping.modules.BasicWeightShippingModuleView;

      
//not game specific package import { NoShippingModuleView } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/NoShippingModuleView.js';
      const NoShippingModuleView = globalThis.org.allbinary.business.user.commerce.shipping.modules.NoShippingModuleView;

      
//not game specific package import { ShippingInterface } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
      const ShippingInterface = globalThis.org.allbinary.business.user.commerce.shipping.modules.ShippingInterface;

      
//not game specific package import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
//not game specific package import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { CryptFileReader } from '../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
      const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
//not game specific package import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { AbPathData } from '../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { AbeFactory } from '../../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
      const AbeFactory = globalThis.org.allbinary.logic.system.loader.AbeFactory;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { TransformInfoObjectConfigData } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js';
      const TransformInfoObjectConfigData = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigData;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingMethodsData } from './ShippingMethodsData.js';
import { ShippingMethodData } from './ShippingMethodData.js';

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
                
            

