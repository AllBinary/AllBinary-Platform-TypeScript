
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
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap
import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface
import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentGatewayInterface } from './PaymentGatewayInterface.js';
//not GWT import - same folder const PaymentGatewayInterfaceimport { PaymentGatewayMapping } from './PaymentGatewayMapping.js';
//not GWT import - same folder const PaymentGatewayMappingimport { PaymentGatewayData } from './PaymentGatewayData.js';
//not GWT import - same folder const PaymentGatewayData
export class PaymentGatewayView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private paymentGatewayInterface: PaymentGatewayInterface;

public constructor (paymentGatewayInterface: PaymentGatewayInterface){

            super();
        this.paymentGatewayInterface= paymentGatewayInterface;
    
}


    public getPaymentGatewayInterface(): PaymentGatewayInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentGatewayInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "toXmlNode");
    

                                    }
                                

    var hashMap: HashMap<any, any> = new PaymentGatewayMapping(this.paymentGatewayInterface).toHashMap()!;;
    
hashMap!.putAll(this.toHashMap());
    

    var paymentGatewayNode: Node = ModDomHelper.createNodeWithValueNodes(document, PaymentGatewayData.NAME.toString(), hashMap)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayNode;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toXmlNode", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



