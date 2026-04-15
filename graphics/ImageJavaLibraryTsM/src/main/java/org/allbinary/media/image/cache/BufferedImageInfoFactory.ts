
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class BufferedImageInfoFactory
            extends Object
         {
        

    private hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        

    public static getInstance(width: number, height: number, type: number): BufferedImageInfo{
var width = width
var height = height
var type = type

    var stringbuffer: StringMaker = new StringMaker();
        
        
;
    
stringbuffer.appendint(width);
    
stringbuffer.appendint(height);
    
stringbuffer.appendint(type);
    

    var key: string = stringbuffer.toString()!;
        
        
;
    

    var bufferedImageInfo: BufferedImageInfo = hashMap!.get(key as Object);

                         as BufferedImageInfo;
        
        
;
    

                        if(bufferedImageInfo == 
                                    null
                                )
                        
                                    {
                                    bufferedImageInfo= new BufferedImageInfo(width, height, type);
    
hashMap!.put(key, bufferedImageInfo);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageInfo;
    
}

private constructor (){

            super();
            }


}
                
            

