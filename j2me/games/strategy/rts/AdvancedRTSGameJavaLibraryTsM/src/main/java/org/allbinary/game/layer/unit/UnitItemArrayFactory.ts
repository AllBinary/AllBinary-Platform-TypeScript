
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { ImageItem } from '../../../../../javax/microedition/lcdui/ImageItem.js';
      const ImageItem = globalThis.javax.microedition.lcdui.ImageItem;

      
//not game specific package import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
      const RTSGameStrings = globalThis.org.allbinary.game.layer.RTSGameStrings;

      
//not game specific package import { LayerInterfaceFactoryImageItem } from '../../../../../org/allbinary/game/layer/item/LayerInterfaceFactoryImageItem.js';
      const LayerInterfaceFactoryImageItem = globalThis.org.allbinary.game.layer.item.LayerInterfaceFactoryImageItem;

      
//not game specific package import { RTSLayerTextAnimation } from '../../../../../org/allbinary/game/layer/item/RTSLayerTextAnimation.js';
      const RTSLayerTextAnimation = globalThis.org.allbinary.game.layer.item.RTSLayerTextAnimation;

      
//not game specific package import { BasicGameResources } from '../../../../../org/allbinary/game/layer/resources/BasicGameResources.js';
      const BasicGameResources = globalThis.org.allbinary.game.layer.resources.BasicGameResources;

      
//not game specific package import { FlagGameResources } from '../../../../../org/allbinary/game/layer/waypoint/FlagGameResources.js';
      const FlagGameResources = globalThis.org.allbinary.game.layer.waypoint.FlagGameResources;

      
//not game specific package import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { GameFeatureImageCacheFactory } from '../../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
      const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { CustomItemUtil } from '../../../../../org/allbinary/graphics/form/item/CustomItemUtil.js';
      const CustomItemUtil = globalThis.org.allbinary.graphics.form.item.CustomItemUtil;

      
//not game specific package import { ItemArraySingletonFactoryInterface } from '../../../../../org/allbinary/graphics/form/item/ItemArraySingletonFactoryInterface.js';
      const ItemArraySingletonFactoryInterface = globalThis.org.allbinary.graphics.form.item.ItemArraySingletonFactoryInterface;

      
//not game specific package import { ImageCache } from '../../../../../org/allbinary/image/ImageCache.js';
      const ImageCache = globalThis.org.allbinary.image.ImageCache;

      
//not game specific package import { LayerInterfaceFactoryInterface } from '../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js';
      const LayerInterfaceFactoryInterface = globalThis.org.allbinary.layer.LayerInterfaceFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UnitItemArrayFactory
            extends Object
         implements ItemArraySingletonFactoryInterface {
        

    private static readonly ITEMS: ABCustomItem[] = CustomItemUtil.getInstance()!.CUSTOM_ITEM_ARRAY;

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;

    private readonly resources: BasicGameResources[];

protected constructor (resources: BasicGameResources[]){

            super();
        this.resources= resources;
    
}


                //@Throws(Exception.constructor)
            
    createFlagItem(flagResources: FlagGameResources, layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface): ABCustomItem{

    var name: string = flagResources!.NAME;;
    

    var index: number = name.indexOf(this.commonSeps!.SPACE)!;;
    

                        if(index >= 0)
                        
                                    {
                                    name= name.substring(index);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createNamedFlagItem(flagResources, name, layerInterfaceFactoryInterface);;
    
}


                //@Throws(Exception.constructor)
            
    createNamedFlagItem(flagResources: FlagGameResources, name: string, layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface): ABCustomItem{

    var IMAGE_CACHE: ImageCache = GameFeatureImageCacheFactory.getInstance()!;;
    

    var image: Image = IMAGE_CACHE.getWithKey(flagResources!.RESOURCE_ICON)!;;
    

    var item: ABCustomItem = new LayerInterfaceFactoryImageItem(name, image, ImageItem.LAYOUT_DEFAULT, flagResources!.NAME, this.basicColor, 
                                                [
                                                    new RTSLayerTextAnimation(RTSGameStrings.getInstance()!.DRAGGABLE, image)
                                                ], layerInterfaceFactoryInterface);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return item;
    
}


                //@Throws(Exception.constructor)
            
    public getItems(): ABCustomItem[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UnitItemArrayFactory.ITEMS;
    
}


    public getResources(): BasicGameResources[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.resources;
    
}


    public indexOf(basicGameResources: BasicGameResources): number{




                        for (
    var index: number = this.resources.length -1;index >= 0; index--)
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
                
            

