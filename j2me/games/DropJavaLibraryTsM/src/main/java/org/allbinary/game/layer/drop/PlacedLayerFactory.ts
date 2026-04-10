
        /* Generated Code Do Not Modify */
        



import { AllBinaryLayerFactoryInterface } from "../../../../../org/allbinary/layer/AllBinaryLayerFactoryInterface.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class PlacedLayerFactory
            extends Object
         {
        

    private static readonly instance: PlacedLayerFactory = new PlacedLayerFactory();
        
        

    public static getInstance(): PlacedLayerFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
            }


    public clear(){
clear()
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list.size();
    
}


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

    public getRandomInstance(): AllBinaryLayerFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getRandom(list) as AllBinaryLayerFactoryInterface;
    
}


    public add(layerInterfaceFactoryInterface: AllBinaryLayerFactoryInterface){
var layerInterfaceFactoryInterface = layerInterfaceFactoryInterface
add(layerInterfaceFactoryInterface)
}


}
                
            

