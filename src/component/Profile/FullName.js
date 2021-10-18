const FullName = () => {
    let firstName = "Med Hichem";
    let lastName = "Lemsi";
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>FullName: </span>
        <h4>
          {firstName} {lastName}
        </h4>
      </div>
    );
  };
  
  export default FullName;