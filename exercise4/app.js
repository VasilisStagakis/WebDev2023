document.addEventListener('DOMContentLoaded', function() {
  // Get all anchor tags
  var anchorTags = document.querySelectorAll('a');

  // Loop through each anchor tag and attach a click event listener
  anchorTags.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      // Prevent the default scroll behavior
      event.preventDefault();

      // You can add additional logic here if needed

      // For example, you might want to scroll to the target manually
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});