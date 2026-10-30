
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
        
import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { Angle } from '../../../../org/allbinary/math/Angle.js';
//not GWT import const Angle

import { NoDecimalTrigTable } from '../../../../org/allbinary/math/NoDecimalTrigTable.js';
//not GWT import const NoDecimalTrigTable

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicGraphicsPipeline
            extends Object
         {
        

    pointBasicArrayList: BasicArrayList;

public constructor (points: BasicArrayList){

            super();
        this.pointBasicArrayList= points;
    
}


    public setInitMatrix(points: BasicArrayList){
this.pointBasicArrayList= points;
    
}


    public createMatrix(){
}


                //@Throws(Exception.constructor)
            
    public translate(x: number, y: number){

    let newBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    let size: number = this.pointBasicArrayList!.size()!;;
    

    let pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    let secondPoint: GPoint;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
secondPoint= this.pointBasicArrayList!.objectArray[index]! as GPoint;
    

                        if(secondPoint!.getX() != 1000)
                        
                                    {
                                    newBasicArrayList!.add(pointFactory!.createXY(secondPoint!.getX() +x, secondPoint!.getY() +y));
    

                                    }
                                
                        else {
                            newBasicArrayList!.add(secondPoint);
    

                        }
                            
}

this.pointBasicArrayList= newBasicArrayList;
    
}


                //@Throws(Exception.constructor)
            
    public rotateToAngle(angle: Angle){
this.rotate(globalThis.Math.trunc(angle.getValue()));
    
}


    private readonly noDecimalTrigTable: NoDecimalTrigTable = NoDecimalTrigTable.getInstance()!;

                //@Throws(Exception.constructor)
            
    rotate(angle: number){

    let newBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    let secondPoint: GPoint;;
    

    let y: number= 0;;
    

    let secondX: number= 0;;
    

    let secondY: number= 0;;
    

    let point: GPoint;;
    

    let pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    let size: number = this.pointBasicArrayList!.size()!;;
    

    let sin: number= 0;;
    

    let cos: number= 0;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
secondPoint= this.pointBasicArrayList!.objectArray[index]! as GPoint;
    

                        if(secondPoint!.getX() != 1000)
                        
                                    {
                                    sin= this.noDecimalTrigTable!.sin(angle);
    
cos= this.noDecimalTrigTable!.cos(angle);
    
y= secondPoint!.getY() *sin;
    
secondX= (secondPoint!.getX() *cos) -y;
    
secondY= (secondPoint!.getX() *sin) +(secondPoint!.getY() *cos);
    
point= pointFactory!.createXY(globalThis.Math.trunc(globalThis.Math.trunc(secondX) /10000), globalThis.Math.trunc(globalThis.Math.trunc(secondY) /10000));
    
newBasicArrayList!.add(point);
    

                                    }
                                
                        else {
                            newBasicArrayList!.add(secondPoint);
    

                        }
                            
}

this.pointBasicArrayList= newBasicArrayList;
    
}


                //@Throws(Exception.constructor)
            
    public mirror(width: number){

    let pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    let halfWidth: number = (width>>1);;
    

    let newBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    let secondPoint: GPoint;;
    

    let newX: number= 0;;
    

    let point: GPoint;;
    

    let size: number = this.pointBasicArrayList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
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
                            
point= pointFactory!.createXY(newX, secondPoint!.getY());
    
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

