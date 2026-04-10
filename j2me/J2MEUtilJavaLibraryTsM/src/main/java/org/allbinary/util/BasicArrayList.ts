
        /* Generated Code Do Not Modify */
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    

export class BasicArrayList
            extends Object
         {
        

    private static readonly SIZE: string = ", Size: ";
        
        

    private readonly arrayUtil: ArrayUtil = ArrayUtil.getInstance()!;
        
        

    public objectArray: any = {}[]

    private currentIndex: number = 0;
        
        
public constructor (size: number)                        

                            : super(){

            super();
                //var size = size


                            //For kotlin this is before the body of the constructor.
                    

    
                        if(size < 0)
                        
                                    {
                                    


                            throw IllegalArgumentException(StringMaker().
                            append("Init Size Exception: ")!.appendint(size)!.toString())

                                    }
                                
objectArray= new Array(size)
}

public constructor (objectArray: any = {}[]){

            super();
                //var objectArray = objectArray
this.objectArray= objectArray
}

public constructor ()                        

                            : this(7){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public add(index: number, element: any = {}){
    //var index = index
    //var element = element

    
                        if(index > currentIndex || index < 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(CommonLabels.getInstance()!.INDEX_LABEL)
appendint(index)
append(SIZE)
appendint(currentIndex)



                            throw IndexOutOfBoundsException(stringBuffer!.toString())

                                    }
                                
ensureCapacity(currentIndex +1)



        for (let i = ; i < ; i++) {
            objectArray[ + i] = objectArray[i]!;
        }
    
objectArray[index]= element
currentIndex++
}


    public add(anyType: any = {}): boolean{
    //var anyType = anyType
ensureCapacity(currentIndex +1)
objectArray[currentIndex++]= anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public remove(index: number): any = {}{
    //var index = index

    
                        if(index >= currentIndex)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(CommonLabels.getInstance()!.INDEX_LABEL)
appendint(index)
append(SIZE)
appendint(currentIndex)



                            throw IndexOutOfBoundsException(stringBuffer!.toString())

                                    }
                                

    var oldValue: any = {} = objectArray[index]!;
        
        


    var numMoved: number = currentIndex -index -1;
        
        


    
                        if(numMoved > 0)
                        System.arraycopy(objectArray, index +1, objectArray, index, numMoved)
objectArray[--currentIndex]= 
                                        null
                                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldValue;
    
}


    public remove(anyType: any = {}): boolean{
    //var anyType = anyType

    
                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < currentIndex; index++)
        {

    
                        if(objectArray[index] == 
                                    null
                                )
                        
                                    {
                                    
    var numMoved: number = currentIndex -index -1;
        
        


    
                        if(numMoved > 0)
                        
                                    {
                                    


        for (let i = ; i < numMoved; i++) {
            objectArray[index + i] = objectArray[i]!;
        }
    

                                    }
                                
objectArray[--currentIndex]= 
                                        null
                                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    var index: number = 0;
        
        
index < currentIndex; index++)
        {

    
                        if(anyType == objectArray[index] || anyType!.equals(objectArray[index]!))
                        
                                    {
                                    
    var numMoved: number = currentIndex -index -1;
        
        


    
                        if(numMoved > 0)
                        
                                    {
                                    


        for (let i = ; i < numMoved; i++) {
            objectArray[index + i] = objectArray[i]!;
        }
    

                                    }
                                
objectArray[--currentIndex]= 
                                        null
                                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}


                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public removeAll2(list: BasicArrayList): boolean{
    //var list = list

    var result: boolean = true;
        
        


    var size: number = list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    
                        if(this.remove(list.get(index)))
                        
                                    {
                                    
                                    }
                                
                        else {
                            result= false

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public addAll2(list: BasicArrayList): boolean{
    //var list = list
ensureCapacity(currentIndex +list.currentIndex)

    var listSize: number = list.currentIndex;
        
        





                        for (
    var index: number = 0;
        
        
index < listSize; index++)
        {
objectArray[currentIndex++]= list.objectArray[index]!
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public addAll(list: BasicArrayList): boolean{
    //var list = list

    var newObjectArray: any = {}[] = list.toArray()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addAll(newObjectArray);
    
}


    public addAll(newObjectArray: any = {}[]): boolean{
    //var newObjectArray = newObjectArray

    var numSize: number = newObjectArray!.length
                ;
        
        

ensureCapacity(currentIndex +numSize)



        for (let i = 0; i < numSize; i++) {
            objectArray[currentIndex + i] = newObjectArray[i]!;
        }
    
currentIndex += numSize



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return numSize != 0;
    
}


    public ensureCapacity(minSize: number){
    //var minSize = minSize

    var oldCapacity: number = objectArray!.length
                ;
        
        


    
                        if(minSize > oldCapacity)
                        
                                    {
                                    
    var newCapacity: number = ((oldCapacity *3) shr 1) +1;
        
        


    
                        if(newCapacity < minSize)
                        newCapacity= minSize
objectArray= arrayUtil!.copyOf(objectArray, newCapacity)

                                    }
                                
}


    public trimToSize(){

    var oldCapacity: number = objectArray!.length
                ;
        
        


    
                        if(currentIndex < oldCapacity)
                        objectArray= arrayUtil!.copyOf(objectArray, currentIndex)
}


    public indexOf(anyType: any = {}): number{
    //var anyType = anyType

    
                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var i: number = 0;
        
        
i < currentIndex; i++)
        {

    
                        if(objectArray[i] == 
                                    null
                                )
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    
}


                                    }
                                
                        else {
                            



                        for (
    var i: number = 0;
        
        
i < currentIndex; i++)
        {

    
                        if(anyType!.equals(objectArray[i]!))
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    
}


                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public lastIndexOf(anyType: any = {}): number{
    //var anyType = anyType

    
                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var i: number = currentIndex -1;
        
        
i >= 0; i--)
        {

    
                        if(objectArray[i] == 
                                    null
                                )
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    
}


                                    }
                                
                        else {
                            



                        for (
    var i: number = currentIndex -1;
        
        
i >= 0; i--)
        {

    
                        if(anyType!.equals(objectArray[i]!))
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    
}


                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public get(index: number): any = {}{
    //var index = index

    
                        if(index >= currentIndex)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(CommonLabels.getInstance()!.INDEX_LABEL)
appendint(index)
append(SIZE)
appendint(currentIndex)



                            throw IndexOutOfBoundsException(stringBuffer!.toString())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray[index]!;
    
}


    public set(index: number, element: any = {}): any = {}{
    //var index = index
    //var element = element

    
                        if(index >= currentIndex)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(CommonLabels.getInstance()!.INDEX_LABEL)
appendint(index)
append(SIZE)
appendint(currentIndex)



                            throw IndexOutOfBoundsException(stringBuffer!.toString())

                                    }
                                

    var oldValue: any = {} = objectArray[index]!;
        
        

objectArray[index]= element



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldValue;
    
}


    public clear(){




                        for (
    var i: number = 0;
        
        
i < currentIndex; i++)
        {
objectArray[i]= 
                                        null
                                    
}

currentIndex= 0
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentIndex;
    
}


    public isEmpty(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentIndex == 0;
    
}


    public contains(anyType: any = {}): boolean{
    //var anyType = anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexOf(anyType) >= 0;
    
}


    public toArray(): any = {}[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return arrayUtil!.copyOf(objectArray, currentIndex);
    
}


    public toArray(objectArray: any = {}[]): any = {}[]{
    //var objectArray = objectArray

    
                        if(objectArray!.length < currentIndex)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return arrayUtil!.copyOf(this.objectArray, currentIndex, objectArray!::class);
    



        for (let i = 0; i < currentIndex; i++) {
            objectArray[0 + i] = this.objectArray[i]!;
        }
    

    
                        if(objectArray!.length > currentIndex)
                        objectArray[currentIndex]= 
                                        null
                                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray;
    
}


    public clone(): any = {}{

    var list: BasicArrayList = new BasicArrayList();
        
        


    var size: number = this.size()!;
        
        


    var anyType: any = {}





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
anyType= this.objectArray[index]!
add(anyType)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public toString(): string{

    var COMMA_SEP: string = CommonSeps.getInstance()!.COMMA_SEP;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        





                        for (
    var index: number = 0;
        
        
index < currentIndex; index++)
        {
append(objectArray[index]!.toString())
append(COMMA_SEP)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

