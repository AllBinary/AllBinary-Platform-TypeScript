
        /* Generated Code Do Not Modify */
        



import { AndroidInfoFactory } from "../../../../org/allbinary/android/AndroidInfoFactory.js";

    

export class ActivityFractureControllerUtilFactory
            extends Object
         {
        

    public static getInstance(): AndroidKeyFactory{

    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;
        
        
;
    

                        if(SDK_VERSION <= 8)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidAPI1KeyFactory.getInstance();

                        ;
    

                                    }
                                
                             else 
                        if(SDK_VERSION <= 11)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidAPI9KeyFactory.getInstance();

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidAPI12KeyFactory.getAPI12Instance();

                        ;
    

                        }
                            
}


}
                
            

