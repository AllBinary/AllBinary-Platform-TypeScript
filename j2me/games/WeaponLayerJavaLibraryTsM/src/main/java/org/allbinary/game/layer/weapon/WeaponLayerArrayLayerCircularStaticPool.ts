
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
        



import { CircularIndexUtil } from "../../../../../org/allbinary/util/CircularIndexUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WeaponLayerArrayLayerCircularStaticPool
            extends Object
         {
        

    private static readonly instance: WeaponLayerArrayLayerCircularStaticPool = new WeaponLayerArrayLayerCircularStaticPool();
        
        

    public static getInstance(): WeaponLayerArrayLayerCircularStaticPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly MAX: number = 5;
        
        

    private circularIndexUtil: CircularIndexUtil = CircularIndexUtil.getInstance(MAX)!;
        
        

    private ALL_WEAPONLAYER_ARRAY: any[][][] = new Array(4)
                                                        ;
        
        

    public init(){

    var WEAPONLAYER_ARRAY: any[][] = arrayOfNulls<Array<Any?>>(this.MAX *2)
                                                            ;
        
        
;
    

    var TWO_WEAPONLAYER_ARRAY: any[][] = arrayOfNulls<Array<Any?>>(this.MAX)
                                                            ;
        
        
;
    

    var THREE_WEAPONLAYER_ARRAY: any[][] = arrayOfNulls<Array<Any?>>(this.MAX)
                                                            ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < this.MAX; index++)
        {
WEAPONLAYER_ARRAY[index]= new Array(1);
    
TWO_WEAPONLAYER_ARRAY[index]= new Array(2);
    
THREE_WEAPONLAYER_ARRAY[index]= new Array(3);
    
}

this.ALL_WEAPONLAYER_ARRAY[1]= WEAPONLAYER_ARRAY;
    
this.ALL_WEAPONLAYER_ARRAY[2]= TWO_WEAPONLAYER_ARRAY;
    
this.ALL_WEAPONLAYER_ARRAY[3]= THREE_WEAPONLAYER_ARRAY;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(size: number): WeaponLayer[]{
var size = size

    var weaponLayerArray: WeaponLayer[] = this.ALL_WEAPONLAYER_ARRAY[size]![this.circularIndexUtil!.getIndex()]! as Array<WeaponLayer?>;
        
        
;
    
this.circularIndexUtil!.next();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return weaponLayerArray;
    
}


}
                
            

