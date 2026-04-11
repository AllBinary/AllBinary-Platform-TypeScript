
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
        




export class VelocityProperties extends BasicVelocityProperties
                , VelocityInterface {
        

    public static readonly NULL_VELOCITY_PROPERTIES: VelocityProperties = new VelocityProperties(0, 0);
        
        

    private maxForwardVelocity: number= 0

    private maxReverseVelocity: number= 0
public constructor (maxForwardVelocity: number, maxReverseVelocity: number){

            super();
            var maxForwardVelocity = maxForwardVelocity
var maxReverseVelocity = maxReverseVelocity
this.setMaxForwardVelocity(maxForwardVelocity);
    
this.setMaxReverseVelocity(maxReverseVelocity);
    
}


    public getMaxForwardVelocity(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxForwardVelocity;
    
}


    public setMaxForwardVelocity(maxForwardVelocity: number){
var maxForwardVelocity = maxForwardVelocity
this.maxForwardVelocity= maxForwardVelocity;
    
}


    public getMaxReverseVelocity(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxReverseVelocity;
    
}


    public setMaxReverseVelocity(maxReverseVelocity: number){
var maxReverseVelocity = maxReverseVelocity
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
                        return this.isOverXYMaxVelocity(this.getMaxForwardVelocity());

                        ;
    
}


    public isOverXYMaxReverseVelocity(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isOverXYMaxVelocity(this.getMaxReverseVelocity());

                        ;
    
}


    public limitXYToForwardAndReverseMaxVelocity(){
this.limitMaxXYForwardVelocity();
    
this.limitMaxXYReverseVelocity();
    
}


    public limitMaxXYVelocity(maxVelocity: number){
var maxVelocity = maxVelocity
this.limitMaxXVelocity(maxVelocity);
    
this.limitMaxYVelocity(maxVelocity);
    
}


    public limitMaxPositiveYVelocity(maxVelocity: number){
var maxVelocity = maxVelocity

                        if(this.velocityYBasicDecimal!.getUnscaled() > maxVelocity)
                        
                                    {
                                    this.velocityYBasicDecimal!.set(maxVelocity);
    

                                    }
                                
}


    public limitMaxNegativeYVelocity(maxVelocity: number){
var maxVelocity = maxVelocity

                        if(this.velocityYBasicDecimal!.getUnscaled() <  -maxVelocity)
                        
                                    {
                                    this.velocityYBasicDecimal!.set( -maxVelocity);
    

                                    }
                                
}


    public limitMaxYVelocity(maxVelocity: number){
var maxVelocity = maxVelocity
this.limitMaxPositiveYVelocity(maxVelocity);
    
this.limitMaxNegativeYVelocity(maxVelocity);
    
}


    public limitMaxXVelocity(maxVelocity: number){
var maxVelocity = maxVelocity

                        if(this.velocityXBasicDecimal!.getUnscaled() > maxVelocity)
                        
                                    {
                                    this.velocityXBasicDecimal!.set(maxVelocity);
    

                                    }
                                

                        if(this.velocityXBasicDecimal!.getUnscaled() <  -maxVelocity)
                        
                                    {
                                    this.velocityXBasicDecimal!.set( -maxVelocity);
    

                                    }
                                
}


    public isOverXYMaxVelocity(maxVelocity: number): boolean{
var maxVelocity = maxVelocity

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


    public setVelocity(magnitude: number, angle: number, otherAngle: number){
var magnitude = magnitude
var angle = angle
var otherAngle = otherAngle
super.setVelocity(magnitude, angle, otherAngle);
    
this.limitXYToForwardAndReverseMaxVelocity();
    
}


    public addVelocity(magnitude: number, angle: number, otherAngle: number){
var magnitude = magnitude
var angle = angle
var otherAngle = otherAngle
super.addVelocity(magnitude, angle, otherAngle);
    
this.limitXYToForwardAndReverseMaxVelocity();
    
}


}
                
            

