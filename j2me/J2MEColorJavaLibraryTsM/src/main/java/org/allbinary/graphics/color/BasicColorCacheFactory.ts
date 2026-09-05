
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
//not plain js import { StdUtil } from '../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { ABHashtable } from '../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicColor } from './BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

                import { BasicColorFactory } from './BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

                
export class BasicColorCacheFactory
            extends Object
         {
        

    private static readonly instance: BasicColorCacheFactory = new BasicColorCacheFactory();

    public static getInstance(): BasicColorCacheFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicColorCacheFactory.instance;
    
}


    private readonly hashtable: ABHashtable = StdUtil.getInstance()!.createHashtable()!;

private constructor (){

            super();
        }


    public add(basicDefaultColor: BasicColor){
this.hashtable.put(new Integer(basicDefaultColor!.intValue()), basicDefaultColor);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getAndOrCreate(integer: Integer): BasicColor{

    var basicColor: BasicColor = this.hashtable.get(integer) as BasicColor;;
    

                        if(basicColor == 
                                    null
                                )
                        
                                    {
                                    basicColor= BasicColorFactory.getInstance()!.createInstance(integer.intValue());
    
this.hashtable.put(integer, basicColor);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


}



