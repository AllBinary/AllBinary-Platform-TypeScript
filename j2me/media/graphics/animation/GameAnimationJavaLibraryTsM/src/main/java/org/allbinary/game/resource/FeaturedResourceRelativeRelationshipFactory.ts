
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { RelativeRelationship } from '../../../../org/allbinary/graphics/RelativeRelationship.js';
      //not GWT import const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { RelativeLayerRelationship } from '../../../../org/allbinary/layer/relationship/RelativeLayerRelationship.js';
      //not GWT import const RelativeLayerRelationship = globalThis.org.allbinary.layer.relationship.RelativeLayerRelationship;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } from '../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FeaturedResourceFactory } from './FeaturedResourceFactory.js';
import { ResourceRelativeRelationshipFactoryInterface } from './ResourceRelativeRelationshipFactoryInterface.js';

export class FeaturedResourceRelativeRelationshipFactory extends FeaturedResourceFactory {
        

    private static INSTANCE: FeaturedResourceRelativeRelationshipFactory = new FeaturedResourceRelativeRelationshipFactory();

    public static getInstance(): FeaturedResourceRelativeRelationshipFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FeaturedResourceRelativeRelationshipFactory.INSTANCE;
    
}


private constructor (){

            super();
        }


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getRelativeRelationshipList(resource: string, layer: AllBinaryLayer): BasicArrayList{

    var featureReleaseList: BasicArrayList = this.getList()!;;
    

    var size: number = this.getList()!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var featureInterface: ResourceRelativeRelationshipFactoryInterface = featureReleaseList!.objectArray[index]! as ResourceRelativeRelationshipFactoryInterface;;
    

                        if(featureInterface!.isFeature())
                        
                                    {
                                    
    var list: BasicArrayList = featureInterface!.getResourceRelativeRelationshipList(resource)!;;
    

                        if(list != this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.duplicate(list, layer);;
    

                                    }
                                

                                    }
                                
}




                            throw new Exception(new StringMaker().append("Not available for current feature selection or Resource: ")!.append(resource)!.toString());
                    
}


                //@Throws(Exception.constructor)
            
    duplicate(list: BasicArrayList, layer: AllBinaryLayer): BasicArrayList{

    var pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    var newList: BasicArrayList = new BasicArrayListD();;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var relativeRelationship: RelativeRelationship = list.objectArray[index]! as RelativeRelationship;;
    
newList!.add(new RelativeLayerRelationship(layer, pointFactory!.createXY(relativeRelationship!.getX(), relativeRelationship!.getY()), BasicArrayListUtil.getInstance()!.getImmutableInstance()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newList;
    
}


}



