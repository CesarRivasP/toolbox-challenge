const inputHideEmail = (email) => {
  const splitEmail = email.trim().split('@');
  const splitDomain = splitEmail[1].split('.');

  const hideText = '******';
  const emailLength = splitEmail[0].length;
  const startEmail = splitEmail[0].slice(0, 2);
  const endEmail = splitEmail[0].slice(emailLength -2 , emailLength);
  const hideEmail = `${startEmail}${hideText}${endEmail}@${hideText}.${splitDomain[1]}`;

  return hideEmail;
};

export default inputHideEmail;
