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
        <input type="text" class="form-control mb-3" placeholder="Vor- und Nachname" id="guestName${nextGuestId}" required>
        <select class="form-select mb-3" id="guestFood${nextGuestId}" required>
          <option value="" selected>Essensauswahl...</option>
          <option value="1">Mit Fleisch</option>
          <option value="2">Vegetarisch</option>
          <option value="3">Vegan</option>
        </select>
        <input class="form-check-input me-1" type="checkbox" value="" id="guestIsChild${nextGuestId}"
          onchange="document.getElementById('guestBirthday${nextGuestId}').disabled = !this.checked;">
        <label class="form-check-label fs-6" for="guestIsChild${nextGuestId}">Unter 18 Jahre?</label>
        <input type="text" class="form-control datepicker" placeholder="Geburtstag" id="guestBirthday${nextGuestId}"
          disabled required>
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
  $('form [id^=guestFood]').each(
    function () {
      foods.push($(this).val());
    }
  )
  $('form [id^=guestBirthday]').each(
    function () {
      var entry = $(this).val()
      if (entry.length == 0)
        entry = null
      birthdays.push(entry);
    }
  )

  // obtain address and optional remarks
  var address = $('form #guestAddress').val()
  var remarks = $('form #guestRemarks').val()

  // TODO: send them to backend
  console.log(names);
  console.log(foods);
  console.log(birthdays);
  console.log(address);
  console.log(remarks);
}

// Add first guest entry
document.addEventListener('DOMContentLoaded', function () {
  addGuestEntry();
})