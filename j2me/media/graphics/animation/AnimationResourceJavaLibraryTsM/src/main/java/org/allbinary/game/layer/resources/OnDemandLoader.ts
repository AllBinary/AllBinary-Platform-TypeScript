
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
        



import { BaseResourceAnimationInterfaceFactoryInterfaceFactory } from "../../../../../org/allbinary/animation/resource/BaseResourceAnimationInterfaceFactoryInterfaceFactory.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { MainFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory } from "../../../../../org/allbinary/game/layer/GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory.js";

    
import { LayerPlacementInterfaceBasicArrayListFactoryInterface } from "../../../../../org/allbinary/game/layer/LayerPlacementInterfaceBasicArrayListFactoryInterface.js";

    
import { ResourceLoadingLevelFactory } from "../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js";

    
import { ImageCache } from "../../../../../org/allbinary/image/ImageCache.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class OnDemandLoader
            extends Object
         {
        

    private readonly onDemandResourcesFactory: OnDemandResourcesFactory

    private readonly gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory: GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory

    private readonly resourceAnimationInterfaceFactoryInterfaceFactory: BaseResourceAnimationInterfaceFactoryInterfaceFactory
public constructor (onDemandResourcesFactory: OnDemandResourcesFactory, gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory: GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory, resourceAnimationInterfaceFactoryInterfaceFactory: BaseResourceAnimationInterfaceFactoryInterfaceFactory){

            super();
            var onDemandResourcesFactory = onDemandResourcesFactory
var gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory = gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory
var resourceAnimationInterfaceFactoryInterfaceFactory = resourceAnimationInterfaceFactoryInterfaceFactory
this.onDemandResourcesFactory= onDemandResourcesFactory
this.gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory= gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory
this.resourceAnimationInterfaceFactoryInterfaceFactory= resourceAnimationInterfaceFactoryInterfaceFactory
}


                //@Throws(Error::class)
            
    public init(imageCache: ImageCache, level: number, loadingString: string){
    //var imageCache = imageCache
    //var level = level
    //var loadingString = loadingString

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        


                        if(Features.getInstance()!.isFeature(MainFeatureFactory.getInstance()!.LOAD_ALL))
                        
                                    {
                                    
                        if(this.resourceAnimationInterfaceFactoryInterfaceFactory!.isInitialized())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.initAll(imageCache, loadingString)

                                    }
                                
                             else 
                        if(level != resourceLoadingLevelFactory!.LOAD_ALL.getLevel())
                        
                                    {
                                    
    var layerPlacementInterfaceBasicArrayListFactoryInterface: LayerPlacementInterfaceBasicArrayListFactoryInterface = this.gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory!.getInstance(level)!;
        
        

this.initLevel(layerPlacementInterfaceBasicArrayListFactoryInterface, imageCache, level, loadingString)

                                    }
                                
}


                //@Throws(Error::class)
            
    initAll(imageCache: ImageCache, loadingString: string){
    //var imageCache = imageCache
    //var loadingString = loadingString

    var index: number = 0;
        
        


    var portion: number = 120;
        
        


    var onDemandResources: OnDemandResources





                        for (
    var onDemandIndex: number = onDemandResourcesFactory!.size()!;
        
        
--onDemandIndex >= 0; )
        {
onDemandResources= onDemandResourcesFactory!.remove(onDemandIndex)

                        if(onDemandResources != OnDemandResources.NULL_ON_DEMAND_RESOURCES)
                        
                                    {
                                    index= onDemandResources!.init(imageCache, this.resourceAnimationInterfaceFactoryInterfaceFactory, portion, loadingString, index)

                                    }
                                
}

}


                //@Throws(Error::class)
            
    initLevel(layerPlacementInterfaceBasicArrayListFactoryInterface: LayerPlacementInterfaceBasicArrayListFactoryInterface, imageCache: ImageCache, level: number, loadingString: string){
    //var layerPlacementInterfaceBasicArrayListFactoryInterface = layerPlacementInterfaceBasicArrayListFactoryInterface
    //var imageCache = imageCache
    //var level = level
    //var loadingString = loadingString

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


    var portion: number = 120;
        
        


    var index: number = 0;
        
        


    var onDemandArray: IntArray = layerPlacementInterfaceBasicArrayListFactoryInterface!.getOnDemandResources()!;
        
        

PreLogUtil.put(StringMaker().
                            append(commonStrings!.START)!.appendint(onDemandArray!.length)!.toString(), this, "initLevel")

    var onDemandResources: OnDemandResources





                        for (
    var onDemandIndex: number = onDemandArray!.length
                ;
        
        
--onDemandIndex >= 0; )
        {
onDemandResources= onDemandResourcesFactory!.remove(onDemandArray[onDemandIndex]!)

                        if(onDemandResources != OnDemandResources.NULL_ON_DEMAND_RESOURCES)
                        
                                    {
                                    index= onDemandResources!.init(imageCache, this.resourceAnimationInterfaceFactoryInterfaceFactory, portion, loadingString, index)

                                    }
                                
}

}


}
                
            

