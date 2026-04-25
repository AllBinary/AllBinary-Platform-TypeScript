
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
        



import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { DirectionFactory } from "../../../../../org/allbinary/direction/DirectionFactory.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { AngleInfo } from "../../../../../org/allbinary/math/AngleInfo.js";

    
import { GeographicMapCellHistory } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapDirectionUtil } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js";

    
import { GeographicMapCellPathHistoryInfo } from "../../../../../org/allbinary/media/graphics/geography/pathfinding/GeographicMapCellPathHistoryInfo.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicAIProcessor
            extends Object
         {
        

    private name: string

    private geographicMapCellHistory: GeographicMapCellHistory

    private geographicMapCellPositionBasicArrayList: BasicArrayList

    private geographicMapCellPathHistoryInfo: GeographicMapCellPathHistoryInfo

    private basicAI: BasicDirectionAIHelper
public constructor (name: string, geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPathHistoryInfo: GeographicMapCellPathHistoryInfo, chosenPathList: BasicArrayList, angleInfo: AngleInfo, seed: number){

            super();
            //var name = name
    //var geographicMapCellHistory = geographicMapCellHistory
    //var geographicMapCellPathHistoryInfo = geographicMapCellPathHistoryInfo
    //var chosenPathList = chosenPathList
    //var angleInfo = angleInfo
    //var seed = seed
this.name= name;
    
this.geographicMapCellHistory= geographicMapCellHistory;
    
this.geographicMapCellPositionBasicArrayList= chosenPathList;
    
this.geographicMapCellPathHistoryInfo= geographicMapCellPathHistoryInfo;
    
this.setName(name);
    
this.setNewPath(geographicMapCellHistory, chosenPathList);
    
this.basicAI= new BasicDirectionAIHelper(this.getName(), angleInfo);
    
}


    setNewPath(geographicMapCellHistory: GeographicMapCellHistory, chosenPathList: BasicArrayList){
var geographicMapCellHistory = geographicMapCellHistory
var chosenPathList = chosenPathList
this.setGeographicMapCellHistory(geographicMapCellHistory);
    
this.geographicMapCellPositionBasicArrayList= chosenPathList;
    
this.init();
    
}


    public init(){
this.geographicMapCellPathHistoryInfo= new GeographicMapCellPathHistoryInfo();
    
this.geographicMapCellPathHistoryInfo!.setPreviousOnPathGeographicMapCellPosition(geographicMapCellPositionBasicArrayList!.get(geographicMapCellPositionBasicArrayList!.size() -1) as GeographicMapCellPosition);
    
this.geographicMapCellPathHistoryInfo!.setNextOnPathGeographicMapCellPosition(geographicMapCellPositionBasicArrayList!.get(geographicMapCellPositionBasicArrayList!.size() -1) as GeographicMapCellPosition);
    
this.update();
    
}


    private readonly geographicMapDirectionUtil: GeographicMapDirectionUtil = GeographicMapDirectionUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    goTowardNextChosenOnPathPosition(currentGeographicMapCellPosition: GeographicMapCellPosition): number{
var currentGeographicMapCellPosition = currentGeographicMapCellPosition

    var keyDirection: number =  -1;
        
        
;
    

    var goToGeographicMapCellPosition: GeographicMapCellPosition = this.geographicMapCellPathHistoryInfo!.getNextChosenOnPathGeographicMapCellPosition()!;
        
        
;
    

    var geographicMapDirectionData: Direction = geographicMapDirectionUtil!.getDirectionFromCellPositionToAdjacentCellPosition(currentGeographicMapCellPosition, goToGeographicMapCellPosition)!;
        
        
;
    

                        if(geographicMapDirectionData == DirectionFactory.getInstance()!.NOT_BORDERED_WITH)
                        
                                    {
                                    geographicMapDirectionData= geographicMapDirectionUtil!.getDirectionFromCellPositionToCellPosition(currentGeographicMapCellPosition, goToGeographicMapCellPosition);
    

                                    }
                                
keyDirection= this.basicAI!.getAIKeyPressedFromDirection(geographicMapDirectionData);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyDirection;
    
}


    update(){
this.geographicMapCellPathHistoryInfo!.setNextUnvisitedOnPathGeographicMapCellPosition(this.getGeographicMapCellHistory()!.getFirstUnvisited());
    
this.geographicMapCellPathHistoryInfo!.setNextChosenOnPathGeographicMapCellPosition(this.geographicMapCellPathHistoryInfo!.getNextUnvisitedOnPathGeographicMapCellPosition());
    
}


                //@Throws(Error::class)
            
    public processAI(myManager: AllBinaryLayerManager, currentGeographicMapCellPosition: GeographicMapCellPosition): number{
var myManager = myManager
var currentGeographicMapCellPosition = currentGeographicMapCellPosition

    var keyDirection: number =  -1;
        
        
;
    

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
                        return name;
    
}


    public setName(name: string){
var name = name
this.name= name;
    
}


    public getGeographicMapCellPathHistoryInfo(): GeographicMapCellPathHistoryInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPathHistoryInfo;
    
}


    public setGeographicMapCellPathHistoryInfo(geographicMapCellPathHistoryInfo: GeographicMapCellPathHistoryInfo){
var geographicMapCellPathHistoryInfo = geographicMapCellPathHistoryInfo
this.geographicMapCellPathHistoryInfo= geographicMapCellPathHistoryInfo;
    
}


    public getGeographicMapCellHistory(): GeographicMapCellHistory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellHistory;
    
}


    public setGeographicMapCellHistory(geographicMapCellHistory: GeographicMapCellHistory){
var geographicMapCellHistory = geographicMapCellHistory
this.geographicMapCellHistory= geographicMapCellHistory;
    
}


}
                
            

