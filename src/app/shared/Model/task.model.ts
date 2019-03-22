export class Task {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public createDate: Date = new Date(),
        public completedDate: Date = null) { }
}
