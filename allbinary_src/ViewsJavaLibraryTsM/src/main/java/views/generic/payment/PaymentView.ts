
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { Payment } from '../../../org/allbinary/business/user/commerce/money/payment/Payment.js';
//not GWT import const Payment

import { PaymentData } from '../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
//not GWT import const PaymentData

import { PaymentEntityFactory } from '../../../org/allbinary/data/tables/user/commerce/money/payment/PaymentEntityFactory.js';
//not GWT import const PaymentEntityFactory

import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Document } from '../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

 try { 
    let paymentNode: Node = document.createElement(PaymentData.PAYMENT)!;;
    
document.appendChild(paymentNode);
    

    let paymentVector: BasicArrayList = PaymentEntityFactory.getInstance()!.getPaymentEntityInstance()!.get(this.getWeblisketSession()!.getUserName())!;;
    

    let size: number = paymentVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let payment: Payment = paymentVector!.get(index) as Payment;;
    
paymentNode!.appendChild(payment.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentNode;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
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
  

    let error: string = "Failed to view Payment";;
    

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

