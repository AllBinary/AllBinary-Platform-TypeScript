
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';

    
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';

    
import { Group } from '../../../../org/allbinary/game/identification/Group.js';

    
import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';

    
import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';

    
import { GeographicMapCellPositionTracking } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionTracking.js';

    
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VehicleLayerInterface } from './VehicleLayerInterface.js';
import { VehicleProperties } from './VehicleProperties.js';

export class NullVehicleLayer
            extends Object
         implements VehicleLayerInterface {
        

    public static readonly NULL_VEHICLE_LAYER: NullVehicleLayer = new NullVehicleLayer();

    public getName(): string{



                            throw Error();
                    
}


    public getGroupInterface(): Group[]{



                            throw Error();
                    
}


    public setPosition(x: number, y: number, z: number){
var x = x
var y = y
var z = z



                            throw Error();
                    
}


    public getHeight(): number{



                            throw Error();
                    
}


    public getWidth(): number{



                            throw Error();
                    
}


    public getHalfHeight(): number{



                            throw Error();
                    
}


    public getHalfWidth(): number{



                            throw Error();
                    
}


    public getXP(): number{



                            throw Error();
                    
}


    public getYP(): number{



                            throw Error();
                    
}


    public getZP(): number{



                            throw Error();
                    
}


    public getX2(): number{



                            throw Error();
                    
}


    public getY2(): number{



                            throw Error();
                    
}


    public getZ2(): number{



                            throw Error();
                    
}


    public isVisible(): boolean{



                            throw Error();
                    
}


    public moveDXYZ(dx: number, dy: number, dz: number){
var dx = dx
var dy = dy
var dz = dz



                            throw Error();
                    
}


    public setVisible(visible: boolean){
var visible = visible



                            throw Error();
                    
}


    public implmentsTickableInterface(): boolean{



                            throw Error();
                    
}


    public implmentsCollidableInterface(): boolean{



                            throw Error();
                    
}


    public implmentsGameInputInterface(): boolean{



                            throw Error();
                    
}


    public implmentsArtificialIntelligenceCompositeInterface(): boolean{



                            throw Error();
                    
}


    public getType(): number{



                            throw Error();
                    
}


    public getVehicleProperties(): VehicleProperties{



                            throw Error();
                    
}


    public getGameKeyEventList(): BasicArrayList{



                            throw Error();
                    
}


    public getSpeedBasicDecimal(): BasicDecimal{



                            throw Error();
                    
}


    public isReadyForExplosion(): boolean{



                            throw Error();
                    
}


    public getRotationAnimationInterface(): RotationAnimation{



                            throw Error();
                    
}


    public setRotationAnimationInterface(animationInterface: RotationAnimation){
var animationInterface = animationInterface



                            throw Error();
                    
}


    public isDestroyed(): boolean{



                            throw Error();
                    
}


    public isFinish(): boolean{



                            throw Error();
                    
}


    public getFinalPosition(): number{



                            throw Error();
                    
}


                //@Throws(Exception.constructor)
            
    public handleFinish(){



                            throw Error();
                    
}


    public getGeographicMapCellPositionTracking(): GeographicMapCellPositionTracking{



                            throw Error();
                    
}


    public getGeographicMapCellHistoryArray(): GeographicMapCellHistory[]{



                            throw Error();
                    
}


    public setGeographicMapCellHistoryArray(geographicMapCellHistory: GeographicMapCellHistory[]){
var geographicMapCellHistory = geographicMapCellHistory



                            throw Error();
                    
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


}
                
            

