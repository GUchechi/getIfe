import React, { useState } from "react";
import alert from "../Assets/alert.png";

const Iframe = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    console.log("clicked");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <div className="sib-form" style={{ textAlign: "center" }}>
        <div id="sib-form-container" className="sib-form-container">
          <div
            id="sib-container"
            className="sib-container--large sib-container--vertical iframe-first-container"
          >
            <form
              id="sib-form"
              // method="POST"
              // action="https://7655f62d.sibforms.com/serve/MUIEAIyJeSo63v0nh6cFiZY7MWvCO7OXB67kX0mRhm9nsogxnJHJTBiv0-YbwNXHa1BWZjxkDrcSni21uFdF_8f8vek2DMb7fyAKpnFosQDwbDuqyIhEAlV2BSt_hbG-SA8O1fqp3soUkFDT9bP9B6tDKcwO5YvQDgXPhFKWWAhr2sPJhiQbYhMVE047bqtuGVP_eeI1SSOyQCmr"
            >
              <div style={{ padding: "8px 0" }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <div className="entry__field">
                        <input
                          className="input"
                          maxLength="200"
                          type="text"
                          id="FIRSTNAME"
                          name="FIRSTNAME"
                          autoComplete="off"
                          placeholder="Name"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>

                    <label className="entry__error entry__error--primary iframe-second"></label>
                    <label className="entry__specification iframe-three">
                      Enter Firstname
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <div className="entry__field">
                        <input
                          className="input"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          placeholder="Email"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>

                    <label className="entry__error entry__error--primary iframe-four"></label>
                    <label className="entry__specification iframe-five">
                      Provide your email address to subscribe. For e.g
                      abc@xyz.com
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div className="sib-form-block" style={{ textAlign: "left" }}>
                  <button
                    className="sib-form-block__button sib-form-block__button-with-loader iframe-six"
                    form="sib-form"
                    type="submit"
                    onClick={toggleModal}
                  >
                    <svg
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    Submit
                  </button>
                </div>
              </div>
              <input
                type="text"
                name="email_address_check"
                value=""
                className="input--hidden"
              />
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />
            </form>
          </div>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="flex items-center justify-center">
              <div
                className=" w-[100%] text-black-700 gap-3 px-4 py-5 text-center flex flex-col items-center justify-center rounded relative"
                role="alert"
              >
                <img src={alert} className="items-center w-[13rem]" alt="" />
                <h1 className="text-[25px] font-bold">Welcome aboard!</h1>
                <p className="text-[15px] w-[90%]">
                  We’ll send an invite to you when the product launches
                </p>

                <span className="absolute top-0 bottom-0 right-0 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-[#920F0F]"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path
                      onClick={toggleModal}
                      d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Iframe;
