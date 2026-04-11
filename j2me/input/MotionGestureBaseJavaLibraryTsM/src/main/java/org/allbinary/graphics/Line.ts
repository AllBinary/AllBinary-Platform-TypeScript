
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
        




export class Line
            extends Object
         {
        

    private p1: GPoint

    private p2: GPoint

    private deltaX: number= 0.0

    private deltaY: number= 0.0
public constructor (p1: GPoint, p2: GPoint){

            super();
            var p1 = p1
var p2 = p2
this.p1= PointFactory.getInstance()!.ZERO_ZERO;
    
this.p2= this.p1;
    
this.setP1(p1);
    
this.setP2(p2);
    
}


    public getGradient(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getDeltaY() /getDeltaX();
    
}


    update(){
deltaX= getP1()!.getX();

                        .toDouble() -getP2()!.getX();
    
deltaY= getP1()!.getY();

                        .toDouble() -getP2()!.getY();
    
}


    public getDeltaX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return deltaX;
    
}


    public getDeltaY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return deltaY;
    
}


    public getP1(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return p1;
    
}


    public getP2(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return p2;
    
}


    public setP1(p1: GPoint){
var p1 = p1
this.p1= p1;
    
this.update();
    
}


    public setP2(p2: GPoint){
var p2 = p2
this.p2= p2;
    
this.update();
    
}


}
                
            

