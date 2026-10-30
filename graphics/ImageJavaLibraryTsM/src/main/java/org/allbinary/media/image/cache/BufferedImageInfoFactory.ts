
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
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BufferedImageInfo } from './BufferedImageInfo.js';
//not GWT import - same folder const BufferedImageInfo

export class BufferedImageInfoFactory
            extends Object
         {
        

    private static hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;

    public static getInstance(width: number, height: number, type: number): BufferedImageInfo{

    let stringbuffer: StringMaker = new StringMaker();;
    
stringbuffer.appendint(width);
    
stringbuffer.appendint(height);
    
stringbuffer.appendint(type);
    

    let key: string = stringbuffer.toString()!;;
    

    let bufferedImageInfo: BufferedImageInfo = BufferedImageInfoFactory.hashMap!.get(key) as BufferedImageInfo;;
    

                        if(bufferedImageInfo == 
                                    null
                                )
                        
                                    {
                                    bufferedImageInfo= new BufferedImageInfo(width, height, type);
    
BufferedImageInfoFactory.hashMap!.put(key, bufferedImageInfo);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageInfo;
    
}


private constructor (){

            super();
        }


}

