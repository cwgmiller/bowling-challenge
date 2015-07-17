describe('Bowling Scorecard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it('has 10 frames', function(){
    expect(scorecard.framescore.length).toEqual(10);
  });

  xit('starts with a score of zero', function(){
    expect(scorecard.score).toEqual(0);
  });

});
