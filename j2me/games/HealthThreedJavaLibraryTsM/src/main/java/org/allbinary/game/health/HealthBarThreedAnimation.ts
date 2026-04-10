
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
        



import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { ColorBufferList } from "../../../../min3d/core/ColorBufferList.js";

    
import { Number3dBufferList } from "../../../../min3d/core/Number3dBufferList.js";

    
import { Rectangle } from "../../../../min3d/objectPrimitives/Rectangle.js";

    
import { Number3d } from "../../../../min3d/vos/Number3d.js";

    
import { OpenGLESGraphics } from "../../../../org/allbinary/device/OpenGLESGraphics.js";

    
import { Object3dProcessor } from "../../../../org/allbinary/graphics/threed/min3d/renderer/Object3dProcessor.js";

    
import { Object3dProcessorUtil } from "../../../../org/allbinary/graphics/threed/min3d/renderer/Object3dProcessorUtil.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { ViewPosition } from "../../../../org/allbinary/view/ViewPosition.js";

    

export class HealthBarThreedAnimation extends HealthBarAnimation {
        

    private rectangle: Rectangle

    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        
public constructor (layerInterface: AllBinaryLayer, location: number)                        

                            : super(layerInterface, location){

            super();
            var layerInterface = layerInterface
var location = location


                            //For kotlin this is before the body of the constructor.
                    
this.basicColor= this.basicColorFactory!.GREEN
this.colorP= this.basicColor!.toInt()
rectangle= Rectangle(0, 0, 1, 1, this.basicColor)
rectangle.setDoubleSidedEnabled(true)
rectangle.setNormalsEnabled(false)
rectangle.setTexturesEnabled(false)
}


    updateColor(){

    var colorBufferList: ColorBufferList = rectangle.getVertices()!.getColor4BufferList()!;
        
        


    var size: number = colorBufferList!.size()!;
        
        





                        for (
    var index: number = size;
        
        
--index >= 0; )
        {
colorBufferList!.set(index, this.basicColor)
}

}


    updateSize(){

    var number3dBufferList: Number3dBufferList = rectangle.getVertices()!.getPointsOnFacesNumber3dBufferList()!;
        
        


    var width: number = x2;
        
        


    var height: number = this.thickness *2;
        
        


    var segsH: number = 1;
        
        


    var segsW: number = 1;
        
        


    var row: number= 0


    var col: number= 0


    var w: number = width /segsW;
        
        


    var h: number = height /segsH;
        
        


    var width5: number = width /2f;
        
        


    var height5: number = height /2f;
        
        


    var index: number = 0;
        
        





                        for (
    row <= segsH; row++)
        {




                        for (
    col <= segsW; col++)
        {
number3dBufferList!.set(index++, col.toFloat() *w -width5, row.toFloat() *h -height5, 0f)
}

}

}


    public onHealthChange(newX2: number){
    //var newX2 = newX2
super.onHealthChange(newX2)
this.updateColor()
this.updateSize()
}


    private readonly object3dProcessor: Object3dProcessor = Object3dProcessorUtil.getInstance()!.getInstanceObject3dProcessor()!;
        
        

    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
    //var graphics = graphics
    //var x = x
    //var y = y
    //var z = z

    var openGLESGraphics: OpenGLESGraphics = graphics as OpenGLESGraphics;
        
        


    var gl: GL10 = openGLESGraphics!.getGl10()!;
        
        


    var viewPosition: ViewPosition = this.allbinaryLayer!.getViewPosition()!;
        
        


    var positionNumber3d: Number3d = this.rectangle.getPosition()!;
        
        

positionNumber3d!.x=  -(viewPosition!.getX().toFloat())
positionNumber3d!.z=  -(viewPosition!.getY().toFloat())
positionNumber3d!.y= viewPosition!.getZ() +this.allbinaryLayer!.getHeight()
object3dProcessor!.drawObject(gl, this.rectangle)
}


}
                
            

