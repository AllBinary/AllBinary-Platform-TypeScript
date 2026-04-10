
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../java/util/Set.js";

    
import { AppUrlGlobals } from "../../../../../../org/allbinary/globals/AppUrlGlobals.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class Replace
            extends Object
         {
        

    public static main(args: string[]){
var args = args

        try {
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();
        
        

setWebappPath("G:/mnt/bc/mydev/work/allbinary_src/ToolsJavaLibrary/tools")
init(appUrlGlobals)

    var testString: string = "\"super gun\" big tank \"goodgunriflegun";
        
        


    var replace: Replace = new Replace("gun", "abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz");
        
        

println("Old String: " +testString)
testString= replace.all(testString)
println("New String: " +testString)

    var replaceCat: Replace = new Replace("abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz", stringUtil!.EMPTY_STRING);
        
        

testString= replaceCat!.all(testString)
println("New String: " +testString)
} catch(e: Exception)
            {
}

}


    private readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly REPLACERS_: string = "Replacers: ";
        
        

    private readonly ALL: string = "all";
        
        

    private readonly FOUND_KEY: string = "found key total: ";
        
        

    private readonly hashMap: HashMap<Any, Any>
public constructor (key: string, value: string){

            super();
                //var key = key
    //var value = value
hashMap= HashMap<Any, Any>()
put(
                                                [
                                                    key;
        
        
                                                ], 
                                                [
                                                    value;
        
        
                                                ])

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    put(REPLACERS_ +this.hashMap!.toString(), this, commonStrings!.CONSTRUCTOR)

                                    }
                                
}

public constructor (keys: string[], values: string[]){

            super();
                //var keys = keys
    //var values = values
hashMap= HashMap<Any, Any>()
put(keys, values)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    put(REPLACERS_ +this.hashMap!.toString(), this, commonStrings!.CONSTRUCTOR)

                                    }
                                
}

public constructor (hashMap: HashMap<Any, Any>){

            super();
            var hashMap = hashMap
this.hashMap= hashMap

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE_INFO))
                        
                                    {
                                    put(REPLACERS_ +this.hashMap!.toString(), this, commonStrings!.CONSTRUCTOR)

                                    }
                                
}


    public all(replace: string): string{
var replace = replace



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.upTo(replace, Integer.MIN_VALUE);
    
}


    public upTo(replace: string, total: number): string{
var replace = replace
var total = total

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    put(REPLACERS_ +this.hashMap!.toString(), this, ALL)

                                    }
                                

    var newStringBuffer: StringMaker = new StringMaker();
        
        


    var totalNumberOfReplaces: number = 0;
        
        


    var keySet: Set = hashMap!.keys!;
        
        


    var keys: string[]


    var values: string[]


    var keyArray: any = {}[] = keySet!.toTypedArray()!;
        
        


    var size: number = keyArray!.length
                ;
        
        





                        for (
    var index2: number = 0;
        
        
index2 < size; index2++)
        {
keys= keyArray[index2]! as Array<String?>
values= hashMap!.get(keys as Object) as Array<String?>

    var foundTotal: number = 0;
        
        


    var index: number = 0;
        
        


        while(index < replace.length)
        {

    var begin: number = replace.indexOf(keys[0]!, index)!;
        
        


    
                        if(begin !=  -1)
                        
                                    {
                                    foundTotal++

    
                        if(foundTotal % 100 == 0)
                        
                                    {
                                    println(FOUND_KEY +foundTotal)

                                    }
                                

    var end: number = begin +keys[0]!.length();
        
        

delete(0, newStringBuffer!.length())
append(replace.substring(0, begin))
append(values[0]!)
index= newStringBuffer!.length()
append(replace.substring(end, replace.length))
replace= newStringBuffer!.toString()

    
                        if(keys.length > 1)
                        
                                    {
                                    
    var begin2: number = replace.indexOf(keys[1]!, index)!;
        
        


    
                        if(begin2 !=  -1)
                        
                                    {
                                    
    var end2: number = begin2 +keys[1]!.length();
        
        

delete(0, newStringBuffer!.length())
append(replace.substring(0, begin2))
append(values[1]!)
index= newStringBuffer!.length()
append(replace.substring(end2, replace.length))
replace= newStringBuffer!.toString()

                                    }
                                

                                    }
                                
totalNumberOfReplaces++

    
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


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    put("Total Number Of Replaces: " +totalNumberOfReplaces, this, ALL)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return replace;
    
}


    public line(replace: string): string{
var replace = replace

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    put(REPLACERS_ +this.hashMap!.toString(), this, ALL)

                                    }
                                

    var newStringBuffer: StringMaker = new StringMaker();
        
        


    var totalNumberOfReplaces: number = 0;
        
        


    var keySet: Set = hashMap!.keys!;
        
        


    var key: string


    var value: string


    var keyArray: any = {}[] = keySet!.toTypedArray()!;
        
        


    var size: number = keyArray!.length
                ;
        
        





                        for (
    var index2: number = 0;
        
        
index2 < size; index2++)
        {
key= keyArray[index2]! as String
value= hashMap!.get(key as Object) as String

    var index: number = 0;
        
        


        while(index < replace.length)
        {
delete(0, newStringBuffer!.length())

    var begin: number = replace.indexOf(key, index)!;
        
        


    
                        if(begin !=  -1)
                        
                                    {
                                    println(FOUND_KEY)

    var end: number = replace.indexOf('\n', begin +key.length) +1;
        
        


    
                        if(end >= 0)
                        
                                    {
                                    append(replace.substring(0, begin))
index= newStringBuffer!.length()
append(replace.substring(end, replace.length))
replace= newStringBuffer!.toString()
totalNumberOfReplaces++

                                    }
                                

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}

}


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.REPLACE))
                        
                                    {
                                    put("Total Number Of Replaces: " +totalNumberOfReplaces, this, ALL)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return replace;
    
}


}
                
            

