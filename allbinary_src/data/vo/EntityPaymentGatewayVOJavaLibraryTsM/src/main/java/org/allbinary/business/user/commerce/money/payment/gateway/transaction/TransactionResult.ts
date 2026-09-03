
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

        


            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Hashtable } from '../../../../../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
//not plain js import { BasicArrayList } from '../../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } from '../../../../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringUtil } from '../../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { Tokenizer } from '../../../../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js';
      //not GWT import const Tokenizer = globalThis.org.allbinary.logic.string.tokens.Tokenizer;

      
//not plain js import { CommonSeps } from '../../../../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransactionResultInterface } from './TransactionResultInterface.js';
//not GWT import const TransactionResultInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.transaction.TransactionResultInterface;

                import { PaymentTransactionKeysFactory } from './PaymentTransactionKeysFactory.js';
//not GWT import const PaymentTransactionKeysFactory = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.transaction.PaymentTransactionKeysFactory;

                
export class TransactionResult
            extends Object
         implements TransactionResultInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private keyValuePairs: HashMap<any, any>;

    private result: string;

public constructor (result: string){

            super();
        
        try {
            this.result= result;
    

    var tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.AMPERSAND);;
    

    var tokens: BasicArrayList = tokenizer.getTokensFromString(result, new BasicArrayListD())!;;
    

    var tokenizer2: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.EQUALS);;
    

    var hashtable: Hashtable<any, any> = tokenizer2.getTokens(tokens)!;;
    
this.keyValuePairs!.putAll(hashtable);
    

                //: 
} catch(e) 
            {

    var exceptionMessage: string = "TransactionResult Constructor Failed";;
    
this.logUtil!.putF(exceptionMessage, this, this.commonStrings!.CONSTRUCTOR);
    
}

}


public constructor (keyValuePairs: HashMap<any, any>){

            super();
        keyValuePairs= keyValuePairs;
    
this.result= "Needs to have the hashmap converted to string for other constructor";
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.result;
    
}


    public toHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs;
    
}


    getAllPossibleKeys(): BasicArrayList{

    var paymentTransactionKeysFactory: PaymentTransactionKeysFactory = PaymentTransactionKeysFactory.getInstance()!;;
    

    var verisignResponseKeys: BasicArrayList = new BasicArrayListD();;
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.RESULT.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.PNREF.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.RESPMSG.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.AUTHCODE.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.AVSADDR.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.AVSZIP.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.ORIGRESULT.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.STATUS.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.FRAUDCODE.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.FRAUDMSG.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.ERRCODE.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.SCORE.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.REASON1.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.REASON2.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.REASON3.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.EXCEPTION1.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.EXCEPTION2.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.EXCEPTION3.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.EXCEPTION4.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.EXCEPTION5.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.EXCEPTION6.toString());
    
verisignResponseKeys!.add(paymentTransactionKeysFactory!.EXCEPTION7.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return verisignResponseKeys;
    
}


    public getValues(): BasicArrayList{

    var keyVector: BasicArrayList = this.getAllPossibleKeys()!;;
    

    var valueVector: BasicArrayList = new BasicArrayListD();;
    

    var size: number = keyVector!.size()!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var key: string = keyVector!.get(i) as string;;
    

                        if(this.keyValuePairs!.containsKey(key))
                        
                                    {
                                    valueVector!.add(this.keyValuePairs!.get(key));
    

                                    }
                                
                        else {
                            
    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
valueVector!.add(stringUtil!.EMPTY_STRING);
    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valueVector;
    
}


    public getPnRef(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.PNREF.toString()) as string;
    
}


    public getRespMsg(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.RESPMSG.toString()) as string;
    
}


    public getResult(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.RESULT.toString()) as string;
    
}


    public getScore(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.SCORE.toString()) as string;
    
}


    public getStatus(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.STATUS.toString()) as string;
    
}


    public getFraudCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.FRAUDCODE.toString()) as string;
    
}


    public getFraudMsg(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.FRAUDMSG.toString()) as string;
    
}


    public getOrigResult(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.ORIGRESULT.toString()) as string;
    
}


    public getAvsAddr(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.AVSADDR.toString()) as string;
    
}


    public getAvsZip(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.AVSZIP.toString()) as string;
    
}


    public getErrCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.ERRCODE.toString()) as string;
    
}


    public getException1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION1.toString()) as string;
    
}


    public getException2(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION2.toString()) as string;
    
}


    public getException3(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION3.toString()) as string;
    
}


    public getException4(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION4.toString()) as string;
    
}


    public getException5(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION5.toString()) as string;
    
}


    public getException6(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION6.toString()) as string;
    
}


    public getException7(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION7.toString()) as string;
    
}


    public getReason1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.REASON1.toString()) as string;
    
}


    public getReason2(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.REASON2.toString()) as string;
    
}


    public getReason3(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.REASON3.toString()) as string;
    
}


}



