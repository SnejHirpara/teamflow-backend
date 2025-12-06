export class ApiError extends Error {
  constructor(statusCode = 500, message = "", error = []) {
    super(message);

    this.statusCode = statusCode;
    this.success = false;
    this.message = message;
    this.error = error;
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      success: this.success,
      message: this.message,
      error: this.error,
    };
  }
}
