document.addEventListener('turbolinks:load', function() {
  const savedOrder = localStorage.getItem('note_order');
  const selectOrder = document.querySelector('#order');
  
  if (savedOrder && savedOrder !== selectOrder.value) {
    selectOrder.value = savedOrder;
    document.querySelector('#orderForm').submit();
  }
  
  document.querySelector('#orderForm').addEventListener('submit', function(event) {
    const selectedOrder = document.querySelector('#order').value;
    localStorage.setItem('note_order', selectedOrder);
  });
});
