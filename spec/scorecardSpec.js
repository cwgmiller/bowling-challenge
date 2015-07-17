describe('Bowling Scorecard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe ('when starting', function(){

    it('has 10 frames', function(){
      expect(scorecard.allFrames.length).toEqual(10);
    });

    it('the first nine frames have two rolls', function(){
      for (var i = 0;
            i < (scorecard.allFrames.length - 1);
            i++){
            expect(scorecard.allFrames[i].length).toEqual(2);
            }
    });

    it('has a tenth frame with three rolls', function(){
      expect(scorecard.allFrames[9].length).toEqual(3);
    });

    xit('starts with a score of zero', function(){
      expect(scorecard.score).toEqual(0);
    });

  });

});
