export default function Modal({ isVisibile, errorMessage = null }) {
  if (isVisibile) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The form Has Been Submitted successfully"}
          </h1>
          {/* <h1>The form Has Been Submitted successfully</h1> */}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
