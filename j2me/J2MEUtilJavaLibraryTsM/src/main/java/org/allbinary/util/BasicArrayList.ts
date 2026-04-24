
        /* Generated Code Do Not Modify */
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ArrayUtil } from "./ArrayUtil.js";

export class BasicArrayList
            extends Object
         {
        

    private static readonly SIZE: string = ", Size: ";
        
        

    private readonly arrayUtil: ArrayUtil = ArrayUtil.getInstance()!;
        
        

    public objectArray: any[]

    private currentIndex: number = 0;
        
        
public constructor (objectArray: any[]){

            super();
            //var objectArray = objectArray
this.objectArray= objectArray;
    
}


    public add(index: number, element: any = {}){
    //var index = index
    //var element = element

                        if(index > this.currentIndex || index < 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString())

                                    }
                                
ensureCapacity(this.currentIndex +1);
    



        for (let i = ; i < ; i++) {
            objectArray[ + i] = objectArray[i]!;
        }
    ;
    
objectArray[index]= element;
    
currentIndex++;
    
}


    public add(anyType: any = {}): boolean{
    //var anyType = anyType
ensureCapacity(this.currentIndex +1);
    
this.objectArray[currentIndex++]= anyType;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public remove(index: number): any{
    //var index = index

                        if(index >= this.currentIndex)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString())

                                    }
                                

    var oldValue: any = this.objectArray[index]!;
        
        
;
    

    var numMoved: number = currentIndex -index -1;
        
        
;
    

                        if(numMoved > 0)
                        System.arraycopy(objectArray, index +1, objectArray, index, numMoved);
objectArray[--this.currentIndex]= 
                                        null
                                    ;
    



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
        
        
index < this.currentIndex; index++)
        {

                        if(this.objectArray[index] == 
                                    null
                                )
                        
                                    {
                                    
    var numMoved: number = currentIndex -index -1;
        
        
;
    

                        if(numMoved > 0)
                        
                                    {
                                    


        for (let i = ; i < numMoved; i++) {
            objectArray[index + i] = objectArray[i]!;
        }
    ;
    

                                    }
                                
objectArray[--this.currentIndex]= 
                                        null
                                    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    var index: number = 0;
        
        
index < this.currentIndex; index++)
        {

                        if(anyType == objectArray[index] || anyType!.equals(objectArray[index]!))
                        
                                    {
                                    
    var numMoved: number = currentIndex -index -1;
        
        
;
    

                        if(numMoved > 0)
                        
                                    {
                                    


        for (let i = ; i < numMoved; i++) {
            objectArray[index + i] = objectArray[i]!;
        }
    ;
    

                                    }
                                
objectArray[--this.currentIndex]= 
                                        null
                                    ;
    



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
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(this.remove(list.get(index)))
                        
                                    {
                                    
                                    }
                                
                        else {
                            result= false;
    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public addAll2(list: BasicArrayList): boolean{
    //var list = list
ensureCapacity(this.currentIndex +list.currentIndex);
    

    var listSize: number = list.currentIndex;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < listSize; index++)
        {
this.objectArray[currentIndex++]= list.objectArray[index]!;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public addAll(list: BasicArrayList): boolean{
    //var list = list

    var newObjectArray: any[] = list.toArray()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addAll(newObjectArray);;
    
}


    public addAll(newObjectArray: any[]): boolean{
    //var newObjectArray = newObjectArray

    var numSize: number = newObjectArray!.length
                ;
        
        
;
    
ensureCapacity(this.currentIndex +numSize);
    



        for (let i = 0; i < numSize; i++) {
            objectArray[currentIndex + i] = newObjectArray[i]!;
        }
    ;
    
currentIndex += numSize;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return numSize != 0;
    
}


    public ensureCapacity(minSize: number){
    //var minSize = minSize

    var oldCapacity: number = this.objectArray!.length
                ;
        
        
;
    

                        if(minSize > oldCapacity)
                        
                                    {
                                    
    var newCapacity: number = ((oldCapacity *3)>>1) +1;
        
        
;
    

                        if(newCapacity < minSize)
                        newCapacity= minSize
this.objectArray= this.arrayUtil!.copyOf(this.objectArray, newCapacity);
    

                                    }
                                
}


    public trimToSize(){

    var oldCapacity: number = this.objectArray!.length
                ;
        
        
;
    

                        if(this.currentIndex < oldCapacity)
                        this.objectArray= this.arrayUtil!.copyOf(this.objectArray, currentIndex)
}


    public indexOf(anyType: any = {}): number{
    //var anyType = anyType

                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var i: number = 0;
        
        
i < this.currentIndex; i++)
        {

                        if(this.objectArray[i] == 
                                    null
                                )
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    
}


                                    }
                                
                        else {
                            



                        for (
    var i: number = 0;
        
        
i < this.currentIndex; i++)
        {

                        if(anyType!.equals(this.objectArray[i]!))
                        


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
    var i: number = this.currentIndex -1;
        
        
i >= 0; i--)
        {

                        if(this.objectArray[i] == 
                                    null
                                )
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    
}


                                    }
                                
                        else {
                            



                        for (
    var i: number = this.currentIndex -1;
        
        
i >= 0; i--)
        {

                        if(anyType!.equals(this.objectArray[i]!))
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    
}


                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public get(index: number): any{
    //var index = index

                        if(index >= this.currentIndex)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray[index]!;
    
}


    public set(index: number, element: any = {}): any{
    //var index = index
    //var element = element

                        if(index >= this.currentIndex)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString())

                                    }
                                

    var oldValue: any = objectArray[index]!;
        
        
;
    
this.objectArray[index]= element;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldValue;
    
}


    public clear(){




                        for (
    var i: number = 0;
        
        
i < this.currentIndex; i++)
        {
this.objectArray[i]= 
                                        null
                                    ;
    
}

this.currentIndex= 0;
    
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


    public toArray(): any[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return arrayUtil!.copyOf(this.objectArray, currentIndex);;
    
}


    public toArray(objectArray: any[]): any[]{
    //var objectArray = objectArray

                        if(objectArray!.length < this.currentIndex)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return arrayUtil!.copyOf(this.objectArray, currentIndex, objectArray!constructor);;
    



        for (let i = 0; i < currentIndex; i++) {
            objectArray[0 + i] = this.objectArray[i]!;
        }
    ;
    

                        if(objectArray!.length > currentIndex)
                        objectArray[currentIndex]= 
                                        null
                                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray;
    
}


    public clone(): any{

    var size: number = this.size()!;
        
        
;
    

    var list: BasicArrayList = new BasicArrayListS(size);
        
        
;
    

    var anyType: any
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
anyType= this.objectArray[index]!;
    
list.add(anyType);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public toString(): string{

    var COMMA_SEP: string = CommonSeps.getInstance()!.COMMA_SEP;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < this.currentIndex; index++)
        {
stringBuffer!.append(this.objectArray[index]!.toString());
    
stringBuffer!.append(COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

