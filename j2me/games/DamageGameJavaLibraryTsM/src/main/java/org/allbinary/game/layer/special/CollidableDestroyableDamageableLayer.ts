
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
        



import { GL } from "../../../../../javax/microedition/khronos/opengles/GL.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { DamageableInterface } from "../../../../../org/allbinary/game/combat/damage/DamageableInterface.js";

    
import { DestroyableInterface } from "../../../../../org/allbinary/game/combat/destroy/DestroyableInterface.js";

    
import { DestroyedEvent } from "../../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js";

    
import { BasicGroupFactory } from "../../../../../org/allbinary/game/identification/BasicGroupFactory.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { CollidableCompositeLayer } from "../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { PickedUpLayerInterfaceFactoryInterface } from "../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js";

    
import { PickupBehavior } from "../../../../../org/allbinary/game/layer/pickup/PickupBehavior.js";

    
import { PickupCompositeInterface } from "../../../../../org/allbinary/game/layer/pickup/PickupCompositeInterface.js";

    
import { PartInterface } from "../../../../../org/allbinary/game/part/PartInterface.js";

    
import { PartInterfaceUtil } from "../../../../../org/allbinary/game/part/PartInterfaceUtil.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { RectangleFactory } from "../../../../../org/allbinary/graphics/RectangleFactory.js";

    
import { OpenGLSurfaceChangedInterface } from "../../../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { PositionStrings } from "../../../../../org/allbinary/math/PositionStrings.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

export class CollidableDestroyableDamageableLayer extends CollidableCompositeLayer
                , DestroyableInterface
                , DamageableInterface
                , PickupCompositeInterface
                , SpecialGameInputInterface {
        

    public static readonly NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER: CollidableDestroyableDamageableLayer = new CollidableDestroyableDamageableLayer(BasicGroupFactory.getInstance()!.NONE_ARRAY, RectangleFactory.SINGLETON, ViewPosition.NULL_VIEW_POSITION);
        
        

    private static readonly READYFOREXPLOSION: string = "ReadyForExplosion: ";
        
        

    private groupInterface: Group[]

    private readyForExplosion: boolean= false

    private initWidth: number

    private initHeight: number

    private initX: number= 0

    private initY: number= 0

    private initZ: number= 0

    partInterfaceArrayP: PartInterface[] = PartInterfaceUtil.getZeroArray()!;
        
        

    private pickupBehavior: PickupBehavior

    public allBinaryGameLayerManagerP: AllBinaryGameLayerManager = AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER;
        
        

    public isDraggable: boolean = false;
        
        

    public isDragged: boolean = false;
        
        
public constructor (groupInterface: Group[], layerInfo: Rectangle, viewPosition: ViewPosition)                        

                            : super(layerInfo, viewPosition){

            super();
                //var groupInterface = groupInterface
    //var layerInfo = layerInfo
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.initWidth= layerInfo!.getWidth()
this.initHeight= layerInfo!.getHeight()
this.groupInterface= groupInterface
this.pickupBehavior= PickupBehavior.NULL_PICKUP_BEHAVIOR
}

public constructor (groupInterface: Group[], name: string, layerInfo: Rectangle, viewPosition: ViewPosition)                        

                            : super(name, layerInfo, viewPosition){

            super();
                //var groupInterface = groupInterface
    //var name = name
    //var layerInfo = layerInfo
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.initWidth= layerInfo!.getWidth()
this.initHeight= layerInfo!.getHeight()
this.groupInterface= groupInterface
this.pickupBehavior= PickupBehavior.NULL_PICKUP_BEHAVIOR
}


                //@Throws(Error::class)
            
    public initPosition(){
this.setPosition(this.initX, this.initY, this.initZ)
}


                //@Throws(Error::class)
            
    public initPosition(x: number, y: number, z: number){
    //var x = x
    //var y = y
    //var z = z
this.initX= x
this.initY= y
this.initZ= z
}


    public paint(graphics: Graphics){
    //var graphics = graphics
super.paint(graphics)
}


                //@Throws(Error::class)
            
    public damage(damage: number, damageType: number){
    //var damage = damage
    //var damageType = damageType



                            throw Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    public getDamage(damageType: number): number{
    //var damageType = damageType



                            throw Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    public isDestroyed(): boolean{



                            throw Error(commonStrings!.NOT_IMPLEMENTED)
}


    public getGroupInterface(): Group[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return groupInterface;
    
}


    public setGroupInterface(teamInterface: Group[]){
    //var teamInterface = teamInterface
this.groupInterface= teamInterface
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
this.allBinaryGameLayerManagerP= allBinaryGameLayerManager

                        if(this.allBinaryGameLayerManagerP == 
                                    null
                                )
                        
                                    {
                                    


                            throw RuntimeException()

                                    }
                                
}


    public isReadyForExplosion(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return readyForExplosion;
    
}


    setReadyForExplosion(isReadyForExplosion: boolean){
    //var isReadyForExplosion = isReadyForExplosion
this.readyForExplosion= isReadyForExplosion
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
                        return initX;
    
}


    public getInitY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initY;
    
}


                //@Throws(Error::class)
            
    public up(){
}


                //@Throws(Error::class)
            
    public down(){
}


                //@Throws(Error::class)
            
    public right(){
}


                //@Throws(Error::class)
            
    public left(){
}


                //@Throws(Error::class)
            
    public strafeLeft(){
}


                //@Throws(Error::class)
            
    public strafeRight(){
}


                //@Throws(Error::class)
            
    public fire(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var layerManager = layerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Error::class)
            
    public special1(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var layerManager = layerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Error::class)
            
    public special2(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var layerManager = layerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Error::class)
            
    public special3(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var layerManager = layerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Error::class)
            
    public special4(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var layerManager = layerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Error::class)
            
    public special5(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var layerManager = layerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Error::class)
            
    public up(yAnalogValue: number){
    //var yAnalogValue = yAnalogValue
}


                //@Throws(Error::class)
            
    public down(yAnalogValue: number){
    //var yAnalogValue = yAnalogValue
}


                //@Throws(Error::class)
            
    public right(xAnalogValue: number){
    //var xAnalogValue = xAnalogValue
}


                //@Throws(Error::class)
            
    public left(xAnalogValue: number){
    //var xAnalogValue = xAnalogValue
}


                //@Throws(Error::class)
            
    public rightTrigger(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent, xAnalogValue: number){
    //var layerManager = layerManager
    //var gameKeyEvent = gameKeyEvent
    //var xAnalogValue = xAnalogValue
}


                //@Throws(Error::class)
            
    public leftTrigger(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent, xAnalogValue: number){
    //var layerManager = layerManager
    //var gameKeyEvent = gameKeyEvent
    //var xAnalogValue = xAnalogValue
}


    public onDestroyed(destroyedEvent: DestroyedEvent){
    //var destroyedEvent = destroyedEvent
}


    public getPickupBehavior(): PickupBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pickupBehavior;
    
}


    public setPickupBehavior(pickupBehavior: PickupBehavior){
    //var pickupBehavior = pickupBehavior
this.pickupBehavior= pickupBehavior
}


                //@Throws(Error::class)
            
    public addPart(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface){
    //var pickedUpLayerInterfaceFactoryInterface = pickedUpLayerInterfaceFactoryInterface
}


    public setPartInterfaceArray(partInterfaceArray: PartInterface[]){
    //var partInterfaceArray = partInterfaceArray
this.partInterfaceArrayP= partInterfaceArray
}


    public getPartInterfaceArray(): PartInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return partInterfaceArrayP;
    
}


    public toString(stringBuffer: StringMaker){
    //var stringBuffer = stringBuffer

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        


    var positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        

super.toString(stringBuffer)
stringBuffer!.append(commonSeps!.NEW_LINE)

    var groupInterfaceArray: Group[] = this.getGroupInterface()!;
        
        


    var size: number = groupInterfaceArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
stringBuffer!.append(groupInterfaceArray[index]!.toString())
stringBuffer!.append(commonSeps!.COMMA)
}


    var pickupBehavior: PickupBehavior = this.getPickupBehavior()!;
        
        


                        if(pickupBehavior != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(commonSeps!.NEW_LINE)
stringBuffer!.append(pickupBehavior!.toString())

                                    }
                                
stringBuffer!.append(commonSeps!.NEW_LINE)
stringBuffer!.append(READYFOREXPLOSION)
stringBuffer!.appendboolean(readyForExplosion)
stringBuffer!.append(commonSeps!.NEW_LINE)
stringBuffer!.append(commonStrings!.INIT)
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(positionStrings!.X_LABEL)
stringBuffer!.appendint(initX)
stringBuffer!.append(positionStrings!.Y_LABEL)
stringBuffer!.appendint(initX)
stringBuffer!.append(positionStrings!.Z_LABEL)
stringBuffer!.appendint(initZ)
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

this.toString(stringBuffer)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

