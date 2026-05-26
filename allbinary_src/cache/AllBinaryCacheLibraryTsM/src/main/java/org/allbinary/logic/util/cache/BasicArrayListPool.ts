
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
        
import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbstractArrayListPool } from './AbstractArrayListPool.js';
import { CacheableInterfaceFactoryInterface } from './CacheableInterfaceFactoryInterface.js';
import { CacheableInterface } from './CacheableInterface.js';
import { BasicArrayListCacheable } from './BasicArrayListCacheable.js';

export class BasicArrayListPool extends AbstractArrayListPool {
        

public constructor (cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface){
            super(cacheableInterfaceFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public clear(){
this.buffers.clear();
    
}


                //@Throws(Exception.constructor)
            
    public remove(key: any = {}): CacheableInterface{

    var size: number = this.buffers.size()!;;
    

                        if(size > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.buffers.removeAt(size -1) as CacheableInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cacheableInterfaceFactoryInterface!.getInstance(key);;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public addAll(usedList: BasicArrayList){




                        for (
    var index: number = usedList!.size()!;--index >= 0; )
        {

    var anyType: CacheableInterface = usedList!.objectArray[index]! as CacheableInterface;;
    
this.add(anyType);
    
}

usedList!.clear();
    
}


                //@Throws(Exception.constructor)
            
    public releaseUsedBackToPool(usedList: BasicArrayList){




                        for (
    var index: number = usedList!.size()!;--index >= 0; )
        {

    var list: BasicArrayListCacheable = usedList!.objectArray[index]! as BasicArrayListCacheable;;
    

                        if(list.size() == 0)
                        
                                    {
                                    usedList!.removeAt(index);
    
this.add(list);
    

                                    }
                                
}

}


}
                
            

