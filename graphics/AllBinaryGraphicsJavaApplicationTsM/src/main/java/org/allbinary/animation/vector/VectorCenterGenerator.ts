
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
        
//not game specific package import { HashMap } from '../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { GraphicItemInterface } from '../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemInterface.js';
      const GraphicItemInterface = globalThis.org.allbinary.graphics.j2me.workarea.tools.GraphicItemInterface;

      
//not game specific package import { LinesGraphicItem } from '../../../../org/allbinary/graphics/j2me/workarea/tools/LinesGraphicItem.js';
      const LinesGraphicItem = globalThis.org.allbinary.graphics.j2me.workarea.tools.LinesGraphicItem;

      
//not game specific package import { Points } from '../../../../org/allbinary/graphics/j2me/workarea/tools/Points.js';
      const Points = globalThis.org.allbinary.graphics.j2me.workarea.tools.Points;

      
//not game specific package import { BasicGraphicsPipeline } from '../../../../org/allbinary/graphics/pipeline/BasicGraphicsPipeline.js';
      const BasicGraphicsPipeline = globalThis.org.allbinary.graphics.pipeline.BasicGraphicsPipeline;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VectorCenterGenerator
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static translate(list: BasicArrayList, x: number, y: number): BasicArrayList{

    var graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(list);;
    
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

    var graphicItemArray: any[] = hashMap!.keys().()!;;
    

    var size: number = graphicItemArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var item: GraphicItemInterface = hashMap!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    

                        if(item.getName() == LinesGraphicItem.getStaticName())
                        
                                    {
                                    this.getInstance(item.getPointsInterface()!.getPoints());
    

                                    }
                                
}

this.logUtil!.putF("minX: " +this.minX +" minY: " +this.minY +" maxX: " +this.maxX +" maxY: " +this.maxY, this, this.commonStrings!.GET_INSTANCE);
    
this.setWidth(this.maxX -this.minX);
    
this.setHeight(this.maxY -this.minY);
    

    var max: number = this.getWidth()!;;
    

                        if(getHeight() > max)
                        
                                    {
                                    max= this.getHeight();
    

                                    }
                                

    var middle: number = max /2;;
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    var s: string = new StringMaker().append(commonLabels!.WIDTH_LABEL)!.appendint(getWidth())!.append(commonLabels!.HEIGHT_LABEL)!.appendint(getHeight())!.append(" max: ")!.appendint(max)!.append(" middle: ")!.appendint(middle)!.toString()!;;
    
this.logUtil!.putF(s, this, this.commonStrings!.GET_INSTANCE);
    

    var currentMiddleX: number = this.minX +this.getWidth() /2;;
    

    var currentMiddleY: number = this.minY +this.getHeight() /2;;
    
this.dx= middle -currentMiddleX;
    
this.dy= middle -currentMiddleY;
    
}


                //@Throws(Exception.constructor)
            
    public transform(hashMap: HashMap<any, any>){
this.calculate(hashMap);
    
this.logUtil!.putF(new StringMaker().append(" dx: ")!.appendint(this.dx)!.append(" dy: ")!.appendint(this.dy)!.toString(), this, this.commonStrings!.GET_INSTANCE);
    

    var graphicItemArray: any[] = hashMap!.keys().()!;;
    

    var size: number = graphicItemArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var item: GraphicItemInterface = hashMap!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    

    var list: BasicArrayList = VectorCenterGenerator.translate(item.getPointsInterface()!.getPoints(), dx, dy)!;;
    

    var newPoints: Points = new Points();;
    
newPoints!.addPoints(list);
    
item.setPointsInterface(newPoints);
    
}

}


                //@Throws(Exception.constructor)
            
    getInstance(pointVector: BasicArrayList){

        try {
            
    var newVector: Vector = new Vector();;
    

    var size: number = pointVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var point: GPoint = pointVector!.get(index) as GPoint;;
    

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


                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_INSTANCE, e);
    



                            throw e;
                    
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
                
            

