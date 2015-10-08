Signidicado de: ?
The principles and design choises that I intended a particular paper to ilustrate were often only indirectly alluded to in the paper it self.

There are several major ways to crosscut vis material
  By the field from which we draw techniques: 
    Cognitive science for perception and color.
    Human-computer interaction for user studies and user-centered design.
    Computer graphics for rendering...
  By the problem domain addressed
    Biology.
    Software engineering. 
    Computing networking.
    Medicine.
    Casual use.
  By the families of technique
    Focus+context
    Overview/detail.
    Volume rendering.
    Statístical graphics.
  Evaluation should be interwoven throughout.
        
CHAPTER I

p1
  VIS for short: 
    "Computer-based visualization systems provide visual representation of datasets designed to help carry out task more effectively."
    "Visualization is suitable when there is a need to augment human capabilities rather than replace people with computational decision-making methods. The design space of possible vis idioms is huge, and includes the consideration of both how to create how to interact with visual representations.
    Vis design is full of trade-offs, and most possibilities in the design space are inefective for a particular task, so validating the effectiveness of a design is both necesary and dificult. 
    Vis designers must take into account three different kinds of resource limitations: Those of computers, of humans, and of displays.
    Vis usage can be analysed in terms of why the user needs it, what data is shown, and how the idiom is designed."

p2
  Vis allows people to analyze data when they don't know exactly what questions they need to ask in advance.

  Comentario:
  Vis can be useful in special and specifics parts of any data process. Can be meaningless to use with a final user of a trade-market software. But can be usefull for developers to improve the debugger tasks.

p4
  1.3 Why Have a Comp....
  By enlisting computation, you can build tools that allow people to explore or present datasets that would be completely infeasible to draw by hand, thus opening the possibility of seeing how datasets change over time.

p6
  1.4 Why Use External...
  External representations augment human capability by allowing us to surpass the limitations of our own internal cognition and memory.

  Advantages of diagram as external memory: Info can be organized by spation location.
    Search: Can be speed up         by   grouping all the items needed for a specific problem-solving inference together at the same location.
    Recognition: can be facilitated by   grouping all the relevant information about one item in the same location, avoiding the need fot matching remembered symbolic labels.

p8
  Anscombe's quartet
  Comprises 4 datasets that have nearly identical simple statistical properties.
    Mean of x in each case              9(exact) | In probability and statistics, 'mean' and 'expected value' are used synonymously to refer to one measure of the ' central tendency', either of a probability distribution or the random variable characterized by that distribution.
    Sample variance of x in each case   11(exact) | In probability theory and statistics, variance measures how far a set of numbers is spread out
    Mean of y in each case              7.5 (to 2 decimal places )
    Sample variance of y in each case   4.122 or 4.127 (to 3 decimal places)
    Correlation between x and y in each case	0.816 (to 3 decimal places)
    Linear regression line in each case	y = 3.00 + 0.500x (to 2 and 3 decimal places, respectively) | linear regression is an approach for modeling the relationship between a scalar dependent variable y and one or more explanatory variables (or independent variables) denoted X. 

    Dependent and independent variables
      Variables used in an experiment or modelling can be divided into three types: "dependent variable", "independent variable", or other. 
        The "dependent variable" represents the output or effect, or is tested to see if it is the effect. 
        The "independent variables" represent the inputs or causes, or are tested to see if they are the cause. Other variables may also be observed for various reasons.
 
p11
    1.9 Why Focus con Task
    A Vis tool can support differents task, depending on the users and the dataset the users have.
    1.10 
    The focus on effectiveness is a corollary of defining vis to have the goal of supporting user tasks.
  
p13
    A fundamental principle of design is to consider multiple alternatives and then choose the best.

p14
    1.12
    The problem of 'validation' for a vis design is difficult because there are so many questions that you could ask when considering whether a vis tool has met yours design goals.
    1.13
    Three different kinds of limitations:
      Computational capacity.
      Human perpectual and cognitive capacity.
      Display capacity.

p17
    Figure 1.7 Shows the high-level framework for analyzing vis
      - WHAT the user sees.
      - WHY the user intends to use a vis tool
      - HOW the visual encoding and interaction idioms are constructed in terms of design choices.
    or
      - WHAT data is shown in the views.
      - WHY is the task been performed.
      - HOW is the Viz idiom constructed in terms of choices.

    Each three fold WHAT-WHY-HOW question has a corresponding DATA-TASK-IDIOM answer trio.

CHAPTER II | WHAT: Data Abstraction (See What? schema at the begining the the chapter)

p22
    You need to know two crosscutting pieces of information about each term inside a dataset.
      Their semantics: Is the real-world meaning.
      Their type: Is its structural or mathematical interpretation.
        At the data level, what kind of thing is it: An item, a link, an attribute?
        At the dataset level, how are these data types combined into a larger structure: a table, a tree, a field of sampled values?
        At the attribute level, what kind of mathematical operations are meaninful for it?. For exemple is a number represents a count of boxes, its type is quantity, so makes sense to add items. If a number represents a postal code, its type is 'code' rather than 'quantity', adding two of these numbers does not make sense.
 
p23
    2.3 Five basic datatypes
      Items: Individual entity that is discrete. Row in a simple table or a node in a network. (People, stocks, coffee shops, genes, or cities).
      Attributes: Some specific property that can be measured, observed, or logged. (Salary, price, number of sales, protein expression level, temperature).
      Links: is a relationship between items. typically within a network.
      Positions: spatial data, provading a location in 2d or 3d. (latitude-longitude or three numbers specifying a location within the region of space measured by a medical scanner).
      Grid: Specifies the strategy for sampling continuous data in terms of both geometric and topological relationships between its cells.

p24
    2.4 Dataset Types
      Datset: Collection of information that is the target of analysis 
      4 basic dataset types.
        Tables        Items - Attributes
        Networks      Items(nodes)  - Attributes  - Links 
        Fields        Attributes  - Grids (Positions)
        Geometry      Items - Positions
 
      Spatial Fields: For exemple the visualization of materials's resistance. temperature and air pressure over a airplane wings
      Grid types: Uniform grid. (don't store grid geometry or grid topology).
                  Rectilinear grid. Nonuniform sampling
                  Structured grid. Curvilinear shapes, where the geometric location of each cell needs to be specified.
                  Unstructured grid. complete flexibility, topological information and spatial positions, must be stored explicity.
      Geometry: specifies info about the shape of items with explicit spatial positions. The items could be points, one-dimensional lines, curves, 2d surfaces or regions, or 3D volumens.
                Don't necessary have attributes

p31
    2.5 Attributes types
      Categorical vs ordered
      Categorical: The type os this data does not have an implicit ordering. but it often  has hierarchical structure.
                   Can only distinguish whether two things are the same or different. 
                   Other categorical ex: movie genres, file types, city names.
      
      Ordered: all does have an implicit ordering, as opposed to un-ordered categorical data.
        Oridinal Ordered: such a shirt size, as there is a well-defined ordering. Ranking is other ex: top-ten list of movies, initial lineups for sports tournaments depending on past performance.
        Quantitative Ordered: A measurement of magnitude that supports arithmetic comparision. Ex (Weight, temperature, stock price, number of calling functions ina program, number of drinks sold at a coffee shop. Integers and Real-Numbers are quantitative data.

p34
    2.6 Semantics
    The classification in this book is heavily focused on the semantics:
    Keys vs values,     and the related questions of 
    Spatial and continuos data vs nonspatial and discrete data    to match up  with the idiom design choice analysis framework.
    
      Key => as index
      value => attribute 

      2.6.1.1 A 'flat table' has only one key, each item corresponds to a row with any numbers of attributes. 
        Key might be complety implicit, as the index of the row.
        Key might be explicit, where it is contained within the table as attribute.
        Key might be categorical or ordinal attributes.

p36
      2.6.1.2 A 'Multidimensional Table'
      Multiples keys are required to look up an item.

p37
      2.6.1.3 'Fields'
        Although fields differ from tables a fundamental way because they represent continuous rather than discrete data. On 'spatial field' independent variable is used instead key, and dependent variable instead of value.
        Structured by sampling in a systematic way so that each grid cell is spanned by a unique range from a continuous domain. Ex the visualization of material resistance.
        Characterized in terms of number of key vs values.
          Multivariate structure depends on the number of value attributes.
          Multidimensional structure depends on the number of keys.
        Scalar field: one attribute per cell.
          Unvariate. A single value attribute.
          An Ex. The Cloud Points in a depth image from Kinect.
        Vector field: two or more attributes per cell
          Multivariate. 
          Each point in a vector field has a position, direction and magnitude. 
          Ex. Velocity of air in the room at a specific time-point.
        Tensor field: many attributes per cell.
          Array of attributes on each point.
          Ex. test of material stress. defined by nine numbers that represent forces acting in three orthogonal directions.

CHAPTER III | Why: Task Abstraction

  Actions & Targets
    Verbs describing actions and nouns describing targets.

  3.4 ACTIONS
    Three levels of 'actions' define USER GOALS.
    Analyze Level (highest). how is been used to analyze
      Consume or Produce info.
    Search Level (middle). What kind of search
      'target' & 'location' of target (items?,elements?) are known or not
    Query Level (low). what do the user need?
      Queries:
        Identify one target
        Compare some targets
        Summarize all targets 

/*  Here the book has a little inconsistency of hierarchy in the titles. 'Analyze' has 3.4.1 and 'Produce' that is first child has 3.4.2 and the subject 'consume' (at the same level as Produce) don't have a title, it is implicit on 3.4.1 */

p45
    3.4.1 Analyze and 
      Goals: Consume existing information or produce new information. 
      Consume. Goal is to: 
        - Present: To present something that the user already understands to a third party.
        - Discover: For the user to discover something new or analyze information that is not already completely understood.
        - Enjoy: Users to enjoy a vis to indulge their casual Interest in a topic. 
p47
      3.4.1.1 Discover 
        FIND NEW KNOWDLEDGE THAT WAS NOT PREVIOUSLY KNOWN.
        Can generate new hypothesis.
        Or 'verify' -or disconfirm- an existing hypothesis
      3.4.1.2 Present
        Use for the succint communication of information.   
        Telling a story with data.
        Guiding an audience through a series of cognitive operations.
        This goal is being used by somebody to communicate something specific and already understood to an audience.
p48   3.4.1.3 Enjoy 
      	Casual encounters with vis
	This book assumes two goals aligned, discovery with a particular audience and use for pure enjoyment for different group of people

    3.4.2 Produce
      Generate new material. Often the gloal is to produce output as input to a next instance. 
      Three kinds of produce goals:
p49        
        3.4.2.1 Annotate
          Addition of graphical or textual annotations associated with one or more preexisting viz elements.
          Typically as a manual action by the user.          
          Can be thought as a new attribute for them.

        3.4.2.2 Record
          Saves or captures viz elements as persistent artifact. as screen shots, list of book-market elements or locations, parameter settings, interaction logs or annotations. 
          The record choice saves a persistent artifact, in contrast to the annotate, which attaches information temporarily to existing elements.
  
        3.4.2.3 Derive
          The common case is that deriving new data is a choice made by vis designers, but this choice could also be driven by a user of a vis tool.
          Don't just draw what  you're given; decide what the right thing to show is, create it with a series of transformations from the original dataset, and draw that. 
          A dataset often needs to be transformed beyond its original state in order to create a visual encoding that can solve the desired problem
          Tod do so we can create DERIVED ATTRIBUTES that extends the dataset beyond the original set of attributes that it contains. Synonym of 'derive' is 'transform'.

    3.4.3 Search
      All the high-level analyze case require to 'search' for elements of interest within the vis as a mid-level goal
      Classification of search: whether the identity and location of the search target is already known or not.
      
      3.4.3.1 Lookup
        Users already know both, that they are looking for and where it is, just 'lookup'.
      3.4.3.2 Locate
        Find a known target at an unknown location.
      3.4.3.3 Browse
        Exact identity of a search target is unknown in advance. it might be specified based on characteristics. User is searching 1 or more items that fit some kind of specifications.
        When the user do not know exactly what they are looking for, but they do have a location in mind  of where to look for it, the search type is 'browse'.
      3.4.3.4 Explore
        When the user is not even sure of the location, the search type is 'explore'. (Searching for outliers in a scatterplot, for anomalous spikes or periodic patterns in a line graph of time-series data)

    3.4.4 Query
      Once a target or set targets are found. A low-level user goal is to 'query' at one of three scopes.
        'identify'    =>    single target
        'compare'     =>    multiple target
        'summarize'   =>    full set of possible targets

      3.4.4.1 Identify
        If a search returns known targets, either by 'lookup' or 'locate', then 'identify' returns their characteristics.
      3.4.4.2 Compare
        The scope of 'compare' is multiple targets.
      3.4.4.3 Summarize
        The scope is all possible targets. a synonym is 'overview'.


  3.5 TARGETS
    The 'ACTIONS' discussed above refer to a 'target', meaning some aspect of the data that is of interest to the user.
    Target are nouns, Actions are verbs.
    Three high-level targets are broadly relevant.
      'Trend' high-level characterization of a pattern in the data (increase, decrease, peaks, troughs, pleatus)
      'Outiers' data does not fit well with that backdrop
      'Features' task dependent, meaning any particular structures of interest
    
    Attributes are specific properties that are visually encoded. The lowest-level for an attribute is to find an individual value.
    Another frequent target is to find the extremes: maximum or minimum value across the range.
    
    Some targets encompass the scope of multiple attributes.
      A first attribute can have a 'dependency' on a second
      There is a 'correlation' between one attribute and another if there is a tendency for the values of second to be tied to those of the first.
      The 'similarity' between two attributes can be defined as a quantitative measurement calculated on all of their values, allowing attributes to be ranked with respect to how 'similar' or 'different', they are from each other.
      
    Some targets pertains to some specific datasets.
      Network data specifies relationships between nodes as links.
      The fundamental target with network data is to understand the structure of these interconnections. that is, the network's TOPOLOGY.

      A more specific topological target is a 'path' of one or more links that connects two nodes.

      For spatial data, indestanding and comparing the geometric 'shape' is the common target of user actions.

  3.6 HOW: A PREVIEW
    Third part of an analysis instance trio is 'how' a vis idiom can be constructed out of a set of design choices.

    Families:

      Encode: how encode data within a view. How to arrange data spatially: express value, separate, order and align region, and use given spatial data.
        Include how to map data with all of the nonspatial visual channels including, color, size, angle, shape, and many more.

      Manipulate: Change any aspect of the view
        Select elements from within the view.
        Navigate to change the viewpoint within the view.

      Facet: How to facet data between views has choices for 
        How to juxtapose and coordinate multiple views
        How to partition data between views
        How to superimpose layers on top of each other.

      Reduce: Has the options of filter data away, 
        Aggregate many data elements together.
        Embed focus and context information together within a single view.
        
  3.7 ANALYZING AND DERIVING:  EXAMPLES


======================================================================================================================================

#4 CHAPTER IV | ANALYSIS: FOUR LEVELS FOR VALIDATION

The four nested levels of vis design have threats to validity at each level, and validation approaches should be chosen accordingly

Cascading levels:

  A. Domain Situation: Observe target users using existing tools ↓

    B. Data / task abstraction ↓

      C. Visual encoding / Interaction idiom ↓

        D. Algorithm ↓ 

          Measure system time / memory
          Analyze computational complexity

      Analyze results qualitatively
      Measure human time with lab experiment (lab study)

    Observe target users after deployment (field study)

  Measure adoption

A→  The situation level, where you consider the details of a particular application domain.

B→  The What-Why abstraction level, you map those domain-specific problems and data into forms that are independent of the domain.

C→  The How level is the design of idioms that specify the approach to visual encoding and interaction.

D→  Design of algorithms to instantiate those idioms computationally.

THESE LEVELS ARE NESTED: The output form an 'upstream' level above is the input to the 'downstream' level below 

###A Domain Situation →  Encompasses a group of target users, and their: 

Domain of interest: The particular field of interestof the target users.
Each domain usually has its own vocabulary for describing its data and problems 
At this level, situation blocks are identified. The outcome of the design process is an understanding that the designer reaches about the needs of the user.
Methos typically used: Interviews, observations, or careful research about target users within a specific domain.
      
**OUTCOME:** A detailed set of questions asked about or actions carried out by the target users, about a possible heterogeneous collection of data that is also understood in detail.
It should be specific enough to be useful as input to the next desing level

*In this point the author uses 'domain-specific' term. Then uses 'domain-independent', I can infer 'domain-independent' refers to a generic representation that can wrap different kinds of 'domain-specific' data, with a similar needs for a vis tool* 

###B Data / task abstraction →  Requires abstracting the specific domain questions and data from the domain-specific form that they have at the top level...  ...into a generic representation.
      
Abstracting into the 'domain-independent' vocabulary allows you to realize how domain situation blocks that are described using very different language might have similar reasons why the user needs the vis tool and what data it shows.

Questions from very different domain situations can map to the same abstract vis tasks.

Examples of abstract tasks include browsing, comparing, and summarizing

**DOMAIN SITUATION** block are **IDENTIFIED** at the Domain Situation level.
**TASK** blocks are **IDENTIFIED** by the designer as being suitable for a particular domain situation block.
**ABSTRACT DATA** blocks are **_DESIGNED_**. A creative design step 

The data abstraction level requires you to consider whether and how the same dataset provided by a user should be transformed into another form 
        
###C Visual encoding and Interaction Idiom → 
    
Create and manipulate the visual representation of the abstract data block choosed at the previous level, guided by the abstract tasks that you also identified at that level.

####Idiom each distinct possible approach
#####Visual encoding 
Set of design choices covers how to create a *single* picture of data →  Visual Encoding Idiom →  Controls exactly that users **see**.
#####Interaction
Set of questions involves how to manipulate that representation dynamically →  Interaction Idiom →  Controls how users **change** what they **see**.

*While it’s often possible to analyze encoding and interaction idioms as separable decisions, in some cases these decisions are so intertwined that it’s best to consider the outcome of these choices to be a single combined idiom. *

**Idiom Blocks** are designed: they are the outcome of decisions that you make

###D Algorithm → 

Creating an **algorithm** involves all of the design choices involved in this innermost level.
The goal is to efficiently handle the visual encoding and interaction **Idioms** that you chose in the previous level.

Algorithm blocks are also **designed** rather than identified.

Nested models enphasizes separating **Algorithm design** from **Idiom design**. The first is where your primary concerns are about computational issues, while the second is where your primary concerns are about human perceptual issues.


    
        


        


      

    
    
