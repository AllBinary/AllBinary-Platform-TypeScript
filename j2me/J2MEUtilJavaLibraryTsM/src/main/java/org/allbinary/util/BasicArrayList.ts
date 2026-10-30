
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { IndexOutOfBoundsException } from '../../../java/lang/IndexOutOfBoundsException.js';
        
            import { System } from '../../../java/lang/System.js';
        

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;




















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { ArrayUtil } 
const ArrayUtil = globalThis.org.allbinary.util.ArrayUtil;
//not plain js - same folder import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//This is a very fast and simple resizable list.
export class BasicArrayList
            extends Object
         {
        

    private static readonly SIZE: string = ", Size: ";

    private readonly arrayUtil: ArrayUtil = ArrayUtil.getInstance()!;

    public objectArray: any[];

    private currentIndex: number = 0;

public constructor (objectArray: any[]){

            super();
        this.objectArray= objectArray;
    
}


    public addAt(index: number, element: any){

                        if(index > this.currentIndex || index < 0)
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(BasicArrayList.SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString());
                    

                                    }
                                
this.ensureCapacity(this.currentIndex +1);
    
System.arraycopy(this.objectArray, index, this.objectArray, index +1, this.currentIndex -index);
    
this.objectArray[index]= element;
    
this.currentIndex++;
    
}


    public add(anyType: any): boolean{
this.ensureCapacity(this.currentIndex +1);
    
this.objectArray[this.currentIndex++]= anyType;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public removeAt(index: number): any{

                        if(index >= this.currentIndex)
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(BasicArrayList.SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString());
                    

                                    }
                                

    let oldValue: any = this.objectArray[index]!;;
    

    let numMoved: number = this.currentIndex -index -1;;
    

                        if(numMoved > 0)
                        
                                    {
                                    System.arraycopy(this.objectArray, index +1, this.objectArray, index, numMoved);
    

                                    }
                                
this.objectArray[--this.currentIndex]= 
                                        null
                                    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldValue;
    
}


    public remove(anyType: any): boolean{

                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    



                        for (
    let index: number = 0;index < this.currentIndex; index++)
        {

                        if(this.objectArray[index] == 
                                    null
                                )
                        
                                    {
                                    
    let numMoved: number = this.currentIndex -index -1;;
    

                        if(numMoved > 0)
                        
                                    {
                                    System.arraycopy(this.objectArray, index +1, this.objectArray, index, numMoved);
    

                                    }
                                
this.objectArray[--this.currentIndex]= 
                                        null
                                    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    let index: number = 0;index < this.currentIndex; index++)
        {

                        if(anyType == this.objectArray[index] || (anyType === this.objectArray[index]))
                        
                                    {
                                    
    let numMoved: number = this.currentIndex -index -1;;
    

                        if(numMoved > 0)
                        
                                    {
                                    System.arraycopy(this.objectArray, index +1, this.objectArray, index, numMoved);
    

                                    }
                                
this.objectArray[--this.currentIndex]= 
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

    let result: boolean = true;;
    

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
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
this.ensureCapacity(this.currentIndex +list.currentIndex);
    

    let listSize: number = list.currentIndex;;
    




                        for (
    let index: number = 0;index < listSize; index++)
        {
this.objectArray[this.currentIndex++]= list.objectArray[index]!;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public addAllList(list: BasicArrayList): boolean{

    let newObjectArray: any[] = list.toArray()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addAll(newObjectArray);;
    
}


    public addAll(newObjectArray: any[]): boolean{

    let numSize: number = newObjectArray!.length
                ;;
    
this.ensureCapacity(this.currentIndex +numSize);
    
System.arraycopy(newObjectArray, 0, this.objectArray, this.currentIndex, numSize);
    
this.currentIndex += numSize;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return numSize != 0;
    
}


    public ensureCapacity(minSize: number){

    let oldCapacity: number = this.objectArray!.length
                ;;
    

                        if(minSize > oldCapacity)
                        
                                    {
                                    
    let newCapacity: number = ((oldCapacity *3)>>1) +1;;
    

                        if(newCapacity < minSize)
                        
                                    {
                                    newCapacity= minSize;
    

                                    }
                                
this.objectArray= this.arrayUtil!.copyOf(this.objectArray, newCapacity);
    

                                    }
                                
}


    public trimToSize(){

    let oldCapacity: number = this.objectArray!.length
                ;;
    

                        if(this.currentIndex < oldCapacity)
                        
                                    {
                                    this.objectArray= this.arrayUtil!.copyOf(this.objectArray, this.currentIndex);
    

                                    }
                                
}


    public indexOf(anyType: any): number{

                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    



                        for (
    let i: number = 0;i < this.currentIndex; i++)
        {

                        if(this.objectArray[i] == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    let i: number = 0;i < this.currentIndex; i++)
        {

                        if((anyType === this.objectArray[i]))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    

                                    }
                                
}


                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public lastIndexOf(anyType: any): number{

                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    



                        for (
    let i: number = this.currentIndex -1;i >= 0; i--)
        {

                        if(this.objectArray[i] == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    let i: number = this.currentIndex -1;i >= 0; i--)
        {

                        if((anyType === this.objectArray[i]))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    

                                    }
                                
}


                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public get(index: number): any{

                        if(index >= this.currentIndex)
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(BasicArrayList.SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString());
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.objectArray[index]!;
    
}


    public set(index: number, element: any): any{

                        if(index >= this.currentIndex)
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(BasicArrayList.SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString());
                    

                                    }
                                

    let oldValue: any = this.objectArray[index]!;;
    
this.objectArray[index]= element;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return oldValue;
    
}


    public clear(){




                        for (
    let i: number = 0;i < this.currentIndex; i++)
        {
this.objectArray[i]= 
                                        null
                                    ;
    
}

this.currentIndex= 0;
    
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentIndex;
    
}


    public isEmpty(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentIndex == 0;
    
}


    public contains(anyType: any): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.indexOf(anyType) >= 0;
    
}


    public toArray(): any[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.arrayUtil!.copyOf(this.objectArray, this.currentIndex);;
    
}


    public toArrayType(objectArray: any[]): any[]{

                        if(objectArray!.length < this.currentIndex)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.arrayUtil!.copyOfType(this.objectArray, this.currentIndex, objectArray!.constructor);;
    

                                    }
                                
System.arraycopy(this.objectArray, 0, objectArray, 0, this.currentIndex);
    

                        if(objectArray!.length > this.currentIndex)
                        
                                    {
                                    objectArray[this.currentIndex]= 
                                        null
                                    ;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray;
    
}


    public clone(): any{

    let size: number = this.size()!;;
    

    let list: BasicArrayList = new BasicArrayListS(size);;
    

    let anyType: any;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
anyType= this.objectArray[index]!;
    
list.add(anyType);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public toString(): string{

    let COMMA_SEP: string = CommonSeps.getInstance()!.COMMA_SEP;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    let index: number = 0;index < this.currentIndex; index++)
        {
stringBuffer!.append(this.objectArray[index]!.toString());
    
stringBuffer!.append(COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

