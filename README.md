# jsql
Use a function to query your mysql database. Ideal for people who need to access MySQL but don't understand the syntax

## Usage
```

const jsql = require("jsql")
const client = new jsql()

// establish connection
client.connect(
		host,
		port,
		username,
		password,
		database,
		20 // connection limit
)

// equivalent of SELECT * FROM tableName where column = 'query'
// Or return rows with column value equal to query.
client.query("tableName", (item) => {
	return item.column == "query" 
}).then( results => {})

// equivalent of SELECT id FROM tableName where column = 'query'
client.query("tableName", (item) => {
	return item.column == "query" 
}, ['id']).then(results => {})

// close connection
client.close()

```
