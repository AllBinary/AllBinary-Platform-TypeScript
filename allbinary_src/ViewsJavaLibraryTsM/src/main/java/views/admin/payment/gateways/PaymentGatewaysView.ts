
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { EntryData } from '../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { PaymentGatewayData } from '../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
//not GWT import const PaymentGatewayData

import { PaymentGatewaysData } from '../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewaysData.js';
//not GWT import const PaymentGatewaysData

import { BasicPaymentType } from '../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js';
//not GWT import const BasicPaymentType

import { PaymentTypeUtil } from '../../../../org/allbinary/business/user/commerce/money/payment/types/PaymentTypeUtil.js';
//not GWT import const PaymentTypeUtil

import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { ModDomHelper } from '../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Document } from '../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { HttpStoreComponentView } from '../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentGatewaysView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private paymentGatewayVector: BasicArrayList;

public constructor (transformInfoInterface: TransformInfoInterface, gatewayVector: BasicArrayList){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.paymentGatewayVector= gatewayVector;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

 try { 
    let storeName: string = this.getTransformInfoInterface()!.getStoreName()!;;
    

    let paymentGatewaysNode: Node = document.createElement(PaymentGatewaysData.NAME)!;;
    

    let size: number = this.paymentGatewayVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let paymentType: BasicPaymentType = this.paymentGatewayVector!.get(index) as BasicPaymentType;;
    

    let hashMap: HashMap<any, any> = paymentType!.toHashMap()!;;
    
hashMap!.put(EntryData.getInstance()!.DEFAULT, PaymentTypeUtil.getInstance()!.getDefault(storeName)!.getBasicPaymentType()!.getName());
    

    let paymentGatewayNode: Node = ModDomHelper.createNodeWithValueNodes(document, PaymentGatewayData.NAME.toString(), hashMap)!;;
    
paymentGatewaysNode!.appendChild(paymentGatewayNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewaysNode;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


    public view(): string{

 try { this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to view payment gateways";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


}

