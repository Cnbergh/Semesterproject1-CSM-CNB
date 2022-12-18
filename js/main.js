function toogleHamburger() {
    const nav = document.getElementById('sidebar-menu');
    nav.classList.toggle('expanded')
}
function submitcontactform(text) {
    alert(text);
  }
  function openCheckout() {
    const checkout=document.getElementById('checkout');
    checkout.classList.add('expanded')
  }