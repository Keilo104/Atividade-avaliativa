export class Time {
    hour;
    minute;
    second;
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    getTime() {
        return `${this.hour}:${this.minute}:${this.second}`;
    }
}
