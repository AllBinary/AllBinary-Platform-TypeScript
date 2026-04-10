
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
        



import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class IndexedBasicArrayListCache extends BaseBasicArrayListCache
                , CacheInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private size: number = 0;
        
        

    index: number = 0;
        
        
public constructor (){

            super();
            }

public constructor (size: number){

            super();
            var size = size
this.init(size)
}


                @Throws(Exception::class)
            
    public init(size: number){
var size = size

    
                        if(this.size < size)
                        
                                    {
                                    ensureCapacity(size)




                        for (
    var index: number = size -1;
        
        
index >= this.size; index--)
        {
this.add()
}

this.size= size

                                    }
                                
}


    public get(index: number): any = {}{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.objectArray[index]!;
    
}


                @Throws(Exception::class)
            
    public add(){
}


                @Throws(Exception::class)
            
    public add(anyType: any = {}){
var anyType = anyType
add(anyType)
}


                @Throws(Exception::class)
            
    public add(cacheableInterface: CacheableInterface){
var cacheableInterface = cacheableInterface
add(cacheableInterface)
}


                @Throws(Exception::class)
            
    public add(cacheableInterfaces: CacheableInterface[]){
var cacheableInterfaces = cacheableInterfaces



                            throw Exception("No Imple")
}


    public clear(){
index= 0
}


}
                
            

