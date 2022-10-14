function User(userName) {
  this.userName = userName;
  this.followers = [];
  this.iFollow = [];

  this.addFollower = function (someUser) {
    this.followers.push(someUser);
    someUser.iFollow.push(this);
  };

  this.sendMessage = function (myMessage) {
    this.followers.forEach((follower) => {
      follower.getMessage(myMessage, this.userName);
    });
  };
  this.getMessage = function (theMessage, sender) {
    console.log(
      this.userName + " got this massage from " + userName + ": " + theMessage
    );
  };
}

let myUser1 = new User("Ayala");
let myUser2 = new User("Ben");
let myUser3 = new User("Yaniv");
let myUser4 = new User("Omri");

myUser1.addFollower(myUser2);
//myUser1 is being followed by myUser2
//myUser2 is following myUser1
myUser1.addFollower(myUser3);
myUser1.addFollower(myUser4); //myUser1.followers.push(myUser4); myUser4.iFollow.push(myUser1);

myUser2.addFollower(myUser3);
myUser2.addFollower(myUser4);

myUser3.addFollower(myUser4);

console.log(myUser1);
console.log(myUser2);
console.log(myUser3);
console.log(myUser4);

myUser1.sendMessage("hello!!!");

/C/Users/Nava/Desktop/TIRGOL2


