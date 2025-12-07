export class ApiResponse {
    constructor(statusCode = 200, data = null, message = "") {
        this.statusCode = statusCode;
        this.success = true;
        this.data = data;
        this.message = message;
    }

    toJSON() {
        return {
            statusCode: this.statusCode,
            success: this.success,
            data: this.data,
            message: this.message,
        };
    }
}
