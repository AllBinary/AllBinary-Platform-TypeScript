
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
        
            import Hashtable from "@ohos.util.HashMap";
        
import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    

//import { Hashtable } from "../../../../../../../../../java/util/Hashtable.js";

    

//import { Vector } from "../../../../../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Tokenizer } from "../../../../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js";

    
import { CommonSeps } from "../../../../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class TransactionResult
            extends Object
        
                , TransactionResultInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private keyValuePairs: HashMap<any, any>

    private result: string
public constructor (result: string){

            super();
            var result = result

        try {
            this.result= result;
    

    var tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.AMPERSAND);
        
        
;
    

    var tokens: BasicArrayList = tokenizer.getTokens(result, new BasicArrayList())!;
        
        
;
    

    var tokenizer2: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.EQUALS);
        
        
;
    

    var hashtable: Hashtable<any, any> = tokenizer2.getTokens(tokens)!;
        
        
;
    
keyValuePairs!.putAll(hashtable);
    

                //: 
} catch(e) 
            {

    var exceptionMessage: string = "TransactionResult Constructor Failed";
        
        
;
    
this.logUtil!.putF(exceptionMessage, this, this.commonStrings!.CONSTRUCTOR);
    
}

}

public constructor (keyValuePairs: HashMap<any, any>){

            super();
            var keyValuePairs = keyValuePairs
keyValuePairs= keyValuePairs;
    
this.result= "Needs to have the hashmap converted to string for other constructor";
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public toHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs;
    
}


    getAllPossibleKeys(): Vector{

    var paymentTransactionKeysFactory: PaymentTransactionKeysFactory = PaymentTransactionKeysFactory.getInstance()!;
        
        
;
    

    var verisignResponseKeys: Vector = new Vector();
        
        
;
    
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


    public getValues(): Vector{

    var keyVector: Vector = this.getAllPossibleKeys()!;
        
        
;
    

    var valueVector: Vector = new Vector();
        
        
;
    

    var size: number = keyVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var key: string = keyVector!.get(i);

                         as String;
        
        
;
    

                        if(keyValuePairs!.containsKey(key))
                        
                                    {
                                    valueVector!.add(keyValuePairs!.get(key));
    

                                    }
                                
                        else {
                            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
valueVector!.add(stringUtil!.EMPTY_STRING);
    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valueVector;
    
}


    public getPnRef(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.PNREF.toString());

                         as String;
    
}


    public getRespMsg(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.RESPMSG.toString());

                         as String;
    
}


    public getResult(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.RESULT.toString());

                         as String;
    
}


    public getScore(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.SCORE.toString());

                         as String;
    
}


    public getStatus(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.STATUS.toString());

                         as String;
    
}


    public getFraudCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.FRAUDCODE.toString());

                         as String;
    
}


    public getFraudMsg(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.FRAUDMSG.toString());

                         as String;
    
}


    public getOrigResult(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.ORIGRESULT.toString());

                         as String;
    
}


    public getAvsAddr(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.AVSADDR.toString());

                         as String;
    
}


    public getAvsZip(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.AVSZIP.toString());

                         as String;
    
}


    public getErrCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.ERRCODE.toString());

                         as String;
    
}


    public getException1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION1.toString());

                         as String;
    
}


    public getException2(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION2.toString());

                         as String;
    
}


    public getException3(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION3.toString());

                         as String;
    
}


    public getException4(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION4.toString());

                         as String;
    
}


    public getException5(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION5.toString());

                         as String;
    
}


    public getException6(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION6.toString());

                         as String;
    
}


    public getException7(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION7.toString());

                         as String;
    
}


    public getReason1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.REASON1.toString());

                         as String;
    
}


    public getReason2(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.REASON2.toString());

                         as String;
    
}


    public getReason3(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.REASON3.toString());

                         as String;
    
}


}
                
            

