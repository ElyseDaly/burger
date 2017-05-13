// Import MySQL connection.
var connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            return key + '=' + ob[key];
        }
    }
}


var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(table, col, val, cb) {
        var queryString = 'INSERT INTO ' + table;
        queryString += ' (';
        queryString += col;
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += '?';
        queryString += ') ';

        connection.query(queryString, val, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, objColVal, condition, cb) {
        var queryString = 'UPDATE ' + table;
        queryString += ' SET ';
        queryString += objToSql(objColVal);
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};


// Export the orm object for the model (cat.js).
module.exports = orm;
