
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
        



import { PickedUpLayerInterfaceFactoryInterface } from "../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DropLayerFactory
            extends Object
         {
        

    private static readonly DROP_LAYER_FACTORY: DropLayerFactory = new DropLayerFactory();
        
        

    public static getInstance(): DropLayerFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DROP_LAYER_FACTORY;
    
}


    private readonly list: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
            }


    public clear(){
list.clear();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list.size();

                        ;
    
}


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

    public getRandomInstance(): PickedUpLayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getRandom(list);

                         as PickedUpLayerInterfaceFactoryInterface;
    
}


    public add(layerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface){
var layerInterfaceFactoryInterface = layerInterfaceFactoryInterface
list.add(layerInterfaceFactoryInterface);
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

