
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { RotationAnimation } from "../../../../org/allbinary/animation/RotationAnimation.js";

    
import { Group } from "../../../../org/allbinary/game/identification/Group.js";

    
import { BasicDecimal } from "../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { GeographicMapCellHistory } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPositionTracking } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionTracking.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class NullVehicleLayer
            extends Object
        
                , VehicleLayerInterface {
        

    public static readonly NULL_VEHICLE_LAYER: NullVehicleLayer = new NullVehicleLayer();
        
        

    public getName(): string{



                            throw RuntimeException()
}


    public getGroupInterface(): Group[]{



                            throw RuntimeException()
}


    public setPosition(x: number, y: number, z: number){
var x = x
var y = y
var z = z



                            throw RuntimeException()
}


    public getHeight(): number{



                            throw RuntimeException()
}


    public getWidth(): number{



                            throw RuntimeException()
}


    public getHalfHeight(): number{



                            throw RuntimeException()
}


    public getHalfWidth(): number{



                            throw RuntimeException()
}


    public getXP(): number{



                            throw RuntimeException()
}


    public getYP(): number{



                            throw RuntimeException()
}


    public getZP(): number{



                            throw RuntimeException()
}


    public getX2(): number{



                            throw RuntimeException()
}


    public getY2(): number{



                            throw RuntimeException()
}


    public getZ2(): number{



                            throw RuntimeException()
}


    public isVisible(): boolean{



                            throw RuntimeException()
}


    public move(dx: number, dy: number, dz: number){
var dx = dx
var dy = dy
var dz = dz



                            throw RuntimeException()
}


    public setVisible(visible: boolean){
var visible = visible



                            throw RuntimeException()
}


    public implmentsTickableInterface(): boolean{



                            throw RuntimeException()
}


    public implmentsCollidableInterface(): boolean{



                            throw RuntimeException()
}


    public implmentsGameInputInterface(): boolean{



                            throw RuntimeException()
}


    public implmentsArtificialIntelligenceCompositeInterface(): boolean{



                            throw RuntimeException()
}


    public getType(): number{



                            throw RuntimeException()
}


    public getVehicleProperties(): VehicleProperties{



                            throw RuntimeException()
}


    public getGameKeyEventList(): BasicArrayList{



                            throw RuntimeException()
}


    public getSpeedBasicDecimal(): BasicDecimal{



                            throw RuntimeException()
}


    public isReadyForExplosion(): boolean{



                            throw RuntimeException()
}


    public getRotationAnimationInterface(): RotationAnimation{



                            throw RuntimeException()
}


    public setRotationAnimationInterface(animationInterface: RotationAnimation){
var animationInterface = animationInterface



                            throw RuntimeException()
}


    public isDestroyed(): boolean{



                            throw RuntimeException()
}


    public isFinish(): boolean{



                            throw RuntimeException()
}


    public getFinalPosition(): number{



                            throw RuntimeException()
}


                @Throws(Exception::class)
            
    public handleFinish(){



                            throw RuntimeException()
}


    public getGeographicMapCellPositionTracking(): GeographicMapCellPositionTracking{



                            throw RuntimeException()
}


    public getGeographicMapCellHistoryArray(): GeographicMapCellHistory[]{



                            throw RuntimeException()
}


    public setGeographicMapCellHistoryArray(geographicMapCellHistory: GeographicMapCellHistory[]){
var geographicMapCellHistory = geographicMapCellHistory



                            throw RuntimeException()
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


}
                
            

