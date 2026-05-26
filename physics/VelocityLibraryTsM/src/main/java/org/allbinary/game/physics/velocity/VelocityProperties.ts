
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicVelocityProperties } from './BasicVelocityProperties.js';
import { VelocityInterface } from './VelocityInterface.js';

export class VelocityProperties extends BasicVelocityProperties implements VelocityInterface {
        

    public static readonly NULL_VELOCITY_PROPERTIES: VelocityProperties = new VelocityProperties(0, 0);

    private maxForwardVelocity: number= 0;

    private maxReverseVelocity: number= 0;

public constructor (maxForwardVelocity: number, maxReverseVelocity: number){

            super();
        this.setMaxForwardVelocity(maxForwardVelocity);
    
this.setMaxReverseVelocity(maxReverseVelocity);
    
}


    public getMaxForwardVelocity(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxForwardVelocity;
    
}


    public setMaxForwardVelocity(maxForwardVelocity: number){
this.maxForwardVelocity= maxForwardVelocity;
    
}


    public getMaxReverseVelocity(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxReverseVelocity;
    
}


    public setMaxReverseVelocity(maxReverseVelocity: number){
this.maxReverseVelocity= maxReverseVelocity;
    
}


    public limitMaxXYForwardVelocity(){
this.limitMaxXYVelocity(this.getMaxForwardVelocity());
    
}


    public limitMaxXYReverseVelocity(){
this.limitMaxXYVelocity(this.getMaxReverseVelocity());
    
}


    public limitMaxYForwardVelocity(){
this.limitMaxYVelocity(this.getMaxForwardVelocity());
    
}


    public limitMaxYReverseVelocity(){
this.limitMaxYVelocity(this.getMaxReverseVelocity());
    
}


    public limitMaxXForwardVelocity(){
this.limitMaxXVelocity(this.getMaxForwardVelocity());
    
}


    public limitMaxXReverseVelocity(){
this.limitMaxXVelocity(this.getMaxReverseVelocity());
    
}


    public isOverXYMaxForwardVelocity(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isOverXYMaxVelocity(this.getMaxForwardVelocity());;
    
}


    public isOverXYMaxReverseVelocity(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isOverXYMaxVelocity(this.getMaxReverseVelocity());;
    
}


    public limitXYToForwardAndReverseMaxVelocity(){
this.limitMaxXYForwardVelocity();
    
this.limitMaxXYReverseVelocity();
    
}


    public limitMaxXYVelocity(maxVelocity: number){
this.limitMaxXVelocity(maxVelocity);
    
this.limitMaxYVelocity(maxVelocity);
    
}


    public limitMaxPositiveYVelocity(maxVelocity: number){

                        if(this.velocityYBasicDecimal!.getUnscaled() > maxVelocity)
                        
                                    {
                                    this.velocityYBasicDecimal!.setint(maxVelocity);
    

                                    }
                                
}


    public limitMaxNegativeYVelocity(maxVelocity: number){

                        if(this.velocityYBasicDecimal!.getUnscaled() <  -maxVelocity)
                        
                                    {
                                    this.velocityYBasicDecimal!.setint( -maxVelocity);
    

                                    }
                                
}


    public limitMaxYVelocity(maxVelocity: number){
this.limitMaxPositiveYVelocity(maxVelocity);
    
this.limitMaxNegativeYVelocity(maxVelocity);
    
}


    public limitMaxXVelocity(maxVelocity: number){

                        if(this.velocityXBasicDecimal!.getUnscaled() > maxVelocity)
                        
                                    {
                                    this.velocityXBasicDecimal!.setint(maxVelocity);
    

                                    }
                                

                        if(this.velocityXBasicDecimal!.getUnscaled() <  -maxVelocity)
                        
                                    {
                                    this.velocityXBasicDecimal!.setint( -maxVelocity);
    

                                    }
                                
}


    public isOverXYMaxVelocity(maxVelocity: number): boolean{

                        if(this.velocityXBasicDecimal!.getUnscaled() > maxVelocity)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        if(this.velocityXBasicDecimal!.getUnscaled() <  -maxVelocity)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        if(this.velocityYBasicDecimal!.getUnscaled() > maxVelocity)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        if(this.velocityYBasicDecimal!.getUnscaled() <  -maxVelocity)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public setVelocityi(magnitude: number, angle: number, otherAngle: number){
super.setVelocityi(magnitude, angle, otherAngle);
    
this.limitXYToForwardAndReverseMaxVelocity();
    
}


    public addVelocityi(magnitude: number, angle: number, otherAngle: number){
super.addVelocityi(magnitude, angle, otherAngle);
    
this.limitXYToForwardAndReverseMaxVelocity();
    
}


}
                
            

