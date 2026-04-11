
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



                            throw new RuntimeException()
}


    public getGroupInterface(): Group[]{



                            throw new RuntimeException()
}


    public setPosition(x: number, y: number, z: number){
var x = x
var y = y
var z = z



                            throw new RuntimeException()
}


    public getHeight(): number{



                            throw new RuntimeException()
}


    public getWidth(): number{



                            throw new RuntimeException()
}


    public getHalfHeight(): number{



                            throw new RuntimeException()
}


    public getHalfWidth(): number{



                            throw new RuntimeException()
}


    public getXP(): number{



                            throw new RuntimeException()
}


    public getYP(): number{



                            throw new RuntimeException()
}


    public getZP(): number{



                            throw new RuntimeException()
}


    public getX2(): number{



                            throw new RuntimeException()
}


    public getY2(): number{



                            throw new RuntimeException()
}


    public getZ2(): number{



                            throw new RuntimeException()
}


    public isVisible(): boolean{



                            throw new RuntimeException()
}


    public move(dx: number, dy: number, dz: number){
var dx = dx
var dy = dy
var dz = dz



                            throw new RuntimeException()
}


    public setVisible(visible: boolean){
var visible = visible



                            throw new RuntimeException()
}


    public implmentsTickableInterface(): boolean{



                            throw new RuntimeException()
}


    public implmentsCollidableInterface(): boolean{



                            throw new RuntimeException()
}


    public implmentsGameInputInterface(): boolean{



                            throw new RuntimeException()
}


    public implmentsArtificialIntelligenceCompositeInterface(): boolean{



                            throw new RuntimeException()
}


    public getType(): number{



                            throw new RuntimeException()
}


    public getVehicleProperties(): VehicleProperties{



                            throw new RuntimeException()
}


    public getGameKeyEventList(): BasicArrayList{



                            throw new RuntimeException()
}


    public getSpeedBasicDecimal(): BasicDecimal{



                            throw new RuntimeException()
}


    public isReadyForExplosion(): boolean{



                            throw new RuntimeException()
}


    public getRotationAnimationInterface(): RotationAnimation{



                            throw new RuntimeException()
}


    public setRotationAnimationInterface(animationInterface: RotationAnimation){
var animationInterface = animationInterface



                            throw new RuntimeException()
}


    public isDestroyed(): boolean{



                            throw new RuntimeException()
}


    public isFinish(): boolean{



                            throw new RuntimeException()
}


    public getFinalPosition(): number{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public handleFinish(){



                            throw new RuntimeException()
}


    public getGeographicMapCellPositionTracking(): GeographicMapCellPositionTracking{



                            throw new RuntimeException()
}


    public getGeographicMapCellHistoryArray(): GeographicMapCellHistory[]{



                            throw new RuntimeException()
}


    public setGeographicMapCellHistoryArray(geographicMapCellHistory: GeographicMapCellHistory[]){
var geographicMapCellHistory = geographicMapCellHistory



                            throw new RuntimeException()
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


}
                
            

