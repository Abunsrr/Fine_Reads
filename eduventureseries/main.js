
const faviconLinks = [
  '<link rel="apple-touch-icon" sizes="57x57" href="../../favicon/apple-icon-57x57.png">',
  '<link rel="apple-touch-icon" sizes="60x60" href="../../favicon/apple-icon-60x60.png">',
  '<link rel="apple-touch-icon" sizes="72x72" href="../../favicon/apple-icon-72x72.png">',
  '<link rel="apple-touch-icon" sizes="76x76" href="../../favicon/apple-icon-76x76.png">',
  '<link rel="apple-touch-icon" sizes="114x114" href="../../favicon/apple-icon-144x144.png">',
  '<link rel="apple-touch-icon" sizes="120x120" href="../../favicon/apple-icon-120x120.png">',
  '<link rel="apple-touch-icon" sizes="144x144" href="../../favicon/apple-icon-144x144.png">',
  '<link rel="apple-touch-icon" sizes="152x152" href="../../favicon/apple-icon-152x152.png">',
  '<link rel="apple-touch-icon" sizes="180x180" href="../../favicon/apple-icon-180x180.png">',
  '<link rel="icon" type="image/png" sizes="192x192" href="../../favicon/android-icon-192x192.png">',
  '<link rel="icon" type="image/png" sizes="32x32" href="../../favicon/android-icon-36x36.png">',
  '<link rel="icon" type="image/png" sizes="96x96" href="../../favicon/android-icon-96x96.png">',
  '<link rel="icon" type="image/png" sizes="16x16" href="../../favicon/favicon-16x16.png">',
  '<link rel="icon" type="image/png" sizes="144x144" href="../../favicon/android-icon-144x144.png">',
  '<link rel="icon" type="image/png" sizes="48x48" href="../../favicon/android-icon-48x48.png">',
  '<link rel="icon" type="image/png" sizes="72x72" href="../../favicon/android-icon-72x72.png">'
];



function addFavicons() {
  const head = document.head || document.getElementsByTagName('head')[0];
  faviconLinks.forEach(favicon => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = favicon.trim();
      head.appendChild(tempDiv.firstChild);
  });
}



// Call the function to add favicons
addFavicons();




