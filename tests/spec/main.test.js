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
      $tds.length.should.equal(4);
      $($tds[0]).text().should.equal('SuperCorp');
      $($tds[1]).text().should.equal('SCRP');
      $($tds[2]).text().should.equal('34.32');
      $($tds[3]).text().should.equal('34.32');
    });
  });

  describe('getMultipleStocks', function () {
    it('should return multiple stock objects', function (done){
      getMultipleStocks(['AAPL', 'MSFT'], function(stocks){
        stocks.length.should.equal(2);
        stocks[0].Name.should.equal('Apple Inc');
        stocks[1].Name.should.equal('Microsoft Corp');
        done();
      });
    });
  });

describe('refreshStockPrices', function () {
  it('should edit each stock in the table with a new price', function () {
    var stocks = [
      {Symbol: 'AAPL', LastPrice: 12.45},
      {Symbol: 'MSFT', LastPrice: 23.56}
    ];
    $tbody = $('tbody'),
    $trs   = $('tr');

    $('tbody').append('<tr><td>Apple Inc</td><td>AAPL</td><td>12.34</td><td>12.34</td></tr>');
    $('tbody').append('<tr><td>Microsoft Corp</td><td>MSFT</td><td>23.34</td><td>23.45</td></tr>');

    refreshStockPrices(stocks);

    $($($trs[0]).find('td')[3]).text().should.equal('12.45');
    $($($trs[1]).find('td')[3]).text().should.equal('23.56');
  });
});

