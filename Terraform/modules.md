## What is a terraform module?
- A container for multiple resources that are used together.
- Every Terraform configuration has at least one module, known as its root module, which consists of the resources defined in the .tf files in the main working directory.
- A module can call other modules, which lets you include the child module's resources into the configuration in a concise way. Modules can also be called multiple times, either within the same configuration or in separate configurations, allowing resource configurations to be packaged and re-used.