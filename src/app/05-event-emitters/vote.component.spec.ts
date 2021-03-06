import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should emit voteChanged event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe((votes) => {
      totalVotes = votes;
    });

    component.upVote();

    expect(totalVotes).toBe(1);
  });
});