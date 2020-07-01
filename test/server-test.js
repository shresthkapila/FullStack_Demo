var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {
    //tests associated with Users
    it('should add a single user on a succesful POST request for /adduser', function(done) {
        chai.request(server).post('/adduser').send({'uname':'tester mctesty', 'age':'23'})
            .end(function(error,res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].n.should.equal('tester mctesty');
                res.body[0].a.should.equal('23');
                done()
            });
    });

    // it('should increase the number of users by 1 on a successful POST request for /adduser', function(done) {
    //     chai.request(server).get('/allusers').end(function(err,res) {
    //         var num_users0 = res.body.length //assumption /allusers gives an array of all users [...]

    //         chai.request(server).post('/adduser').send({'uname':'tester mctesty', 'age':'23'})
    //         .end(function(error,res){
    //             chai.request(server).get('/allusers').end(function(err,res) {
    //                 var num_users1 = res.body.length;
    //                 (num_users1 - num_users0).should.equal(1);
    //             })
    //             done();
    //         });
    //     });
        
    // });

});