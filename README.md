This is a collection of range utility functions.

A range must be an object with a start and end property.
Eg:
```
var myRange = {
	start: 10,
	end: 40
}
```

A "circular" range has a start > end.
Eg:
```
var myRange2 = {
	start: 50,
	end: 40
}
```

All ranges are assumed to have 0-based inclusive indices:

rrrr
0123
start = 0,
end = 3
