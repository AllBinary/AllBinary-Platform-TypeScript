
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { JPanel } from "./JPanel.js";

import { LinesGraphicItem } from "./LinesGraphicItem.js";

import { ToolFactory } from "./ToolFactory.js";

import { MouseEvent } from "./MouseEvent.js";

import { JButton } from "./JButton.js";

import { JList } from "./JList.js";

export class ToolJPanel extends javax.swing.JPanel {
        
public constructor (){

            super();
        this.initComponents();
    
}


    initComponents(){
lineJButton= new javax.swing.JButton();
    
this.rectJButton= new javax.swing.JButton();
    
this.arcJButton= new javax.swing.JButton();
    
this.stringJButton= new javax.swing.JButton();
    
this.charJButton= new javax.swing.JButton();
    
this.roundRectJButton= new javax.swing.JButton();
    
this.imageJButton= new javax.swing.JButton();
    
this.fillArcJButton= new javax.swing.JButton();
    
this.fillRectJButton= new javax.swing.JButton();
    
this.fillRoundRectJButton= new javax.swing.JButton();
    
this.dottedLineJButton= new javax.swing.JButton();
    
this.dottedRectButton= new javax.swing.JButton();
    
this.dottedArcJButton= new javax.swing.JButton();
    
this.dottedFillRectJButton= new javax.swing.JButton();
    
this.dottedFillArcJButton= new javax.swing.JButton();
    
this.dottedFillRountRectJButton= new javax.swing.JButton();
    
this.colorJPanel= new javax.swing.JPanel();
    
this.colorJList= new javax.swing.JList();
    
this.setLayout(new java.awt.GridLayout(17, 1));
    
lineJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
lineJButton!.setText(LinesGraphicItem.getStaticName());
    
lineJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mouseClicked(evt: java.awt.event.MouseEvent){
var evt = evt
lineJButtonMouseClicked(evt);
    
}

                                }
                            );
    
add(this.lineJButton);
    
this.rectJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.rectJButton!.setText("Rect");
    
this.rectJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mouseClicked(evt: java.awt.event.MouseEvent){
var evt = evt
rectJButtonMouseClicked(evt);
    
}

                                }
                            );
    
add(this.rectJButton);
    
this.arcJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.arcJButton!.setText("Arc");
    
this.arcJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
arcJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.arcJButton);
    
this.stringJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.stringJButton!.setText("String");
    
this.stringJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
stringJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.stringJButton);
    
this.charJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.charJButton!.setText("Char");
    
this.charJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
charJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.charJButton);
    
this.roundRectJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.roundRectJButton!.setText("Round Rect");
    
this.roundRectJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
roundRectJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.roundRectJButton);
    
this.imageJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.imageJButton!.setText("Image");
    
this.imageJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
imageJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.imageJButton);
    
this.fillArcJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.fillArcJButton!.setText("Fill Arc");
    
this.fillArcJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
fillArcJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.fillArcJButton);
    
this.fillRectJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.fillRectJButton!.setText("Fill Rect");
    
this.fillRectJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
fillRectJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.fillRectJButton);
    
this.fillRoundRectJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.fillRoundRectJButton!.setText("Fill Rnd Rect");
    
this.fillRoundRectJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
fillRoundRectJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.fillRoundRectJButton);
    
this.dottedLineJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.dottedLineJButton!.setText("Dot Line");
    
this.dottedLineJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
dottedLineJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.dottedLineJButton);
    
this.dottedRectButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.dottedRectButton!.setText("Dot Rect");
    
this.dottedRectButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
dottedRectButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.dottedRectButton);
    
this.dottedArcJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.dottedArcJButton!.setText("Dot Arc");
    
this.dottedArcJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
dottedArcJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.dottedArcJButton);
    
this.dottedFillRectJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.dottedFillRectJButton!.setText("Dot Fill Rect");
    
this.dottedFillRectJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
dottedFillRectJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.dottedFillRectJButton);
    
this.dottedFillArcJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.dottedFillArcJButton!.setText("Dot Fill Arc");
    
this.dottedFillArcJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
dottedFillArcJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.dottedFillArcJButton);
    
this.dottedFillRountRectJButton!.setFont(new java.awt.Font("Dialog", 0, 10));
    
this.dottedFillRountRectJButton!.setText("Dot Fill Rnd Rect");
    
this.dottedFillRountRectJButton!.addMouseListener(new java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
dottedFillRountRectJButtonMousePressed(evt);
    
}

                                }
                            );
    
add(this.dottedFillRountRectJButton);
    
this.colorJPanel!.setLayout(new java.awt.GridLayout(1, 1));
    
this.colorJPanel!.add(this.colorJList);
    
add(this.colorJPanel);
    
}


    dottedFillRountRectJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.dottedFillRountRectJButton!.getText());
    
}


    dottedFillArcJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.dottedFillArcJButton!.getText());
    
}


    dottedFillRectJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.dottedFillRectJButton!.getText());
    
}


    dottedArcJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.dottedArcJButton!.getText());
    
}


    dottedRectButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.dottedRectButton!.getText());
    
}


    dottedLineJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.dottedLineJButton!.getText());
    
}


    fillRoundRectJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.fillRoundRectJButton!.getText());
    
}


    fillRectJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.fillRectJButton!.getText());
    
}


    fillArcJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.fillArcJButton!.getText());
    
}


    imageJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.imageJButton!.getText());
    
}


    roundRectJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.roundRectJButton!.getText());
    
}


    charJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.charJButton!.getText());
    
}


    stringJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.stringJButton!.getText());
    
}


    arcJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.arcJButton!.getText());
    
}


    rectJButtonMouseClicked(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.rectJButton!.getText());
    
}


    lineJButtonMouseClicked(evt: java.awt.event.MouseEvent){
var evt = evt
ToolFactory.getInstance()!.setSelectedTool(this.lineJButton!.getText());
    
}


    private arcJButton: javax.swing.JButton

    private charJButton: javax.swing.JButton

    private colorJList: javax.swing.JList

    private colorJPanel: javax.swing.JPanel

    private dottedArcJButton: javax.swing.JButton

    private dottedFillArcJButton: javax.swing.JButton

    private dottedFillRectJButton: javax.swing.JButton

    private dottedFillRountRectJButton: javax.swing.JButton

    private dottedLineJButton: javax.swing.JButton

    private dottedRectButton: javax.swing.JButton

    private fillArcJButton: javax.swing.JButton

    private fillRectJButton: javax.swing.JButton

    private fillRoundRectJButton: javax.swing.JButton

    private imageJButton: javax.swing.JButton

    private lineJButton: javax.swing.JButton

    private rectJButton: javax.swing.JButton

    private roundRectJButton: javax.swing.JButton

    private stringJButton: javax.swing.JButton

}
                
            

