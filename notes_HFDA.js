Head First Data Analysis

p7
  Data analysis is all about identifying problems and then solving them
  Your problem in exploratory data analysis is to find hypotheses worth testing.

p4
  Define your problem. Knowing your problem is the 'very first step'. Your client will help you define your problem
  Disassemble. Data analysist is all about breaking problems and data into smaller pieces
    You cant answer the big problems directly. But by answering the smaller problems, you can get your answer to the big one.
  Evaluate. Here is the meat of the analysis, where you draw your conclusions about what you've learned in the first two step
  Decide. Finally, you put it all back together and make (or recommend) a decision.

p7
  Exercise.
    Do you have some hypotheses about is happening in the firm?
    How much do you want to increase your sales?
    Have you ever made an analysis before?

A lot of data is usually a good thing. Just stay focused on what you are trying to accomplish with the data.
Good data nalysis is all about keeping focused on what you want to learn about the data.

p35 
  Resume of example

  DEFINE      You got clarification and data from de CEO                                        ==>
  DISASSEMBLE You summarized what you knew into a useful format                                 ==>
  EVALUATE    You compared the element of your summary.                                         ==>
  DECIDE      You suggested that increasing ads to tweens might bring sales back in line.       ==>
  ==>         Then the tween market report challenged your mental model                         ==>
  DEFINE      You looked at your areas of uncertainty.                                          ==>
  DISASSEMBLE You collected more data about MoisturePlus customers                              ==>
  EVALUATE    You discovered older men among MoisturePlus buyers                                ==> 
  DECIDE      You recommended increasing marketing to older men

p37
  CHAPTER 2. Experiment
    Instead of having to rely exclusively on your 'observational data', a well-executed experiment can often help you make 'casual connections'. Strong empirical data will make your analytical judgments all the more powerful.

p42
  Always use the method of comparison.
    One of the most fundamental principes of analysis and statistics is the 'method of comparision', wich state that data is interesting only in comparision of other data.
   
p43
  Comparisions are the key for observational data
    The more comparative the analysis is, the better. And this is true especially in observational studies.

  In observational data, you just watch people and let them decide wich groups they belong to, and taking an inventory of observational data is often the first step to getting better data through experiments.

p47
  Confounders
    A 'confounder' is a difference among the people in your study other than the factor you are trying to compare that ends up making your results  less sensible.
    If the people is differente from each other in respect to a variable you are trying to undestand, the difference is a confounder.

p54
  You need an experiment to say wich strategy will work best
    Is there anything in the data you have that tells you which strategy will help to achieve your goal.
  If you want to draw conclusions about things that overlap with your data but are not completely described in the data, you need 'theory'  to make the connection.

p58
  CONTROL GROUPS  
    A group of treatment subjects  that represent the status quo, not receiving any new treatment.
    NO control goups means NO comparision. and NO comparision means no idea what happened.

p59
  'historial controls' take past data and treat it as the   control. This one not really recomended.
  'contemporaneous controls' control group has its experience at the same time as your experimental group


p75
  OPTIMIZATION
    
    In the case of the example. Analyzing rubber duckies and fish production.
    Divide the data into two categories: things you 'CANT' control & things you 'CAN' control
      In this case you can control the quantity of ducks and fishs to make. And you cant control how profitable are, how much rubber you use and how much time it takes to makes it.
  
p79
  Constraints limit the variables you control
    They will define the PARAMETER  for your problem.!
    These Contraints are related with the things that you 'CANT' control.

  Decision variables are things you 'CAN' control

p80
  When you want to get as much (or as little) of something as possible, and the way you will get it is by changing the values of other quantities, you have an OPTIMIZATION PROBLEM

  TO SOLVE an optimization problem, you need to combine your desicion variables, contraints, and the thing you want to maximize together into an
  OBJECTIVE FUNCION

  The 'OBJECTIVE' is the thing you want to maximize or minimize, and you use the OBJETIVE FUNCTION to find the optimum result
    Algeibraically:

        C1X1 + c2x2 = P

       each C refers to a CONSTRAINT
       each X refers to a DESICION
       P is your objective: the thing you want to maxi or mini mize. 

       Yours contrains and decision variables is this ecuation combine to become the profit of ducks and fish, and those together form your objective: the total profit in this example.

p98
  'ALL MODELS ARE WRONG, BUT SOME ARE USEFUL' -George Box

  An important analysis will write down everything you think you know and everything you think you dont know


  Look for Edward Tufte's visualizations

p146
  In the hypothesis testing chapter.
    The variables can be 
      negatively linked: More of one means less of the other.
      positively linked: More of one means more of the other.

p152
  FALSIFICATION
    is a technique where you eliminate the disconformed hypotheses, so you left with just one finally.

  Use FALSIFICATION in HYPOTHESIS testing and avoid the danger of satisficing

p176
  A 'conditional probability' in the probability of some event, given that some other event has happened.

  Good spanish explanation. from wikipedia
  Probabilidad condicional es la probabilidad de que ocurra un evento A, sabiendo que también sucede otro evento B. La probabilidad condicional se escribe P(A|B), y se lee «la probabilidad de A dado B».

No tiene por qué haber una relación causal o temporal entre A y B. A puede preceder en el tiempo a B, sucederlo o pueden ocurrir simultáneamente. A puede causar B, viceversa o pueden no tener relación causal. Las relaciones causales o temporales son nociones que no pertenecen al ámbito de la probabilidad. Pueden desempeñar un papel o no dependiendo de la interpretación que se le dé a los eventos.

Un ejemplo clásico es el lanzamiento de una moneda para luego lanzar un dado. ¿Cuál es la probabilidad de obtener una cara (moneda) y luego un 6 (dado)? Pues eso se escribiría como P (Cara | 6).

  Notation:

    P ( +|L ) = 1 - P ( -|L )

  Probability of a positive (+) test result, given lizard flu (taking the book example) ==> True Positive
  equals
  1 - Probability of a negative (-) test result, given lizard flu. ==> False Negative

  --------------------------

    P ( + | ~L ) = 1 - P ( - | ~L )

  Probability of a positive (+) test result, given that the person does not have the flu. ==> False Positive
  equals
  1 - Probability of a negative (-) test result, given that the person does not have the flu. ==> True Negative

p178 
  BASE RATE
  The average number of times an event occurs divided by the average number  of times it might occurs (freedictionary)
  1% of the populations has lizard flu. One percent is the BASE RATE. Prior to any analysis and learning ypu know this. That is why BASE RATES are also called PRIOR PROBABILITIES 
  If you do have a BASE RATE and you dont use it. you will fall victim to the BASE RATE FALLACY, where you ignore your prior data and make the wrong decision because of it.

p182
  Bayes’ rule manages your base rates when you get new data

  P (L|+) = P(L) P(+|L)  /  P(L) P(+|L) + P(-) P(+|~L)

  Probability of hiva flu given a positive test result
  =
  The Base Rate (people who have the flu)  *  People with positive tests having the flu (true positive rate)
  /
  The Base Rate with flu * true positive rate + Base RAte with no flu * false positive rate

p208
  The 'Standard deviation measures how far points are from the average".
  Most of the points in a data set will be within one standard deviation of the mean.
  
  Ex. in a data set between these values (dots represent values):

                               average 
                           . .. .|. . .   . 
                   .   .      . .|..  . . 
                        ..   .. .|. . .      .
                    .       .. ..|. .. .   .
                        .    . ..|.. ..  .
                    .   .  .  ...|. ....  . .   .     
  0.0   0.1   0.2   0.3   0.4   0.5   0.6   0.7   0.8   0.9   1.0
                           ____________ 
          between 0.4 - 0.5 & 0.5 to 0.6 is 'One standard deviation" => 0.1

  Most observation in any data set are going to be within one standard deviation of the mean
  In 'Excel' you cancalculate with the formula  = STDEV (data range)

p216
  On Subjective probabilities chapter:
  Alongside the BackWather Investiments example. While analysing possibilities using subjectives probabilities, has come out some questions about posibilities to analyse the data adding some recent 'hard' data. Here used to recapitulate the analytics tools seen up to now, maybe it will help to better undesrtand these tools.

  Analytic tools listed. Why would you or wouldn't you use each of these to incorporate 'hard' data onto subjective probabilities 

1  Experimental Design? ( the starbucks coffee example. with experiment in the shops to prove hypotheses )
    R: It is kind of hard to imagine what sort of experiment you could run to get better data. Since all the analyst are evaluating geopolitical events, it seems that every single piece of data they are looking at is observational. 

2  Optimization? ( Ducks and fish example. You have 'Contraints' limiting the variables you can control. And you have 'Decision' variables that you actually CAN control. You have an 'Optimization problem', you want to get as much or as little of something as possible, and the way you will get it is by changing the values of other quantities.)
    R: There is no hard numerical data!. The optimization tools we have learned presuppose that you have numerical data and a numerical result you want to maximize or minimize. Nothing for optimization here.

3  A nice graphics? (Info visualization, site analysis example. Show the data, a good data analysis begins and ends with thinking with data. Data visualization is all about making the right comparisions. The best visualizations are highly multivariate, namely, compare three or more variables.)
    R:  There is almost always room for a nice data visualization. Once we have revised the subjective probabilities, we will certainly want a new visualization, but for now, we need a tool that gives us better numbers. 

5  Hypothesis testing? ( celular skin example. Data analysis enables you to ecaluate a bunch od options so that you can incorporate all the information you have into your models. You looks for ways to compare yours hypotheses with the data you have. When you are looking for data variables, it's a good idea to ask whether they are POSITIVELY or NEGATIVELY linked.
  As an analyst you need to see beyond simple models, and expect to see CAUSAL NETWORKS. In the real world 'causes' propagate across a network of relatet variables... why should your models be any different?.
  You hace a Main Questions. the answers are your hypotheses. FALSIFICATION is one of the methods, where you eliminate the disconfirmed hypotheses.
  Other important concepto DIAGNOSTICITY -> Evidence and data are Diagnosticity if they help you assess the relative strengths of hypotheses.)
    R: There is definitely a role for HYPOTHESES TESTING IN PROBLEMS LIKE THIS ONE, and the analyst might use it to derive their beliefs about Russia's bahavior. 'But our job is to figure out specifically how the new data changes people's subjective probabilities, and it's not clear hoy hypotheses testing would do that.

6  Bayes' rule? ' (The lizard flu example. Bayes Rule is a handy analytic tool. An incredibly powerful statistical formula that enables you to use BASE RATES along with your conditional probabilities to estimate new conditionals probabilities. See a couple of lines above.)
    R: Now this sounds promising. Using each analyst's first subjective probability as a BASE RATE, maybe we can use Bayer's rule to processs this new information.


p217
  BAYERS RULE is great for revising subjectives probabilities. It allow you to incorporate new evidence to your beliefs about your hypotheses.





