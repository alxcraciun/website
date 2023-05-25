function addDeskSetup() {
  var newDeskSetupBox = `
    <div class="desk-setup-box">
      <img src="images/desk-setup.jpg" alt="">
      <div class="desk-setup-layer">
        <h4>Artist Name</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, placeat.</p>
        <a href="#"><i class="bx bx-link-external"></i></a>
      </div>
    </div>
  `;

  var btnAddDeskSetup = document.getElementById("btnAddDeskSetup");
  btnAddDeskSetup.insertAdjacentHTML("beforebegin", newDeskSetupBox);
}

var btnAddDeskSetup = document.getElementById("btnAddDeskSetup");
btnAddDeskSetup.addEventListener("click", addDeskSetup);