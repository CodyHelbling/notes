# Terraform Provisioning

### Why does terraform provide variables?
- Store secret keys in their own file
- Reuse values
- Use variables to change values based upon environment

### What is a provider?
- E.g. AWS

### What is a Terraform resource?
- Used to specify a resource and its attributes
- You can add variables in there
```hcl-terraform
resource "aws_instance" ex{
    ami = "ami-c58c1dd3"
    instance_type = "t2.micro"
    }
``` 

### What is a Terraform output?
- The stuff you get out of a resource.
```hcl-terraform
output "aws_public_ip" {
  value = "${aws_instance.ex.public_dns}"
}
```

