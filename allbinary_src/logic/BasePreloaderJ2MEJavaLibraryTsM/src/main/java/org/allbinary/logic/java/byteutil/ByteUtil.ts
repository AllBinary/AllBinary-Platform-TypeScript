
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
        
export class ByteUtil
            extends Object
         {
        

    private static readonly instance: ByteUtil = new ByteUtil();

    public static getInstance(): ByteUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ByteUtil.instance;
    
}

private constructor (){

            super();
        }


    public xor(array: number[], mask: number): number[]{

    var bytes: number[] = new Array(array.length);
;
    

    var size: number = array.length
                ;
;
    

    var index: number = 0;
;
    

    var currentByte: number
;
    

        while(index < size)
        {
currentByte= array[index]!;
    
bytes[index]= (currentByte ^ mask);
    
index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bytes;
    
}


    public not(array: number[]): number[]{

    var bytes: number[] = new Array(array.length);
;
    

    var size: number = array.length
                ;
;
    

    var index: number = 0;
;
    

        while(index < size)
        {
bytes[index]= ~array[index];
    
index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bytes;
    
}


    public xorByte(array: number[], index: number): number[]{

    var mask: number = 0;
;
    

                        if(index == 0)
                        mask= 1

                        if(index == 1)
                        mask= 2

                        if(index == 2)
                        mask= 4

                        if(index == 3)
                        mask= 8

                        if(index == 4)
                        mask= 16

                        if(index == 5)
                        mask= 32

                        if(index == 6)
                        mask= 64

                        if(index == 7)
                        mask=  -127



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.xor(array, mask);;
    
}


    public compare(newByteArray: number[], oldByteArray: number[]): boolean{

                        if(newByteArray!.length != oldByteArray!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            
                        }
                            

    var size: number = newByteArray!.length
                ;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

                        if(newByteArray[index] != oldByteArray[index])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public compareWithStats(newByteArray: number[], newSize: number, oldByteArray: number[], stats: number[]): boolean{

                        if(newSize != oldByteArray!.length)
                        
                                    {
                                    stats[0]=  -1;
    
stats[2]= newSize;
    
stats[3]= oldByteArray!.length;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            stats[0]= newSize;
    

                        }
                            
stats[1]= 0;
    

    var size: number = newSize;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

                        if(newByteArray[index] != oldByteArray[index])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
stats[1]++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

