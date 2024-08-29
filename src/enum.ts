enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move); 


enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); 