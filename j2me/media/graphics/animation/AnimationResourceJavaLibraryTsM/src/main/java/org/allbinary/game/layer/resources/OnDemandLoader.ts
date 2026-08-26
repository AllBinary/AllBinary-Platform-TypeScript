
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { BaseResourceAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/resource/BaseResourceAnimationInterfaceFactoryInterfaceFactory.js';
      const BaseResourceAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.resource.BaseResourceAnimationInterfaceFactoryInterfaceFactory;

      
//not game specific package import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { MainFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not game specific package import { GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory } from '../../../../../org/allbinary/game/layer/GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory.js';
      const GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory = globalThis.org.allbinary.game.layer.GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory;

      
//not game specific package import { LayerPlacementInterfaceBasicArrayListFactoryInterface } from '../../../../../org/allbinary/game/layer/LayerPlacementInterfaceBasicArrayListFactoryInterface.js';
      const LayerPlacementInterfaceBasicArrayListFactoryInterface = globalThis.org.allbinary.game.layer.LayerPlacementInterfaceBasicArrayListFactoryInterface;

      
//not game specific package import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
      const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;

      
//not game specific package import { ImageCache } from '../../../../../org/allbinary/image/ImageCache.js';
      const ImageCache = globalThis.org.allbinary.image.ImageCache;

      
//not game specific package import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OnDemandResourcesFactory } from './OnDemandResourcesFactory.js';
import { OnDemandResources } from './OnDemandResources.js';

export class OnDemandLoader
            extends Object
         {
        

    private readonly onDemandResourcesFactory: OnDemandResourcesFactory;

    private readonly gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory: GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory;

    private readonly resourceAnimationInterfaceFactoryInterfaceFactory: BaseResourceAnimationInterfaceFactoryInterfaceFactory;

public constructor (onDemandResourcesFactory: OnDemandResourcesFactory, gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory: GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory, resourceAnimationInterfaceFactoryInterfaceFactory: BaseResourceAnimationInterfaceFactoryInterfaceFactory){

            super();
        this.onDemandResourcesFactory= onDemandResourcesFactory;
    
this.gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory= gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory;
    
this.resourceAnimationInterfaceFactoryInterfaceFactory= resourceAnimationInterfaceFactoryInterfaceFactory;
    
}


                //@Throws(Exception.constructor)
            
    public init(imageCache: ImageCache, level: number, loadingString: string){

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;;
    

                        if(Features.getInstance()!.isFeature(MainFeatureFactory.getInstance()!.LOAD_ALL))
                        
                                    {
                                    
                        if(this.resourceAnimationInterfaceFactoryInterfaceFactory!.isInitialized())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.initAll(imageCache, loadingString);
    

                                    }
                                
                             else 
                        if(level != resourceLoadingLevelFactory!.LOAD_ALL.getLevel())
                        
                                    {
                                    
    var layerPlacementInterfaceBasicArrayListFactoryInterface: LayerPlacementInterfaceBasicArrayListFactoryInterface = this.gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory!.getInstance(level)!;;
    
this.initLevel(layerPlacementInterfaceBasicArrayListFactoryInterface, imageCache, level, loadingString);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    initAll(imageCache: ImageCache, loadingString: string){

    var index: number = 0;;
    

    var portion: number = 120;;
    

    var onDemandResources: OnDemandResources;;
    




                        for (
    var onDemandIndex: number = this.onDemandResourcesFactory!.size()!;--onDemandIndex >= 0; )
        {
onDemandResources= this.onDemandResourcesFactory!.remove(onDemandIndex);
    

                        if(onDemandResources != OnDemandResources.NULL_ON_DEMAND_RESOURCES)
                        
                                    {
                                    index= onDemandResources!.initAt(imageCache, this.resourceAnimationInterfaceFactoryInterfaceFactory, portion, loadingString, index);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    initLevel(layerPlacementInterfaceBasicArrayListFactoryInterface: LayerPlacementInterfaceBasicArrayListFactoryInterface, imageCache: ImageCache, level: number, loadingString: string){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var portion: number = 120;;
    

    var index: number = 0;;
    

    var onDemandArray: number[] = layerPlacementInterfaceBasicArrayListFactoryInterface!.getOnDemandResources()!;;
    
PreLogUtil.put(new StringMaker().append(commonStrings!.START)!.appendint(onDemandArray!.length)!.toString(), this, "initLevel");
    

    var onDemandResources: OnDemandResources;;
    




                        for (
    var onDemandIndex: number = onDemandArray!.length
                ;--onDemandIndex >= 0; )
        {
onDemandResources= this.onDemandResourcesFactory!.remove(onDemandArray[onDemandIndex]!);
    

                        if(onDemandResources != OnDemandResources.NULL_ON_DEMAND_RESOURCES)
                        
                                    {
                                    index= onDemandResources!.initAt(imageCache, this.resourceAnimationInterfaceFactoryInterfaceFactory, portion, loadingString, index);
    

                                    }
                                
}

}


}
                
            

