
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
        



import { BasicArrayList } from "../../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../../../../org/allbinary/util/BasicArrayListUtil.js";

    
import { LayerInterfaceFactoryInterface } from "../../../../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTrackAdjacentDropLayerFactory
            extends Object
         {
        

    private DROP_LAYER_FACTORY: RaceTrackAdjacentDropLayerFactory = new RaceTrackAdjacentDropLayerFactory();
        
        

    public static getInstance(): RaceTrackAdjacentDropLayerFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DROP_LAYER_FACTORY;
    
}


    private list: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
        }


    public clear(){
this.list.clear();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list.size();

                        ;
    
}


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

    public getRandomInstance(): LayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getRandom(this.list);

                         as LayerInterfaceFactoryInterface;
    
}


    public add(layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface){
var layerInterfaceFactoryInterface = layerInterfaceFactoryInterface
this.list.add(layerInterfaceFactoryInterface);
    
}


}
                
            

