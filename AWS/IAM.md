# Section 2 
## Lecture 5

### What is IAM?
 A tool to manage users and their level of access in AWS console.
 
### What does IAM give you?
* Ceneralized control of your AWS account
* Shared Access to your AWS account
* Granular Permissions
* Identity Federation(including Active Directory, Facebook, LinkedIn, etc.)
* Multifactor Authentication
* Provides temporary access for users/devices and services, as necessary
* Allows you to set yp your own password rotation policy
* Integrates with many different AWS services
* Supports PCI DSS Compliance

### Critical Terms
* Users - End Users
* Groups - Collections of users sharing the same permissions
* Roles - A role is a set of permissions for a resource. Users and other 
resources can assume a role to utilize resources.
* Policies - Define permissions for identities and resources

## Lecture 6
### IAM Lab
The IAM has a dashboard for tuning Groups, Users, Roles, Policies and more. 
When first setting up they provide a security status which walks one through 
setting up MFA, individual IAM users, groups with particular permissions, and
 lastly an IAM password policy.
 
 ## Lecture 7
 ### Identity Access Management Summary
 * IAM consists of:
    * Users
    * Groups (A way to group users and apply policies to them)
    * Roles
    * Policy Documents (JSON)
    
  * IAM is universal... it doesn't only apply to a particula region'
  * The `root account` is the the account created unpon AWS account setup
    * it has full admin access
  * New users have no permissions by default
  * New users are assigned Access Key ID and Secret Access Keys upon creation
    * These are not the same as a password, and you cannot use the Access 
    key ID and Secret Access Key to Login in he AWS Management Console
    * You can use it to access AWS via the API and Command Line
    * There is only on opperotunity to download the Secret Access Key (upon 
    creation)
 * Alwys set up MFA and a password rotation policy
 
 
 ### What are some benifits of using Roles?
 - They allow you to not use Access Key ID's and Secret Access Keys
 - They are preferred from a security perspective
 - Roles are controlled by policies
 - You can change a policy on a role and it will take immediate affect
 - You can attach and detach roles to running EC2 instances without having to
  stop or terminate these instances
 
 
 ## Quiz
 
* Which of the following are features of IAM?
    * Centralised control of your AWS account
    * Integrates with existing active directory account allowiung single sign on
    * Fine-grained access control to AWS resources

* AWS recommends that EC2 instances have credentials stored on them so that the instances can access other resources (such as S3 buckets).
    * False
 
 * Which IAM entity can you use to delegate access to your AWS resources to users, groups or services?
    * IAM Role
 
 * In AWS, what is IAM used for? 
    * Creating and managing users and groups, managing access to AWS services &
  assigning permissions to allow and deny access to AWS resources.
  
* What is an IAM Policy? 
    * A JSON document which defines one or more permissions

* Which is the best way to enable your EC2 instance to read files in an S3 bucket?
    * Create an IAM role with read access to S3 and assign the role to the EC2 instance.

* Which statement best describes IAM?
    * IAM allows you to manage users, groups, and roles and their corresponding level of access to the AWS Platform.
  
## Guild Meeting
### Exam Prep Recommendations
* Official AWS practice exams are very valuable - sounds like they have a 
generator
* 
  
