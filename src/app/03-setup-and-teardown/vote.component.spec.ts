import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let component: VoteComponent;
  
  // executed before each test
  beforeEach(() => {
    // set up
    component = new VoteComponent();
  });

  // executed after each test - good for cleanup
  afterEach(() => {
    // tear down
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});