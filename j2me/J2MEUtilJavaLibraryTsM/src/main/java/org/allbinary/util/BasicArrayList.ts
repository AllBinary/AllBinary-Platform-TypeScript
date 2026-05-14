
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { IndexOutOfBoundsException } from '../../../java/lang/IndexOutOfBoundsException.js';
        
            import { System } from '../../../java/lang/System.js';
        
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
      
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ArrayUtil } from './ArrayUtil.js';
import { BasicArrayListS } from './BasicArrayListS.js';
//This is a very fast and simple resizable list.
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


    public addAt(index: number, element: any = {}){
    //var index = index
    //var element = element

                        if(index > this.currentIndex || index < 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
;
    
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


    public add(anyType: any = {}): boolean{
    //var anyType = anyType
this.ensureCapacity(this.currentIndex +1);
    
this.objectArray[this.currentIndex++]= anyType;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public removeAt(index: number): any{
    //var index = index

                        if(index >= this.currentIndex)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(BasicArrayList.SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString());
                    

                                    }
                                

    var oldValue: any = this.objectArray[index]!;
;
    

    var numMoved: number = this.currentIndex -index -1;
;
    

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
                                    
    var numMoved: number = this.currentIndex -index -1;
;
    

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
    var index: number = 0;
index < this.currentIndex; index++)
        {

                        if(anyType == this.objectArray[index] || anyType! === this.objectArray[index]!)
                        
                                    {
                                    
    var numMoved: number = this.currentIndex -index -1;
;
    

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
this.ensureCapacity(this.currentIndex +list.currentIndex);
    

    var listSize: number = list.currentIndex;
;
    




                        for (
    var index: number = 0;
index < listSize; index++)
        {
this.objectArray[this.currentIndex++]= list.objectArray[index]!;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public addAllList(list: BasicArrayList): boolean{
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
    
this.ensureCapacity(this.currentIndex +numSize);
    
System.arraycopy(newObjectArray, 0, this.objectArray, this.currentIndex, numSize);
    
this.currentIndex += numSize;
    



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
                        
                                    {
                                    newCapacity= minSize;
    

                                    }
                                
this.objectArray= this.arrayUtil!.copyOf(this.objectArray, newCapacity);
    

                                    }
                                
}


    public trimToSize(){

    var oldCapacity: number = this.objectArray!.length
                ;
;
    

                        if(this.currentIndex < oldCapacity)
                        
                                    {
                                    this.objectArray= this.arrayUtil!.copyOf(this.objectArray, this.currentIndex);
    

                                    }
                                
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
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    var i: number = 0;
i < this.currentIndex; i++)
        {

                        if(anyType! === this.objectArray[i]!)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    

                                    }
                                
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
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return i;
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    var i: number = this.currentIndex -1;
i >= 0; i--)
        {

                        if(anyType! === this.objectArray[i]!)
                        
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
    //var index = index

                        if(index >= this.currentIndex)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(BasicArrayList.SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString());
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.objectArray[index]!;
    
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
    
stringBuffer!.append(BasicArrayList.SIZE);
    
stringBuffer!.appendint(this.currentIndex);
    



                            throw new IndexOutOfBoundsException(stringBuffer!.toString());
                    

                                    }
                                

    var oldValue: any = this.objectArray[index]!;
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
                        return this.currentIndex;
    
}


    public isEmpty(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentIndex == 0;
    
}


    public contains(anyType: any = {}): boolean{
    //var anyType = anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.indexOf(anyType) >= 0;
    
}


    public toArray(): any[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.arrayUtil!.copyOf(this.objectArray, this.currentIndex);;
    
}


    public toArrayType(objectArray: any[]): any[]{
    //var objectArray = objectArray

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
                
            

