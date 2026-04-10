
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
        



import { Enumeration } from "../../../java/util/Enumeration.js";

    
import { Hashtable } from "../../../java/util/Hashtable.js";

    

export class HashtableUtil
            extends Object
         {
        

    private static readonly instance: HashtableUtil = new HashtableUtil();
        
        

    public static getInstance(): HashtableUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public putAll(fromHashtable: Hashtable<Any, Any>, hashtable: Hashtable<Any, Any>){
var fromHashtable = fromHashtable
var hashtable = hashtable

    var enumeration: Enumeration<Any?> = fromHashtable!.keys()!;
        
        


        while(enumeration.hasMoreElements())
        {

    var key: any = {} = enumeration.nextElement()!!;
        
        


    var value: any = {} = hashtable.get(key as Object)!;
        
        


                        if(value == 
                                    null
                                )
                        
                                    {
                                    
                                    }
                                
                        else {
                            hashtable.put(key, value)

                        }
                            
}

}


    public getKeysAsArray(hashtable: Hashtable<Any, Any>): any = {}[]{
var hashtable = hashtable

    var objectArray: any = {}[] = new Array(hashtable.length);
        
        


    var index: number = 0;
        
        


    var enumeration: Enumeration<Any?> = hashtable.keys()!;
        
        


        while(enumeration.hasMoreElements())
        {
objectArray[index++]= enumeration.nextElement()!
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray;
    
}


    public getKeysAsList(hashtable: Hashtable<Any, Any>): BasicArrayList{
var hashtable = hashtable

    var list: BasicArrayList = new BasicArrayList(hashtable.length);
        
        


    var enumeration: Enumeration<Any?> = hashtable.keys()!;
        
        


        while(enumeration.hasMoreElements())
        {
list.add(enumeration.nextElement()!)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

