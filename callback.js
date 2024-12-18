const formatName = (name) => {
    if (!name || typeof name !== "string") {
      return "Invalid name";
    }
    return name.trim().toUpperCase();
  };

const getName = (name, callFormatName) => {
    if (typeof callFormatName === "function") {
      console.log(callFormatName(name));
    } else {
      console.log("Callback must be a function");
    }
  };

getName("Edo", formatName);
getName("", formatName);
getName("JavaScript", null);
