
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
        
//not game specific package import { Vector } from '../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { EntryData } from '../../../../../../../../org/allbinary/business/entry/EntryData.js';
      const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
//not game specific package import { PaymentGatewaysData } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewaysData.js';
      const PaymentGatewaysData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewaysData;

      
//not game specific package import { DomNodeHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomSearchHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
//not game specific package import { URLGLOBALS } from '../../../../../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CryptFileReader } from '../../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
      const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
//not game specific package import { AbPath } from '../../../../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { AbPathData } from '../../../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringValidationUtil } from '../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { TransformInfoObjectConfigData } from '../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js';
      const TransformInfoObjectConfigData = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigData;

      
//not game specific package import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentType } from './PaymentType.js';

export class PaymentTypeUtil
            extends Object
         {
        

    private static readonly instance: PaymentTypeUtil = new PaymentTypeUtil();

                private static initResult: number = PaymentTypeUtil.init();
                private static init(): number { 
                    


                    return 0;
                }
            
    public static getInstance(): PaymentTypeUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PaymentTypeUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly PAYMENTGATEWAYFILEPATHSTRING: string;

    private readonly SHIPPINGMETHODSFILENAME: string = "paymentGatewayTypes.xml";

    private defaultName: string = 
                null
            ;

    private paymentTypeVector: Vector = new Vector();

private constructor (){

            super();
        
    var stringBuffer: StringMaker = new StringMaker();;
    

    var sep: string = AbPathData.getInstance()!.SEPARATOR;;
    
stringBuffer!.append(sep);
    
stringBuffer!.append("generic");
    
stringBuffer!.append(sep);
    
stringBuffer!.append("user");
    
stringBuffer!.append(sep);
    
stringBuffer!.append("commerce");
    
stringBuffer!.append(sep);
    
stringBuffer!.append("money");
    
stringBuffer!.append(sep);
    
stringBuffer!.append("payment");
    
stringBuffer!.append(sep);
    
stringBuffer!.append("gateway");
    
stringBuffer!.append(sep);
    
this.PAYMENTGATEWAYFILEPATHSTRING= stringBuffer!.toString();
    
}


    public add(paymentType: PaymentType){
this.paymentTypeVector!.add(paymentType);
    
}


                //@Throws(Exception.constructor)
            
    public get(paymentTypeString: string): PaymentType{

    var size: number = this.paymentTypeVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var paymentType: PaymentType = this.paymentTypeVector!.get(i) as PaymentType;;
    

                        if(paymentType!.getBasicPaymentType()!.getName()!.compareTo(paymentTypeString) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentType;
    

                                    }
                                
}




                            throw new Exception("Unknown PaymentType: " +paymentTypeString);
                    
}


                //@Throws(Exception.constructor)
            
    public initDefault(storeName: string){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF("initDefault Payment: " +this.defaultName, this, "initDefault");
    

                                    }
                                

                        if(StringValidationUtil.getInstance()!.isEmpty(this.defaultName))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(storeName);
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(this.PAYMENTGATEWAYFILEPATHSTRING);
    

    var abPath: AbPath = new AbPath(stringBuffer!.toString(), this.SHIPPINGMETHODSFILENAME) as AbPath;;
    

    var data: string = new CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).get(abPath)!;;
    

    var document: Document = DomDocumentHelper.create(data)!;;
    

    var nodeList: NodeList = document.getElementsByTagName(PaymentGatewaysData.NAME)!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var node: Node = nodeList!.item(index)!;;
    

    var defaultPaymentGatewayNode: Node = DomSearchHelper.getNode(EntryData.getInstance()!.DEFAULT, node.getChildNodes())!;;
    

    var defaultPaymentGatewayNodeValue: string = DomNodeHelper.getTextNodeValue(defaultPaymentGatewayNode)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF("DefaultPaymentGatewayNodeValue: " +defaultPaymentGatewayNodeValue, this, "initDefault");
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isEmpty(defaultPaymentGatewayNodeValue))
                        
                                    {
                                    this.defaultName= defaultPaymentGatewayNodeValue;
    

                                    }
                                
}


                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getDefault(storeName: string): PaymentType{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "getDefault");
    

                                    }
                                
this.initDefault(storeName);
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(this.defaultName))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.get(this.defaultName);;
    

                                    }
                                



                            throw new Exception("No Default: " +this.defaultName);
                    
}


    public isContain(paymentType: PaymentType): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentTypeVector!.contains(paymentType);;
    
}


    public difference(a_PaymentTypeVector: Vector): Vector{

    var diff: Vector = new Vector();;
    

    var size: number = this.paymentTypeVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var paymentType: PaymentType = this.paymentTypeVector!.get(i) as PaymentType;;
    

                        if(!a_PaymentTypeVector!.contains(paymentType))
                        diff.add(paymentType)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return diff;
    
}


}
                
            

