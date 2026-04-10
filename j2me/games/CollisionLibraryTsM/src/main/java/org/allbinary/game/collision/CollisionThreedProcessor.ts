
        /* Generated Code Do Not Modify */
        



import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class CollisionThreedProcessor extends CollisionProcessor {
        

    public isCollision(myLayer: AllBinaryLayer, myLayer2: AllBinaryLayer): boolean{
    //var myLayer = myLayer
    //var myLayer2 = myLayer2

    
                        if(myLayer2!.getXP() >= myLayer!.getX2() || myLayer2!.getYP() >= myLayer!.getY2() || myLayer2!.getX2() <= myLayer!.getXP() || myLayer2!.getY2() <= myLayer!.getYP() || myLayer2!.getZP() < myLayer!.getZ2() || myLayer2!.getZ2() > myLayer!.getZP())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


}
                
            

