Jeffrey Heer | Openvis conference
7 abril 2015
https://www.youtube.com/watch?v=GdoDLuPe-Wg&feature=youtu.be

Graphical Interfaces    Interactive Data Exploration  Tableau, Lyra, Polestar, Voyager
Charting tools          Chart Typologies            Excel, Many Eyes, Google Charts
Declarative Lenguajes   Visual Analysis Grammars    VizQL, ggplot2
                        Visualization Grammars      Protovis, D3.js
Programming tools       Component Architectures     Prefuse, Flare, Improsive, VTK
                        Graphics APIs               Processing, OpenGL, Java2D



Declarative Lenguajes
  Programming by describing WHAT, not HOW.
  Separate SPECIFICATION (what you want) from EXECUTION (how it should be compluted)
  In contrast to imperative programming, where you must give explicit steps.

Why declarative Leng.
  Faster iteration, less code, better visualization, reuse, performance, portability.

--
Visualization Grammar | describe a space of visualization
  Data          Input | what are we going to visualize
  Transforms    Grouping, stats, projection, layout | transformation of data
  Scales        Map data values to visual values | the core abstraction through a lot of visualization
  Guides        Axes & legends visualize scales | make visualization interpretable
  Marks         Data-representative graphics | hearth of the visualization |   

  in 'Vega' uses these terms to represent in code the visualization. In a JSON sintaxis, differents properties fits with the above items
    "height" as int, "width" as int   
    "data" as an array with a hash within  =>  Data + Transform
    "scales" as an array of two objects with properties as name, range and domain  =>  Scales 
    "axes" as an array of two hashes each one defining type (x,y) and scale =>  Guides
    "marks" as an array with objects defining how properties of the data whould map the properties of the mark => Marks

Lysa as the 'adobe ilustrator' of the visualization tools 
  Use Vega underneath the hood, translate the specifications to Vega JSON

Vegalite, on top of Vega. A reduce simple version of vega

Polestar, graphical interface to rapid draw visualization via drag and drop.o

Voyager, Redious manual specification, support early-stage data exploration
  User provide a dataset, Voyager hands stadistics after a recomendation Engine. Generating a number od possible visualizations

New reasearch for interactive visualization, in Vega 2.0 ("reactive Vega"). Is made by adapt methods from functional reactive programming.( User interaction is not an external data, but is part of the visualization data)
  JSON -> reactive dataflow graph


vega.github.io => to access all the tools here described. All Open-Source code.


