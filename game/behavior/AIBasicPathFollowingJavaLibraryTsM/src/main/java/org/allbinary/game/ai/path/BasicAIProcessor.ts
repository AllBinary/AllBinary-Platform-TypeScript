
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
//not GWT import const Direction
import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager
import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
//not GWT import const AngleInfo
import { GeographicMapCellHistory } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellHistory
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition
import { GeographicMapDirectionUtil } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
//not GWT import const GeographicMapDirectionUtil
import { GeographicMapCellPathHistoryInfo } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/GeographicMapCellPathHistoryInfo.js';
//not GWT import const GeographicMapCellPathHistoryInfo
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicDirectionAIHelper } from './BasicDirectionAIHelper.js';
//not GWT import - same folder const BasicDirectionAIHelper
export class BasicAIProcessor
            extends Object
         {
        

    private name: string;

    private geographicMapCellHistory: GeographicMapCellHistory;

    private geographicMapCellPositionBasicArrayList: BasicArrayList;

    private geographicMapCellPathHistoryInfo: GeographicMapCellPathHistoryInfo;

    private basicAI: BasicDirectionAIHelper;

public constructor (name: string, geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPathHistoryInfo: GeographicMapCellPathHistoryInfo, chosenPathList: BasicArrayList, angleInfo: AngleInfo, seed: number){

            super();
        this.name= name;
    
this.geographicMapCellHistory= geographicMapCellHistory;
    
this.geographicMapCellPositionBasicArrayList= chosenPathList;
    
this.geographicMapCellPathHistoryInfo= geographicMapCellPathHistoryInfo;
    
this.setName(name);
    
this.setNewPath(geographicMapCellHistory, chosenPathList);
    
this.basicAI= new BasicDirectionAIHelper(this.getName(), angleInfo);
    
}


    setNewPath(geographicMapCellHistory: GeographicMapCellHistory, chosenPathList: BasicArrayList){
this.setGeographicMapCellHistory(geographicMapCellHistory);
    
this.geographicMapCellPositionBasicArrayList= chosenPathList;
    
this.init();
    
}


    public init(){
this.geographicMapCellPathHistoryInfo= new GeographicMapCellPathHistoryInfo();
    
this.geographicMapCellPathHistoryInfo!.setPreviousOnPathGeographicMapCellPosition(this.geographicMapCellPositionBasicArrayList!.get(this.geographicMapCellPositionBasicArrayList!.size() -1) as GeographicMapCellPosition);
    
this.geographicMapCellPathHistoryInfo!.setNextOnPathGeographicMapCellPosition(this.geographicMapCellPositionBasicArrayList!.get(this.geographicMapCellPositionBasicArrayList!.size() -1) as GeographicMapCellPosition);
    
this.update();
    
}


    private readonly geographicMapDirectionUtil: GeographicMapDirectionUtil = GeographicMapDirectionUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    goTowardNextChosenOnPathPosition(currentGeographicMapCellPosition: GeographicMapCellPosition): number{

    var keyDirection: number =  -1;;
    

    var goToGeographicMapCellPosition: GeographicMapCellPosition = this.geographicMapCellPathHistoryInfo!.getNextChosenOnPathGeographicMapCellPosition()!;;
    

    var geographicMapDirectionData: Direction = this.geographicMapDirectionUtil!.getDirectionFromCellPositionToAdjacentCellPosition(currentGeographicMapCellPosition, goToGeographicMapCellPosition)!;;
    

                        if(geographicMapDirectionData == DirectionFactory.getInstance()!.NOT_BORDERED_WITH)
                        
                                    {
                                    geographicMapDirectionData= this.geographicMapDirectionUtil!.getDirectionFromCellPositionToCellPosition(currentGeographicMapCellPosition, goToGeographicMapCellPosition);
    

                                    }
                                
keyDirection= this.basicAI!.getAIKeyPressedFromDirection(geographicMapDirectionData);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyDirection;
    
}


    update(){
this.geographicMapCellPathHistoryInfo!.setNextUnvisitedOnPathGeographicMapCellPosition(this.getGeographicMapCellHistory()!.getFirstUnvisited());
    
this.geographicMapCellPathHistoryInfo!.setNextChosenOnPathGeographicMapCellPosition(this.geographicMapCellPathHistoryInfo!.getNextUnvisitedOnPathGeographicMapCellPosition());
    
}


                //@Throws(Exception.constructor)
            
    public processAI(myManager: AllBinaryLayerManager, currentGeographicMapCellPosition: GeographicMapCellPosition): number{

    var keyDirection: number =  -1;;
    

                        if(this.geographicMapCellPositionBasicArrayList!.contains(currentGeographicMapCellPosition))
                        
                                    {
                                    this.update();
    
keyDirection= this.goTowardNextChosenOnPathPosition(currentGeographicMapCellPosition);
    
this.geographicMapCellPathHistoryInfo!.setPreviousOnPathGeographicMapCellPosition(currentGeographicMapCellPosition);
    

                                    }
                                
                        else {
                            keyDirection= this.goTowardNextChosenOnPathPosition(currentGeographicMapCellPosition);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyDirection;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
this.name= name;
    
}


    public getGeographicMapCellPathHistoryInfo(): GeographicMapCellPathHistoryInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPathHistoryInfo;
    
}


    public setGeographicMapCellPathHistoryInfo(geographicMapCellPathHistoryInfo: GeographicMapCellPathHistoryInfo){
this.geographicMapCellPathHistoryInfo= geographicMapCellPathHistoryInfo;
    
}


    public getGeographicMapCellHistory(): GeographicMapCellHistory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellHistory;
    
}


    public setGeographicMapCellHistory(geographicMapCellHistory: GeographicMapCellHistory){
this.geographicMapCellHistory= geographicMapCellHistory;
    
}


}



