
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../java/util/Set.js";

    
import { AppUrlGlobals } from "../../../../../../org/allbinary/globals/AppUrlGlobals.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Replace
            extends Object
         {
        

    public static main(args: string[]){
var args = args

        try {
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();
        
        
;
    
appUrlGlobals!.setWebappPath("G:/mnt/bc/mydev/work/allbinary_src/ToolsJavaLibrary/tools");
    
URLGLOBALS.init(appUrlGlobals);
    

    var testString: string = "\"super gun\" big tank \"goodgunriflegun";
        
        
;
    

    var replace: Replace = new Replace("gun", "abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz");
        
        
;
    
console.log("Old String: " +testString);
    
testString= replace.all(testString);
    
console.log("New String: " +testString);
    

    var replaceCat: Replace = new Replace("abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz", stringUtil!.EMPTY_STRING);
        
        
;
    
testString= replaceCat!.all(testString);
    
console.log("New String: " +testString);
    

                //: 
} catch(e) 
            {
}

}


    private readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly REPLACERS_: string = "Replacers: ";
        
        

    private readonly ALL: string = "all";
        
        

    private readonly FOUND_KEY: string = "found key total: ";
        
        

    private readonly hashMap: HashMap<any, any>
public constructor (key: string, value: string){

            super();
            //var key = key
    //var value = value
this.hashMap= new HashMap<any, any>();
    
this.hashMap!.put(
                                                [
                                                    key;
        
        
                                                ], 
                                                [
                                                    value;
        
        
                                                ]);
    
}

public constructor (keys: string[], values: string[]){

            super();
            //var keys = keys
    //var values = values
this.hashMap= new HashMap<any, any>();
    
this.hashMap!.put(keys, values);
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
        var hashMap = hashMap
this.hashMap= hashMap;
    
}


    public all(replace: string): string{
var replace = replace



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.upTo(replace, Integer.MIN_VALUE);

                        ;
    
}


    public upTo(replace: string, total: number): string{
var replace = replace
var total = total

    var newStringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var totalNumberOfReplaces: number = 0;
        
        
;
    

    var keySet: Set = this.hashMap!.keys!;
        
        
;
    

    var keys: string[]
;
    

    var values: string[]
;
    

    var keyArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var index2: number = 0;
        
        
index2 < size; index2++)
        {
keys= keyArray[index2]! as Array<String?>;
    
values= this.hashMap!.get(keys as Object);

                         as Array<String?>;
    

    var foundTotal: number = 0;
        
        
;
    

    var index: number = 0;
        
        
;
    

        while(index < replace.length)
        {

    var begin: number = replace.indexOf(keys[0]!, index)!;
        
        
;
    

                        if(begin !=  -1)
                        
                                    {
                                    foundTotal++;
    

                        if(foundTotal % 100 == 0)
                        
                                    {
                                    console.log(this.FOUND_KEY +foundTotal);
    

                                    }
                                

    var end: number = begin +keys[0]!.length();
        
        
;
    
newStringBuffer!.delete(0, newStringBuffer!.length());
    
newStringBuffer!.append(replace.substring(0, begin));
    
newStringBuffer!.append(values[0]!);
    
index= newStringBuffer!.length();
    
newStringBuffer!.append(replace.substring(end, replace.length));
    
replace= newStringBuffer!.toString();
    

                        if(keys.length > 1)
                        
                                    {
                                    
    var begin2: number = replace.indexOf(keys[1]!, index)!;
        
        
;
    

                        if(begin2 !=  -1)
                        
                                    {
                                    
    var end2: number = begin2 +keys[1]!.length();
        
        
;
    
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
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    this.logUtil!.putF("Total Number Of Replaces: " +totalNumberOfReplaces, this, ALL);
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return replace;
    
}


    public line(replace: string): string{
var replace = replace

    var newStringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var totalNumberOfReplaces: number = 0;
        
        
;
    

    var keySet: Set = this.hashMap!.keys!;
        
        
;
    

    var key: string
;
    

    var value: string
;
    

    var keyArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var index2: number = 0;
        
        
index2 < size; index2++)
        {
key= keyArray[index2]! as String;
    
value= this.hashMap!.get(key as Object);

                         as String;
    

    var index: number = 0;
        
        
;
    

        while(index < replace.length)
        {
newStringBuffer!.delete(0, newStringBuffer!.length());
    

    var begin: number = replace.indexOf(key, index)!;
        
        
;
    

                        if(begin !=  -1)
                        
                                    {
                                    console.log(this.FOUND_KEY);
    

    var end: number = replace.indexOf('\n', begin +key.length) +1;
        
        
;
    

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


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    this.logUtil!.putF("Total Number Of Replaces: " +totalNumberOfReplaces, this, ALL);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return replace;
    
}


}
                
            

