 var event = document.createEvent('Event');

 event.initEvent('holla', true, true);


 document.addEventListener('holla', function () {

     console.log('trigger exemple 1 natif');

 });


 document.dispatchEvent(event);


 setTimeout(function () {

     document.dispatchEvent(event);

 }, 3000);