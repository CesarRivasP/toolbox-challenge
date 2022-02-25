import inputHideEmail from './inputHideEmail';

describe('InputHideEmail helper', () => {
  const spyEmail = 'cesarrivas10@momento.com';

  it('should return the email formatted in a string in which not all the mail is seen and the domain is hidden', () => {
    expect(inputHideEmail(spyEmail)).toBe('ce******10@******.com')
  });
});
