    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const content = item.querySelector('.faq-content');
            if (content) {
                content.classList.toggle('open');
            }
        });
    });
  });
  