# Step Functions

<!--- QA: Question --->
### What is a Step Function?
<!--- QA: Answer --->
AWS Step Functions lets you coordinate multiple AWS services into serverless 
workflows so you can build and update apps quickly. Using Step Functions, you 
can design and run workflows that stitch together services such as AWS Lambda 
and Amazon ECS into feature-rich applications. Workflows are made up of a series
of steps, with the output of one step acting as input into the next. 
Application development is simpler and more intuitive using Step Functions, 
because it translates your workflow into a state machine diagram that is easy 
to understand, easy to explain to others, and easy to change. You can monitor 
each step of execution as it happens, which means you can identify and fix 
problems quickly. Step Functions automatically triggers and tracks each step, 
and retries when there are errors, so your application executes in order and 
as expected.

https://aws.amazon.com/step-functions/

<!--- QA: Question --->
### What problems do Step Functions solve?
<!--- QA: Answer --->
Coordinating lambdas is a hard problem that has historically been solved by 
non-simple methods like chaining, holding state in a db, or placing queues 
between them. Rolling back upon failure-like conditions is difficult to solve
using these techniques, but Step Functions make it much easier. Step 
Functions can orchestrate more than just Lambdas now too.

<!-- QA: Question -->
### What are some benefits of Step Functions?
<!-- QA: Answer -->
- Easy to coordinate distributed components and microservices
- Write/Maintain less code because the logic is managed by the Step Functions
- Step Functions manage state, checkpoints and restarts

<!-- QA: Question -->
### What are some services Step Functions integrate with?
<!-- QA: Answer -->
- SNS
- SQS
- SageMaker
- AWS Glue
- AWS Batch
- ECS
- Fargate

<!-- QA: Question -->
###What are the 7 state types?
<!-- QA: Answer -->
1. Task - A single unit of work.
2. Choice - Adds branching logic.
3. Parallel - Fork and join the data across tasks.
4. Wait - Delay for a specified time.
5. Fail - Stops an execution successfully.
6. Succeed - Stops an execution successfully.
7. Pass - Passes its input to its output.

<!-- QA: Question -->
### How much do Step Functions cost?
<!-- QA: Answer -->
You pay per transition. And right now it's around $0.025 per 1000 transitions.