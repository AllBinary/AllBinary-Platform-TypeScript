
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
        



            import { Object } from '../../../java/lang/Object.js';


        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AngleFactory } from './AngleFactory.js';

export class FrameUtil
            extends Object
         {
        

    private static readonly instance: FrameUtil = new FrameUtil();

    public static getInstance(): FrameUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FrameUtil.instance;
    
}

private constructor (){

            super();
        }


    public getFrameForAngle(angle: number, angleIncrement: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.adjustAngleToFrameAngle(Math.round(angle)) /angleIncrement;
    
}


    public getFrameAngle(frame: number, angleIncrement: number): number{

    var frameAngle: number = angleIncrement *frame -90;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.adjustAngleToFrameAngle(frameAngle);;
    
}


    public adjustAngleToFrameAngle(currentAngle: number): number{

    var angleFactory: AngleFactory = AngleFactory.getInstance()!;
;
    

                        if(currentAngle > 359)
                        
                                    {
                                    currentAngle= (currentAngle -angleFactory!.TOTAL_ANGLE);
    

        while(currentAngle > 359)
        {
currentAngle= (currentAngle -angleFactory!.TOTAL_ANGLE);
    
}


                                    }
                                

                        if(currentAngle < 0)
                        
                                    {
                                    currentAngle= (currentAngle +angleFactory!.TOTAL_ANGLE);
    

        while(currentAngle < 0)
        {
currentAngle= (currentAngle +angleFactory!.TOTAL_ANGLE);
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentAngle;
    
}


}
                
            

