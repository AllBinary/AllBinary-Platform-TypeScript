
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


        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageArrayRotationAnimationInfo
            extends Object
         {
        

    private imageArray: Image[]

    private angleIncrement: number

    private totalAngle: number

    private dx: number

    private dy: number
public constructor (imageArray: Image[], angleIncrement: number, totalAngle: number, dx: number, dy: number){

            super();
        this.imageArray= imageArray;
    
this.angleIncrement= angleIncrement;
    
this.totalAngle= totalAngle;
    
this.dx= dx;
    
this.dy= dy;
    
}


    public setImageArray(imageArray: Image[]){
this.imageArray= imageArray;
    
}


    public getImageArray(): Image[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageArray;
    
}


    public getAngleInfoP(): AngleInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AngleInfo.getInstance(this.angleIncrement);;
    
}


    public setTotalAngle(totalAngle: number){
this.totalAngle= totalAngle;
    
}


    public getTotalAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalAngle;
    
}


    public setDx(dx: number){
this.dx= dx;
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dx;
    
}


    public setDy(dy: number){
this.dy= dy;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dy;
    
}


}
                
            

