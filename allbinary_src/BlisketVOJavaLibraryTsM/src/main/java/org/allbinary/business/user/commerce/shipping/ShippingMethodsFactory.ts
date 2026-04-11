
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../../java/util/Vector.js";

    
import { DynamicObjectData } from "../../../../../../org/allbinary/business/DynamicObjectData.js";

    
import { StoreFrontInterface } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasicWeightShippingModuleView } from "../../../../../../org/allbinary/business/user/commerce/shipping/modules/BasicWeightShippingModuleView.js";

    
import { NoShippingModuleView } from "../../../../../../org/allbinary/business/user/commerce/shipping/modules/NoShippingModuleView.js";

    
import { ShippingInterface } from "../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js";

    
import { DomNodeHelper } from "../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { CryptFileReader } from "../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeFactory } from "../../../../../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoObjectConfigData } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    

export class ShippingMethodsFactory
            extends Object
         {
        

    private static readonly SHIPPINGMETHODSFILEPATHSTRING: string

                init{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var sep: string = AbPathData.getInstance()!.SEPARATOR;
        
        
;
    
stringBuffer!.append(sep);
    
stringBuffer!.append("generic");
    
stringBuffer!.append(sep);
    
stringBuffer!.append("shipping");
    
stringBuffer!.append(sep);
    
SHIPPINGMETHODSFILEPATHSTRING= stringBuffer!.toString();
    
}

    private static readonly SHIPPINGMETHODSFILENAME: string = "shippingMethods.xml";
        
        

    private defaultShippingMethodInterface: ShippingInterface

    private document: Document

    private shippingVector: Vector
public constructor (abeClientInformation: AbeClientInformationInterface, storeFrontInterface: StoreFrontInterface){

            super();
                //var abeClientInformation = abeClientInformation
    //var storeFrontInterface = storeFrontInterface

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var sep: string = AbPathData.getInstance()!.SEPARATOR;
        
        
;
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(storeFrontInterface!.getName());
    
stringBuffer!.append(sep);
    
stringBuffer!.append(this.SHIPPINGMETHODSFILEPATHSTRING);
    

    var abPath: AbPath = new AbPath(stringBuffer!.toString(), this.SHIPPINGMETHODSFILENAME) as AbPath;
        
        
;
    

    var data: string = new CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).
                            get(abPath)!;
        
        
;
    
this.document= DomDocumentHelper.create(data);
    
this.shippingVector= new Vector();
    

    var nodeList: NodeList = document.getElementsByTagName(ShippingMethodsData.NAME)!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var node: Node = nodeList!.item(index)!;
        
        
;
    

    var shippingMethodNodeChildren: NodeList = node.getChildNodes()!;
        
        
;
    

    var shippingMethodNameNode: Node = DomSearchHelper.getNode(ShippingMethodData.NAME, shippingMethodNodeChildren)!;
        
        
;
    

    var classNameNode: Node = DomSearchHelper.getNode(DynamicObjectData.NAME, shippingMethodNameNode!.getChildNodes())!;
        
        
;
    

    var shippingMethodClassName: string = DomNodeHelper.getTextNodeValue(classNameNode)!;
        
        
;
    

    var shippingMethodInterface: ShippingInterface = AbeFactory.getInstance()!.getInstance(abeClientInformation, shippingMethodClassName);

                         as ShippingInterface;
        
        
;
    
shippingVector!.add(shippingMethodInterface);
    

    var defaultShippingMethodNameNode: Node = DomSearchHelper.getNode(ShippingMethodData.DEFAULT, shippingMethodNameNode!.getChildNodes())!;
        
        
;
    

    var defaultShippingMethodNameNodeValue: string = DomNodeHelper.getTextNodeValue(defaultShippingMethodNameNode)!;
        
        
;
    

                        if(defaultShippingMethodNameNodeValue != 
                                    null
                                 && defaultShippingMethodNameNodeValue!.compareTo(ShippingMethodData.DEFAULT) == 0)
                        this.defaultShippingMethodInterface= shippingMethodInterface
}


                        if(shippingVector!.length < 1)
                        
                                    {
                                    this.defaultShippingMethodInterface= new BasicWeightShippingModuleView();
    
shippingVector!.add(this.defaultShippingMethodInterface);
    
shippingVector!.add(new NoShippingModuleView());
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public getInstance(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shippingVector;
    
}


    public getDefaultInstance(): ShippingInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultShippingMethodInterface;
    
}


}
                
            

