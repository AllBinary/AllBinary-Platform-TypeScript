
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { AllBinaryLayerFactoryInterface } from '../../../../../org/allbinary/layer/AllBinaryLayerFactoryInterface.js';
      const AllBinaryLayerFactoryInterface = globalThis.org.allbinary.layer.AllBinaryLayerFactoryInterface;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PlacedLayerFactory
            extends Object
         {
        

    private static readonly instance: PlacedLayerFactory = new PlacedLayerFactory();

    public static getInstance(): PlacedLayerFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PlacedLayerFactory.instance;
    
}


    private readonly list: BasicArrayList = new BasicArrayListD();

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

    public getRandomInstance(): AllBinaryLayerFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getRandom(this.list) as AllBinaryLayerFactoryInterface;
    
}


    public add(layerInterfaceFactoryInterface: AllBinaryLayerFactoryInterface){
this.list.add(layerInterfaceFactoryInterface);
    
}


}
                
            

