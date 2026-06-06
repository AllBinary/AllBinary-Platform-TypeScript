
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AndroidKeyFactory } from './AndroidKeyFactory.js';

export class AndroidAPI1KeyFactory extends AndroidKeyFactory {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): AndroidAPI1KeyFactory{

                        if(AndroidAPI1KeyFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    AndroidAPI1KeyFactory.instance= new AndroidAPI1KeyFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidAPI1KeyFactory.instance as AndroidAPI1KeyFactory;
    
}


protected constructor (){

            super();
        }


}
                
            

