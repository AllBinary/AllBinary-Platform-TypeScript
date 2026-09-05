
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
        
import { DynamicObjectData } from '../../../../../../../org/allbinary/business/DynamicObjectData.js';
//not GWT import const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
import { StoreFrontInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { TaxData } from '../../../../../../../org/allbinary/business/user/commerce/money/tax/components/TaxData.js';
//not GWT import const TaxData = globalThis.org.allbinary.business.user.commerce.money.tax.components.TaxData;

      
import { SimpleStateTaxModule } from '../../../../../../../org/allbinary/business/user/commerce/money/tax/modules/SimpleStateTaxModule.js';
//not GWT import const SimpleStateTaxModule = globalThis.org.allbinary.business.user.commerce.money.tax.modules.SimpleStateTaxModule;

      
import { TaxModuleInterface } from '../../../../../../../org/allbinary/business/user/commerce/money/tax/modules/TaxModuleInterface.js';
//not GWT import const TaxModuleInterface = globalThis.org.allbinary.business.user.commerce.money.tax.modules.TaxModuleInterface;

      
import { DomNodeHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { DomDocumentHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
//not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { CryptFileReader } from '../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { AbPath } from '../../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbeFactory } from '../../../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
//not GWT import const AbeFactory = globalThis.org.allbinary.logic.system.loader.AbeFactory;

      
import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { TransformInfoObjectConfigData } from '../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js';
//not GWT import const TransformInfoObjectConfigData = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigData;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TaxFactory
            extends Object
         {
        

    private static readonly instance: TaxFactory = new TaxFactory();

    public static getInstance(): TaxFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TaxFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly TAXATIONFILENAME: string = "taxationMethod.xml";

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, storeFrontInterface: StoreFrontInterface): TaxModuleInterface{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(storeFrontInterface!.getName());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append("generic");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append("taxes");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    

    var abPath: AbPath = new AbPath(stringBuffer!.toString(), TAXATIONFILENAME);;
    

    var transformInfoObjectConfigData: TransformInfoObjectConfigData = TransformInfoObjectConfigData.getInstance()!;;
    

    var data: string = new CryptFileReader(transformInfoObjectConfigData!.UNCRYPTED_EXTENSION, transformInfoObjectConfigData!.ENCRYPTED_EXTENSION).get(abPath)!;;
    

    var document: Document = DomDocumentHelper.create(data)!;;
    

    var taxNameNodeList: NodeList = document.getElementsByTagName(TaxData.NAME)!;;
    




                        for (
    var index: number = 0;index < taxNameNodeList!.getLength(); index++)
        {

    var node: Node = taxNameNodeList!.item(index)!;;
    

    var nodeList: NodeList = node.getChildNodes()!;;
    

                        if(nodeList != 
                                    null
                                )
                        
                                    {
                                    
    var classNameNode: Node = DomSearchHelper.getNode(DynamicObjectData.NAME, nodeList)!;;
    

                        if(classNameNode != 
                                    null
                                )
                        
                                    {
                                    
    var className: string = DomNodeHelper.getTextNodeValue(classNameNode)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbeFactory.getInstance()!.getInstance(abeClientInformation, className) as TaxModuleInterface;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    this.logUtil!.putF("Class Node Null", this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    this.logUtil!.putF("Tax Name Node Node Children", this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SimpleStateTaxModule() as TaxModuleInterface;
    
}


}



