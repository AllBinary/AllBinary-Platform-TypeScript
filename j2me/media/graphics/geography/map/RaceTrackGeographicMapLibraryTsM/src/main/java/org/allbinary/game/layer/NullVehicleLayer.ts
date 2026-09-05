
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
        
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
//not GWT import const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
import { Group } from '../../../../org/allbinary/game/identification/Group.js';
//not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
//not plain js import { BasicDecimal } 
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPositionTracking } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionTracking.js';
//not GWT import const GeographicMapCellPositionTracking = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionTracking;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VehicleLayerInterface } from './VehicleLayerInterface.js';
//not GWT import - same folder const VehicleLayerInterface = globalThis.org.allbinary.game.layer.VehicleLayerInterface;

                import { VehicleProperties } from './VehicleProperties.js';
//not GWT import - same folder const VehicleProperties = globalThis.org.allbinary.game.layer.VehicleProperties;

                
export class NullVehicleLayer
            extends Object
         implements VehicleLayerInterface {
        

    public static readonly NULL_VEHICLE_LAYER: NullVehicleLayer = new NullVehicleLayer();

    public getName(): string{



                            throw new RuntimeException();
                    
}


    public getGroupInterface(): Group[]{



                            throw new RuntimeException();
                    
}


    public setPosition(x: number, y: number, z: number){



                            throw new RuntimeException();
                    
}


    public getHeight(): number{



                            throw new RuntimeException();
                    
}


    public getWidth(): number{



                            throw new RuntimeException();
                    
}


    public getHalfHeight(): number{



                            throw new RuntimeException();
                    
}


    public getHalfWidth(): number{



                            throw new RuntimeException();
                    
}


    public getXP(): number{



                            throw new RuntimeException();
                    
}


    public getYP(): number{



                            throw new RuntimeException();
                    
}


    public getZP(): number{



                            throw new RuntimeException();
                    
}


    public getX2(): number{



                            throw new RuntimeException();
                    
}


    public getY2(): number{



                            throw new RuntimeException();
                    
}


    public getZ2(): number{



                            throw new RuntimeException();
                    
}


    public isVisible(): boolean{



                            throw new RuntimeException();
                    
}


    public moveDXYZ(dx: number, dy: number, dz: number){



                            throw new RuntimeException();
                    
}


    public setVisible(visible: boolean){



                            throw new RuntimeException();
                    
}


    public implmentsTickableInterface(): boolean{



                            throw new RuntimeException();
                    
}


    public implmentsCollidableInterface(): boolean{



                            throw new RuntimeException();
                    
}


    public implmentsGameInputInterface(): boolean{



                            throw new RuntimeException();
                    
}


    public implmentsArtificialIntelligenceCompositeInterface(): boolean{



                            throw new RuntimeException();
                    
}


    public getType(): number{



                            throw new RuntimeException();
                    
}


    public getVehicleProperties(): VehicleProperties{



                            throw new RuntimeException();
                    
}


    public getGameKeyEventList(): BasicArrayList{



                            throw new RuntimeException();
                    
}


    public getSpeedBasicDecimal(): BasicDecimal{



                            throw new RuntimeException();
                    
}


    public isReadyForExplosion(): boolean{



                            throw new RuntimeException();
                    
}


    public getRotationAnimationInterface(): RotationAnimation{



                            throw new RuntimeException();
                    
}


    public setRotationAnimationInterface(animationInterface: RotationAnimation){



                            throw new RuntimeException();
                    
}


    public isDestroyed(): boolean{



                            throw new RuntimeException();
                    
}


    public isFinish(): boolean{



                            throw new RuntimeException();
                    
}


    public getFinalPosition(): number{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public handleFinish(){



                            throw new RuntimeException();
                    
}


    public getGeographicMapCellPositionTracking(): GeographicMapCellPositionTracking{



                            throw new RuntimeException();
                    
}


    public getGeographicMapCellHistoryArray(): GeographicMapCellHistory[]{



                            throw new RuntimeException();
                    
}


    public setGeographicMapCellHistoryArray(geographicMapCellHistory: GeographicMapCellHistory[]){



                            throw new RuntimeException();
                    
}


    public paint(graphics: Graphics){
}


    public paintThreed(graphics: Graphics){
}


}



