document.getElementById('copy-ip').addEventListener('click', function(event) {
  event.preventDefault(); 
  
  const ip = 'dragonmc.net';
  
  navigator.clipboard.writeText(ip).then(function() {
    alert('ip copied to clipboard: ' + ip);
  }).catch(function(error) {
    console.error('Failed to copy: ', error);
  });
});