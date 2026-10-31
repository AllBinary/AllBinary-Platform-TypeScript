
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { GraphicItemInterface } from '../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemInterface.js';
//not GWT import const GraphicItemInterface

import { LinesGraphicItem } from '../../../../org/allbinary/graphics/j2me/workarea/tools/LinesGraphicItem.js';
//not GWT import const LinesGraphicItem

import { Points } from '../../../../org/allbinary/graphics/j2me/workarea/tools/Points.js';
//not GWT import const Points

import { BasicGraphicsPipeline } from '../../../../org/allbinary/graphics/pipeline/BasicGraphicsPipeline.js';
//not GWT import const BasicGraphicsPipeline

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VectorCenterGenerator
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static translate(list: BasicArrayList, x: number, y: number): BasicArrayList{

    let graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(list);;
    
graphicsPipe!.createMatrix();
    
graphicsPipe!.translate(x, y);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsPipe!.getMatrix();;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    minX: number = Integer.MAX_VALUE;

    minY: number = Integer.MAX_VALUE;

    maxX: number = Integer.MIN_VALUE;

    maxY: number = Integer.MIN_VALUE;

    private dx: number = 0;

    private dy: number = 0;

    private width: number= 0;

    private height: number= 0;

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public calculate(hashMap: HashMap<any, any>){

    let graphicItemArray: any[] = hashMap!.keys().toArray()!;;
    

    let size: number = graphicItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: GraphicItemInterface = hashMap!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    

                        if(item.getName() == LinesGraphicItem.getStaticName())
                        
                                    {
                                    this.getInstance(item.getPointsInterface()!.getPoints());
    

                                    }
                                
}

this.logUtil!.putF("minX: " +this.minX +" minY: " +this.minY +" maxX: " +this.maxX +" maxY: " +this.maxY, this, this.commonStrings!.GET_INSTANCE);
    
this.setWidth(this.maxX -this.minX);
    
this.setHeight(this.maxY -this.minY);
    

    let max: number = this.getWidth()!;;
    

                        if(getHeight() > max)
                        
                                    {
                                    max= this.getHeight();
    

                                    }
                                

    let middle: number = globalThis.Math.trunc(max /2);;
    

    let commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    let s: string = new StringMaker().append(commonLabels!.WIDTH_LABEL)!.appendint(getWidth())!.append(commonLabels!.HEIGHT_LABEL)!.appendint(getHeight())!.append(" max: ")!.appendint(max)!.append(" middle: ")!.appendint(middle)!.toString()!;;
    
this.logUtil!.putF(s, this, this.commonStrings!.GET_INSTANCE);
    

    let currentMiddleX: number = this.minX +this.getWidth() /2;;
    

    let currentMiddleY: number = this.minY +this.getHeight() /2;;
    
this.dx= middle -currentMiddleX;
    
this.dy= middle -currentMiddleY;
    
}


                //@Throws(Exception.constructor)
            
    public transform(hashMap: HashMap<any, any>){
this.calculate(hashMap);
    
this.logUtil!.putF(new StringMaker().append(" dx: ")!.appendint(this.dx)!.append(" dy: ")!.appendint(this.dy)!.toString(), this, this.commonStrings!.GET_INSTANCE);
    

    let graphicItemArray: any[] = hashMap!.keys().toArray()!;;
    

    let size: number = graphicItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: GraphicItemInterface = hashMap!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    

    let list: BasicArrayList = VectorCenterGenerator.translate(item.getPointsInterface()!.getPoints(), dx, dy)!;;
    

    let newPoints: Points = new Points();;
    
newPoints!.addPoints(list);
    
item.setPointsInterface(newPoints);
    
}

}


                //@Throws(Exception.constructor)
            
    getInstance(pointVector: BasicArrayList){

 try { 
    let size: number = pointVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let point: GPoint = pointVector!.get(index) as GPoint;;
    

                        if(point.getX() < this.minX)
                        
                                    {
                                    this.minX= point.getX();
    

                                    }
                                

                        if(point.getX() > this.maxX)
                        
                                    {
                                    this.maxX= point.getX();
    

                                    }
                                

                        if(point.getY() < this.minY)
                        
                                    {
                                    this.minY= point.getY();
    

                                    }
                                

                        if(point.getY() > this.maxY)
                        
                                    {
                                    this.maxY= point.getY();
    

                                    }
                                
}

 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_INSTANCE, e);
    



                            throw e;
                    

 }
   }
 
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.width;
    
}


    public setWidth(width: number){
this.width= width;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.height;
    
}


    public setHeight(height: number){
this.height= height;
    
}


}

