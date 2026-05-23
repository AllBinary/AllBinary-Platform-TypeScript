
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
        



            import { Object } from '../../../java/lang/Object.js';


        
import { Enumeration } from '../../../java/util/Enumeration.js';
      
import { Hashtable } from '../../../java/util/Hashtable.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EnumerationUtil } from './EnumerationUtil.js';
import { BasicArrayListS } from './BasicArrayListS.js';
import { BasicArrayList } from './BasicArrayList.js';

export class HashtableUtil
            extends Object
         {
        

    private static readonly instance: HashtableUtil = new HashtableUtil();

    public static getInstance(): HashtableUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HashtableUtil.instance;
    
}


    private readonly enumerationUtil: EnumerationUtil = EnumerationUtil.getInstance()!;

    public putAll(fromHashtable: Hashtable<any, any>, hashtable: Hashtable<any, any>){

    var enumeration: Enumeration<any> = fromHashtable!.keys()!;
;
    

    var keyCanBeNull: any
;
    

    var valueCanBeNull: any
;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
keyCanBeNull= this.enumerationUtil!.nextElement(enumeration)!;
    
valueCanBeNull= hashtable.get(keyCanBeNull);
    

                        if(valueCanBeNull == 
                                    null
                                )
                        
                                    {
                                    
                                    }
                                
                        else {
                            hashtable.put(keyCanBeNull, valueCanBeNull);
    

                        }
                            
}

}


    public getKeysAsArray(hashtable: Hashtable<any, any>): any[]{

    var objectArray: any[] = new Array(hashtable.length);
;
    

    var index: number = 0;
;
    

    var enumeration: Enumeration<any> = hashtable.keys()!;
;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
objectArray[index++]= this.enumerationUtil!.nextElement(enumeration)!;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray;
    
}


    public getKeysAsList(hashtable: Hashtable<any, any>): BasicArrayList{

    var list: BasicArrayList = new BasicArrayListS(hashtable.length);
;
    

    var enumeration: Enumeration<any> = hashtable.keys()!;
;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
list.add(this.enumerationUtil!.nextElement(enumeration)!);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

