let article1 = {
    title1: 'How to Automate Accessibility Tests with Cypress',
    date1: '8/14/20',
    description1: "In my previous post, I covered how to add screenshot testing in Cypress to ensure components don't unintentionally change over time.",
  };
  
  let title1 = document.getElementById('title1');
  let date1 = document.getElementById('date1');
  let description1 = document.getElementById('description1');
  
  title1.textContent = article1.title1;
  date1.textContent = article1.date1;
  description1.textContent = article1.description1;
  
  let article2 = {
    title2: 'Accessibility Testing: ADA Compliance Checkers and Other Tools for Your Website',
    date2: '11/17/19',
    description2: "There are many tools and online resources that can help you to ensure that your web application meets all of the accessibility requirements.",
  };
  
  let title2 = document.getElementById('title2');
  let date2 = document.getElementById('date2');
  let description2 = document.getElementById('description2');
  
  title2.textContent = article2.title2;
  date2.textContent = article2.date2;
  description2.textContent = article2.description2;