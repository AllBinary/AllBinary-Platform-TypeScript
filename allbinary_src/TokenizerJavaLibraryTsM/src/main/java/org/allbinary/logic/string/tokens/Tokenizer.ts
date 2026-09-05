
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
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
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

    var tokenList: BasicArrayList = new BasicArrayListD();;
    

    var index: number = 0;;
    

    var size: number = string.length!;;
    

        while(index < size)
        {
index= string.indexOf(this.sep, index);
    

                        if(index !=  -1)
                        
                                    {
                                    
    var end: number = string.indexOf(this.endSep, index +this.sep.length)!;;
    

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

    var index: number = 0;;
    

    var end: number = 0;;
    

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


    public getTokens(stringVector: BasicArrayList): ABHashtable{

    var tokenHashtable: ABHashtable = StdUtil.getInstance()!.createHashtable()!;;
    

    var string: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

    var end: number = 0;;
    

    var size: number = stringVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
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



