import React, { useRef} from 'react';

export default function Contact() {
    let initialValue;
const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
          fullName: initialValue,
          email: initialValue,
          message: initialValue
          }
    alert("Thanks for submitting!")
    
}

  return (
    <div className="home">
  <p>mdi@novare.com</p>
<p className='lead'>123-456-7890</p><hr></hr>
  <p>BGC,TAGUIG</p>
<p className='lead'>Philippines(PH), 1232131</p><hr></hr>
  <br></br><br></br>

  <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" name="fullName" className="fullName" class="form-control" id="exampleForm" placeholder="Khern Sur"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Email address</label>
                                <input type="email" id="email" name="email" className="email" class="form-control" id="exampleFormControlInput1" placeholder="mdinovare@gmail.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3" placeholder="Type your message here..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-dark btn-lg">Send Message</button>
                        </form>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <a className='contact' href='#'>Instagram </a>
                <a className='contact' href='#'>Facebook </a>
                <a className='contact' href='#'>Twitter </a>

</div>
  )
}
