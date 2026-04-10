
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
        




export class ByteUtil
            extends Object
         {
        

    private static readonly instance: ByteUtil = new ByteUtil();
        
        

    public static getInstance(): ByteUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public xor(array: ByteArray, mask: number): ByteArray{
    //var array = array
    //var mask = mask

    var bytes: ByteArray = ByteArray(array.length);
        
        


    var size: number = array.length
                ;
        
        


    var index: number = 0;
        
        


    var currentByte: number


        while(index < size)
        {
currentByte= array[index]!
bytes[index]= (currentByte xor mask).toByte()
index++
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bytes;
    
}


    public not(array: ByteArray): ByteArray{
    //var array = array

    var bytes: ByteArray = ByteArray(array.length);
        
        


    var size: number = array.length
                ;
        
        


    var index: number = 0;
        
        


        while(index < size)
        {
bytes[index]= array[index].inv().toByte()
index++
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bytes;
    
}


    public xorByte(array: ByteArray, index: number): ByteArray{
    //var array = array
    //var index = index

    var mask: number = 0;
        
        


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
                        return this.xor(array, mask);
    
}


    public compare(newByteArray: ByteArray, oldByteArray: ByteArray): boolean{
    //var newByteArray = newByteArray
    //var oldByteArray = oldByteArray

                        if(newByteArray!.length != oldByteArray!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            
                        }
                            

    var size: number = newByteArray!.length
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


    public compare(newByteArray: ByteArray, newSize: number, oldByteArray: ByteArray, stats: IntArray): boolean{
    //var newByteArray = newByteArray
    //var newSize = newSize
    //var oldByteArray = oldByteArray
    //var stats = stats

                        if(newSize != oldByteArray!.length)
                        
                                    {
                                    stats[0]=  -1
stats[2]= newSize
stats[3]= oldByteArray!.length



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            stats[0]= newSize

                        }
                            
stats[1]= 0

    var size: number = newSize;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(newByteArray[index] != oldByteArray[index])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
stats[1]++
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

