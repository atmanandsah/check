//create the ctest database and connect to it
const db = connect('127.0.0.1:27017/ctest'),
    allCtest = null;


//create the names collection and add one document to it
db.admin.insert({'name' : 'sonu',
                'email' : 'goddasonu@gmail.com',
                'password' : '*',
                'phone' : '8539074463'});
db.college.insert({'name' : 'NIT',
                   'email' : '*',
                    'password' : '*',
                    'phone' : '*', 
                    'code' : '*',
                    'address' : '*'});
                
//setting a reference to all documents in the database
allCtest = db.admin.find();

//iterate the names collections and output each document
while(allCtest.hasNext()){
    printjson(allCtest.next());
};