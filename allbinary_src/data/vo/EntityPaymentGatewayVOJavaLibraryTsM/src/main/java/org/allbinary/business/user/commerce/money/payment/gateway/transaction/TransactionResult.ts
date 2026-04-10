
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
        



import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { Hashtable } from "../../../../../../../../../java/util/Hashtable.js";

    
import { Vector } from "../../../../../../../../../java/util/Vector.js";

    
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
        
        

    private keyValuePairs: HashMap<Any, Any>

    private result: string
public constructor (result: string){

            super();
            var result = result

        try {
            this.result= result

    var tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.AMPERSAND);
        
        


    var tokens: BasicArrayList = tokenizer.getTokens(result, BasicArrayList())!;
        
        


    var tokenizer2: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.EQUALS);
        
        


    var hashtable: Hashtable<Any, Any> = tokenizer2.getTokens(tokens)!;
        
        

putAll(hashtable)
} catch(e: Exception)
            {

    var exceptionMessage: string = "TransactionResult Constructor Failed";
        
        

put(exceptionMessage, this, this.commonStrings!.CONSTRUCTOR)
}

}

public constructor (keyValuePairs: HashMap<Any, Any>){

            super();
            var keyValuePairs = keyValuePairs
keyValuePairs= keyValuePairs
this.result= "Needs to have the hashmap converted to string for other constructor"
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public toHashMap(): HashMap<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs;
    
}


    getAllPossibleKeys(): Vector{

    var paymentTransactionKeysFactory: PaymentTransactionKeysFactory = PaymentTransactionKeysFactory.getInstance()!;
        
        


    var verisignResponseKeys: Vector = new Vector();
        
        

add(paymentTransactionKeysFactory!.RESULT.toString())
add(paymentTransactionKeysFactory!.PNREF.toString())
add(paymentTransactionKeysFactory!.RESPMSG.toString())
add(paymentTransactionKeysFactory!.AUTHCODE.toString())
add(paymentTransactionKeysFactory!.AVSADDR.toString())
add(paymentTransactionKeysFactory!.AVSZIP.toString())
add(paymentTransactionKeysFactory!.ORIGRESULT.toString())
add(paymentTransactionKeysFactory!.STATUS.toString())
add(paymentTransactionKeysFactory!.FRAUDCODE.toString())
add(paymentTransactionKeysFactory!.FRAUDMSG.toString())
add(paymentTransactionKeysFactory!.ERRCODE.toString())
add(paymentTransactionKeysFactory!.SCORE.toString())
add(paymentTransactionKeysFactory!.REASON1.toString())
add(paymentTransactionKeysFactory!.REASON2.toString())
add(paymentTransactionKeysFactory!.REASON3.toString())
add(paymentTransactionKeysFactory!.EXCEPTION1.toString())
add(paymentTransactionKeysFactory!.EXCEPTION2.toString())
add(paymentTransactionKeysFactory!.EXCEPTION3.toString())
add(paymentTransactionKeysFactory!.EXCEPTION4.toString())
add(paymentTransactionKeysFactory!.EXCEPTION5.toString())
add(paymentTransactionKeysFactory!.EXCEPTION6.toString())
add(paymentTransactionKeysFactory!.EXCEPTION7.toString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return verisignResponseKeys;
    
}


    public getValues(): Vector{

    var keyVector: Vector = this.getAllPossibleKeys()!;
        
        


    var valueVector: Vector = new Vector();
        
        


    var size: number = keyVector!.length!;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var key: string = keyVector!.get(i) as String;
        
        


    
                        if(keyValuePairs!.containsKey(key))
                        
                                    {
                                    add(keyValuePairs!.get(key))

                                    }
                                
                        else {
                            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

add(stringUtil!.EMPTY_STRING)

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valueVector;
    
}


    public getPnRef(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.PNREF.toString()) as String;
    
}


    public getRespMsg(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.RESPMSG.toString()) as String;
    
}


    public getResult(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.RESULT.toString()) as String;
    
}


    public getScore(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.SCORE.toString()) as String;
    
}


    public getStatus(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.STATUS.toString()) as String;
    
}


    public getFraudCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.FRAUDCODE.toString()) as String;
    
}


    public getFraudMsg(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.FRAUDMSG.toString()) as String;
    
}


    public getOrigResult(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.ORIGRESULT.toString()) as String;
    
}


    public getAvsAddr(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.AVSADDR.toString()) as String;
    
}


    public getAvsZip(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.AVSZIP.toString()) as String;
    
}


    public getErrCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.ERRCODE.toString()) as String;
    
}


    public getException1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION1.toString()) as String;
    
}


    public getException2(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION2.toString()) as String;
    
}


    public getException3(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION3.toString()) as String;
    
}


    public getException4(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION4.toString()) as String;
    
}


    public getException5(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION5.toString()) as String;
    
}


    public getException6(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION6.toString()) as String;
    
}


    public getException7(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.EXCEPTION7.toString()) as String;
    
}


    public getReason1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.REASON1.toString()) as String;
    
}


    public getReason2(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.REASON2.toString()) as String;
    
}


    public getReason3(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyValuePairs!.get(PaymentTransactionKeysFactory.getInstance()!.REASON3.toString()) as String;
    
}


}
                
            

