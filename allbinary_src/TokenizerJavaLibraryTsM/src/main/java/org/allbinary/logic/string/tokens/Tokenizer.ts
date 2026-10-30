
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

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
        
export class Tokenizer
            extends Object
         {
        

    private sep: string;

    private endSep: string = StringUtil.getInstance()!.EMPTY_STRING;

public constructor (sep: string){

            super();
        
                        if(sep == 
                                    null
                                 || TsUtil.getInstance()!.compareTo(sep, StringUtil.getInstance()!.EMPTY_STRING) == 0)
                        
                                    {
                                    


                            throw new Exception("Sep provided is not valid");
                    

                                    }
                                
this.sep= sep;
    
}


    public setSep(sep: string){
this.sep= sep;
    
}


    public setEndSep(endSep: string){
this.endSep= endSep;
    
}


    public getInsideSep(string: string): BasicArrayList{

    let tokenList: BasicArrayList = new BasicArrayListD();;
    

    let index: number = 0;;
    

    let size: number = string.length!;;
    

        while(index < size)
        {
index= string.indexOf(this.sep, index);
    

                        if(index !=  -1)
                        
                                    {
                                    
    let end: number = string.indexOf(this.endSep, index +this.sep.length)!;;
    

                        if(end !=  -1)
                        
                                    {
                                    tokenList!.add(string.substring(index +this.sep.length, end -(this.endSep!.length -1)));
    
index= end +this.endSep!.length;
    

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tokenList;
    
}


    public getTokensFromString(string: string, tokenVector: BasicArrayList): BasicArrayList{

    let index: number = 0;;
    

    let end: number = 0;;
    

        while(index < string.length)
        {
end= string.indexOf(this.sep, index);
    

                        if(end !=  -1)
                        
                                    {
                                    tokenVector!.add(string.substring(index, end));
    
index= end +this.sep.length;
    

                                    }
                                
                        else {
                            tokenVector!.add(string.substring(index, string.length));
    
break;

                    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tokenVector;
    
}


    public getTokens(stringVector: BasicArrayList): ABHashtable<any, any>{

    let tokenHashtable: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;;
    

    let string: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

    let end: number = 0;;
    

    let size: number = stringVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
string= stringVector!.objectArray[index]! as string;
    
end= string.indexOf(this.sep);
    

                        if(end >= 0)
                        
                                    {
                                    tokenHashtable!.put(string.substring(0, end), string.substring(end +1, string.length));
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tokenHashtable;
    
}


}

