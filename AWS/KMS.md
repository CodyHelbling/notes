### What is KMS?
Key Management Service.
Makes it easy to create and control the encryption keys used to encrypt your 
data. It's integrated into AWS services for simplicity.

### What is a customer master key?
A key that consists of an alias, creation date, description, key state, key 
material (either customer provided or AWS provided)

### Can KMS keys be exported?
No, you'd have to use HSM.

### What are the steps to creating a customer master key?
- Create Alias and Description
- Chose material option
- Define Key Administrative Permissions
    - IAM user/roles that can administer (but not use) the key through the 
    KSM API.
- Define Key Usage Permissions
    - IAM users/roles that can use the key to encrypt and decrypt data.
