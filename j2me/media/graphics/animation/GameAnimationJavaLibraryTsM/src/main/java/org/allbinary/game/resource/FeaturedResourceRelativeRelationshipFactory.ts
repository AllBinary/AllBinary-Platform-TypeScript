
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
        
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { RelativeRelationship } from '../../../../org/allbinary/graphics/RelativeRelationship.js';
//not GWT import const RelativeRelationship

import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { RelativeLayerRelationship } from '../../../../org/allbinary/layer/relationship/RelativeLayerRelationship.js';
//not GWT import const RelativeLayerRelationship

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
type BasicArrayListUtil<T = any, U = any> = typeof BasicArrayListUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FeaturedResourceFactory } from './FeaturedResourceFactory.js';
//sameFolderImports - not GWT import - same folder const FeaturedResourceFactory
import { ResourceRelativeRelationshipFactoryInterface } from './ResourceRelativeRelationshipFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const ResourceRelativeRelationshipFactoryInterface

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

    let featureReleaseList: BasicArrayList = this.getList()!;;
    

    let size: number = this.getList()!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let featureInterface: ResourceRelativeRelationshipFactoryInterface = featureReleaseList!.objectArray[index]! as ResourceRelativeRelationshipFactoryInterface;;
    

                        if(featureInterface!.isFeature())
                        
                                    {
                                    
    let list: BasicArrayList = featureInterface!.getResourceRelativeRelationshipList(resource)!;;
    

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

    let pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    let newList: BasicArrayList = new BasicArrayListD();;
    

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let relativeRelationship: RelativeRelationship = list.objectArray[index]! as RelativeRelationship;;
    
newList!.add(new RelativeLayerRelationship(layer, pointFactory!.createXY(relativeRelationship!.getX(), relativeRelationship!.getY()), BasicArrayListUtil.getInstance()!.getImmutableInstance()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newList;
    
}


}

