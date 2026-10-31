
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
        
            import { System } from '../../../../../../java/lang/System.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { J2SEUtil } from '../../../../../../org/allbinary/J2SEUtil.js';
//not GWT import const J2SEUtil

import { AppUrlGlobals } from '../../../../../../org/allbinary/globals/AppUrlGlobals.js';
//not GWT import const AppUrlGlobals

import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Replace
            extends Object
         {
        

    public static main(args: string[]){

 try { 
    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();;
    
appUrlGlobals!.setWebappPath("G:/mnt/bc/mydev/work/allbinary_src/ToolsJavaLibrary/tools");
    
URLGLOBALS.init(appUrlGlobals);
    

    let testString: string = "\"super gun\" big tank \"goodgunriflegun";;
    

    let replace: Replace = new Replace("gun", "abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz");;
    
console.log("Old String: " +testString);
    
testString= replace.all(testString);
    
console.log("New String: " +testString);
    

    let replaceCat: Replace = new Replace("abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz", stringUtil!.EMPTY_STRING);;
    
testString= replaceCat!.all(testString);
    
console.log("New String: " +testString);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

 }
   }
 
}


    private readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly j2seUtil: J2SEUtil = J2SEUtil.getInstance()!;

    private readonly REPLACERS_: string = "Replacers: ";

    private readonly ALL: string = "all";

    private readonly FOUND_KEY: string = "found key total: ";

    private readonly hashMap: HashMap<any, any>;

    public constructor(...args: any[]) {
        super();if(args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') {
            
            this.constructor$0(args[0], args[1]);
            
        }
        else if(args.length === 2) {
            
            this.constructor$1(args[0], args[1]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$2(args[0]);
            
        }
        
    }
    
    private constructor$0(key: string, value: string): void {
        this.hashMap= StdUtil.getInstance()!.createHashMap();
    
this.hashMap!.put(
                                                [
                                                    key
                                                ], 
                                                [
                                                    value
                                                ]);
    

    }
    
    private constructor$1(keys: string[], values: string[]): void {
        this.hashMap= StdUtil.getInstance()!.createHashMap();
    
this.hashMap!.put(keys, values);
    

    }
    
    private constructor$2(hashMap: HashMap<any, any>): void {
        this.hashMap= hashMap;
    

    }
    
    public all(replace: string): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.upTo(replace, Integer.MIN_VALUE);;
    
}


    public upTo(replace: string, total: number): string{

    let newStringBuffer: StringMaker = new StringMaker();;
    

    let totalNumberOfReplaces: number = 0;;
    

    let keys: string[];;
    

    let values: string[];;
    

    let keyArray: any[] = this.j2seUtil!.getHashMapAsArray(this.hashMap)!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let index2: number = 0;index2 < size; index2++)
        {
keys= keyArray[index2]! as string[];
    
values= this.hashMap!.get(keys) as string[];
    

    let foundTotal: number = 0;;
    

    let index: number = 0;;
    

    let nextKey: string;;
    

    let end: number= 0;;
    

    let nextSecondKey: string;;
    

    let begin2: number= 0;;
    

        while(index < replace.length)
        {

    let begin: number = replace.indexOf(keys[0]!, index)!;;
    

                        if(begin !=  -1)
                        
                                    {
                                    foundTotal++;
    

                        if(foundTotal % 100 == 0)
                        
                                    {
                                    console.log(this.FOUND_KEY +foundTotal);
    

                                    }
                                
nextKey= keys[0]!;
    
end= begin +nextKey!.length;
    
newStringBuffer!.delete(0, newStringBuffer!.length());
    
newStringBuffer!.append(replace.substring(0, begin));
    
newStringBuffer!.append(values[0]!);
    
index= newStringBuffer!.length();
    
newStringBuffer!.append(replace.substring(end, replace.length));
    
replace= newStringBuffer!.toString();
    

                        if(keys.length > 1)
                        
                                    {
                                    nextSecondKey= keys[1]!;
    
begin2= replace.indexOf(nextSecondKey, index);
    

                        if(begin2 !=  -1)
                        
                                    {
                                    
    let end2: number = begin2 +nextSecondKey!.length;;
    
newStringBuffer!.delete(0, newStringBuffer!.length());
    
newStringBuffer!.append(replace.substring(0, begin2));
    
newStringBuffer!.append(values[1]!);
    
index= newStringBuffer!.length();
    
newStringBuffer!.append(replace.substring(end2, replace.length));
    
replace= newStringBuffer!.toString();
    

                                    }
                                

                                    }
                                
totalNumberOfReplaces++;
    

                        if(total != Integer.MIN_VALUE && totalNumberOfReplaces >= total)
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}

}


                        if(totalNumberOfReplaces > 0)
                        
                                    {
                                    
                        if(LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    this.logUtil!.putF("Total Number Of Replaces: " +totalNumberOfReplaces, this, this.ALL);
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return replace;
    
}


    public line(replace: string): string{

    let newStringBuffer: StringMaker = new StringMaker();;
    

    let totalNumberOfReplaces: number = 0;;
    

    let key: string;;
    

    let value: string;;
    

    let keyArray: any[] = this.j2seUtil!.getHashMapAsArray(this.hashMap)!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let index2: number = 0;index2 < size; index2++)
        {
key= keyArray[index2]! as string;
    
value= this.hashMap!.get(key) as string;
    

    let index: number = 0;;
    

        while(index < replace.length)
        {
newStringBuffer!.delete(0, newStringBuffer!.length());
    

    let begin: number = replace.indexOf(key, index)!;;
    

                        if(begin !=  -1)
                        
                                    {
                                    console.log(this.FOUND_KEY);
    

    let end: number = replace.indexOf('\n', begin +key.length) +1;;
    

                        if(end >= 0)
                        
                                    {
                                    newStringBuffer!.append(replace.substring(0, begin));
    
index= newStringBuffer!.length();
    
newStringBuffer!.append(replace.substring(end, replace.length));
    
replace= newStringBuffer!.toString();
    
totalNumberOfReplaces++;
    

                                    }
                                

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}

}


                        if(LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    this.logUtil!.putF("Total Number Of Replaces: " +totalNumberOfReplaces, this, this.ALL);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return replace;
    
}


}

