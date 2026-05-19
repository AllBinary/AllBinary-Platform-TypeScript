
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { Direction } from '../../../../../../org/allbinary/direction/Direction.js';
      
import { DirectionFactory } from '../../../../../../org/allbinary/direction/DirectionFactory.js';
      
import { CellPosition } from '../../../../../../org/allbinary/graphics/CellPosition.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';

export class GeographicMapDirectionUtil
            extends Object
         {
        

    private static readonly instance: GeographicMapDirectionUtil = new GeographicMapDirectionUtil();

    public static getInstance(): GeographicMapDirectionUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GeographicMapDirectionUtil.instance;
    
}

private constructor (){

            super();
        }


    private readonly MESSAGE: string = "Cell Position should have been cached!!!";

                //@Throws(Exception.constructor)
            
    public getDirectionFromCellPositionToAdjacentCellPosition(fromGeographicMapCellPosition: GeographicMapCellPosition, toGeographicMapCellPosition: GeographicMapCellPosition): Direction{

    var fromColumn: number = fromGeographicMapCellPosition!.getColumn()!;
;
    

    var fromRow: number = fromGeographicMapCellPosition!.getRow()!;
;
    

    var goColumn: number = toGeographicMapCellPosition!.getColumn()!;
;
    

    var goRow: number = toGeographicMapCellPosition!.getRow()!;
;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
;
    

                        if(fromColumn -1 == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.LEFT;
    

                                    }
                                
                             else 
                        if(fromColumn +1 == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.RIGHT;
    

                                    }
                                
                             else 
                        if(fromRow -1 == goRow)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.UP;
    

                                    }
                                
                             else 
                        if(fromRow +1 == goRow)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.DOWN;
    

                                    }
                                
                             else 
                        if(fromGeographicMapCellPosition == toGeographicMapCellPosition)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.NO_DIRECTION;
    

                                    }
                                
                             else 
                        if(fromRow == goRow && fromColumn == goColumn)
                        
                                    {
                                    


                            throw new Exception(this.MESSAGE);
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.NOT_BORDERED_WITH;
    
}


                //@Throws(Exception.constructor)
            
    public getEightDirectionFromCellPositionToAdjacentCellPosition(fromGeographicMapCellPosition: GeographicMapCellPosition, toGeographicMapCellPosition: GeographicMapCellPosition): Direction{

    var fromColumn: number = fromGeographicMapCellPosition!.getColumn()!;
;
    

    var fromRow: number = fromGeographicMapCellPosition!.getRow()!;
;
    

    var goColumn: number = toGeographicMapCellPosition!.getColumn()!;
;
    

    var goRow: number = toGeographicMapCellPosition!.getRow()!;
;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
;
    

                        if(fromRow == goRow)
                        
                                    {
                                    
                        if(fromColumn -1 == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.LEFT;
    

                                    }
                                
                             else 
                        if(fromColumn +1 == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.RIGHT;
    

                                    }
                                

                                    }
                                
                             else 
                        if(fromRow -1 == goRow)
                        
                                    {
                                    
                        if(fromColumn == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.UP;
    

                                    }
                                

                        if(fromColumn -1 == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.UP_LEFT;
    

                                    }
                                
                             else 
                        if(fromColumn +1 == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.UP_RIGHT;
    

                                    }
                                

                                    }
                                
                             else 
                        if(fromRow +1 == goRow)
                        
                                    {
                                    
                        if(fromColumn == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.DOWN;
    

                                    }
                                

                        if(fromColumn -1 == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.DOWN_LEFT;
    

                                    }
                                
                             else 
                        if(fromColumn +1 == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.DOWN_RIGHT;
    

                                    }
                                

                                    }
                                
                             else 
                        if(fromGeographicMapCellPosition == toGeographicMapCellPosition)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.NO_DIRECTION;
    

                                    }
                                
                             else 
                        if(fromRow == goRow && fromColumn == goColumn)
                        
                                    {
                                    


                            throw new Exception(this.MESSAGE);
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.NOT_BORDERED_WITH;
    
}


                //@Throws(Exception.constructor)
            
    public getDirectionFromCellPositionToCellPosition(fromGeographicMapCellPosition: GeographicMapCellPosition, toGeographicMapCellPosition: GeographicMapCellPosition): Direction{

    var fromColumn: number = fromGeographicMapCellPosition!.getColumn()!;
;
    

    var fromRow: number = fromGeographicMapCellPosition!.getRow()!;
;
    

    var goColumn: number = toGeographicMapCellPosition!.getColumn()!;
;
    

    var goRow: number = toGeographicMapCellPosition!.getRow()!;
;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
;
    

                        if(fromColumn > goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.LEFT;
    

                                    }
                                
                             else 
                        if(fromColumn < goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.RIGHT;
    

                                    }
                                
                             else 
                        if(fromRow > goRow)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.UP;
    

                                    }
                                
                             else 
                        if(fromRow < goRow)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.DOWN;
    

                                    }
                                

    var stringMaker: StringMaker = new StringMaker();
;
    

    var string: string = stringMaker!.append(CellPosition.toStringCellPosition(fromGeographicMapCellPosition))!.append(" == ")!.append(CellPosition.toStringCellPosition(toGeographicMapCellPosition))!.toString()!;
;
    
stringMaker!.delete(0, stringMaker!.length());
    



                            throw new Exception(stringMaker!.append("Error: ")!.append(string)!.toString());
                    
}


    private readonly ERROR: string = "Error: ";

    private readonly EQUAL: string = " == ";

                //@Throws(Exception.constructor)
            
    public getEightDirectionFromCellPositionToCellPosition(fromGeographicMapCellPosition: GeographicMapCellPosition, toGeographicMapCellPosition: GeographicMapCellPosition): Direction{

    var fromColumn: number = fromGeographicMapCellPosition!.getColumn()!;
;
    

    var fromRow: number = fromGeographicMapCellPosition!.getRow()!;
;
    

    var goColumn: number = toGeographicMapCellPosition!.getColumn()!;
;
    

    var goRow: number = toGeographicMapCellPosition!.getRow()!;
;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
;
    

                        if(fromGeographicMapCellPosition == toGeographicMapCellPosition)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.NO_DIRECTION;
    

                                    }
                                
                             else 
                        if(fromRow == goRow)
                        
                                    {
                                    
                        if(fromColumn > goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.LEFT;
    

                                    }
                                
                             else 
                        if(fromColumn < goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.RIGHT;
    

                                    }
                                

                                    }
                                
                             else 
                        if(fromRow > goRow)
                        
                                    {
                                    
                        if(fromColumn > goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.UP_LEFT;
    

                                    }
                                
                             else 
                        if(fromColumn < goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.UP_RIGHT;
    

                                    }
                                
                             else 
                        if(fromColumn == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.UP;
    

                                    }
                                

                                    }
                                
                             else 
                        if(fromRow < goRow)
                        
                                    {
                                    
                        if(fromColumn > goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.DOWN_LEFT;
    

                                    }
                                
                             else 
                        if(fromColumn < goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.DOWN_RIGHT;
    

                                    }
                                
                             else 
                        if(fromColumn == goColumn)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directionFactory!.DOWN;
    

                                    }
                                

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append(this.ERROR);
    
stringBuffer!.append(CellPosition.toStringCellPosition(fromGeographicMapCellPosition));
    
stringBuffer!.append(this.EQUAL);
    
stringBuffer!.append(CellPosition.toStringCellPosition(toGeographicMapCellPosition));
    



                            throw new Exception(stringBuffer!.toString());
                    
}


}
                
            

