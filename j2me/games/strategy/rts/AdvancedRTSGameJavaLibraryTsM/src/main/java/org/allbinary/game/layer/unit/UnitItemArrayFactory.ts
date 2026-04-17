
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { ImageItem } from "../../../../../javax/microedition/lcdui/ImageItem.js";

    
import { RTSGameStrings } from "../../../../../org/allbinary/game/layer/RTSGameStrings.js";

    
import { LayerInterfaceFactoryImageItem } from "../../../../../org/allbinary/game/layer/item/LayerInterfaceFactoryImageItem.js";

    
import { RTSLayerTextAnimation } from "../../../../../org/allbinary/game/layer/item/RTSLayerTextAnimation.js";

    
import { BasicGameResources } from "../../../../../org/allbinary/game/layer/resources/BasicGameResources.js";

    
import { FlagGameResources } from "../../../../../org/allbinary/game/layer/waypoint/FlagGameResources.js";

    
import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { GameFeatureImageCacheFactory } from "../../../../../org/allbinary/image/GameFeatureImageCacheFactory.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { CustomItemUtil } from "../../../../../org/allbinary/graphics/form/item/CustomItemUtil.js";

    
import { ItemArraySingletonFactoryInterface } from "../../../../../org/allbinary/graphics/form/item/ItemArraySingletonFactoryInterface.js";

    
import { ImageCache } from "../../../../../org/allbinary/image/ImageCache.js";

    
import { LayerInterfaceFactoryInterface } from "../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js";

    

export class UnitItemArrayFactory
            extends Object
        
                , ItemArraySingletonFactoryInterface {
        

    private static readonly ITEMS: CustomItem[] = CustomItemUtil.getInstance()!.CUSTOM_ITEM_ARRAY;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;
        
        

    private readonly resources: BasicGameResources[]
protected constructor (resources: BasicGameResources[]){

            super();
            var resources = resources
this.resources= resources;
    
}


                //@Throws(Error::class)
            
    createFlagItem(flagResources: FlagGameResources, layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface): CustomItem{
    //var flagResources = flagResources
    //var layerInterfaceFactoryInterface = layerInterfaceFactoryInterface

    var name: string = flagResources!.NAME;
        
        
;
    

    var index: number = name.indexOf(commonSeps!.SPACE)!;
        
        
;
    

                        if(index >= 0)
                        
                                    {
                                    name= name.substring(index);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createFlagItem(flagResources, name, layerInterfaceFactoryInterface);

                        ;
    
}


                //@Throws(Error::class)
            
    createFlagItem(flagResources: FlagGameResources, name: string, layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface): CustomItem{
    //var flagResources = flagResources
    //var name = name
    //var layerInterfaceFactoryInterface = layerInterfaceFactoryInterface

    var IMAGE_CACHE: ImageCache = GameFeatureImageCacheFactory.getInstance()!;
        
        
;
    

    var image: Image = IMAGE_CACHE.get(flagResources!.RESOURCE_ICON)!;
        
        
;
    

    var item: CustomItem = new LayerInterfaceFactoryImageItem(name, image, ImageItem.LAYOUT_DEFAULT, flagResources!.NAME, basicColor, 
                                                [
                                                    new RTSLayerTextAnimation(RTSGameStrings.getInstance()!.DRAGGABLE, image);
        
        
                                                ], layerInterfaceFactoryInterface);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return item;
    
}


                //@Throws(Error::class)
            
    public getItems(): CustomItem[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ITEMS;
    
}


    public getResources(): BasicGameResources[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resources;
    
}


    public indexOf(basicGameResources: BasicGameResources): number{
    //var basicGameResources = basicGameResources




                        for (
    var index: number = this.resources.length -1;
        
        
index >= 0; index--)
        {

                        if(this.resources[index] == basicGameResources)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


}
                
            

