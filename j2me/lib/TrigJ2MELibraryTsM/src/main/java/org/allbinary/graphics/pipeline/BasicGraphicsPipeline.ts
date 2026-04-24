
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
        



import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { Angle } from "../../../../org/allbinary/math/Angle.js";

    
import { NoDecimalTrigTable } from "../../../../org/allbinary/math/NoDecimalTrigTable.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicGraphicsPipeline
            extends Object
         {
        

    pointBasicArrayList: BasicArrayList
public constructor (points: BasicArrayList){

            super();
        var points = points
this.pointBasicArrayList= points;
    
}


    public setInitMatrix(points: BasicArrayList){
var points = points
this.pointBasicArrayList= points;
    
}


    public createMatrix(){
}


                //@Throws(Error::class)
            
    public translate(x: number, y: number){
var x = x
var y = y

    var newBasicArrayList: BasicArrayList = new BasicArrayListD();
        
        
;
    

    var size: number = this.pointBasicArrayList!.size()!;
        
        
;
    

    var pointFactory: PointFactory = PointFactory.getInstance()!;
        
        
;
    

    var secondPoint: GPoint
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
secondPoint= this.pointBasicArrayList!.objectArray[index]! as GPoint;
    

                        if(secondPoint!.getX() != 1000)
                        
                                    {
                                    newBasicArrayList!.add(pointFactory!.getInstance0(secondPoint!.getX() +x, secondPoint!.getY() +y));
    

                                    }
                                
                        else {
                            newBasicArrayList!.add(secondPoint);
    

                        }
                            
}

this.pointBasicArrayList= newBasicArrayList;
    
}


                //@Throws(Error::class)
            
    public rotate(angle: Angle){
var angle = angle
this.rotate(angle.getValue());
    
}


    private readonly noDecimalTrigTable: NoDecimalTrigTable = NoDecimalTrigTable.getInstance()!;
        
        

                //@Throws(Error::class)
            
    rotate(angle: number){
var angle = angle

    var newBasicArrayList: BasicArrayList = new BasicArrayListD();
        
        
;
    

    var secondPoint: GPoint
;
    

    var y: number= 0
;
    

    var secondX: number= 0
;
    

    var secondY: number= 0
;
    

    var point: GPoint
;
    

    var pointFactory: PointFactory = PointFactory.getInstance()!;
        
        
;
    

    var size: number = this.pointBasicArrayList!.size()!;
        
        
;
    

    var sin: number= 0
;
    

    var cos: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
secondPoint= this.pointBasicArrayList!.objectArray[index]! as GPoint;
    

                        if(secondPoint!.getX() != 1000)
                        
                                    {
                                    sin= this.noDecimalTrigTable!.sin(angle);
    
cos= this.noDecimalTrigTable!.cos(angle);
    
y= secondPoint!.getY() *sin;
    
secondX= (secondPoint!.getX() *cos) -y;
    
secondY= (secondPoint!.getX() *sin) +(secondPoint!.getY() *cos);
    
point= pointFactory!.getInstance0(secondX /10000, secondY /10000);
    
newBasicArrayList!.add(point);
    

                                    }
                                
                        else {
                            newBasicArrayList!.add(secondPoint);
    

                        }
                            
}

this.pointBasicArrayList= newBasicArrayList;
    
}


                //@Throws(Error::class)
            
    public mirror(width: number){
var width = width

    var pointFactory: PointFactory = PointFactory.getInstance()!;
        
        
;
    

    var halfWidth: number = (width>>1);
        
        
;
    

    var newBasicArrayList: BasicArrayList = new BasicArrayListD();
        
        
;
    

    var secondPoint: GPoint
;
    

    var newX: number= 0
;
    

    var point: GPoint
;
    

    var size: number = this.pointBasicArrayList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
secondPoint= this.pointBasicArrayList!.objectArray[index]! as GPoint;
    

                        if(secondPoint!.getX() != 1000)
                        
                                    {
                                    newX= 0;
    

                        if(secondPoint!.getX() > halfWidth)
                        
                                    {
                                    newX= halfWidth -(secondPoint!.getX() -halfWidth);
    

                                    }
                                
                        else {
                            newX= halfWidth +(halfWidth -secondPoint!.getX());
    

                        }
                            
point= pointFactory!.getInstance0(newX, secondPoint!.getY());
    
newBasicArrayList!.add(point);
    

                                    }
                                
                        else {
                            newBasicArrayList!.add(secondPoint);
    

                        }
                            
}

this.pointBasicArrayList= newBasicArrayList;
    
}


    public getMatrix(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pointBasicArrayList;
    
}


}
                
            

