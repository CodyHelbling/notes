# Python namedtuple()
# Factory Function for Tuples with Named Fields

# They're basically tuples where you can access fields by name too instead of
# only by position index.

# Example

# Define
Point = namedtuple('Point', ['x', 'y'])

# Instantiate
p = Point(11, x=12)

# Usage
print(p[0])
# of
print(p.x)
