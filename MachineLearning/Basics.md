Pluralsight Course: Understanding Machine Learning

What is machine learning?
- Finds patterns in data
- Uses patterns to predict the future
Examples:
    - Detecting credit card fraud
    - Determining whether a customer is likely to switch to a competitor
    
How does machine learning work in a nutshell?

Data (which contains patterns) is feed into a machine learning algorithm 
(which finds patterns) producing a model which recognizes patterns. 
Applications can use the model by supplying new data to it and seeing if it 
matches known patterns.

Why is machine learning becoming a big deal now?
    - Lots of data
    - Lots of compute power
    - Effective machine learning algorithms
    The things above are available now more than ever.
    

What is the machine learning processes?
    - Ask the right question. ( Most important part of process.)
    - Do you have the right data to answer this question?
    - Do you know how you'll measure success?
    - Choose data
        - Often you'll prepare raw data
        - Lots of time will be spent preparing data
        - Apply learning algorithm to data
        - Iterate to improve model
        - Deploy chosen model
        - Recreate model regularly
    
    1. Ask the right question
    2. Choose the right data
        - And get that data into good shape
    3. Iterate until you have a model that makes good predictions
        - And periodically rebuild the model
    4. Deploy the model
    
What is training data?
    - The prepared data used to create a model.
    - It's called training data because creating a model is call 'training a
     model'

What is supervised learning?
    - The value you want to predict is in the training data.
    - The data is labeled.
    - Training data will have features and target values

What is unsupervised learning?
    - The value you want to predict is not in the training data.
    - The data is unlabeled.
    
What is a regression problem?
    - We have data, and we want to find a line or curve fitting the data
    - Typically for supervised learning.
    - Example Question: How many units of this product will we sell next month?
    
What is a classification problem?
    - We have data we want to group into classes.
    - When data comes in, we'll want to predict it's class.
    - Example Question: Is this credit card transaction fraudulent?
    
What is a clustering problem?
    - We want to find clusters in data.
    - Unsupervised learning because we don't know what we're looking for up 
    front.
    - Example Question: What are our customer segments?
    
What are some machine learning algorithm examples?
    - Decision tree
    - Neural network
    - Bayesian
    - K-means
  
How do you train a model using supervised data?
    - Target value is part of training data
    1. Choose features in training data that we think will be most predictive
     of the target value.
    2. Input training data (75% of all data for expected predictive features)
    3. Generate a `Candidate model` 
    4. Use the remaining 25% of data to test the model.
    
How can you improve the model?
    - Choose different features
    - Get more data
    - Try another algorithm