    document.getElementById('copyEmailBtn').addEventListener('click', function() {
      const emailText = document.getElementById('emailText').innerText;
      
      navigator.clipboard.writeText(emailText).then(() => {
        const btn = document.getElementById('copyEmailBtn');
        const originalText = btn.innerText;
        
        btn.innerText = '¡Copiado! ✓';
        btn.classList.add('copied');
        
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
    });