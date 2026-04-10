
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
        



import { DynamicObjectData } from "../../../../../../../org/allbinary/business/DynamicObjectData.js";

    
import { StoreFrontInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { TaxData } from "../../../../../../../org/allbinary/business/user/commerce/money/tax/components/TaxData.js";

    
import { SimpleStateTaxModule } from "../../../../../../../org/allbinary/business/user/commerce/money/tax/modules/SimpleStateTaxModule.js";

    
import { TaxModuleInterface } from "../../../../../../../org/allbinary/business/user/commerce/money/tax/modules/TaxModuleInterface.js";

    
import { DomNodeHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CryptFileReader } from "../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { AbPath } from "../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeFactory } from "../../../../../../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoObjectConfigData } from "../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../org/w3c/dom/NodeList.js";

    

export class TaxFactory
            extends Object
         {
        

    private static readonly instance: TaxFactory = new TaxFactory();
        
        

    public static getInstance(): TaxFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly TAXATIONFILENAME: string = "taxationMethod.xml";
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, storeFrontInterface: StoreFrontInterface): TaxModuleInterface{
    //var abeClientInformation = abeClientInformation
    //var storeFrontInterface = storeFrontInterface

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(URLGLOBALS.getMainPath())
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
stringBuffer!.append(storeFrontInterface!.getName())
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)
stringBuffer!.append("generic")
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)
stringBuffer!.append("taxes")
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)

    var abPath: AbPath = new AbPath(stringBuffer!.toString(), TAXATIONFILENAME);
        
        


    var transformInfoObjectConfigData: TransformInfoObjectConfigData = TransformInfoObjectConfigData.getInstance()!;
        
        


    var data: string = CryptFileReader(transformInfoObjectConfigData!.UNCRYPTED_EXTENSION, transformInfoObjectConfigData!.ENCRYPTED_EXTENSION).
                            get(abPath)!;
        
        


    var document: Document = DomDocumentHelper.create(data)!;
        
        


    var taxNameNodeList: NodeList = document.getElementsByTagName(TaxData.NAME)!;
        
        





                        for (
    var index: number = 0;
        
        
index < taxNameNodeList!.getLength(); index++)
        {

    var node: Node = taxNameNodeList!.item(index)!;
        
        


    var nodeList: NodeList = node.getChildNodes()!;
        
        


                        if(nodeList != 
                                    null
                                )
                        
                                    {
                                    
    var classNameNode: Node = DomSearchHelper.getNode(DynamicObjectData.NAME, nodeList)!;
        
        


                        if(classNameNode != 
                                    null
                                )
                        
                                    {
                                    
    var className: string = DomNodeHelper.getTextNodeValue(classNameNode)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbeFactory.getInstance()!.getInstance(abeClientInformation, className) as TaxModuleInterface;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    logUtil!.put("Class Node Null", this, commonStrings!.GET_INSTANCE)

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    logUtil!.put("Tax Name Node Node Children", this, commonStrings!.GET_INSTANCE)

                                    }
                                

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleStateTaxModule() as TaxModuleInterface;
    
}


}
                
            

