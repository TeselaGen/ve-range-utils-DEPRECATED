##About this Repo
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


##Editing This Repo:
###All collaborators: 
Edit/create a new file and update/add any relevant tests.
Make sure they pass by running `npm test`

##Updating this repo: 
###Teselagen collaborators: 
Sign into npm using the teselagen npm account

```
npm version patch|minor|major
npm publish
```

###Outside collaborators: 
fork and pull request please :)
