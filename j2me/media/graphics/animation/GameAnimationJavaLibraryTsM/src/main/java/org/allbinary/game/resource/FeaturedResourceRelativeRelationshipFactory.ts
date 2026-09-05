
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
        
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { RelativeRelationship } from '../../../../org/allbinary/graphics/RelativeRelationship.js';
//not GWT import const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { RelativeLayerRelationship } from '../../../../org/allbinary/layer/relationship/RelativeLayerRelationship.js';
//not GWT import const RelativeLayerRelationship = globalThis.org.allbinary.layer.relationship.RelativeLayerRelationship;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FeaturedResourceFactory } from './FeaturedResourceFactory.js';
//not GWT import - same folder const FeaturedResourceFactory = globalThis.org.allbinary.game.resource.FeaturedResourceFactory;

                import { ResourceRelativeRelationshipFactoryInterface } from './ResourceRelativeRelationshipFactoryInterface.js';
//not GWT import - same folder const ResourceRelativeRelationshipFactoryInterface = globalThis.org.allbinary.game.resource.ResourceRelativeRelationshipFactoryInterface;

                
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



