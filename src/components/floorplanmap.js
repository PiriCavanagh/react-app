import { BrowserRouter, Route, Link } from "react-router-dom";
import '../index.css'
import Roomcomponent from "./roomcomponent";


const floorplanmap = () => {
  return (
    <div class="map">
      <Roomcomponent fullname="room101" />
      <Roomcomponent fullname="room102" />
      <Roomcomponent fullname="room103" />
      <Roomcomponent fullname="room104" />
      <Roomcomponent fullname="room105" />
      <Roomcomponent fullname="room106" />
      <Roomcomponent fullname="room107" />
      <Roomcomponent fullname="room108" />
      <Roomcomponent fullname="room109" />
      <Roomcomponent fullname="room110" />
      <Roomcomponent fullname="room111" />
      <Roomcomponent fullname="room112" />
      <Roomcomponent fullname="room113" />
      <Roomcomponent fullname="room114" />
      <Roomcomponent fullname="room115" />
      <Roomcomponent fullname="room116" />
      <Roomcomponent fullname="room117" />
      <Roomcomponent fullname="room118" />
      <Roomcomponent fullname="room119" />
      <Roomcomponent fullname="room120" />
      <Roomcomponent fullname="room121" />
      <div class="whitespace1"></div>
      <div class="whitespace2"></div>
      <div class="whitespace3"></div>
      <div class="whitespace4"></div>
      <div class="whitespace5"></div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Recipient:</label>
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}



export default floorplanmap
