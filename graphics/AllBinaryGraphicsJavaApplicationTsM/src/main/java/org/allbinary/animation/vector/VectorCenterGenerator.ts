
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../java/util/Vector.js";

    
import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { GraphicItemInterface } from "../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemInterface.js";

    
import { LinesGraphicItem } from "../../../../org/allbinary/graphics/j2me/workarea/tools/LinesGraphicItem.js";

    
import { Points } from "../../../../org/allbinary/graphics/j2me/workarea/tools/Points.js";

    
import { BasicGraphicsPipeline } from "../../../../org/allbinary/graphics/pipeline/BasicGraphicsPipeline.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class VectorCenterGenerator
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static translate(list: BasicArrayList, x: number, y: number): BasicArrayList{
var list = list
var x = x
var y = y

    var graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(list);
        
        
;
    
graphicsPipe!.createMatrix();
    
graphicsPipe!.translate(x, y);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsPipe!.getMatrix();

                        ;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    minX: number = Integer.MAX_VALUE;
        
        

    minY: number = Integer.MAX_VALUE;
        
        

    maxX: number = Integer.MIN_VALUE;
        
        

    maxY: number = Integer.MIN_VALUE;
        
        

    private dx: number = 0;
        
        

    private dy: number = 0;
        
        

    private width: number= 0

    private height: number= 0
public constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public calculate(hashMap: HashMap<any, any>){
var hashMap = hashMap

    var graphicItemArray: any[] = hashMap!.keys.toTypedArray()!;
        
        
;
    

    var size: number = graphicItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: GraphicItemInterface = hashMap!.get(graphicItemArray[index]!);

                         as GraphicItemInterface;
        
        
;
    

                        if(item.getName() == LinesGraphicItem.getStaticName())
                        
                                    {
                                    this.getInstance(item.getPointsInterface()!.getPoints());
    

                                    }
                                
}

logUtil!.put("minX: " +minX +" minY: " +minY +" maxX: " +maxX +" maxY: " +maxY, this, commonStrings!.GET_INSTANCE);
    
setWidth(maxX -minX);
    
setHeight(maxY -minY);
    

    var max: number = getWidth()!;
        
        
;
    

                        if(getHeight() > max)
                        
                                    {
                                    max= getHeight();
    

                                    }
                                

    var middle: number = max /2;
        
        
;
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        
;
    

    var s: string = StringMaker().
                            append(commonLabels!.WIDTH_LABEL)!.appendint(getWidth())!.append(commonLabels!.HEIGHT_LABEL)!.appendint(getHeight())!.append(" max: ")!.appendint(max)!.append(" middle: ")!.appendint(middle)!.toString()!;
        
        
;
    
logUtil!.put(s, this, commonStrings!.GET_INSTANCE);
    

    var currentMiddleX: number = minX +getWidth() /2;
        
        
;
    

    var currentMiddleY: number = minY +getHeight() /2;
        
        
;
    
dx= middle -currentMiddleX;
    
dy= middle -currentMiddleY;
    
}


                //@Throws(Error::class)
            
    public transform(hashMap: HashMap<any, any>){
var hashMap = hashMap
this.calculate(hashMap);
    
logUtil!.put(StringMaker().
                            append(" dx: ")!.appendint(dx)!.append(" dy: ")!.appendint(dy)!.toString(), this, commonStrings!.GET_INSTANCE);
    

    var graphicItemArray: any[] = hashMap!.keys.toTypedArray()!;
        
        
;
    

    var size: number = graphicItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: GraphicItemInterface = hashMap!.get(graphicItemArray[index]!);

                         as GraphicItemInterface;
        
        
;
    

    var list: BasicArrayList = translate(item.getPointsInterface()!.getPoints(), dx, dy)!;
        
        
;
    

    var newPoints: Points = new Points();
        
        
;
    
newPoints!.addPoints(list);
    
item.setPointsInterface(newPoints);
    
}

}


                //@Throws(Error::class)
            
    getInstance(pointVector: BasicArrayList){
var pointVector = pointVector

        try {
            
    var newVector: Vector = new Vector();
        
        
;
    

    var size: number = pointVector!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var point: GPoint = pointVector!.get(index);

                         as GPoint;
        
        
;
    

                        if(point.getX() < minX)
                        
                                    {
                                    minX= point.getX();
    

                                    }
                                

                        if(point.getX() > maxX)
                        
                                    {
                                    maxX= point.getX();
    

                                    }
                                

                        if(point.getY() < minY)
                        
                                    {
                                    minY= point.getY();
    

                                    }
                                

                        if(point.getY() > maxY)
                        
                                    {
                                    maxY= point.getY();
    

                                    }
                                
}


                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    



                            throw e
}

}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return width;
    
}


    public setWidth(width: number){
var width = width
this.width= width;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return height;
    
}


    public setHeight(height: number){
var height = height
this.height= height;
    
}


}
                
            

