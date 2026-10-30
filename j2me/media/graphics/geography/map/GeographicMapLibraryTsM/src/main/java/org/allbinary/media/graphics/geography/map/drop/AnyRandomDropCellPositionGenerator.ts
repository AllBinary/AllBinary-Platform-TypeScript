
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { AllBinaryGameLayerManager } from '../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager

import { AllBinaryTiledLayer } from '../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer

//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
type MyRandomFactory<T = any, U = any> = typeof MyRandomFactory extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MyRandomFactory;

import { AllBinaryLayerManager } from '../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

import { BasicGeographicMapCellPositionFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
//not GWT import const BasicGeographicMapCellPositionFactory

import { GeographicMapCellPosition } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

import { BasicGeographicMap } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseDropCellPositionGenerator } from './BaseDropCellPositionGenerator.js';
//sameFolderImports - not GWT import - same folder const BaseDropCellPositionGenerator

export class AnyRandomDropCellPositionGenerator extends BaseDropCellPositionGenerator {
        

    readonly list: BasicArrayList = new BasicArrayListD();

    geographicMapInterface: any = NullUtil.getInstance()!.NULL_OBJECT;

                //@Throws(Exception.constructor)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
this.geographicMapInterface= geographicMapInterface;
    

    let basicGeographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let randomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;;
    

    let tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    let total: number = tiledLayer!.getColumns() *tiledLayer!.getRows();;
    

    let randomColumn: number= 0;;
    

    let randomRow: number= 0;;
    

    let geographicMapCellPosition: GeographicMapCellPosition;;
    




                        for (
    let index: number = total;--index >= 0; )
        {
randomColumn= randomFactory!.getAbsoluteNextInt(tiledLayer!.getColumns());
    
randomRow= randomFactory!.getAbsoluteNextInt(tiledLayer!.getRows());
    
geographicMapCellPosition= basicGeographicMapCellPositionFactory!.getAt(randomColumn, randomRow);
    

                        if(this.isDropAllowedAt(geographicMapCellPosition))
                        
                                    {
                                    this.list.add(geographicMapCellPosition);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
}


}

