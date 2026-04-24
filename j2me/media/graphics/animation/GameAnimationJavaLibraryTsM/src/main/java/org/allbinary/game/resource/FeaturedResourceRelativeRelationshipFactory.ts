
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
        



import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { RelativeRelationship } from "../../../../org/allbinary/graphics/RelativeRelationship.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { RelativeLayerRelationship } from "../../../../org/allbinary/layer/relationship/RelativeLayerRelationship.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../org/allbinary/util/BasicArrayListD.js";

    
import { BasicArrayListUtil } from "../../../../org/allbinary/util/BasicArrayListUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { FeaturedResourceFactory } from "./FeaturedResourceFactory.js";

export class FeaturedResourceRelativeRelationshipFactory extends FeaturedResourceFactory {
        

    private INSTANCE: FeaturedResourceRelativeRelationshipFactory = new FeaturedResourceRelativeRelationshipFactory();
        
        

    public static getInstance(): FeaturedResourceRelativeRelationshipFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return INSTANCE;
    
}

private constructor (){

            super();
        }


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getRelativeRelationshipList(resource: string, layer: AllBinaryLayer): BasicArrayList{
var resource = resource
var layer = layer

    var featureReleaseList: BasicArrayList = this.getList()!;
        
        
;
    

    var size: number = getList()!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var featureInterface: ResourceRelativeRelationshipFactoryInterface = featureReleaseList!.objectArray[index]! as ResourceRelativeRelationshipFactoryInterface;
        
        
;
    

                        if(featureInterface!.isFeature())
                        
                                    {
                                    
    var list: BasicArrayList = featureInterface!.getResourceRelativeRelationshipList(resource)!;
        
        
;
    

                        if(list != this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.duplicate(list, layer);;
    

                                    }
                                

                                    }
                                
}




                            throw new Error(new StringMaker().
                            append("Not available for current feature selection or Resource: ")!.append(resource)!.toString())
}


                //@Throws(Error::class)
            
    duplicate(list: BasicArrayList, layer: AllBinaryLayer): BasicArrayList{
    //var list = list
var layer = layer

    var pointFactory: PointFactory = PointFactory.getInstance()!;
        
        
;
    

    var newList: BasicArrayList = new BasicArrayListD();
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var relativeRelationship: RelativeRelationship = list.objectArray[index]! as RelativeRelationship;
        
        
;
    
newList!.add(new RelativeLayerRelationship(layer, pointFactory!.getInstance0(relativeRelationship!.getX(), relativeRelationship!.getY()), BasicArrayListUtil.getInstance()!.getImmutableInstance()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newList;
    
}


}
                
            

