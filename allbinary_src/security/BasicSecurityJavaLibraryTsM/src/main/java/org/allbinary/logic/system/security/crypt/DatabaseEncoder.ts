
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { Tokenizer } from '../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js';
//not GWT import const Tokenizer

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DatabaseEncoder
            extends Object
         {
        

    public static encode(value: number[]): string{

 try { 
    let array: number[] = value;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    let index: number = 0;index < array.length; index++)
        {
stringBuffer!.append(Number(array[index]!).toString());
    

                        if(index < array.length -1)
                        
                                    {
                                    stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, "DatabaseEncoder", "decode", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

 }
   }
 
}


    public static decode(value: string): number[]{

 try { 
    let tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.SPACE);;
    

    let vector: BasicArrayList = tokenizer.getTokensFromString(value, new BasicArrayListD())!;;
    

    let byteVector: BasicArrayList = new BasicArrayListD();;
    

    let size: number = vector.size()!;;
    

    let byteOfData: string;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
byteOfData= vector.objectArray[index]! as string;
    
byteVector!.add(Number(byteOfData));
    
}


    let decode: number[] = new Array(byteVector!.size());;
    

    let decodeIndex: number = 0;;
    

    let aByte: number;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
aByte= byteVector!.objectArray[index]! as number;
    
decode[decodeIndex]= aByte!;
    
decodeIndex++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return decode;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putSE(commonStrings!.EXCEPTION, "DatabaseEncoder", "decode", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    

 }
   }
 
}


private constructor (){

            super();
        }


}

