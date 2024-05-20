// // collapse menu on item selection
// const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)');
// const menuToggle = document.getElementById('navbarSupportedContent');
// const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => {
//         if (menuToggle.classList.contains('show')) { bsCollapse.hide(); }
//     });
// });

var nextGuestId = 0

// Function to add a new guest entry
function addGuestEntry() {
  const guestContainer = document.getElementById('guestContainer');
  const newEntry = document.createElement('div');
  newEntry.classList.add('col', 'guest-entry');
  newEntry.innerHTML = `
    <div class="card mb-3">
      <h5 class="card-header container-fluid">
        <div class="row">
          <div class="col">
            Gast
          </div>
          <div class="col">
            <button type="button" class="btn btn-close float-end" aria-label="Close" onclick="removeGuestEntry(event)"></button>
          </div>
        </div>
      </h5>
      <div class="card-body">
        <input type="text" class="form-control mb-3" placeholder="Vor- und Nachname" name="guestName${nextGuestId}" id="guestName${nextGuestId}" required>
        <label class="form-label">Essensauswahl</label>
        <div class="form-check">
          <input type="radio" value="0" class="form-check-input" name="guestFood${nextGuestId}" id="guestFoodMeat${nextGuestId}" required>
          <label class="form-check-label" for="guestFoodMeat${nextGuestId}">
            Mit Fleisch
          </label>
        </div>
        <div class="form-check">
          <input type="radio" value="1" class="form-check-input" name="guestFood${nextGuestId}" id="guestFoodVegetarian${nextGuestId}" required>
          <label class="form-check-label" for="guestFoodVegetarian${nextGuestId}">
            Vegetarisch
          </label>
        </div>
        <div class="form-check">
          <input type="radio" value="2" class="form-check-input" name="guestFood${nextGuestId}" id="guestFoodVegan${nextGuestId}" required>
          <label class="form-check-label" for="guestFoodVegan${nextGuestId}">
            Vegan
          </label>
        </div>
      </div>
    </div>
    `;
  ++nextGuestId;
  guestContainer.appendChild(newEntry);
  $(".datepicker").datepicker({
    format: "dd.mm.yyyy",
  });
}

// Function to remove the clicked guest entry
function removeGuestEntry(event) {
  var entryToRemove = event.target.parentElement;
  while (!entryToRemove.classList.contains('guest-entry')) {
    entryToRemove = entryToRemove.parentElement;
    if (entryToRemove == document.body) {
      return;
    }
  }
  entryToRemove.remove();
}

function submitGuests(event) {
  event.preventDefault();

  // obtain user entries
  var names = []
  var foods = []
  var birthdays = []
  $('form [id^=guestName]').each(
    function () {
      names.push($(this).val());
    }
  )
  $('form [id^=guestFood]:checked').each(
    function () {
      foods.push($(this).val());
    }
  )

  // obtain address and optional remarks
  var address = $('form #guestAddress').val()
  var remarks = $('form #guestRemarks').val()

  // TODO: send them to backend
  console.log(names);
  console.log(foods);
  console.log(address);
  console.log(remarks);
}

// Add first guest entry
document.addEventListener('DOMContentLoaded', function () {
  addGuestEntry();
})