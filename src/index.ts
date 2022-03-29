export class Log {
  static primary(message: string) {
    console.log(`%c ${message}`, "color: #007bff");
  }

  static success(message: string) {
    console.log(`%c ${message}`, "color: #28a745");
  }

  static denger(message: string) {
    console.log(`%c ${message}`, "color: #dc3545");
  }

  static warning(message: string) {
    console.log(`%c ${message}`, "color: #d39e00");
  }

  static info(message: string) {
    console.log(`%c ${message}`, "color: #ffffff; background: #238636");
  }
}
