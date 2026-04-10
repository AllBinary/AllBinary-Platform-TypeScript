
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { CollidableCompositeLayer } from "../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class CollidableBaseBehavior
            extends Object
        
                , CollidableInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private collidable: boolean = true;
        
        

    readonly ownerLayer: CollidableCompositeLayer
public constructor (ownerLayer: CollidableCompositeLayer, collidable: boolean){

            super();
            var ownerLayer = ownerLayer
var collidable = collidable
this.ownerLayer= ownerLayer
this.collidable= collidable
}


    public update(){
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this::class.toString()!;
    
}


    public setCollidable(collidable: boolean){
var collidable = collidable
this.collidable= collidable
}


    public isCollidable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.collidable;
    
}


                @Throws(Exception::class)
            
    public collide(allbinaryCollidableLayer: CollidableCompositeLayer){
var allbinaryCollidableLayer = allbinaryCollidableLayer



                            throw Exception(StringMaker().
                            append(commonStrings!.NOT_IMPLEMENTED)!.append(CommonLabels.getInstance()!.COLON_SEP)!.append(this::class.toString()!)!.toString())
}


    private readonly layerCollisionUtil: LayerCollisionUtil = LayerCollisionUtil.getInstance()!;
        
        

    public isCollision(collisionLayer: CollidableCompositeLayer): boolean{
var collisionLayer = collisionLayer



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerCollisionUtil!.isCollision(this.ownerLayer, collisionLayer);
    
}


    public isCollision(collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface): boolean{
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerCollisionUtil!.isCollision(ownerLayer, collidableInterfaceCompositeInterface as AllBinaryLayer);
    
}


                @Throws(Exception::class)
            
    public collide(collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface



                            throw Exception(commonStrings!.NOT_IMPLEMENTED)
}


    public paint(graphics: Graphics){
    //var graphics = graphics
}


    public getCollisionTypeWith(layerInterface: AllBinaryLayer): CollisionType{
var layerInterface = layerInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollisionTypeFactory.getInstance()!.NONE;
    
}


}
                
            

