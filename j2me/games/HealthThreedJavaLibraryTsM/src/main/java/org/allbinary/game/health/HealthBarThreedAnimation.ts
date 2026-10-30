
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL10

import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { ColorBufferList } from '../../../../min3d/core/ColorBufferList.js';
//not GWT import const ColorBufferList

import { Number3dBufferList } from '../../../../min3d/core/Number3dBufferList.js';
//not GWT import const Number3dBufferList

import { Rectangle } from '../../../../min3d/objectPrimitives/Rectangle.js';
//not GWT import const Rectangle

import { Number3d } from '../../../../min3d/vos/Number3d.js';
//not GWT import const Number3d

import { OpenGLESGraphics } from '../../../../org/allbinary/device/OpenGLESGraphics.js';
//not GWT import const OpenGLESGraphics

import { Object3dProcessor } from '../../../../org/allbinary/graphics/threed/min3d/renderer/Object3dProcessor.js';
//not GWT import const Object3dProcessor

import { Object3dProcessorUtil } from '../../../../org/allbinary/graphics/threed/min3d/renderer/Object3dProcessorUtil.js';
//not GWT import const Object3dProcessorUtil

import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
//not GWT import const ViewPositionBase

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HealthBarAnimation } from './HealthBarAnimation.js';
//sameFolderImports - not GWT import - same folder const HealthBarAnimation

export class HealthBarThreedAnimation extends HealthBarAnimation {
        

    private rectangle: Rectangle;

    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;

public constructor (layerInterface: AllBinaryLayer, location: number){
            super(layerInterface, location);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.basicColor= this.basicColorFactory!.GREEN;
    
this.colorP= this.basicColor!.intValue();
    
this.rectangle= new Rectangle(0, 0, 1, 1, this.basicColor);
    
this.rectangle.setDoubleSidedEnabled(true);
    
this.rectangle.setNormalsEnabled(false);
    
this.rectangle.setTexturesEnabled(false);
    
}


    updateColor(){

    let colorBufferList: ColorBufferList = this.rectangle.getVertices()!.getColor4BufferList()!;;
    

    let size: number = colorBufferList!.size()!;;
    




                        for (
    let index: number = size;--index >= 0; )
        {
colorBufferList!.set(index, this.basicColor);
    
}

}


    updateSize(){

    let number3dBufferList: Number3dBufferList = this.rectangle.getVertices()!.getPointsOnFacesNumber3dBufferList()!;;
    

    let width: number = this.x2;;
    

    let height: number = this.thickness *2;;
    

    let segsH: number = 1;;
    

    let segsW: number = 1;;
    

    let row: number= 0;;
    

    let col: number= 0;;
    

    let w: number = globalThis.Math.trunc(width /segsW);;
    

    let h: number = globalThis.Math.trunc(height /segsH);;
    

    let width5: number = width /2;;
    

    let height5: number = height /2;;
    

    let index: number = 0;;
    




                        for (
    row= 0; row <= segsH; row++)
        {




                        for (
    col= 0; col <= segsW; col++)
        {
number3dBufferList!.set(index++, col *w -width5, row *h -height5, 0);
    
}

}

}


    public onHealthChange(newX2: number){
super.onHealthChange(newX2);
    
this.updateColor();
    
this.updateSize();
    
}


    private readonly object3dProcessor: Object3dProcessor = Object3dProcessorUtil.getInstance()!.getInstanceObject3dProcessor()!;

    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){

    let openGLESGraphics: OpenGLESGraphics = graphics as OpenGLESGraphics;;
    

    let gl: GL10 = openGLESGraphics!.getGl10()!;;
    

    let viewPosition: ViewPositionBase = this.allbinaryLayer!.getViewPosition()!;;
    

    let positionNumber3d: Number3d = this.rectangle.getPosition()!;;
    
positionNumber3d!.x=  -(viewPosition!.getX());
    
positionNumber3d!.z=  -(viewPosition!.getY());
    
positionNumber3d!.y= viewPosition!.getZ() +this.allbinaryLayer!.getHeight();
    
this.object3dProcessor!.drawObject(gl, this.rectangle);
    
}


}

