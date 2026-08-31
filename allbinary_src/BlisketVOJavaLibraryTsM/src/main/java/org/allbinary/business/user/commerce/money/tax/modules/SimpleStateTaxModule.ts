
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
            import { Float } from '../../../../../../../../java/lang/Float.js';
        
import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { StreetAddress } from '../../../../../../../../org/allbinary/business/user/address/StreetAddress.js';
      //not GWT import const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
import { StreetAddressData } from '../../../../../../../../org/allbinary/business/user/address/StreetAddressData.js';
      //not GWT import const StreetAddressData = globalThis.org.allbinary.business.user.address.StreetAddressData;

      
import { TaxData } from '../../../../../../../../org/allbinary/business/user/commerce/money/tax/components/TaxData.js';
      //not GWT import const TaxData = globalThis.org.allbinary.business.user.commerce.money.tax.components.TaxData;

      
import { DomNodeHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomSearchHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { DomDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      //not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { CryptFileReader } from '../../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
      //not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { AbPath } from '../../../../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { StringValidationUtil } from '../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformInfoObjectConfigData } from '../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js';
      //not GWT import const TransformInfoObjectConfigData = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigData;

      
//not plain js import { CommonPhoneStrings } from '../../../../../../../../org/allbinary/string/CommonPhoneStrings.js';
      const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;

      
//not plain js import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TaxModuleInterface } from './TaxModuleInterface.js';
//not GWT import const TaxModuleInterface = globalThis.org.allbinary.business.user.commerce.money.tax.modules.TaxModuleInterface;

                
export class SimpleStateTaxModule
            extends Object
         implements TaxModuleInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private streetAddress: StreetAddress;

    private storeFrontInterface: StoreFrontInterface;

    private readonly ALL: string = CommonPhoneStrings.getInstance()!.STAR;

    private readonly STATETAXPATH: string = "/generic/taxes/";

    private readonly STATETAXFILE: string = "stateTaxation.xml";

    private document: Document;

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getTaxRate(streetAddress: StreetAddress, storeFrontInterface: StoreFrontInterface): number{
this.streetAddress= streetAddress;
    
this.storeFrontInterface= storeFrontInterface;
    

    var fileAbPath: AbPath = new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH +this.storeFrontInterface!.getName() +this.STATETAXPATH, this.STATETAXFILE);;
    

    var data: string = new CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).get(fileAbPath)!;;
    
this.document= DomDocumentHelper.create(data);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    this.logUtil!.putF("Tax Doc: " +DomDocumentHelper.toString(this.document), this, "getTaxRate");
    

                                    }
                                

    var state: string = this.streetAddress!.getState()!;;
    

    var country: string = this.streetAddress!.getCountry()!;;
    
state= state.toUpperCase();
    

    var nodeList: NodeList = this.document.getElementsByTagName(TaxData.NAME)!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var node: Node = nodeList!.item(index)!;;
    

    var taxNodeChildren: NodeList = node.getChildNodes()!;;
    

    var streetAddressNode: Node = DomSearchHelper.getNode(StreetAddressData.NAME, taxNodeChildren)!;;
    

    var taxableStreetAddress: StreetAddress = new StreetAddress(streetAddressNode);;
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(!stringValidationUtil!.isEmpty(country) && !stringValidationUtil!.isEmpty(taxableStreetAddress!.getCountry()) && country.compareTo(taxableStreetAddress!.getCountry()) == 0)
                        
                                    {
                                    
                        if(state != 
                                    null
                                 && taxableStreetAddress!.getState() != 
                                    null
                                 && state.compareTo(taxableStreetAddress!.getState()) == 0)
                        
                                    {
                                    
    var rateNode: Node = DomSearchHelper.getNode(TaxData.RATE, taxNodeChildren)!;;
    

    var taxRate: string = DomNodeHelper.getTextNodeValue(rateNode)!;;
    

    var taxRateFloat: number = new number(new number(taxRate) *.01);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return taxRateFloat;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new number(0);
    
}


    public isValid(streetAddress: StreetAddress, storeFrontInterface: StoreFrontInterface): Boolean{

        try {
            this.streetAddress= streetAddress;
    
this.storeFrontInterface= storeFrontInterface;
    

    var fileAbPath: AbPath = new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH +this.storeFrontInterface!.getName() +this.STATETAXPATH, this.STATETAXFILE);;
    

    var data: string = new CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).get(fileAbPath)!;;
    
this.document= DomDocumentHelper.create(data);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    this.logUtil!.putF("Tax Doc: " +DomDocumentHelper.toString(this.document), this, this.commonStrings!.IS_VALID);
    

                                    }
                                

    var country: string = this.streetAddress!.getCountry()!;;
    

    var rootNode: Node = this.document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0)!;;
    

    var nodeList: NodeList = this.document.getElementsByTagName(TaxData.NAME)!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var node: Node = nodeList!.item(index)!;;
    

    var taxNodeChildren: NodeList = node.getChildNodes()!;;
    

    var streetAddressNode: Node = DomSearchHelper.getNode(StreetAddressData.NAME, taxNodeChildren)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAX))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("StreetAddress Node: ");
    
stringBuffer!.append(streetAddressNode!.getNodeName());
    
stringBuffer!.append(" Value: ");
    
stringBuffer!.append(streetAddressNode!.getNodeValue());
    
stringBuffer!.append(" Number Of Children: ");
    
stringBuffer!.appendint(streetAddressNode!.getChildNodes()!.getLength());
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                

    var taxableStreetAddress: StreetAddress = new StreetAddress(streetAddressNode);;
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(!stringValidationUtil!.isEmpty(country) && !stringValidationUtil!.isEmpty(taxableStreetAddress!.getCountry()) && taxableStreetAddress!.getCountry()!.compareTo(this.ALL) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                

                        if(!stringValidationUtil!.isEmpty(country) && !stringValidationUtil!.isEmpty(taxableStreetAddress!.getCountry()) && country.compareTo(taxableStreetAddress!.getCountry()) == 0)
                        
                                    {
                                    
    var state: string = this.streetAddress!.getState()!;;
    

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
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


}



