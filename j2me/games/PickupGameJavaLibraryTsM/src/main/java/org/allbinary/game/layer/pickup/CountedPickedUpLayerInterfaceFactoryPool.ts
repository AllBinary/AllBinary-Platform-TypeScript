
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
        



import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class CountedPickedUpLayerInterfaceFactoryPool
            extends Object
         {
        

    private SINGLETON: CountedPickedUpLayerInterfaceFactoryPool = new CountedPickedUpLayerInterfaceFactoryPool();
        
        

    public static getInstance(): CountedPickedUpLayerInterfaceFactoryPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public static init(){
SINGLETON= CountedPickedUpLayerInterfaceFactoryPool()
}


    private list: BasicArrayList
private constructor (){

            super();
            list= BasicArrayList()
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

