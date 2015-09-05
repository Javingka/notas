
WHY EXPLORING BIG DATA IS HARD
Danyel Fisher
https://www.youtube.com/watch?v=UP5412nU2lI&feature=youtu.be

Why big data is different
  REPRESENTATION
    What visualizations are suitable for big data?

  INTERACTION
    What do we need to do to make that visualization useful for interaction?

You Wont Plot Every Point...
  Screen space to draw each data point      [10^6 points]
  Every data point in memory                [10^9 bytes]
  Store all the data points                 [10^12 bytes]

Agreggation. on line chart, scatterplot, bar graph...
  Choosen your aggregation as opose to picking some defaults can be a very useful way to start thinking about what your visualization is actually trying to show you

  Multiple dimensions Liu, Jiang, Heer: imMens [2013]
  Technics open to aggregation:
    Wattenberg: PivotGraph [2005] Summarization of network visualization
      Two differents attributes and conextions inside the networks
    StreamGraph
    Treemaps (mostly)

All above it works for DISCOVERY or PRESENTATION

The story of Walt. The hypotetical histogram.
  https://en.wikipedia.org/wiki/Histogram
  Was enormous, contain the multitude
  ASSUMPTION 
    the dataset is too big to fit into memory
    every query takes a full minute

  CREATING WALT
    bucket all points. We need to do some sort of buckening, so we
      The first pass over the data: (min, max)  what min and max are
      So the second pass is to bucket all the points.

      Total time: 2 minutes. 

  INTERACT WITH WALT
    Change bucket count
       One pass.
       Re-bucket every point.

       Or maybe we were clever... and we previusly defined 300 buckets so the user can choose the count he/she want

     Cross-filter Walt with another histogram
       One pass.
       Check filter on every point....
       Here start to pre buckets too much points, and any other way to explore data will increase even more the time

    that are to much...

  OLAP! is a tool for this. but you still have to take many desicions

  The moral of Walt
    We decide what operations will support rapidly ... and wich we'll tolareate being slow
  
Solutions Space
  Limited exploration:
    Work Offline
    Index: 
      OLAP: Pentaho
      InMems, Nanocubes
    Restrict Data  

  Sample (or stream)
  Divide & Conquer
    Multiple passes across the data in parallel

  Trade accuratecy for latency
    (happines graph) 25:20

What we learned
  Users made lots of mistakes
    ..carried out lots od queries
    ..and cut them off early
  Users were fearless about exploration
  Most numbers are rough

  Randomness is databases is a pain

New technologies to support Streams
  RESERVOIR SAMPLE
    Keep a sample of k elements of the data such that each element has a k/size chance of being in the reservoir
  EQUI-DEPTH HISTOGRAM
    Good one-pass algorithms exist ...but we have no idea how to visualize them
    

Incremental changes the rules
  Categorical: add categories on the fly
  Numerical: changing bounds

  any color map or scale can change


A tentative Framework
  Raw data => Relevant dimensions => filter data => choose bucket bounds => aggregation data => create shapes => assign scales to shapes => render to screen

  ...and Place These within above secuence
    SAMPLE - CACHE or INDEX - NETWORK! 

Cross-Disciplinarity
  This isn't the way SQL -or Hadoop - works today
  Info Vis needs to be very integrated with the back-end

  New skills, new trining
  Close collaboration across fields


  
