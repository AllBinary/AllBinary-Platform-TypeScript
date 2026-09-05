
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
import { LayerInterfaceFactoryInterface } from '../../../../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js';
//not GWT import const LayerInterfaceFactoryInterface = globalThis.org.allbinary.layer.LayerInterfaceFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTrackAdjacentDropLayerFactory
            extends Object
         {
        

    private static DROP_LAYER_FACTORY: RaceTrackAdjacentDropLayerFactory = new RaceTrackAdjacentDropLayerFactory();

    public static getInstance(): RaceTrackAdjacentDropLayerFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RaceTrackAdjacentDropLayerFactory.DROP_LAYER_FACTORY;
    
}


    private list: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        }


    public clear(){
this.list.clear();
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.size();;
    
}


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

    public getRandomInstance(): LayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getRandom(this.list) as LayerInterfaceFactoryInterface;
    
}


    public add(layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface){
this.list.add(layerInterfaceFactoryInterface);
    
}


}



