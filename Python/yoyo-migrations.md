#Yoyo Database Migrations

### What is yoyo-migrations?
- A Python database schema migration tool.

### How does yoyo-migrations work?
- You write migrations as Python scripts containing raw SQL statements or 
Python functions.

### How are migration files structured?
- There is a migrations directory containing a series of migration scripts.
- Each migration script is a python file containing a series of steps.
- Each step should comprise a migration query and (optionally) a rollback query.
- Migration files can declare dependencies on earlier migrations.

### What order are migration scripts executed?
- Filename order.