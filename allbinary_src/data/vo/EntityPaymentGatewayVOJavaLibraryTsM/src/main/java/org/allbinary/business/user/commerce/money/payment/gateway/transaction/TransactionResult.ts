
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
//not GWT import const HashMap

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { Tokenizer } from '../../../../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js';
//not GWT import const Tokenizer

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransactionResultInterface } from './TransactionResultInterface.js';
//sameFolderImports - not GWT import - same folder const TransactionResultInterface
import { PaymentTransactionKeysFactory } from './PaymentTransactionKeysFactory.js';
//sameFolderImports - not GWT import - same folder const PaymentTransactionKeysFactory

export class TransactionResult
            extends Object
         implements TransactionResultInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private keyValuePairs: HashMap<any, any>;

    private result: string;

    public constructor(...args: any[]) {
        super();if(args.length === 1 && typeof args[0] === 'string') {
            
            this.constructor$0(args[0]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$1(args[0]);
            
        }
        
    }
    
    private constructor$0(result: string): void {
        
 try { this.result= result;
    

    let tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.AMPERSAND);;
    

    let tokens: BasicArrayList = tokenizer.getTokensFromString(result, new BasicArrayListD())!;;
    

    let tokenizer2: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.EQUALS);;
    

    let hashtable: ABHashtable<any, any> = tokenizer2.getTokens(tokens)!;;
    
this.keyValuePairs!.putAll(hashtable);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let exceptionMessage: string = "TransactionResult Constructor Failed";;
    
this.logUtil!.putF(exceptionMessage, this, this.commonStrings!.CONSTRUCTOR);
    

 }
   }
 

    }
    
    private constructor$1(keyValuePairs: HashMap<any, any>): void {
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

    let paymentTransactionKeysFactory: PaymentTransactionKeysFactory = PaymentTransactionKeysFactory.getInstance()!;;
    

    let verisignResponseKeys: BasicArrayList = new BasicArrayListD();;
    
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

    let keyVector: BasicArrayList = this.getAllPossibleKeys()!;;
    

    let valueVector: BasicArrayList = new BasicArrayListD();;
    

    let size: number = keyVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let key: string = keyVector!.get(i) as string;;
    

                        if(this.keyValuePairs!.containsKey(key))
                        
                                    {
                                    valueVector!.add(this.keyValuePairs!.get(key));
    

                                    }
                                
                        else {
                            
    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
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

