// Fake reviews
const reviews = [
    {
      quote: "This book changed my life! It's an incredible journey from start to finish. Highly recommended.",
      author: "Rahul Kumar"
    },
    {
      quote: "Couldn't put it down until I finished! The characters are so well-developed, and the plot is gripping.",
      author: "Priya Sharma"
    },
    {
      quote: "An absolute masterpiece! The writing style is captivating, and the story will stay with you long after you finish.",
      author: "Amit Patel"
    },
    {
      quote: "Incredible storytelling! I was completely immersed in the world created by the author. A must-read for any book lover.",
      author: "Neha Gupta"
    },
    {
      quote: "A must-read for everyone! This book touches on important themes and delivers a powerful message.",
      author: "Vikram Singh"
    },
    {
      quote: "I wish I could read it again for the first time! This book is simply unforgettable.",
      author: "Anjali Patel"
    }
  ];
  
  // Function to display reviews
  function displayReviews() {
    const reviewContainer = document.querySelector('.testimonial');
    reviewContainer.innerHTML = ''; // Clear previous reviews
  
    const randomIndex = Math.floor(Math.random() * reviews.length);
    const review = reviews[randomIndex];
  
    const quoteElement = document.createElement('blockquote');
    quoteElement.textContent = `" ${review.quote} "`;
  
    const authorElement = document.createElement('p');
    authorElement.textContent = `- ${review.author}`;
  
    reviewContainer.appendChild(quoteElement);
    reviewContainer.appendChild(authorElement);
  }
  
  // Function to change reviews every 10 seconds
  function changeReviews() {
    setInterval(displayReviews, 10000); // Change reviews every 10 seconds
  }
  
  // Initial call to display reviews
  displayReviews();
  
  // Call the function to change reviews after 10 seconds
  changeReviews();
  