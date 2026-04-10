
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
        



import { MyRandomFactory } from "../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    
import { CommonPhoneStrings } from "../../../org/allbinary/string/CommonPhoneStrings.js";

    

export class BasicArrayListUtil
            extends Object
         {
        

    private static readonly instance: BasicArrayListUtil = new BasicArrayListUtil();
        
        

    public static getInstance(): BasicArrayListUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static main(args: string[]){
var args = args

    var commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;
        
        


    var list: BasicArrayList = new BasicArrayList();
        
        

add(commonPhoneStrings!.ONE)
add(commonPhoneStrings!.TWO)
add(commonPhoneStrings!.THREE)
add(commonPhoneStrings!.FOUR)
add(commonPhoneStrings!.FIVE)
add(commonPhoneStrings!.SIX)
add(commonPhoneStrings!.SEVEN)
add(commonPhoneStrings!.EIGHT)
add(commonPhoneStrings!.NINE)
reverse(list)
println(list)
}


    public readonly NULL_ARRAY_OF_ARRAY: BasicArrayList[][] = Array(0) { arrayOfNulls<BasicArrayList?>(0) }
                                                            ;
        
        

    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        

    private readonly immutableInstance: BasicArrayList = new ImmutableBasicArrayList("Immutable", 0);
        
        

    public getRandom(list: BasicArrayList): any = {}{
var list = list

    var i_random: number = this.getRandomIndex(list)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list.objectArray[i_random]!;
    
}


    public getRandomIndex(list: BasicArrayList): number{
var list = list



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myRandomFactory!.getAbsoluteNextInt(list.size());
    
}


    public reverse(list: BasicArrayList){
    //var list = list

    var lastMinusOneIndex: number = list.size() -2;
        
        


    var temp: any = {}


    var size: number = lastMinusOneIndex /2;
        
        


    var secondSwapIndex: number= 0





                        for (
    var index: number = 0;
        
        
index <= size; index++)
        {
secondSwapIndex= lastMinusOneIndex -index
temp= list.remove(index)
add(index, list.remove(secondSwapIndex))
add(secondSwapIndex +1, temp)
}

}


    public log(list: BasicArrayList): string{
    //var list = list

    var S_LABEL: string = " s: ";
        
        


    var size: number = list.size()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(CommonLabels.getInstance()!.TOTAL_LABEL)
appendint(size)




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {

    var usedList: BasicArrayList = list.objectArray[index]! as BasicArrayList;
        
        

append(S_LABEL)
appendint(usedList!.size())
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public getImmutableInstance(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return immutableInstance;
    
}


}
                
            

