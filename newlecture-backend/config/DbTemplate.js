var mysql = require('mysql');
const datasource = require('./DataSource');


function query(sql) {

    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(datasource);
        connection.connect();

        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            results.forEach(notice => {
                console.log(`작성자 : ${notice.writerId}, 제목 : ${notice.title}`);

            });
            resolve(results);
            //res.render("customer/notice/list.ejs", { list: results });
        });
        connection.end();
    })

}

exports.query = query;
