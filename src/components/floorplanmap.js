
const floorplanmap = () => {
  
  return (
    <div class="map">
      <div class="room101"><button type="button" class="buttonred"  data-bs-toggle="modal" data-bs-target="InfoModal" data-bs-whatever="Room 101">101</button></div>
      <div class="room102"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 102">102</button></div>
      <div class="room103"><button type="button" class="buttonred"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 103">103</button></div>
      <div class="room104"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 104">104</button></div>
      <div class="room105"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 105">105</button></div>
      <div class="room106"><button type="button" class="buttonred"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 106">106</button></div>
      <div class="room107"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 107">107</button></div>
      <div class="room108"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 108">108</button></div>
      <div class="room109"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 109">109</button></div>
      <div class="room110"><button type="button" class="buttonred"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 110">110</button></div>
      <div class="room111"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 111">111</button></div>
      <div class="room112"><button type="button" class="buttonred"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 112">112</button></div>
      <div class="room113"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 113">113</button></div>
      <div class="room114"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 114">114</button></div>
      <div class="room115"><button type="button" class="buttonred"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 115">115</button></div>
      <div class="room116"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 116">116</button></div>
      <div class="room117"><button type="button" class="buttonred"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 117">117</button></div>
      <div class="room118"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 118">118</button></div>
      <div class="room119"><button type="button" class="buttonred"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 119">119</button></div>
      <div class="room120"><button type="button" class="buttongreen"data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 120">120</button></div>
      <div class="room121"><button type="button" class="buttonred"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="Room 121">121</button></div>
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
