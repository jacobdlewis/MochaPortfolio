/* jshint mocha: true, expr: true, strict: false */

describe('test suite', function() {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('hello', function () {
  it('should return world', function () {
    hello().should.equal('world');
  });
});

describe('getStock', function () {
  it('should return the stock object', function (done){
    getStock('AAPL', function(stock){
      stock.Name.should.equal('Apple Inc');
      done();
    });
   });
    it('should return another stock object', function (done){
    getStock('MSFT', function(stock){
      stock.Name.should.equal('Microsoft Corp');
      done();
    });
  });
});
  describe('addStockToTable', function() {
    it('should add a row to the table', function() {
      var stock = { Name: "SuperCorp", Symbol: "SCRP", LastPrice: 34.32 };
      $('tr').length.should.equal(0);
      addStockToTable(stock);
      $('tr').length.should.equal(1);
    });
    it('should add two stocks to the table, using stock data from ajax call', function() {
      var stock = { Name: "SuperCorp", Symbol: "SCRP", LastPrice: 34.32 };
           $row = addStockToTable(stock);
           $tds = $row.find('td');
      $tds.length.should.equal(3);
      $($tds[0]).text().should.equal('SuperCorp');
      $($tds[1]).text().should.equal('SCRP');
      $($tds[2]).text().should.equal('34.32');
    });
  });


