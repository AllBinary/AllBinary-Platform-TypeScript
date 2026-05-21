
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
        
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Tokenizer
            extends Object
         {
        

    private sep: string

    private endSep: string = StringUtil.getInstance()!.EMPTY_STRING;
public constructor (sep: string){

            super();
        
                        if(sep == 
                                    null
                                 || sep.compareTo(StringUtil.getInstance()!.EMPTY_STRING) == 0)
                        
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

    var tokenList: BasicArrayList = new BasicArrayListD();
;
    

    var index: number = 0;
;
    

    var size: number = string.length!;
;
    

        while(index < size)
        {
index= string.indexOf(this.sep, index);
    

                        if(index !=  -1)
                        
                                    {
                                    
    var end: number = string.indexOf(this.endSep, index +this.sep.length)!;
;
    

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


    public getTokens(string: string, tokenVector: BasicArrayList): BasicArrayList{

    var index: number = 0;
;
    

    var end: number = 0;
;
    

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


    public getTokens(stringVector: BasicArrayList): Hashtable<any, any>{

    var tokenHashtable: Hashtable<any, any> = new Hashtable<any, any>();
;
    

    var string: string = StringUtil.getInstance()!.EMPTY_STRING;
;
    

    var end: number = 0;
;
    

    var size: number = stringVector!.size()!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
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
                
            

