
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
        



import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { StreetAddress } from "../../../../../../../../org/allbinary/business/user/address/StreetAddress.js";

    
import { StreetAddressData } from "../../../../../../../../org/allbinary/business/user/address/StreetAddressData.js";

    
import { TaxData } from "../../../../../../../../org/allbinary/business/user/commerce/money/tax/components/TaxData.js";

    
import { DomNodeHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CryptFileReader } from "../../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { AbPath } from "../../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringValidationUtil } from "../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformInfoObjectConfigData } from "../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js";

    
import { CommonPhoneStrings } from "../../../../../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../org/w3c/dom/NodeList.js";

    

export class SimpleStateTaxModule
            extends Object
        
                , TaxModuleInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private streetAddress: StreetAddress

    private storeFrontInterface: StoreFrontInterface

    private readonly ALL: string = CommonPhoneStrings.getInstance()!.STAR;
        
        

    private readonly STATETAXPATH: string = "/generic/taxes/";
        
        

    private readonly STATETAXFILE: string = "stateTaxation.xml";
        
        

    private document: Document
public constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getTaxRate(streetAddress: StreetAddress, storeFrontInterface: StoreFrontInterface): Float{
var streetAddress = streetAddress
var storeFrontInterface = storeFrontInterface
this.streetAddress= streetAddress
this.storeFrontInterface= storeFrontInterface

    var fileAbPath: AbPath = new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH +this.storeFrontInterface!.getName() +this.STATETAXPATH, this.STATETAXFILE);
        
        


    var data: string = CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).
                            get(fileAbPath)!;
        
        

this.document= DomDocumentHelper.create(data)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    logUtil!.put("Tax Doc: " +DomDocumentHelper.toString(document), this, "getTaxRate")

                                    }
                                

    var state: string = this.streetAddress!.getState()!;
        
        


    var country: string = this.streetAddress!.getCountry()!;
        
        

state= state.uppercase()

    var nodeList: NodeList = document.getElementsByTagName(TaxData.NAME)!;
        
        





                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var node: Node = nodeList!.item(index)!;
        
        


    var taxNodeChildren: NodeList = node.getChildNodes()!;
        
        


    var streetAddressNode: Node = DomSearchHelper.getNode(StreetAddressData.NAME, taxNodeChildren)!;
        
        


    var taxableStreetAddress: StreetAddress = new StreetAddress(streetAddressNode);
        
        


    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


                        if(!stringValidationUtil!.isEmpty(country) && !stringValidationUtil!.isEmpty(taxableStreetAddress!.getCountry()) && country.compareTo(taxableStreetAddress!.getCountry()) == 0)
                        
                                    {
                                    
                        if(state != 
                                    null
                                 && taxableStreetAddress!.getState() != 
                                    null
                                 && state.compareTo(taxableStreetAddress!.getState()) == 0)
                        
                                    {
                                    
    var rateNode: Node = DomSearchHelper.getNode(TaxData.RATE, taxNodeChildren)!;
        
        


    var taxRate: string = DomNodeHelper.getTextNodeValue(rateNode)!;
        
        


    var taxRateFloat: Float = new Float(Float(taxRate).
                            toFloat() *.01);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return taxRateFloat;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Float(0);
    
}


    public isValid(streetAddress: StreetAddress, storeFrontInterface: StoreFrontInterface): Boolean{
var streetAddress = streetAddress
var storeFrontInterface = storeFrontInterface

        try {
            this.streetAddress= streetAddress
this.storeFrontInterface= storeFrontInterface

    var fileAbPath: AbPath = new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH +this.storeFrontInterface!.getName() +this.STATETAXPATH, this.STATETAXFILE);
        
        


    var data: string = CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).
                            get(fileAbPath)!;
        
        

this.document= DomDocumentHelper.create(data)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    logUtil!.put("Tax Doc: " +DomDocumentHelper.toString(document), this, commonStrings!.IS_VALID)

                                    }
                                

    var country: string = this.streetAddress!.getCountry()!;
        
        


    var rootNode: Node = this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0)!;
        
        


    var nodeList: NodeList = document.getElementsByTagName(TaxData.NAME)!;
        
        





                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var node: Node = nodeList!.item(index)!;
        
        


    var taxNodeChildren: NodeList = node.getChildNodes()!;
        
        


    var streetAddressNode: Node = DomSearchHelper.getNode(StreetAddressData.NAME, taxNodeChildren)!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    
    var stringBuffer: StringBuilder = new StringBuilder();
        
        

stringBuffer!.append("StreetAddress Node: ")
stringBuffer!.append(streetAddressNode!.getNodeName())
stringBuffer!.append(" Value: ")
stringBuffer!.append(streetAddressNode!.getNodeValue())
stringBuffer!.append(" Number Of Children: ")
stringBuffer!.append(streetAddressNode!.getChildNodes()!.getLength())
logUtil!.put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

                                    }
                                

    var taxableStreetAddress: StreetAddress = new StreetAddress(streetAddressNode);
        
        


    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


                        if(!stringValidationUtil!.isEmpty(country) && !stringValidationUtil!.isEmpty(taxableStreetAddress!.getCountry()) && taxableStreetAddress!.getCountry()!.compareTo(ALL) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                

                        if(!stringValidationUtil!.isEmpty(country) && !stringValidationUtil!.isEmpty(taxableStreetAddress!.getCountry()) && country.compareTo(taxableStreetAddress!.getCountry()) == 0)
                        
                                    {
                                    
    var state: string = this.streetAddress!.getState()!;
        
        


                        if(state != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Failed to validate", this, commonStrings!.IS_VALID, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


}
                
            

