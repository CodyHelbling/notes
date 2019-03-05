# AWS Lambda

### What is AWS Lambda?
Lambda allows you to ignore everything but your code.
It is a compute service where you can upload your code and create a Lambda 
function. AWS LAmbda takes care of provisioning and managing the servers that
 you use to run the code. You don't have to worry about operating systems, 
 patching, scaling, etc. You can use Lambda in the following ways:
 - Event-driven combute service where AWS Lambda runs your code in response 
 to events. These events could be changes to data in an Amazon S3 bucket or 
 Amazon DynamoDB table.
 - As a compute service to run your code in response to HTTP requests using 
 Amazon API Gateway or API calls made using AWS SDKs.

### Why does AWS Lambda exist?
Developers don't need to worry about mainlining hardware, ec2 instances, or 
containers, and there is a huge cost incentive.

### What Languages are supported by Lambda?
- Node
- Java
- Python
- Go
- C#

### How is Lambda priced?
- Number of requests
- First million requests per month are free
- Also duration of the function

### What's cool about Lambda?
- no servers!
- continuous scaling
- very inexpensive

### What tool can be used to debug Lambda functions?
- AWS X-ray

### How are Lambda functions limited by region?
- They're not, you can use the globally

### What are possible Lambda triggers?
- There are quite a few, memorize them for the test

### How are Lambda functions versioned?
- Each Lambda function has it's own ARN and it immutable
    - Except for the $LATEST one.. that is the one running and you can modify it
    
### What are the ARN types?
- Qualified ARN - The function ARN with the version suffix
    - arn:aws:lambda:aws-region:acct-id:function:helloworld:$LATEST
- Unqualified ARN - The function ARN without the version suffix
    - arn:aws:lambda:aws-region:acct-id:function:helloworld
    
 ### What is a Lambda function Alias?
 - You can create aliases like $PROD, $STAGE for lambda functions
 - They can be used for version control, allowing you to roll back

### How do you split traffic between lambdas?
Create aliases and use the split functionality to add percentages adding to 
100% for your split. Note: You cannot split between $LATEST.
