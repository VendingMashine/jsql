var mysql = require('mysql');

class jsql {

	constructor(){
		this.pool = null
	}

    connect(
		host ,
		port,
		username,
		password,
		database,
		connectionLimit = 20
	){	
		this.pool = createPool({
	      connectionLimit,
	      host: host,
	      user: username,
	      password: password,
	      database: database,
	      port : parseInt(port)
	    });
	}

	q(q , params = []) {

		return new Promise((resolve, reject) => {
	      this.pool.query(q, params, (error , results) => {
	        if (error) reject(error);
	        else resolve(results);
	      });
	    });
		
	}

	async query(tableName, fn = (item) => true, columns = ['*'] ){

		var results = await this.q(`SELECT ${columns.join(',')} FROM ${tableName}`)
		return results.filter(fn)
	}

	close(){
		return new Promise((resolve, reject) => {
			if(!this.pool?.end) return resolve(true)
			this.pool.end(function (err) {
            if (err) return reject(err);
            return resolve(true)
        	})
		})
	}
}

module.exports = jsql