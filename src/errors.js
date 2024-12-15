class CustomError extends Error {
  constructor(message, name = "CustomError") {
    super(message);
    this.name = name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class FileNotFound extends CustomError {
  constructor() {
    super(`File not found`, "FileNotFound");
  }
}

export { FileNotFound };
