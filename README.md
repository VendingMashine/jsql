# funsql
Use a function to query your mysql database. Ideal for people who need to access MySQL but don't understand/like the syntax

## Usage
```

const funsql = require("funsql")
const client = new funsql()

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

### Subscribe to JSQL Pro
Sponsor this repository with 100 USD or more to recieve :
- Pagination functionality.
- Javascript to SQL syntax transformer
- Perform UPDATES, DELETES wtih JavaScript functions.
- Query speed optimization.
- Access to JSQL slack for on-demand support.
- Support for Microsoft Server SQL, PostgreSQL and MariaDB

