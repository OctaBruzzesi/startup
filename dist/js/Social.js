"use strict";

var Social = {
  share: function share(friendName) {
    console.log("Share " + this.title + " with " + friendName);
  },
  like: function like(friendName) {
    console.log(friendName + " liked " + this.title);
  }
};