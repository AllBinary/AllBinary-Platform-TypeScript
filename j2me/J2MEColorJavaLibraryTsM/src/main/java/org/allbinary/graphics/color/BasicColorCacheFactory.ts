
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../java/util/Hashtable.js";

    

export class BasicColorCacheFactory
            extends Object
         {
        

    private static readonly instance: BasicColorCacheFactory = new BasicColorCacheFactory();
        
        

    public static getInstance(): BasicColorCacheFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        
private constructor (){

            super();
            }


    public add(basicDefaultColor: BasicColor){
    //var basicDefaultColor = basicDefaultColor
hashtable.put(Integer(basicDefaultColor!.toInt()), basicDefaultColor);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(integer: Integer): BasicColor{
    //var integer = integer

    var basicColor: BasicColor = hashtable.get(integer as Object);

                         as BasicColor;
        
        
;
    

                        if(basicColor == 
                                    null
                                )
                        
                                    {
                                    basicColor= BasicColor(integer.toInt());
    
hashtable.put(integer, basicColor);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


}
                
            

