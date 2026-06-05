
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
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { CollidableNeverCollideBehaviorFactory } from '../../../../../org/allbinary/game/collision/CollidableNeverCollideBehaviorFactory.js';
      
import { DamageableInterface } from '../../../../../org/allbinary/game/combat/damage/DamageableInterface.js';
      
import { DestroyableInterface } from '../../../../../org/allbinary/game/combat/destroy/DestroyableInterface.js';
      
import { DestroyedEvent } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js';
      
import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      
import { PickedUpLayerInterfaceFactoryInterface } from '../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';
      
import { PickupBehavior } from '../../../../../org/allbinary/game/layer/pickup/PickupBehavior.js';
      
import { PickupCompositeInterface } from '../../../../../org/allbinary/game/layer/pickup/PickupCompositeInterface.js';
      
import { PartInterface } from '../../../../../org/allbinary/game/part/PartInterface.js';
      
import { PartInterfaceUtil } from '../../../../../org/allbinary/game/part/PartInterfaceUtil.js';
      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { PositionStrings } from '../../../../../org/allbinary/math/PositionStrings.js';
      
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      
import { ViewPosition } from '../../../../../org/allbinary/view/ViewPosition.js';
      
import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpecialGameInputInterface } from './SpecialGameInputInterface.js';

export class CollidableDestroyableDamageableLayer extends CollidableCompositeLayer implements DestroyableInterface, DamageableInterface, PickupCompositeInterface, SpecialGameInputInterface {
        

    public static readonly NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER: CollidableDestroyableDamageableLayer = new CollidableDestroyableDamageableLayer(BasicGroupFactory.getInstance()!.NONE_ARRAY, StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION);

    private static readonly READYFOREXPLOSION: string = "ReadyForExplosion: ";

    private groupInterface: Group[];

    private readyForExplosion: boolean= false;

    private initWidth: number;

    private initHeight: number;

    private initX: number= 0;

    private initY: number= 0;

    private initZ: number= 0;

    partInterfaceArrayP: PartInterface[] = PartInterfaceUtil.getZeroArray()!;

    private pickupBehavior: PickupBehavior;

    public allBinaryGameLayerManagerP: AllBinaryGameLayerManager = AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER;

    public isDraggable: boolean = false;

    public isDragged: boolean = false;

public constructor (groupInterface: Group[], name: string, layerInfo: Rectangle, viewPosition: ViewPositionBase){
            super(name, layerInfo, viewPosition, CollidableNeverCollideBehaviorFactory.getInstance());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initWidth= layerInfo!.getWidth();
    
this.initHeight= layerInfo!.getHeight();
    
this.groupInterface= groupInterface;
    
this.pickupBehavior= PickupBehavior.NULL_PICKUP_BEHAVIOR;
    
}


                //@Throws(Exception.constructor)
            
    public initPosition(){
this.setPosition(this.initX, this.initY, this.initZ);
    
}


                //@Throws(Exception.constructor)
            
    public initPositionXYZ(x: number, y: number, z: number){
this.initX= x;
    
this.initY= y;
    
this.initZ= z;
    
}


    public paint(graphics: Graphics){
super.paint(graphics);
    
}


                //@Throws(Exception.constructor)
            
    public damage(damage: number, damageType: number){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    public getDamage(damageType: number): number{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    public isDestroyed(): boolean{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public getGroupInterface(): Group[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.groupInterface;
    
}


    public setGroupInterface(teamInterface: Group[]){
this.groupInterface= teamInterface;
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
this.allBinaryGameLayerManagerP= allBinaryGameLayerManager;
    

                        if(this.allBinaryGameLayerManagerP == 
                                    null
                                )
                        
                                    {
                                    


                            throw new RuntimeException();
                    

                                    }
                                
}


    public isReadyForExplosion(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readyForExplosion;
    
}


    setReadyForExplosion(isReadyForExplosion: boolean){
this.readyForExplosion= isReadyForExplosion;
    
}


    public getInitWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initWidth;
    
}


    public getInitHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initHeight;
    
}


    public getInitX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initX;
    
}


    public getInitY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initY;
    
}


                //@Throws(Exception.constructor)
            
    public up(){
}


                //@Throws(Exception.constructor)
            
    public down(){
}


                //@Throws(Exception.constructor)
            
    public right(){
}


                //@Throws(Exception.constructor)
            
    public left(){
}


                //@Throws(Exception.constructor)
            
    public strafeLeft(){
}


                //@Throws(Exception.constructor)
            
    public strafeRight(){
}


                //@Throws(Exception.constructor)
            
    public fire(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special1(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special2(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special3(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special4(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special5(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public upAnalog(yAnalogValue: number){
}


                //@Throws(Exception.constructor)
            
    public downAnalog(yAnalogValue: number){
}


                //@Throws(Exception.constructor)
            
    public rightAnalog(xAnalogValue: number){
}


                //@Throws(Exception.constructor)
            
    public leftAnalog(xAnalogValue: number){
}


                //@Throws(Exception.constructor)
            
    public rightTrigger(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent, xAnalogValue: number){
}


                //@Throws(Exception.constructor)
            
    public leftTrigger(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent, xAnalogValue: number){
}


    public onDestroyed(destroyedEvent: DestroyedEvent){
}


    public getPickupBehavior(): PickupBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pickupBehavior;
    
}


    public setPickupBehavior(pickupBehavior: PickupBehavior){
this.pickupBehavior= pickupBehavior;
    
}


                //@Throws(Exception.constructor)
            
    public addPart(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface){
}


    public setPartInterfaceArray(partInterfaceArray: PartInterface[]){
this.partInterfaceArrayP= partInterfaceArray;
    
}


    public getPartInterfaceArray(): PartInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.partInterfaceArrayP;
    
}


    public toStringAppend(stringBuffer: StringMaker){

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var positionStrings: PositionStrings = PositionStrings.getInstance()!;;
    
super.toStringAppend(stringBuffer);
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    

    var groupInterfaceArray: Group[] = this.getGroupInterface()!;;
    

    var size: number = groupInterfaceArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
stringBuffer!.append(groupInterfaceArray[index]!.toString());
    
stringBuffer!.append(commonSeps!.COMMA);
    
}


    var pickupBehavior: PickupBehavior = this.getPickupBehavior()!;;
    

                        if(pickupBehavior != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(pickupBehavior!.toString());
    

                                    }
                                
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(CollidableDestroyableDamageableLayer.READYFOREXPLOSION);
    
stringBuffer!.appendboolean(this.readyForExplosion);
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(this.commonStrings!.INIT);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.X_LABEL);
    
stringBuffer!.appendint(this.initX);
    
stringBuffer!.append(positionStrings!.Y_LABEL);
    
stringBuffer!.appendint(this.initX);
    
stringBuffer!.append(positionStrings!.Z_LABEL);
    
stringBuffer!.appendint(this.initZ);
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
this.toStringAppend(stringBuffer);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

